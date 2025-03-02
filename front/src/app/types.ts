export interface IProduct {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  categoryId?: number;
  stock?: number;
}

export interface ICategory {
  id: number;
  name: string;
  products: IProduct[];
}

export interface IOrder {
  id: number;
  status: string;
  date: Date;
  user: IUser;
  products: IProduct[];
}

export enum eRol {
  ADMIN = "admin",
  USER = "user",
}

export interface IUser {
  id: number;
  name: string;
  email: string;
  address: string;
  phone: string;
  role: eRol;
  orders: IOrder[];
}
