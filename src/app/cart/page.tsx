"use client";

import { useEffect, useState } from "react";
import { useCartStore } from "@/store/useCartStore";
import Image from "next/image";
import Link from "next/link";
import { toast, ToastContainer } from "react-toastify";
import { useRouter } from "next/navigation";
import "react-toastify/dist/ReactToastify.css";

export default function CartPage() {
  const cartItems = useCartStore((state) => state.cartItems);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const updateQuantity = useCartStore((state) => state.updateQuantity);
  const total = useCartStore((state) => state.getCartTotal());
  const router = useRouter();

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <main className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-5 font-(family-name:--font-theseasons)">
        Your Cart
      </h1>
      {cartItems.length === 0 ? (
        <p className="text-xl font-(family-name:--font-afacad)">
          Your cart is empty.{" "}
          <Link href="/" className="underline font-bold">
            Continue shopping
          </Link>
          .
        </p>
      ) : (
        <div className="space-y-8">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex gap-6 items-center border-b-2 border-darkbrown pb-4">
              <Image
                src={item.image}
                alt={item.title}
                width={200}
                height={200}
                className="object-cover w-[200px] h-[200px]"
              />
              <div className="flex-1">
                <h2 className="text-3xl font-semibold font-(family-name:--font-afacad)">
                  {item.title}
                </h2>
                <p className="font-(family-name:--font-afacad) text-xl py-3">
                  ${item.price.toFixed(2)}
                </p>
                <div className="flex items-center gap-1 mt-2">
                  <button
                    onClick={() => {
                      if (item.quantity <= 1) {
                        removeFromCart(item.id);
                        toast.error(`${item.title} removed from cart`);
                      } else {
                        updateQuantity(item.id, item.quantity - 1);
                        toast.info(`Updated quantity for ${item.title}`);
                      }
                    }}
                    className="px-2 border border-darkbrown text-darkbrown text-lg font-bold">
                    -
                  </button>
                  <span className="min-w-[24px] text-center text-xl font-bold font-(family-name:--font-afacad)">
                    {item.quantity}
                  </span>
                  <button
                    onClick={() => {
                      updateQuantity(item.id, item.quantity + 1);
                      toast.info(`Updated quantity for ${item.title}`);
                    }}
                    className="px-2 border border-darkbrown text-darkbrown text-lg font-bold">
                    +
                  </button>
                </div>
              </div>
            </div>
          ))}

          <div className="flex justify-between items-center mt-5">
            <p className="text-xl font-bold font-(family-name:--font-afacad)">
              Total: ${total.toFixed(2)}
            </p>
            <button
              onClick={() => router.push("/checkout-success")}
              className="bg-darkbrown text-white px-6 py-2 text-lg font-semibold font-(family-name:--font-afacad) cursor-pointer">
              CHECKOUT
            </button>
          </div>
        </div>
      )}
      <ToastContainer position="bottom-right" autoClose={3000} />
    </main>
  );
}
