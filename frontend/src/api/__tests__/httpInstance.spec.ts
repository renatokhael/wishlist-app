import { describe, it, expect, vi } from "vitest";
import { getData, apiClient } from "@/api/httpInstance";
import axios from "axios";

vi.mock("axios");

describe("httpInstance", () => {
  it("should get data from API", async () => {
    const response = { data: { products: [] } };
    const mockAxios = axios as any;
    mockAxios.get.mockResolvedValue(response);
  });

  it("should error on get data from API", async () => {
    const mockAxios = axios as any;
    mockAxios.get.mockRejectedValue(new Error("Erro ao buscar os dados"));
  });
});
