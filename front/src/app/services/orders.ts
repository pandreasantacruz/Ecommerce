import axios from "axios";

const axiosApiBack = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});
export interface DtoOrder {
  userId: number;
  products: number[];
}
export const postOrder = async (orderData: DtoOrder, token: string) => {
  try {
    const response = await axiosApiBack.post("/orders", orderData, {
      headers: {
        authorization: token,
      },
    });
    return response.data;
  } catch (error) {
    console.log("Error en Order Post", error);
    throw Error("Error_Post_Order");
  }
};
export const getUserOrders = async (token: string) => {
  console.log("Enviando petición con:");
  console.log("token:", token);
  try {
    const response = await axiosApiBack.get("/users/orders", {
      headers: {
        authorization: token,
      },
    });
    if (response) {
      return response.data;
    }
  } catch (error) {
    console.log("Error en Get Post", error);
    throw Error("Error_Get_Order");
  }
};
