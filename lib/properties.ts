import defaultProperties from "@/data/properties.json";

export interface Property {
  id: number;
  title: string;
  location: string;
  price: string;
  numericPrice: number;
  type: "Rent" | "Sale" | "Rent-to-own" | "Auction";
  bedrooms: number;
  bathrooms: number;
  area: string;
  images: string[];
  description: string;
}

export const propertyStorageKey = "graceful-properties";

export const defaultPropertyList = defaultProperties as Property[];

export function fromDatabaseProperty(property: Record<string, any>): Property {
  return {
    id: Number(property.id),
    title: property.title,
    location: property.location,
    price: property.price,
    numericPrice: Number(property.numeric_price),
    type: property.type,
    bedrooms: Number(property.bedrooms),
    bathrooms: Number(property.bathrooms),
    area: property.area,
    images: Array.isArray(property.images) ? property.images : [],
    description: property.description
  };
}

export function toDatabaseProperty(property: Omit<Property, "id"> | Property) {
  return {
    title: property.title,
    location: property.location,
    price: property.price,
    numeric_price: Number(property.numericPrice),
    type: property.type,
    bedrooms: Number(property.bedrooms),
    bathrooms: Number(property.bathrooms),
    area: property.area,
    images: property.images,
    description: property.description
  };
}

export function hasSupabaseConfig() {
  return Boolean(process.env.SUPABASE_URL && process.env.SUPABASE_SERVICE_ROLE_KEY);
}

export function supabaseHeaders() {
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY || "";

  return {
    apikey: key,
    Authorization: `Bearer ${key}`,
    "Content-Type": "application/json"
  };
}
