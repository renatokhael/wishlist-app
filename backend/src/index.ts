import express from "express";

import productsRoute from "./routes/products";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use("/api/products", productsRoute);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
