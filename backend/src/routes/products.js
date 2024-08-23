const express = require("express");
const router = express.Router();
const path = require("path");
const fs = require("fs");

// Caminho para o arquivo mock-products.json
const dataPath = path.join(__dirname, "../data/mock-products.json");

// Rota para listar os produtos
router.get("/", (req, res) => {
  fs.readFile(dataPath, "utf8", (err, data) => {
    if (err) {
      return res
        .status(500)
        .json({ error: "Erro ao ler o arquivo de produtos." });
    }
    const products = JSON.parse(data);
    res.json(products);
  });
});

module.exports = router;
