import request from "supertest";

import app from "../src/app";

let products;

beforeEach(() => {
  products = [
    {
      code: 12,
      description: "Placa de vídeo ZT-650",
      buyPrice: 40.0,
      sellPrice: 80.0,
      tags: ["tecnologia", "computador", "gamer"],
    },
    {
      code: 99,
      description: "Macbook Pro Retina 2020",
      buyPrice: 4000.0,
      sellPrice: 6000.0,
      tags: ["tecnologia", "macbook", "apple", "macOS"],
    },
  ];
});

test("deve ser possível criar um novo produto", async () => {});

test("o status code de um produto criado deverá ser 201", async () => {});

test("deve ser possível atualizar dados de um produto", async () => {});

test("não deve ser possível atualizar um produto inexistente", async () => {});

test("não deve ser possível remover um produto inexistente", async () => {});

test("deve retornar o código 204 quando um produto for removido", async () => {});

test("deve ser possível remover os produtos pelo código", async () => {});

test("deve ser possível listar todos os produtos", async () => {});

test("Deve ser possível buscar produtos por código no array", async () => {});

test("não deve ser possível atualizar o número de lovers de um produto manualmente", async () => {});

test("deve ser possível dar love em um produto", async () => {});

test("deve possuir o número de lovers igual a 0 um produto recém criado o qual o seu código seja inexistente", async () => {});

test("Um produto deverá herdar o número de lovers caso seu código já exista", async () => {});

test("Produtos de mesmo código devem compartilhar os lovers", async () => {});
