"use client";

import React from "react";

import { Formik } from "formik";
import ButtonPrimary from "../components/buttons/buttonPrimary";
import * as Yup from "yup";

const RegisterSchema = Yup.object().shape({
  name: Yup.string()
    .matches(/^[a-zA-Z]+ [a-zA-Z]+$/, "Debe incluir nombre y apellido")
    .required("El nombre es obligatorio"),

  phone: Yup.string()
    .matches(/^\d{10}$/, "El teléfono debe tener 10 dígitos")
    .required("El teléfono es obligatorio"),

  address: Yup.string()
    .min(10, "La dirección es muy corta")
    .required("La dirección es obligatoria"),

  email: Yup.string()
    .email("Debe ser un email válido")
    .required("El email es obligatorio"),

  password: Yup.string()
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
      "La contraseña debe tener al menos 8 caracteres y ser alfanumérica"
    )
    .required("La contraseña es obligatoria"),
});

interface FormData {
  email: string;
  password: string;
  name: string;
  address: string;
  phone: string;
}
const Register = () => {
  const handleOnSubmit = async (values: FormData) => {
    console.log("Submit Exitoso", values);
  };
  return (
    <div>
      <h1>Register</h1>
      <Formik
        initialValues={{
          email: "",
          password: "",
          name: "",
          address: "",
          phone: "",
        }}
        validationSchema={RegisterSchema}
        onSubmit={handleOnSubmit}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Nombre</label>
            <input
              type="text"
              name="name"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name}
              placeholder="Nombre y Apellido"
            />
            {errors.name && touched.name && errors.name}

            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              placeholder="ejemplo@email.com"
            />
            {errors.email && touched.email && errors.email}

            <label htmlFor="password">Contraseña</label>
            <input
              type="password"
              name="password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
              placeholder="**************"
            />
            {errors.password && touched.password && errors.password}

            <label htmlFor="address">Direccion</label>
            <input
              type="text"
              name="address"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.address}
              placeholder="Calle 1 # 25-45, Bogota - Colombia"
            />
            {errors.address && touched.address && errors.address}

            <label htmlFor="phone">Telefono</label>
            <input
              type="text"
              name="phone"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.phone}
              placeholder="+57 321 654 96 32"
            />
            {errors.phone && touched.phone && errors.phone}
            <ButtonPrimary type="submit" disabled={isSubmitting}>
              Registrarse
            </ButtonPrimary>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default Register;
