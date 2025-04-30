import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="w-full">
      <div className="bg-darkbeige flex justify-center py-1.5">
        <p className="font-(family-name:--font-afacad) font-bold text-xl">
          Free shipping on orders over $50!
        </p>
      </div>

      <div className="">
        <div className="flex justify-center pt-2">
          <Link href="/">
            <Image
              src="/images/everlyst.png"
              alt="everlyst logo"
              width={345}
              height={57}
            />
          </Link>
        </div>

        <div className="px-[138px]">
          <div className="font-(family-name:--font-afacad) text-2xl font-medium">
            <nav>
              <ul className="flex gap-8">
                <li>
                  <Link href="/contact">CONTACT</Link>
                </li>
                <li>
                  <Link href="/about">ABOUT</Link>
                </li>
              </ul>
            </nav>
          </div>
          <div>
            <Link href="/cart" className="relative">
              <Image src="/icons/cart.svg" alt="Cart" width={24} height={24} />
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full font-bold">
                2
              </span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header; // ✅ make sure you're exporting it as default!
