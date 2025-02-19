"use client";

import React from "react";

import { Formik } from "formik";
import ButtonPrimary from "../components/buttons/buttonPrimary";
import * as Yup from "yup";

const loginSchema = Yup.object().shape({
  //"Las credenciales no son las correctas o el usuario no esta registrado"
  email: Yup.string()
    .email("Debe ser un email valido")
    .required("El email es requerido para iniciar sesion"),
  password: Yup.string().required(
    "La contraseña es requerida para iniciar sesion"
  ),
});
interface FormData {
  email: string;
  password: string;
}
const Login = () => {
  const handleOnSubmit = async (values: FormData) => {
    console.log("Submit Exitoso", values);
  };
  return (
    <div>
      <h1>Login</h1>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={loginSchema}
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
            <ButtonPrimary type="submit" disabled={isSubmitting}>
              Submit
            </ButtonPrimary>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default Login;
