import express from "express";
import cors from "cors";

import productsRoute from "./routes/products";

const app = express();
const PORT = process.env.PORT || 3000;

// Configura o CORS para permitir requisições de qualquer endereço
app.use(cors());

app.use(express.json());
app.use("/api/products", productsRoute);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
