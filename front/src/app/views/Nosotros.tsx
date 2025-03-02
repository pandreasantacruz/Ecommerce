import React from "react";
import Map from "../components/Map";
import { GrCaretNext } from "react-icons/gr";
import { FaRegClock } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";

const Nosotros = () => {
  return (
    <div className="font-poppins">
      <div className="py-4">
        <h2 className="text-3xl font-bold text-center transition-transform duration-300 hover:scale-110">
          Nuestra Historia
        </h2>
        <p className="text-justify text-lg px-16 py-4 ">
          {" "}
          Desde el año 2000, nos hemos dedicado a brindar soluciones
          tecnológicas innovadoras, apostando por la calidad y el servicio
          excepcional. Comenzamos como un pequeño emprendimiento y crecimos
          hasta convertirnos en una empresa confiable, ofreciendo productos de
          marcas líderes como Apple y Samsung.
          <br /> <br /> Hoy, seguimos avanzando con la misma pasión que nos vio
          nacer, comprometidos con ofrecer tecnología de vanguardia y soluciones
          que hacen la diferencia.
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-2 gap-4 px-16 py-4">
        <div className="flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-center py-2 transition-transform duration-300 hover:scale-110">
            Nuestra ubicacion
          </h2>
          <h3 className="text-1xl text-center transition-transform duration-300 hover:scale-110">
            Centro Comercial Andino Cra. 11 #82-71, Bogotá
          </h3>
        </div>
        <Map></Map>
      </div>
      <div className="py-8 space-y-1">
        <h2 className="text-3xl font-bold text-center transition-transform duration-300 hover:scale-110">
          Contact Center
        </h2>
        <img
          src="/contacto.png"
          alt="imagendecontacto"
          className="mx-auto transition-transform duration-300 hover:scale-110"
        ></img>{" "}
        <div className="flex flex-col items-center justify-center space-y-2 ">
          <div className="flex items-center gap-2">
            <GrCaretNext />
            <h3>Ventas, asesoría y Servicio al Cliente</h3>
          </div>
          <div className="flex items-center gap-2">
            <FaRegClock />

            <h3 className="text-center">
              Lunes a Viernes 10 am - 7 pm <br />
              Sábado 10 am - 3 pm
            </h3>
          </div>
          <div className="flex items-center gap-2">
            <FaPhone />
            <h3>WhatsApp: (+57) 302 312 1847</h3>
          </div>
        </div>
        <a href="https://wa.me/573216599736">
          <img
            src="/whatsapp.png"
            alt="imagenlogo whatsapp"
            className="mx-auto h-24 animate-pulse transition-transform duration-300 hover:scale-110"
          ></img>
        </a>
      </div>
    </div>
  );
};

export default Nosotros;
