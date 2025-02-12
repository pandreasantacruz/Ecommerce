interface IProduct {
  id: number;
  name: string;
  description: string;
  price: number;
  stock: number;
  image: string;
  categoryId: number;
}

interface ICategory {
  id: number;
  name: string;
  products: IProduct[];
}

interface IOrder {
  id: number;
  status: string;
  date: Date;
  user: IUser;
  products: IProduct[];
}

enum eRol {
  ADMIN = "admin",
  USER = "user",
}

interface IUser {
  id: number;
  name: string;
  email: string;
  address: string;
  phone: string;
  role: eRol;
  orders: IOrder[];
}
