import Hero from "@/components/Hero";
import ProductList from "@/components/ProductList";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center bg-background">
      <Hero />
      <ProductList />
    </main>
  );
}
