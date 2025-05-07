"use client";

import Hero from "@/components/Hero";
import SearchBar from "@/components/SearchBar";
import ProductList from "@/components/ProductList";
import { fetchAllProducts } from "@/utils/api";
import { Product } from "@/types/products";
import { useEffect, useState } from "react";

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const load = async () => {
      const data = await fetchAllProducts();
      if (Array.isArray(data)) setProducts(data);
    };
    load();
  }, []);

  const filteredProducts = products.filter((p) =>
    p.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <main className="flex flex-col items-center justify-center bg-background min-h-screen">
        <Hero />
        <div className="flex flex-row justify-between mb-2">
          <SearchBar value={searchQuery} onChange={setSearchQuery} />
          
        </div>
        <ProductList products={filteredProducts} />
    </main>
  );
}
