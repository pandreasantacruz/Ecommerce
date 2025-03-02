"use client";
import React, { useEffect, useState } from "react";
import { useAuth } from "../context/authContext";
import { getUserOrders } from "../services/orders";
import { IOrder } from "../types";
import usePrivate from "../hooks/usePrivate";

const Dashboard = () => {
  usePrivate();
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
    <div className="bg-background font-poppins py-4">
      <div>
        <h2 className="text-3xl text-center font-bold transition-transform duration-300 hover:scale-110 py-2">
          Mi Perfil
        </h2>
      </div>

      <div className="bg-blackP rounded-lg shadow-md p-4 w-96 mx-auto transition-transform duration-300 hover:scale-110">
        <h3 className="text-xl text-center font-bold">Usuario: {user?.name}</h3>
        <h3 className="text-l text-center font-bold">Datos Personales</h3>
        <p className="text-l text-center ">Dirección: {user?.address}</p>
        <p className="text-l text-center ">Teléfono: {user?.phone}</p>
      </div>

      <div>
        <h3 className="text-3xl text-center font-bold transition-transform duration-300 hover:scale-110 py-4">
          Órdenes
        </h3>
      </div>

      {orders && orders.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-8 ">
          {orders.map((order) => {
            const total = order.products.reduce(
              (acc, product) => acc + product.price,
              0
            );

            return (
              <div
                key={order.id}
                className="order bg-blackP rounded-lg shadow-md p-4 w-full mx-auto transition-transform duration-300 hover:scale-110"
              >
                <h3 className="text-xl text-center font-bold">
                  Order ID: {order.id}
                </h3>
                <p className="text-l">Estado: {order.status}</p>
                <p className="text-l">
                  Fecha: {new Date(order.date).toLocaleString()}
                </p>
                <h4 className="text-xl text-center font-bold py-2">
                  Productos
                </h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {order.products.map((product) => (
                    <li
                      key={product.id}
                      className="product bg-grisP p-4 rounded-lg flex flex-col items-center"
                    >
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-24 h-24 object-cover rounded-md"
                      />
                      <h5 className="text-center font-semibold">
                        {product.name}
                      </h5>
                      <p className="text-sm text-gray-300">
                        Precio: ${product.price}
                      </p>
                    </li>
                  ))}
                </ul>
                <p className="text-lg font-bold text-center mt-4">
                  Total: ${total}
                </p>
              </div>
            );
          })}
        </div>
      ) : (
        <p className="text-xl text-center font-bold">
          No hay órdenes disponibles.
        </p>
      )}
    </div>
  );
};
export default Dashboard;
