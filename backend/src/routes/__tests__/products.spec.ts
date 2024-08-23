import express from "express";
import http from "http";
import fs from "fs";
import path from "path";
import productsRoute from "../../routes/products";

const app = express();
app.use("/api/products", productsRoute);

describe("Products API", () => {
  let server: http.Server;

  beforeAll((done) => {
    server = app.listen(4000, done);
  });

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
        expect(response.products.length).toBe(8);
        done();
      });
    });
  });

  it("Deve retornar erro ao tentar acessar produtos sem o arquivo de dados", (done) => {
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

        fs.renameSync(backupPath, dataPath);
        done();
      });
    });
  });
});
