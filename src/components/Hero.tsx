import Image from "next/image";

const Hero = () => {
  return (
    <section className="w-full h-[650px] sm:h-[500px] flex justify-center items-center bg-[linear-gradient(270deg,_#FAF5EF_21.63%,_#F5ECE0_44.23%,_#F0E3D1_100%)] mb-20">
      <div className="flex flex-col sm:flex-row items-center justify-center gap-5 sm:gap-10 lg:gap-[350px] sm:text-left text-center">
        <div className="flex flex-col">
          <h2 className="text-darkbrown font-(family-name:--font-afacad) text-[25px] font-normal">
            NEW RELEASE
          </h2>
          <h1 className="font-(family-name:--font-theseasons) text-black text-[32px] sm:text-[45px] font-bold">
            The Pink Candy
          </h1>
          <h1 className="font-(family-name:--font-theseasons) text-black text-[32px] sm:text-[45px] leading-none">
            Eau de Perfum
          </h1>
          <p className="w-[349px] h-auto text-black font-(family-name:--font-afacad) text-[20px] sm:text-[25px] py-2.5">
            A playful perfume inspired by the delicate scent of hibiscus, with
            soft, lingering nuances of vanilla.
          </p>
          <a
            href="#featured-product"
            className="w-[113px] h-[37px] shrink-0 border-2 border-darkbrown text-darkbrown font-afacad text-[18px] font-bold leading-none flex items-center justify-center sm:mx-0 mx-auto">
            SHOP NOW
          </a>
        </div>
        <div>
          <Image
            src="/images/pinkcandyperfume.png"
            alt="A pink perfume bottle with candy as the text"
            width={237}
            height={421}
            className="w-[180px] h-auto sm:w-[237px] sm:h-[421px]"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
