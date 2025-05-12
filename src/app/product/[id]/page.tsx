"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { fetchProductById } from "@/utils/api";
import { Product } from "@/types/products";
import RatingCircles from "@/components/RatingCircles";
import ProductReviews from "@/components/ProductReviews";
import Image from "next/image";
import { notFound } from "next/navigation";
import { useCartStore } from "@/store/useCartStore";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const [product, setProduct] = useState<Product | null>(null);
  const addToCart = useCartStore((state) => state.addToCart);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" }); // 👈 scroll to top
  
    const loadProduct = async () => {
      try {
        const { id } = await params;
        const data = await fetchProductById(id);
        setProduct(data);
      } catch {
        notFound();
      }
    };
  
    loadProduct();
  }, [params]);
  

  if (!product) return <p>Loading...</p>;

  return (
    <main className="p-6">
      <div className="flex flex-row justify-center gap-[142px]">
        <div>
          <Image
            src={product.imageUrl!}
            alt={product.title}
            width={470}
            height={616}
            className="w-[470px] h-[616px] object-cover"
          />
        </div>
        <div className="w-[406px]">
          <h1 className="font-(family-name:--font-afacad) uppercase text-black text-[44px] leading-none">
            {product.title}
          </h1>
          <p className="font-(family-name:--font-afacad) text-[25px]">
            {product.description}
          </p>
          <div className="flex items-center gap-3 font-(family-name:--font-afacad) text-[22px] py-5">
            {product.discountedPrice < product.price ? (
              <>
                <p className="text-red-500">
                  ${product.discountedPrice.toFixed(2)}
                </p>
                <p className="line-through">${product.price.toFixed(2)}</p>
              </>
            ) : (
              <p className="font-medium">${product.price.toFixed(2)}</p>
            )}
          </div>

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
            className="w-[130px] h-[37px] shrink-0 border-2 border-darkbrown text-darkbrown font-afacad text-[18px] font-bold leading-none flex items-center justify-center cursor-pointer">
            ADD TO CART
          </button>

          <div className="bg-darkbeige flex w-[406px] h-[143px] my-10">
            <ul className="flex flex-col justify-center pl-2 text-darkbrown font-(family-name:--font-afacad) text-xl font-medium">
              <li className="flex flex-row items-center gap-3">
                <svg
                  width="18"
                  height="15"
                  viewBox="0 0 18 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M6.81988 15L6.54205 14.7144L6.3937 14.5662L3.14811 11.2899L3.15011 11.2878L0 8.10786L3.67535 4.3978L6.82173 7.57393L14.3247 0L18 3.71009L10.4971 11.2839L10.0731 11.7161L6.81988 15ZM4.84444 11.2822L6.81962 13.2761L6.82338 13.2723L6.82542 13.2743L8.79502 11.2861L9.21895 10.854L16.2961 3.71009L14.3247 1.72008L6.82173 9.29393L3.67535 6.11781L1.70394 8.10786L4.84651 11.2801L4.84444 11.2822Z"
                    fill="#483418"
                  />
                </svg>
                <p>Free shipping on orders over $50</p>
              </li>
              <li className="flex flex-row items-center gap-3">
                <svg
                  width="18"
                  height="15"
                  viewBox="0 0 18 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M6.81988 15L6.54205 14.7144L6.3937 14.5662L3.14811 11.2899L3.15011 11.2878L0 8.10786L3.67535 4.3978L6.82173 7.57393L14.3247 0L18 3.71009L10.4971 11.2839L10.0731 11.7161L6.81988 15ZM4.84444 11.2822L6.81962 13.2761L6.82338 13.2723L6.82542 13.2743L8.79502 11.2861L9.21895 10.854L16.2961 3.71009L14.3247 1.72008L6.82173 9.29393L3.67535 6.11781L1.70394 8.10786L4.84651 11.2801L4.84444 11.2822Z"
                    fill="#483418"
                  />
                </svg>
                <p>Fast delivery</p>
              </li>
              <li className="flex flex-row items-center gap-3">
                <svg
                  width="18"
                  height="15"
                  viewBox="0 0 18 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M6.81988 15L6.54205 14.7144L6.3937 14.5662L3.14811 11.2899L3.15011 11.2878L0 8.10786L3.67535 4.3978L6.82173 7.57393L14.3247 0L18 3.71009L10.4971 11.2839L10.0731 11.7161L6.81988 15ZM4.84444 11.2822L6.81962 13.2761L6.82338 13.2723L6.82542 13.2743L8.79502 11.2861L9.21895 10.854L16.2961 3.71009L14.3247 1.72008L6.82173 9.29393L3.67535 6.11781L1.70394 8.10786L4.84651 11.2801L4.84444 11.2822Z"
                    fill="#483418"
                  />
                </svg>
                <p>Free returns with a new order</p>
              </li>
              <li className="flex flex-row items-center gap-3">
                <svg
                  width="18"
                  height="15"
                  viewBox="0 0 18 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M6.81988 15L6.54205 14.7144L6.3937 14.5662L3.14811 11.2899L3.15011 11.2878L0 8.10786L3.67535 4.3978L6.82173 7.57393L14.3247 0L18 3.71009L10.4971 11.2839L10.0731 11.7161L6.81988 15ZM4.84444 11.2822L6.81962 13.2761L6.82338 13.2723L6.82542 13.2743L8.79502 11.2861L9.21895 10.854L16.2961 3.71009L14.3247 1.72008L6.82173 9.29393L3.67535 6.11781L1.70394 8.10786L4.84651 11.2801L4.84444 11.2822Z"
                    fill="#483418"
                  />
                </svg>
                <p>Home delivery</p>
              </li>
            </ul>
          </div>

          <div>
            <div className="flex flex-row justify-between">
              <h2 className="font-(family-name:--font-afacad) font-medium text-[22px]">
                COSTUMER REVIEWS
              </h2>
              <RatingCircles rating={product.rating} />
            </div>

            <div>
              <ProductReviews reviews={product.reviews} />
            </div>
          </div>
        </div>
      </div>
      <ToastContainer position="bottom-right" autoClose={3000} />
    </main>
  );
}
