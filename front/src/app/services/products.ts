import { IProduct } from "../types";
import axios from "axios";

const axiosApiBack = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});
export const getProducts = async (): Promise<IProduct[]> => {
  try {
    const response = await axiosApiBack.get("/products");
    if (!response?.data) {
      return [];
    }
    console.log(response.data, "datos del back");
    return response.data;
  } catch (error) {
    console.log("Error al obtener los productos", error);
    return [];
  }
};

export const getProductbyId = async (id: number): Promise<IProduct | null> => {
  try {
    const response = await axiosApiBack.get<IProduct[]>(`/products?id=${id}`);
    if (!response?.data) {
      return null;
    }
    return response.data[0] || null;
  } catch (error) {
    console.log("Error al obtener el producto", error);
    return null;
  }
};
