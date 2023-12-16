"use client";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PropertyProvider } from "@/contexts/PropertyContext";
import { ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "react-query";

interface MainProviderProps {
  children: ReactNode;
}

export function MainProvider({ children }: MainProviderProps) {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
        refetchOnWindowFocus: false,
      }
    }
  })

  return (
    <QueryClientProvider client={queryClient}>
    <PropertyProvider>
      <Header />
      {children}
      <Footer />
    </PropertyProvider>
  </QueryClientProvider>
  )
}