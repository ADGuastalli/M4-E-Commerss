import { IProduct } from "@/interfece/Interface";

export async function ferchProductById(id: string): Promise<IProduct> {
  const response = await fetch(`m4-e-commerss.vercel.appproducts/${id}`);
  const product = await response.json();
  return product;
}
