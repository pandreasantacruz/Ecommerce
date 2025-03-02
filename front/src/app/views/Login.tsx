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
    <div className="flex flex-col items-center justify-center w-full max-w-md bg-black p-8 rounded-lg shadow-lg text-foreground ">
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
          <form onSubmit={handleSubmit} className="space-y-4 ">
            <div>
              <label htmlFor="email" className="block text-sm font-medium">
                Email:
              </label>
              <input
                type="email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                placeholder="ejemplo@email.com"
                className="text-zinc-400  p-2  rounded-lg  bg-black"
              />
              {errors.email && touched.email && (
                <p className="text-red-500 text-sm">{errors.email}</p>
              )}
            </div>
            <div className="space-y-4 w-full">
              <label htmlFor="password" className="block text-sm font-medium">
                Contraseña:
              </label>

              <input
                type="password"
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                placeholder="**************"
                className="text-zinc-400  p-2  rounded-lg  bg-black "
              />
              {errors.password && touched.password && (
                <p className="text-red-500 text-sm">{errors.password}</p>
              )}
            </div>
            <div className="flex justify-center items-center">
              <ButtonPrimary type="submit" disabled={isSubmitting}>
                Inicia Sesion
              </ButtonPrimary>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default Login;
