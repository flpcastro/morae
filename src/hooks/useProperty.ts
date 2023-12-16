import { PropertyContext } from "@/contexts/PropertyContext";
import { useContext } from "react";

export function useProperty() {
  const { properties } = useContext(PropertyContext);

  return {
    properties,
  }
}