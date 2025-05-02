"use client";

import { useEffect, useState } from "react";
import { fetchAllProducts } from "@/utils/api";
import { Product } from "@/types/products";
import RatingCircles from "@/components/RatingCircles";
import Image from "next/image";
import Link from "next/link";


const ProductList = () => {
  const [products, setProducts] = useState<Product[] | null>(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const getProducts = async () => {
      try {
        const data = await fetchAllProducts();
        console.log("Fetched data:", data);

        if (Array.isArray(data)) {
          setProducts(data);
        } else {
          console.error("API returned unexpected format:", data);
          setError("Invalid data format from API");
        }
      } catch (error) {
        console.error("Failed to fetch products:", error);
        setError("Failed to load products.");
      }
    };

    getProducts();
  }, []);

  if (error) return <p>{error}</p>;
  if (!products) return <p>Loading...</p>;

  return (
    <section className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mx-auto">
      {products.map((product) => (
        <div key={product.id} className="w-[344px] h-[535px] flex flex-col">
          {product.imageUrl && (
            <Image
              src={product.imageUrl}
              alt={product.title}
              width={334}
              height={440}
              className="w-[344px] h-[440px] object-cover"
            />
          )}
          <div>
          <Link href={`/product/${product.id}`} className="block hover:opacity-90">
            <h3 className="font-(family-name:--font-afacad) text-black text-[22px] uppercase line-clamp-1">
              {product.title}
            </h3>
            {product.discountedPrice < product.price ? (
              <div className="flex items-center gap-3 font-(family-name:--font-afacad) text-xl">
                <p className="text-red-500">
                  ${product.discountedPrice.toFixed(2)}
                </p>
                <p className="line-through">${product.price.toFixed(2)}</p>
              </div>
            ) : (
              <p className="font-medium">${product.price.toFixed(2)}</p>
            )}
         <RatingCircles rating={product.rating} />

          </Link>
          </div>
        </div>
      ))}
    </section>
  );
};

export default ProductList;
