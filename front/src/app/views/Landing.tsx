"use client";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const Landing = () => {
  return (
    <div className="relative overflow-hidden bg-background">
      <img
        src="/3.png"
        alt="Logo"
        className="absolute top-10 left-60 opacity-80 h-40 w-auto animate-pulse transition-transform duration-300 hover:scale-110"
      />
      <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
        <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
          <div className="sm:max-w-lg">
            <motion.h1
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 1 }}
              className="text-4xl text-justify font-bold tracking-tight text-foreground sm:text-6xl "
            >
              ¡Lo último en tecnología!
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: +50 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 1 }}
              className="mt-4 text-xl text-justify text-gray-400"
            >
              Innovación y calidad en un solo lugar. Encuentra celulares,
              laptops y más con grandes descuentos.{" "}
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mt-10"
          >
            <div
              aria-hidden="true"
              className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
            >
              <div className=" absolute transform sm:top-0 sm:left-1/2 sm:translate-x-8 lg:top-1/2 lg:left-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                <div className="flex items-center space-x-6 lg:space-x-8">
                  <div className="grid shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8 ">
                    <div className="h-64 w-44 overflow-hidden rounded-lg">
                      <img
                        src="landing1.jpg"
                        alt="macbookpro"
                        className="w-full h-full object-cover "
                      />
                    </div>
                    <div className="h-64 w-44 overflow-hidden rounded-lg">
                      <img
                        src="landing5.jpg"
                        alt="accesoriosCelular"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="grid shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                    <div className="h-64 w-44 overflow-hidden rounded-lg">
                      <img
                        src="landing2.jpg"
                        alt="accesorios"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="h-64 w-44 overflow-hidden rounded-lg">
                      <img
                        src="landing4.jpg"
                        alt=""
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="h-64 w-44 overflow-hidden rounded-lg">
                      <img
                        src="landing3.jpg"
                        alt=""
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="grid shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                    <div className="h-64 w-44 overflow-hidden rounded-lg">
                      <img
                        src="landing6.jpg"
                        alt=""
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="h-64 w-44 overflow-hidden rounded-lg">
                      <img
                        src="landing7.jpg"
                        alt=""
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Link
              href="/"
              className="inline-block rounded-md border border-transparent bg-blackP px-8 py-3 text-center font-medium text-white transition duration-300 hover:bg-blueP"
            >
              Visitanos
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
