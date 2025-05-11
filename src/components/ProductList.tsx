"use client";

import { useEffect, useState } from "react";
import { fetchAllProducts } from "@/utils/api";
import { Product } from "@/types/products";
import RatingCircles from "@/components/RatingCircles";
import Image from "next/image";
import Link from "next/link";
import { useCartStore } from "@/store/useCartStore";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface ProductListProps {
  products?: Product[];
}

const ProductList = ({ products: passedProducts }: ProductListProps) => {
  const [products, setProducts] = useState<Product[] | null>(null);
  const [error, setError] = useState("");
  const addToCart = useCartStore((state) => state.addToCart);

  useEffect(() => {
    if (passedProducts && passedProducts.length > 0) {
      setProducts(passedProducts);
      return;
    }

    const getProducts = async () => {
      try {
        const data = await fetchAllProducts();
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
  }, [passedProducts]);

  if (error) return <p>{error}</p>;
  if (!products) return <p>Loading...</p>;

  return (
    <section className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mx-auto">
      {products.map((product) => (
        <div
          key={product.id}
          id={
            product.id === "9be4812e-16b2-44e6-bc55-b3aef9db2b82"
              ? "featured-product"
              : undefined
          }
          className="w-[344px] h-[535px] flex flex-col">
          <div className="relative group w-[344px] h-[440px] cursor-pointer">
            {product.imageUrl && (
              <Image
                src={product.imageUrl}
                alt={product.title}
                width={344}
                height={440}
                className="w-[344px] h-[440px] object-cover"
              />
            )}
            <div className="absolute top-0 left-0 w-full h-full bg-white/25 flex items-end justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <button
                onClick={() => {
                  addToCart({
                    id: product.id,
                    title: product.title,
                    price: product.discountedPrice ?? product.price,
                    image: product.imageUrl ?? "",
                    quantity: 1,
                  });
                  toast.success(`${product.title} added to cart!`);
                }}
                className="mb-4 w-[135px] h-[30px] shrink-0 bg-[#483418] text-white text-center font-(family-name:--font-afacad) text-[20px] font-bold cursor-pointer">
                ADD TO CART
              </button>
            </div>
          </div>

          <div>
            <Link
              href={`/product/${product.id}`}
              className="block hover:opacity-90">
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
