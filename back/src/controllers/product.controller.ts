import { Request, Response } from "express";
import { catchedController } from "../utils/catchedController";
import { getProductsService } from "../services/products.service";
import { getProductsByIdService } from "../services/products.service";

export const getProducts = catchedController(
  async (req: Request, res: Response) => {
    const products = await getProductsService();
    res.json(products);
  }
);

export const getProductsById = catchedController(
  async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const product = await getProductsByIdService(Number(id));
      res.status(200).json(product);
    } catch {
      res.status(400).send("No se encontro el producto");
    }
  }
);
