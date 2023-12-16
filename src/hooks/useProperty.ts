import { PropertyContext } from "@/contexts/PropertyContext";
import { useContext } from "react";

export function useProperty() {
  const { properties, isLoading } = useContext(PropertyContext);

  return {
    properties,
    isLoading
  }
}