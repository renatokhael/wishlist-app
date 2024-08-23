import express, { Request, Response } from "express";
import path from "path";
import fs from "fs";

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

// Caminho para o arquivo mock-products.json
const dataPath = path.join(__dirname, "../data/mock-products.json");

// Rota para listar os produtos
router.get("/", (req: Request, res: Response) => {
  fs.readFile(dataPath, "utf8", (err, data) => {
    if (err) {
      return res
        .status(500)
        .json({ error: "Erro ao ler o arquivo de produtos." });
    }
    try {
      const products: Product[] = JSON.parse(data);
      res.json(products);
    } catch (parseError) {
      res
        .status(500)
        .json({ error: "Erro ao processar os dados do arquivo de produtos." });
    }
  });
});

export default router;
