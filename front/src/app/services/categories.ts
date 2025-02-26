import axios from "axios";
import { ICategory } from "../types";
const axiosApiBack = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});
export const getCategories = async (): Promise<ICategory[]> => {
  try {
    const response = await axiosApiBack.get("/categories");
    if (!response?.data) {
      return [];
    }
    return response.data;
  } catch (error) {
    console.log("Error al obtener las categories", error);
    return [];
  }
};
