"use client";

import { ChangeEvent, DragEvent, FormEvent, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { GripVertical, ImagePlus, LogOut, Pencil, Plus, Save, Trash2, X } from "lucide-react";
import { useProperties } from "@/hooks/useProperties";
import { Property } from "@/lib/properties";

const emptyForm: Property = {
  id: 0,
  title: "",
  location: "",
  price: "",
  numericPrice: 0,
  type: "Rent",
  bedrooms: 1,
  bathrooms: 1,
  area: "",
  images: [],
  description: ""
};

async function compressImageFile(file: File) {
  if (!file.type.startsWith("image/")) return file;

  const imageUrl = URL.createObjectURL(file);

  try {
    const image = await new Promise<HTMLImageElement>((resolve, reject) => {
      const img = new window.Image();
      img.onload = () => resolve(img);
      img.onerror = reject;
      img.src = imageUrl;
    });

    const maxSize = 1800;
    const scale = Math.min(1, maxSize / Math.max(image.width, image.height));
    const width = Math.max(1, Math.round(image.width * scale));
    const height = Math.max(1, Math.round(image.height * scale));
    const canvas = document.createElement("canvas");
    canvas.width = width;
    canvas.height = height;

    const context = canvas.getContext("2d");
    if (!context) return file;

    context.drawImage(image, 0, 0, width, height);

    const blob = await new Promise<Blob | null>((resolve) => {
      canvas.toBlob(resolve, "image/jpeg", 0.82);
    });

    if (!blob) return file;

    return new File(
      [blob],
      file.name.replace(/\.[^.]+$/, ".jpg"),
      { type: "image/jpeg" }
    );
  } catch {
    return file;
  } finally {
    URL.revokeObjectURL(imageUrl);
  }
}

export default function DashboardPage() {
  const router = useRouter();
  const { properties, setProperties, isLoaded } = useProperties();
  const [form, setForm] = useState<Property>(emptyForm);
  const [imageUrl, setImageUrl] = useState("");
  const [message, setMessage] = useState("");
  const [isSaving, setIsSaving] = useState(false);
  const [isUploadingImages, setIsUploadingImages] = useState(false);
  const [uploadProgress, setUploadProgress] = useState("");
  const [draggedImageIndex, setDraggedImageIndex] = useState<number | null>(null);
  const imageListRef = useRef<HTMLDivElement | null>(null);
  const dragPointerYRef = useRef(0);
  const autoScrollFrameRef = useRef<number | null>(null);
  const isEditing = form.id !== 0;

  useEffect(() => {
    fetch("/api/admin/me")
      .then((response) => response.json())
      .then((data) => {
        if (!data.authenticated) router.replace("/admin/login");
      })
      .catch(() => router.replace("/admin/login"));
  }, [router]);

  useEffect(() => {
    return () => {
      if (autoScrollFrameRef.current) {
        cancelAnimationFrame(autoScrollFrameRef.current);
      }
    };
  }, []);

  const updateField = (field: keyof Property, value: string | number) => {
    setForm((current) => ({ ...current, [field]: value }));
  };

  const addImageUrl = () => {
    if (!imageUrl.trim()) return;
    setForm((current) => ({ ...current, images: [...current.images, imageUrl.trim()] }));
    setImageUrl("");
  };

  const handleFileUpload = async (event: ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);
    event.target.value = "";
    if (!files.length) return;

    try {
      setIsUploadingImages(true);
      setMessage("");
      const uploadedUrls: string[] = [];
      const failedUploads: string[] = [];

      for (let index = 0; index < files.length; index += 1) {
        const file = files[index];
        setUploadProgress(`Preparing image ${index + 1} of ${files.length}: ${file.name}`);
        const uploadFile = await compressImageFile(file);
        const formData = new FormData();
        formData.append("file", uploadFile);

        setUploadProgress(`Uploading image ${index + 1} of ${files.length}: ${file.name}`);
        const response = await fetch("/api/admin/upload", {
          method: "POST",
          body: formData
        });
        const data = await response.json().catch(() => ({}));

        if (!response.ok) {
          failedUploads.push(data.message || `${file.name} failed to upload.`);
          continue;
        }

        uploadedUrls.push(data.url);
      }

      if (uploadedUrls.length) {
        setForm((current) => ({ ...current, images: [...current.images, ...uploadedUrls] }));
      }

      if (failedUploads.length) {
        setMessage(
          `${uploadedUrls.length} image(s) uploaded. ${failedUploads.length} failed: ${failedUploads.join(" ")}`
        );
        return;
      }

      setMessage(`${uploadedUrls.length} image(s) uploaded. You can now drag them into the order you want.`);
    } catch (error) {
      setMessage("Image upload stopped because the browser could not reach the upload server. Try fewer images at once or smaller photos.");
    } finally {
      setIsUploadingImages(false);
      setUploadProgress("");
    }
  };

  const removeImage = (index: number) => {
    setForm((current) => ({
      ...current,
      images: current.images.filter((_, imageIndex) => imageIndex !== index)
    }));
  };

  const moveImageTo = (fromIndex: number, toIndex: number) => {
    setForm((current) => {
      if (
        fromIndex === toIndex ||
        fromIndex < 0 ||
        toIndex < 0 ||
        fromIndex >= current.images.length ||
        toIndex >= current.images.length
      ) {
        return current;
      }

      const images = [...current.images];
      const [image] = images.splice(fromIndex, 1);
      images.splice(toIndex, 0, image);

      return { ...current, images };
    });
  };

  const handleImageDrop = (event: DragEvent<HTMLDivElement>, dropIndex: number) => {
    event.preventDefault();
    if (draggedImageIndex === null) return;
    moveImageTo(draggedImageIndex, dropIndex);
    stopImageAutoScroll();
    setDraggedImageIndex(null);
  };

  const stopImageAutoScroll = () => {
    if (autoScrollFrameRef.current) {
      cancelAnimationFrame(autoScrollFrameRef.current);
      autoScrollFrameRef.current = null;
    }
  };

  const runImageAutoScroll = () => {
    const list = imageListRef.current;
    if (!list || draggedImageIndex === null) {
      stopImageAutoScroll();
      return;
    }

    const bounds = list.getBoundingClientRect();
    const edgeSize = 88;
    const maxSpeed = 22;
    const pointerY = dragPointerYRef.current;
    let scrollAmount = 0;

    if (pointerY < bounds.top + edgeSize) {
      const intensity = (bounds.top + edgeSize - pointerY) / edgeSize;
      scrollAmount = -Math.ceil(maxSpeed * Math.min(1, intensity));
    }

    if (pointerY > bounds.bottom - edgeSize) {
      const intensity = (pointerY - (bounds.bottom - edgeSize)) / edgeSize;
      scrollAmount = Math.ceil(maxSpeed * Math.min(1, intensity));
    }

    if (scrollAmount !== 0) {
      list.scrollTop += scrollAmount;
    }

    autoScrollFrameRef.current = requestAnimationFrame(runImageAutoScroll);
  };

  const startImageAutoScroll = () => {
    if (autoScrollFrameRef.current) return;
    autoScrollFrameRef.current = requestAnimationFrame(runImageAutoScroll);
  };

  const handleImageDragOver = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    dragPointerYRef.current = event.clientY;
    startImageAutoScroll();
  };

  const resetForm = () => {
    setForm(emptyForm);
    setImageUrl("");
  };

  const editProperty = (property: Property) => {
    setForm({ ...property, images: [...property.images] });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const deleteProperty = async (id: number) => {
    const response = await fetch(`/api/properties/${id}`, { method: "DELETE" });
    if (!response.ok) {
      const data = await response.json().catch(() => ({}));
      setMessage(data.message || "Could not delete property.");
      return;
    }

    setProperties(properties.filter((property) => property.id !== id));
    if (form.id === id) resetForm();
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setIsSaving(true);
    setMessage("");

    const propertyToSave = {
      ...form,
      numericPrice: Number(form.numericPrice),
      bedrooms: Number(form.bedrooms),
      bathrooms: Number(form.bathrooms),
      area: form.area.trim(),
      images: form.images.length
        ? form.images
        : ["https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=800"]
    };

    const response = await fetch(isEditing ? `/api/properties/${form.id}` : "/api/properties", {
      method: isEditing ? "PATCH" : "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(propertyToSave)
    });

    const data = await response.json().catch(() => ({}));
    setIsSaving(false);

    if (!response.ok) {
      setMessage(data.message || "Could not save property. Check the database setup.");
      return;
    }

    setProperties(
      isEditing
        ? properties.map((property) => (property.id === form.id ? data.property : property))
        : [data.property, ...properties]
    );
    resetForm();
    setMessage("Property saved.");
  };

  const logout = async () => {
    await fetch("/api/admin/logout", { method: "POST" });
    router.replace("/admin/login");
  };

  return (
    <div className="min-h-screen bg-slate-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-10 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-4xl font-bold text-slate-900 mb-3">Admin Dashboard</h1>
            <p className="text-slate-600 text-lg">
              Add, edit, remove, and upload images for houses and units.
            </p>
          </div>
          <button onClick={logout} className="inline-flex items-center gap-2 bg-slate-950 hover:bg-slate-800 text-white px-5 py-3 rounded-lg font-semibold">
            <LogOut className="h-5 w-5" />
            <span>Log Out</span>
          </button>
        </div>

        {message && (
          <div className="mb-6 rounded-lg border border-emerald-200 bg-emerald-50 text-emerald-900 px-4 py-3">
            {message}
          </div>
        )}

        <div className="grid grid-cols-1 xl:grid-cols-[420px_1fr] gap-8">
          <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-6 border border-slate-200 h-fit">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-semibold text-slate-900">
                {isEditing ? "Edit Property" : "Add Property"}
              </h2>
              {isEditing && (
                <button type="button" onClick={resetForm} className="text-slate-500 hover:text-slate-900">
                  <X className="h-5 w-5" />
                </button>
              )}
            </div>

            <div className="space-y-4">
              <input required value={form.title} onChange={(e) => updateField("title", e.target.value)} placeholder="Property title" className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent" />
              <input required value={form.location} onChange={(e) => updateField("location", e.target.value)} placeholder="Location" className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent" />
              <div className="grid grid-cols-2 gap-3">
                <input required value={form.price} onChange={(e) => updateField("price", e.target.value)} placeholder="Display price" className="px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent" />
                <input required type="number" value={form.numericPrice} onChange={(e) => updateField("numericPrice", Number(e.target.value))} placeholder="Numeric price" className="px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent" />
              </div>
              <select value={form.type} onChange={(e) => updateField("type", e.target.value as Property["type"])} className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent">
                <option value="Rent">Rent</option>
                <option value="Sale">Sale</option>
                <option value="Rent-to-own">Rent-to-own</option>
                <option value="Auction">Auction</option>
              </select>
              <div className="grid grid-cols-3 gap-3">
                <input required type="number" min={0} value={form.bedrooms} onChange={(e) => updateField("bedrooms", Number(e.target.value))} placeholder="Beds" className="px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent" />
                <input required type="number" min={0} value={form.bathrooms} onChange={(e) => updateField("bathrooms", Number(e.target.value))} placeholder="Baths" className="px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent" />
                <input value={form.area} onChange={(e) => updateField("area", e.target.value)} placeholder="Area (optional)" className="px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent" />
              </div>
              <textarea required rows={4} value={form.description} onChange={(e) => updateField("description", e.target.value)} placeholder="Description" className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent resize-none" />

              <div className="border border-slate-200 rounded-lg p-4">
                <label className="block text-sm font-semibold text-slate-700 mb-3">Property Images</label>
                <div className="flex gap-2 mb-3">
                  <input value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} placeholder="Paste image URL" className="min-w-0 flex-1 px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent" />
                  <button type="button" onClick={addImageUrl} className="bg-emerald-600 hover:bg-emerald-700 text-white p-2 rounded-lg">
                    <Plus className="h-5 w-5" />
                  </button>
                </div>
                <label className="flex items-center justify-center gap-2 border border-dashed border-emerald-400 bg-emerald-50 text-emerald-800 rounded-lg px-4 py-3 cursor-pointer hover:bg-emerald-100">
                  <ImagePlus className="h-5 w-5" />
                  <span>{isUploadingImages ? "Uploading..." : "Upload images"}</span>
                  <input type="file" accept="image/*" multiple onChange={handleFileUpload} className="hidden" disabled={isUploadingImages} />
                </label>
                {uploadProgress && (
                  <p className="mt-3 text-sm text-slate-600">{uploadProgress}</p>
                )}
                {form.images.length > 0 && (
                  <div
                    ref={imageListRef}
                    onDragOver={handleImageDragOver}
                    className="space-y-3 mt-4 max-h-[420px] overflow-y-auto pr-2"
                  >
                    {form.images.map((image, index) => (
                      <div
                        key={`${image}-${index}`}
                        draggable
                        onDragStart={(event) => {
                          dragPointerYRef.current = event.clientY;
                          setDraggedImageIndex(index);
                          startImageAutoScroll();
                        }}
                        onDragOver={handleImageDragOver}
                        onDrop={(event) => handleImageDrop(event, index)}
                        onDragEnd={() => {
                          stopImageAutoScroll();
                          setDraggedImageIndex(null);
                        }}
                        className={`flex items-center gap-3 rounded-lg border p-2 cursor-grab active:cursor-grabbing transition-colors ${
                          draggedImageIndex === index
                            ? "border-emerald-500 bg-emerald-50"
                            : "border-slate-200 bg-slate-50"
                        }`}
                      >
                        <GripVertical className="h-5 w-5 text-slate-400 flex-shrink-0" />
                        <div className="relative h-20 w-20 rounded-lg overflow-hidden bg-slate-100 flex-shrink-0">
                          <Image src={image} alt={`Property image ${index + 1}`} fill className="object-cover" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="text-sm font-semibold text-slate-800">
                            Image {index + 1}{index === 0 ? " - cover photo" : ""}
                          </div>
                          <div className="text-xs text-slate-500 truncate">
                            Drag this row to change the photo order.
                          </div>
                        </div>
                        <div className="flex items-center gap-1">
                          <button type="button" onClick={() => removeImage(index)} className="p-2 rounded-md border border-red-200 text-red-600 hover:bg-red-50" aria-label="Remove image">
                            <X className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <button disabled={isSaving} type="submit" className="w-full bg-slate-950 hover:bg-slate-800 disabled:bg-slate-400 text-white font-semibold py-3 rounded-lg flex items-center justify-center gap-2">
                <Save className="h-5 w-5" />
                <span>{isSaving ? "Saving..." : isEditing ? "Save Changes" : "Add House or Unit"}</span>
              </button>
            </div>
          </form>

          <div className="bg-white rounded-lg shadow-lg border border-slate-200 overflow-hidden">
            <div className="p-6 border-b border-slate-200">
              <h2 className="text-2xl font-semibold text-slate-900">Current Houses and Units</h2>
            </div>
            <div className="divide-y divide-slate-200">
              {!isLoaded && <div className="p-6 text-slate-600">Loading properties...</div>}
              {properties.map((property) => (
                <div key={property.id} className="p-5 flex flex-col md:flex-row gap-4 md:items-center">
                  <div className="relative h-28 w-full md:w-40 rounded-lg overflow-hidden bg-slate-100 flex-shrink-0">
                    <Image src={property.images[0]} alt={property.title} fill className="object-cover" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap gap-2 mb-2">
                      <span className="bg-emerald-100 text-emerald-800 text-xs font-semibold px-2 py-1 rounded-full">For {property.type}</span>
                      <span className="bg-slate-100 text-slate-700 text-xs font-semibold px-2 py-1 rounded-full">{property.images.length} images</span>
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900">{property.title}</h3>
                    <p className="text-slate-600">{property.location} - {property.price}</p>
                  </div>
                  <div className="flex gap-2">
                    <button onClick={() => editProperty(property)} className="p-3 rounded-lg border border-slate-300 text-slate-700 hover:bg-slate-50">
                      <Pencil className="h-5 w-5" />
                    </button>
                    <button onClick={() => deleteProperty(property.id)} className="p-3 rounded-lg border border-red-200 text-red-600 hover:bg-red-50">
                      <Trash2 className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
