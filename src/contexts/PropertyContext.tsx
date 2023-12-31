"use client";

import { Property } from "@/models/Property";
import { getProperties } from "@/services/getProperties";
import { ReactNode, createContext } from "react";
import { useQuery } from "react-query";

interface PropertyContextProps {
  properties: Property[];
  isLoading: boolean;
}

interface PropertyProviderProps {
  children: ReactNode;
}

export const PropertyContext = createContext<PropertyContextProps>({} as PropertyContextProps);

export function PropertyProvider({ children }: PropertyProviderProps) {
  const { data, isFetching, isLoading } = useQuery({
    queryKey: 'properties',
    queryFn: async () => getProperties(),
  })

  return (
    <PropertyContext.Provider 
      value={{ 
        properties: data!,
        isLoading: isLoading || isFetching,
      }}
    >
      {!isFetching && children}
    </PropertyContext.Provider>
  )
}