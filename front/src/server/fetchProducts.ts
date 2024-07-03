import { IProduct } from "@/interfece/Interface";

export async function ferchProductById(id: string): Promise<IProduct> {
  const response = await fetch(
    `https://proyecto-m4-front.onrender.com/products/${id}`
  );
  const product = await response.json();
  return product;
}
