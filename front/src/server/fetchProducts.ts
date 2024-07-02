import { IProduct } from "@/interfece/Interface";

export async function ferchProductById(id: string): Promise<IProduct> {
  const response = await fetch(`http://localhost:3001/products/${id}`);
  const product = await response.json();
  return product;
}
