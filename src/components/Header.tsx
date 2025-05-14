"use client";

import Image from "next/image";
import Link from "next/link";
import { useCartStore } from "@/store/useCartStore";
import { useEffect, useState } from "react";

const Header = () => {
  const cartCount = useCartStore((state) => state.getCartCount());
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);
  return (
    <header className="w-full">
      <div className="bg-darkbeige flex justify-center py-1.5">
        <p className="font-(family-name:--font-afacad) font-bold text-xl">
          Free shipping on orders over $50!
        </p>
      </div>

      <div className="mb-2">
        <div className="flex justify-center pt-3.5">
          <Link href="/">
            <Image
              src="/images/everlyst.png"
              alt="everlyst logo"
              width={345}
              height={57}
              priority
              className="h-auto"
            />
          </Link>
        </div>

        <div className=" px-[20px] sm:px-[138px] flex flex-row justify-between">
          <div className="font-(family-name:--font-afacad) text-2xl font-medium text-darkbrown">
            <nav>
              <ul className="flex gap-8">
                <li>
                  <Link href="/contact">CONTACT</Link>
                </li>
              </ul>
            </nav>
          </div>
          <div>
            <div className="relative w-6 h-6">
              <Link
                href="/cart"
                className="relative w-6 h-6 block cursor-pointer">
                <svg
                  width="34"
                  height="34"
                  viewBox="0 0 34 34"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M1 10.7917H32.3333L30.6981 28.7711C30.6097 29.7442 30.1607 30.6492 29.4393 31.3082C28.7179 31.9673 27.7762 32.3329 26.7991 32.3333H6.53425C5.55712 32.3329 4.61541 31.9673 3.89402 31.3082C3.17262 30.6492 2.72364 29.7442 2.63521 28.7711L1 10.7917Z"
                    stroke="#483418"
                    strokeWidth="2"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8.83337 14.7083V8.83333C8.83337 6.7558 9.65867 4.76336 11.1277 3.29433C12.5967 1.82529 14.5892 1 16.6667 1C18.7442 1 20.7367 1.82529 22.2057 3.29433C23.6747 4.76336 24.5 6.7558 24.5 8.83333V14.7083"
                    stroke="#483418"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
                <span className="absolute -bottom-4 -right-4 bg-darkbrown font-(family-name:--font-afacad) font-semibold text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {hasMounted ? cartCount : 0}
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
