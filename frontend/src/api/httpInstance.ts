import axios from "axios";

// Crie uma instância do Axios
const apiClient = axios.create({
  baseURL: "http://localhost:3000/api", // baseURL agora inclui /api
  timeout: 10000, // tempo máximo de espera para uma resposta, em milissegundos
  headers: {
    "Content-Type": "application/json",
  },
});

// Função para fazer uma requisição GET usando a instância Axios
const getData = async (endpoint: string) => {
  try {
    const response = await apiClient.get(endpoint);
    return response.data.products;
  } catch (error) {
    console.error("Erro ao buscar os dados:", error);
    throw error; // Relançar o erro para ser tratado no componente
  }
};

export { apiClient, getData };
