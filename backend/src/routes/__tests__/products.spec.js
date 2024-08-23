// test/products.test.js
const express = require("express");
const http = require("http");
const fs = require("fs");
const path = require("path");
const productsRoute = require("../../routes/products");

const app = express();
app.use("/api/products", productsRoute);

describe("Products API", () => {
  let server;

  // Inicia o servidor antes de cada teste
  beforeAll((done) => {
    server = app.listen(4000, done);
  });

  // Fecha o servidor após cada teste
  afterAll((done) => {
    server.close(done);
  });

  it("Deve listar todos os produtos", (done) => {
    http.get("http://localhost:4000/api/products", (res) => {
      let data = "";

      res.on("data", (chunk) => {
        data += chunk;
      });

      res.on("end", () => {
        const response = JSON.parse(data);
        expect(res.statusCode).toBe(200);
        expect(response).toBeInstanceOf(Object);
        expect(response.products).toBeInstanceOf(Array);
        expect(response.products.length).toBe(8); // Supondo que há 8 produtos
        done();
      });
    });
  });

  it("Deve retornar erro ao tentar acessar produtos sem o arquivo de dados", (done) => {
    // Simulando a ausência do arquivo
    const dataPath = path.join(__dirname, "../../data/mock-products.json");
    const backupPath = `${dataPath}.bak`;

    fs.renameSync(dataPath, backupPath);

    http.get("http://localhost:4000/api/products", (res) => {
      let data = "";

      res.on("data", (chunk) => {
        data += chunk;
      });

      res.on("end", () => {
        const response = JSON.parse(data);
        expect(res.statusCode).toBe(500);
        expect(response).toHaveProperty("error");

        // Restaurando o arquivo
        fs.renameSync(backupPath, dataPath);
        done();
      });
    });
  });
});
