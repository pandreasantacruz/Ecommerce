/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import React, { useEffect, useState } from "react";
import { useAuth } from "../context/authContext";
import { getUserOrders } from "../services/orders";
import { IOrder } from "../types";
import products from "../product/page";

const Dashboard = () => {
  const [orders, setOrders] = useState<IOrder[]>();
  const { user, token, isAuth } = useAuth();

  useEffect(() => {
    if (isAuth && token) {
      const request = async () => {
        try {
          const newOrders = await getUserOrders(token);
          setOrders(newOrders);
          console.log(newOrders, "Ordenesss");
        } catch (error) {
          console.error("Error obteniendo órdenes:", error);
        }
      };

      request();
    }
  }, [isAuth, token]);

  return (
    //crear tabla
    <div>
      <div>
        <h3>Usuario</h3>
      </div>
      <div>
        <p>{user?.name}</p>
        <p>Direccion: {user?.address} </p>
        <p>Telefono: {user?.phone}</p>
      </div>
      <div>
        <h3>Órdenes</h3>
        {orders?.map((order) => (
          <div key={order.id} className="order">
            <h3>Order ID: {order.id}</h3>
            <p>Status: {order.status}</p>
            <p>Date: {new Date(order.date).toLocaleString()}</p>

            <h4>Products:</h4>
            <ul>
              {order.products.map((product) => (
                <li key={product.id} className="product">
                  <img src={product.image} alt={product.name} width={100} />
                  <h5>{product.name}</h5>
                  <p>{product.description}</p>
                  <p>Price: ${product.price}</p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      : (<p>No hay órdenes disponibles.</p>)
    </div>
  );
};

export default Dashboard;
