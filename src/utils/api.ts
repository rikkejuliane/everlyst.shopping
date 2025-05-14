import { Product } from "@/types/products";

const API_URL = "https://api.noroff.dev/api/v1/online-shop";

export async function fetchAllProducts(): Promise<Product[]> {
  const res = await fetch(API_URL);
  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  const json = await res.json();
  return json;
}

export async function fetchProductById(id: string): Promise<Product> {
  const res = await fetch(`${API_URL}/${id}`);
  if (!res.ok) throw new Error("Failed to fetch product");

  const json = await res.json();
  return json;
}
