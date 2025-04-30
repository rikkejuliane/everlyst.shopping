import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section>
      <div className="relative w-full h-[500px]">
        <Image
        src="/images/HERO.jpg"
        alt="Advertisement for the pink candy perfume"
        width={1440}
        height={500}
        className="object-cover"
        />
      </div>
      <div></div>
    </section>
  );
};

export default Hero;