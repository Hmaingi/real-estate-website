"use client";

import { useEffect, useState } from "react";
import {
  defaultPropertyList,
  Property
} from "@/lib/properties";

export function useProperties() {
  const [properties, setProperties] = useState<Property[]>(defaultPropertyList);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetch("/api/properties")
      .then((response) => response.json())
      .then((data) => {
        if (Array.isArray(data.properties)) {
          setProperties(data.properties);
        }
      })
      .catch(() => setProperties(defaultPropertyList))
      .finally(() => setIsLoaded(true));
  }, []);

  return { properties, setProperties, isLoaded };
}
