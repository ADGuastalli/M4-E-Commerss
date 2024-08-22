import { IProduct } from "@/interfece/Interface";

export async function ferchProductById(id: string): Promise<IProduct> {
  const response = await fetch(`https://m4-e-commerss.vercel.app/${id}`);
  const product = await response.json();
  return product;
}
