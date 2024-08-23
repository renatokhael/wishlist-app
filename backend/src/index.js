const express = require("express");
const app = express();
const productsRoute = require("./routes/products");

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use("/api/products", productsRoute);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
