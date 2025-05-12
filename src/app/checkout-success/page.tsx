"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useCartStore } from "@/store/useCartStore";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function CheckoutSuccess() {
  const [mounted, setMounted] = useState(false);
  const cartItems = useCartStore((state) => state.cartItems);
  const clearCart = useCartStore((state) => state.clearCart);
  const total = useCartStore((state) => state.getCartTotal());
  const router = useRouter();

  useEffect(() => {
    setMounted(true); // ✅ Mount flag to avoid hydration mismatch
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const toastId = toast.info("Cart will be cleared in 120s", {
      toastId: "countdown",
      autoClose: false,
    });

    let countdown = 120;
    const interval = setInterval(() => {
      countdown--;
      toast.update(toastId, {
        render: `Cart will be cleared in ${countdown}s`,
      });

      if (countdown <= 0) {
        clearInterval(interval);
        toast.dismiss(toastId);
        clearCart();
        toast.success("Cart cleared. Redirecting home...");
        router.push("/");
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [mounted, clearCart, router]);

  return (
    <main className="p-6 max-w-4xl mx-auto text-center">
      <h1 className="text-3xl font-bold font-(family-name:--font-theseasons) mb-6">
        Order Confirmed
      </h1>
      <p className="text-xl mb-4 font-(family-name:--font-afacad)">
        Thank you for your purchase. A confirmation email has been sent.
      </p>

      <div className="mt-6 space-y-4">
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="flex justify-between items-center border-b-2 border-darkbrown py-2 px-2 text-left">
            <p className="text-xl font-(family-name:--font-afacad)">
              {item.title} x {item.quantity}
            </p>
            <p className="text-xl font-(family-name:--font-afacad)">
              ${(item.price * item.quantity).toFixed(2)}
            </p>
          </div>
        ))}
        <p className="text-2xl font-bold pt-4 font-(family-name:--font-afacad)">
          Total: ${total.toFixed(2)}
        </p>
      </div>

      <button
        onClick={() => {
          clearCart();
          toast.dismiss("countdown");
          toast.success("Cart cleared. Welcome back!");
          router.push("/");
        }}
        className="mt-8 bg-darkbrown text-white px-6 py-3 text-lg font-semibold font-(family-name:--font-afacad)">
        Continue Shopping
      </button>
      <ToastContainer position="bottom-right" />
    </main>
  );
}
