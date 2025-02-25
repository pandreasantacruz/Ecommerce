"use server";
import axios from "axios";
import { IUser } from "../types";

const axiosApiBack = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

export const loginService = async (userData: {
  email: string;
  password: string;
}) => {
  try {
    const user = await axiosApiBack.post("/users/login", userData);
    console.log("user en servicio", user.data);

    return user.data;
  } catch (error) {
    console.log("Error al Login", error);
    throw Error("Error_LogIn");
  }
};

export const registerService = async (userData: Partial<IUser>) => {
  try {
    await axiosApiBack.post("/users/register", userData);
    return "Registro exitoso";
  } catch (error) {
    console.log("Error al registrarse", error);
    throw Error("Error_Register");
  }
};
