import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:3000/api",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

const getData = async (endpoint: string) => {
  try {
    const response = await apiClient.get(endpoint);
    return response.data.products;
  } catch (error) {
    console.error("Erro ao buscar os dados:", error);
    throw error;
  }
};

export { apiClient, getData };
