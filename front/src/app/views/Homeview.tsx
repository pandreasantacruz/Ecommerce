/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import React, { useState, useEffect, FC } from "react";
import { GoChevronLeft } from "react-icons/go";
import { GoChevronRight } from "react-icons/go";
import { routes } from "../routes/routes";
import Link from "next/link";
import { motion } from "framer-motion";

const images = [
  "/landing1.jpg",
  "/landing4.jpg",
  "/landing3.jpg",
  "/landing5.jpg",
  "/img3.jpg",
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className=" relative w-full max-w-10xl mx-auto">
      <div className="overflow-hidden rounded-lg">
        <Link href={routes.products}>
          <img
            src={images[currentIndex]}
            alt={`Slide ${currentIndex + 1}`}
            className="w-full h-96 object-cover transition-transform duration-500"
          />
        </Link>
      </div>
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-2 -translate-y-1/2 text-white p-2 rounded-full shadow-md hover:bg-grisP"
      >
        <GoChevronLeft />
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-2 -translate-y-1/2  text-white p-2 rounded-full shadow-md hover:bg-grisP"
      >
        <GoChevronRight />
      </button>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-blackP" : "bg-grisP"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

const Homeview = () => {
  return (
    <div className="space-y-10 pb-2 font-poppins">
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <Carousel />
      </motion.div>
      <div className="text-center">
        <h2 className="text-2xl font-bold transition-transform duration-300 hover:scale-110">
          🔥 Promociones Exclusivas 🔥
        </h2>
        <p className="text-gray-600 transition-transform duration-300 hover:scale-110">
          ¡No te pierdas nuestras ofertas especiales!
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pb-10">
        <Link href={routes.products}>
          <div className=" bg-blackP p-4 shadow-md h-40 flex items-center transition-transform duration-300 hover:scale-110">
            <motion.img
              src="/landing1.jpg"
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-full h-full object-cover"
            ></motion.img>
          </div>
        </Link>
        <Link href={routes.products}>
          <div className="bg-blackP p-4 shadow-md h-40 flex items-center transition-transform duration-300 hover:scale-110">
            <motion.img
              src="/img3.jpg"
              alt="promocion2"
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-full h-full object-cover "
            ></motion.img>
          </div>
        </Link>
        <Link href={routes.products}>
          <div className="bg-blackP p-4 shadow-md h-40 flex items-center transition-transform duration-300 hover:scale-110">
            <motion.img
              src="/img2.jpg"
              alt="promocion2"
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-full h-full object-cover"
            ></motion.img>
          </div>
        </Link>
        <Link href={routes.products}>
          <div className="bg-blackP p-4 shadow-md h-40 flex items-center transition-transform duration-300 hover:scale-110">
            <motion.img
              src="/img5.jpg"
              alt="promocion2 "
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-full h-full object-cover"
            ></motion.img>
          </div>
        </Link>
      </div>
      <div className="text-center">
        <h2 className="text-3xl font-bold transition-transform duration-300 hover:scale-110">
          ¿Porque comprar en E Tech
        </h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 pb-10 px-4 md:px-8 ">
        <div className=" flex flex-col items-center justify-center p-4 border  border-blackP rounded-lg shadow transition-transform duration-300 hover:scale-110  ">
          <div className="h-40 flex items-center">
            <img
              src="/home1.png"
              alt="imagenhome1"
              className="w-full h-full pb-2 object-cover"
            />
          </div>
          <h3 className=" font-bold text-center pb-2">
            Tecnología de Vanguardia
          </h3>
          <p className="text-justify text-sm">
            Ofrecemos lo último en innovación y rendimiento, con dispositivos
            diseñados para brindarte la mejor experiencia.
          </p>
          <p></p>
        </div>
        <div className="flex flex-col items-center justify-center p-4 border  border-blackP rounded-lg shadow  transition-transform duration-300 hover:scale-110">
          <div className="h-40 flex items-center">
            <img
              src="/home2.png"
              alt="Imagen 2 home 2"
              className="w-full h-full pb-2 object-cover"
            />
          </div>
          <h3 className="font-bold text-center pb-2">
            Clientes Satisfechos en Todo el Mundo
          </h3>
          <p className="text-justify text-sm">
            Miles de personas confían en nosotros para adquirir sus
            dispositivos, gracias a nuestro compromiso con la calidad y el
            servicio.
          </p>
          <p></p>
        </div>
        <div className=" flex flex-col items-center justify-center p-4 border  border-blackP rounded-lg shadow  transition-transform duration-300 hover:scale-110">
          <div className="h-40 flex items-center">
            <img
              src="/home3.png"
              alt="imagen home 3"
              className="w-full h-full pb-2 object-cover"
            />
          </div>
          <h3 className="font-bold text-center pb-2">
            Garantía y Soporte Oficial
          </h3>
          <p className="text-justify text-sm">
            Todos nuestros productos cuentan con garantía y respaldo directo de
            la marca, asegurando una compra segura y confiable.
          </p>
          <p></p>
        </div>
        <div className=" flex flex-col items-center justify-center p-4 border  border-blackP rounded-lg shadow  transition-transform duration-300 hover:scale-110">
          <img src="/home4.png" alt="imagen home 4" className="h-40 pb-0" />
          <h3 className=" font-bold text-center pt-0 pb-2">
            Compra Fácil, Segura y Online
          </h3>
          <p className="text-justify text-sm">
            Disfruta de una experiencia de compra rápida, segura y con múltiples
            opciones de pago y envío.
          </p>
          <p></p>
        </div>
        <div className=" flex flex-col items-center justify-center p-4 border  border-blackP rounded-lg shadow transition-transform duration-300 hover:scale-110 ">
          <div className="h-40 flex items-center">
            <img
              src="/home5.png"
              alt="imagen home 5"
              className="w-full h-full pb-2 object-cover"
            />
          </div>
          <h3 className="font-bold text-center pb-2">
            Productos 100% Originales
          </h3>
          <p className="text-justify text-sm">
            Trabajamos con marcas líderes como Apple, Samsung y más,
            garantizando autenticidad y calidad en cada producto.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Homeview;
