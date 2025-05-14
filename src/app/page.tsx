"use client";

import Hero from "@/components/Hero";
import SearchBar from "@/components/SearchBar";
import SortDropdown from "@/components/SortDropdown";
import ProductList from "@/components/ProductList";
import { fetchAllProducts } from "@/utils/api";
import { Product } from "@/types/products";
import { useEffect, useState } from "react";

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOption, setSortOption] = useState("relevance");

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

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortOption) {
      case "low-high":
        return a.price - b.price;
      case "high-low":
        return b.price - a.price;
      case "az":
        return a.title.localeCompare(b.title);
      case "za":
        return b.title.localeCompare(a.title);
      default:
        return 0;
    }
  });

  return (
    <main className="flex flex-col items-center justify-center bg-background min-h-screen">
      <Hero />
      <div className="flex flex-row justify-between mb-2 max-w-[1080px] mx-auto w-[340px] sm:w-[700px] md:w-full">
        <SearchBar value={searchQuery} onChange={setSearchQuery} />
        <SortDropdown value={sortOption} onChange={setSortOption} />
      </div>
      <ProductList products={sortedProducts} />
    </main>
  );
}
