"use client";

import React from "react";

import { Formik } from "formik";
import ButtonPrimary from "../components/buttons/buttonPrimary";
import * as Yup from "yup";
import { loginService } from "../services/auth";
import { toast } from "react-toastify";
import { useAuth } from "../context/authContext";
import { routes } from "../routes/routes";
import { useRouter } from "next/navigation";
import usePublic from "../hooks/usePublic";

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
  usePublic();
  const { saveUserData } = useAuth();
  const router = useRouter();

  const handleOnSubmit = async (values: FormData) => {
    try {
      const res = await loginService(values);
      toast.success("Login Exitoso");
      //persiste los datos
      saveUserData(res);
      setTimeout(() => router.push(routes.dashboard), 1000);
    } catch (error) {
      console.warn("error al Login", error);
      toast.error("El Login no pudo completarse ");
    }
  };
  return (
    <div>
      <h1>Login</h1>
      <Formik
        initialValues={{
          email: "lunaluna10@gmail.com",
          password: "lunaluna10",
        }}
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
