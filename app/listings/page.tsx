"use client";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import PropertyCard from "@/components/PropertyCard";
import { Filter, Grid, List } from "lucide-react";
import { useProperties } from "@/hooks/useProperties";

interface SearchFilters {
  query: string;
  type: string;
  location: string;
  priceRange: string;
  bedrooms: string;
}

export default function ListingsPage() {
  const searchParams = useSearchParams();
  const { properties } = useProperties();
  const [filteredProperties, setFilteredProperties] = useState(properties);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [sortBy, setSortBy] = useState("featured");

  // Filters from URL
  const [filters, setFilters] = useState<SearchFilters>({
    query: searchParams?.get("query") || "",
    type: searchParams?.get("type") || "",
    location: searchParams?.get("location") || "",
    priceRange: searchParams?.get("priceRange") || "",
    bedrooms: searchParams?.get("bedrooms") || ""
  });

  // Update filters whenever URL params change
  useEffect(() => {
    setFilters({
      query: searchParams?.get("query") || "",
      type: searchParams?.get("type") || "",
      location: searchParams?.get("location") || "",
      priceRange: searchParams?.get("priceRange") || "",
      bedrooms: searchParams?.get("bedrooms") || ""
    });
  }, [searchParams]);

  // Apply filters
  useEffect(() => {
    let result = [...properties];

    if (filters.query) {
      result = result.filter(
        (property) =>
          property.title.toLowerCase().includes(filters.query.toLowerCase()) ||
          property.location.toLowerCase().includes(filters.query.toLowerCase()) ||
          property.description.toLowerCase().includes(filters.query.toLowerCase())
      );
    }

    if (filters.type) {
      result = result.filter((property) => property.type === filters.type);
    }

    if (filters.location) {
      result = result.filter((property) =>
        property.location.toLowerCase().includes(filters.location.toLowerCase())
      );
    }

    if (filters.priceRange) {
      const [min, max] = filters.priceRange.split("-").map(Number);
      result = result.filter((property) => {
        const price = property.numericPrice;
        if (max === 999999999) return price >= min;
        return price >= min && price <= max;
      });
    }

    if (filters.bedrooms) {
      const minBedrooms = parseInt(filters.bedrooms);
      result = result.filter((property) => property.bedrooms >= minBedrooms);
    }

    switch (sortBy) {
      case "price-low":
        result.sort((a, b) => a.numericPrice - b.numericPrice);
        break;
      case "price-high":
        result.sort((a, b) => b.numericPrice - a.numericPrice);
        break;
      case "bedrooms":
        result.sort((a, b) => b.bedrooms - a.bedrooms);
        break;
      default:
        break;
    }

    setFilteredProperties(result);
  }, [filters, properties, sortBy]);

  return (
    <div className="min-h-screen bg-slate-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-4">
            {filters.type === "Sale"
              ? "Properties for Sale"
              : filters.type === "Rent"
              ? "Properties for Rent"
              : filters.type === "Rent-to-own"
              ? "Rent-to-own Homes"
              : filters.type === "Auction"
              ? "Auction Properties"
              : "Property Listings"}
          </h1>
          <p className="text-xl text-slate-600">
            Discover your perfect home from our extensive collection of premium
            properties
          </p>
        </div>

        {/* Results Header */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8 space-y-4 sm:space-y-0">
          <div className="flex items-center space-x-4">
            <span className="text-slate-700 font-medium">
              {filteredProperties.length} properties found
            </span>
            {(filters.query ||
              filters.type ||
              filters.location ||
              filters.priceRange ||
              filters.bedrooms) && (
              <button
                onClick={() =>
                  setFilters({
                    query: "",
                    type: "",
                    location: "",
                    priceRange: "",
                    bedrooms: ""
                  })
                }
                className="text-emerald-700 hover:text-emerald-800 font-medium"
              >
                Clear filters
              </button>
            )}
          </div>

          <div className="flex items-center space-x-4">
            {/* Sort Dropdown */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="bedrooms">Most Bedrooms</option>
            </select>

            {/* View Mode Toggle */}
            <div className="flex border border-slate-300 rounded-lg overflow-hidden">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-2 ${
                  viewMode === "grid"
                    ? "bg-emerald-600 text-white"
                    : "bg-white text-slate-600 hover:bg-slate-50"
                }`}
              >
                <Grid className="h-5 w-5" />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`p-2 ${
                  viewMode === "list"
                    ? "bg-emerald-600 text-white"
                    : "bg-white text-slate-600 hover:bg-slate-50"
                }`}
              >
                <List className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Property Grid */}
        {filteredProperties.length > 0 ? (
          <div
            className={`grid gap-8 ${
              viewMode === "grid"
                ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
                : "grid-cols-1"
            }`}
          >
            {filteredProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <Filter className="h-16 w-16 text-slate-400 mx-auto mb-6" />
            <h3 className="text-2xl font-semibold text-slate-800 mb-4">
              No properties found
            </h3>
            <p className="text-slate-600 mb-8">
              Try adjusting your search criteria to find more properties.
            </p>
            <button
              onClick={() =>
                setFilters({
                  query: "",
                  type: "",
                  location: "",
                  priceRange: "",
                  bedrooms: ""
                })
              }
              className="bg-emerald-600 hover:bg-emerald-700 text-white font-medium px-6 py-3 rounded-lg transition-colors"
            >
              Clear All Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
