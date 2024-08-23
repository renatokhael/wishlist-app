import express, { Request, Response } from "express";
import path from "path";
import fs from "fs/promises";

interface ProductDetails {
  name: string;
  description: string;
}

interface Product {
  code: string;
  name: string;
  available: boolean;
  visible: boolean;
  details: ProductDetails;
  priceInCents: string;
  salePriceInCents: string;
  rating: number;
  image: string;
  stockAvailable: boolean;
}

const router = express.Router();

const dataPath = path.join(__dirname, "../data/mock-products.json");

const readProductsFromFile = async (): Promise<Product[]> => {
  try {
    const data = await fs.readFile(dataPath, "utf8");
    return JSON.parse(data) as Product[];
  } catch (err) {
    throw new Error("Erro ao ler ou processar o arquivo de produtos.");
  }
};

router.get("/", async (req: Request, res: Response) => {
  try {
    const products = await readProductsFromFile();
    res.json(products);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
