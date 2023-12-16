"use client";

import { PropertyCard } from "@/components/PropertyCard";
import { useProperty } from "@/hooks/useProperty";

export default function Gallery() {
  const { properties } = useProperty();

  return (
    <section className="px-80 py-8 bg-dark300 flex flex-col items-center justify-center gap-6">
        <h1 className="font-semibold text-2xl">
          Galeria
        </h1>

        <div className="flex flex-wrap gap-3 items-center">
          {properties.map(property => (
            <PropertyCard 
              key={property.id}
              data={property}
            />
          ))}
        </div>
    </section>
  )
}