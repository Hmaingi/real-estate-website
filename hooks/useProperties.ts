"use client";

import { useEffect, useState } from "react";
import {
  Property
} from "@/lib/properties";

export function useProperties() {
  const [properties, setProperties] = useState<Property[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetch("/api/properties")
      .then((response) => response.json())
      .then((data) => {
        if (Array.isArray(data.properties)) {
          setProperties(data.properties);
        }
      })
      .catch(() => setProperties([]))
      .finally(() => setIsLoaded(true));
  }, []);

  return { properties, setProperties, isLoaded };
}
