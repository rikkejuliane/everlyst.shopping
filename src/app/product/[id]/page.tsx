import { fetchProductById } from "@/utils/api";
import { Product } from "@/types/products";
import Image from "next/image";
import { notFound } from "next/navigation";

export default async function ProductPage({
  params,
}: {
  params: { id: string };
}) {
  let product: Product;

  try {
    product = await fetchProductById(params.id);
    console.log("Fetched product:", product);
  } catch {
    return notFound();
  }

  return (
    <main className="max-w-3xl mx-auto p-6">
      <Image
        src={product.imageUrl!}
        alt={product.title}
        width={600}
        height={600}
        className="w-full h-auto object-cover rounded-xl shadow-lg"
      />
    </main>
  );
}
