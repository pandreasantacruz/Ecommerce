import { useEffect } from "react";
import { useAuth } from "../context/authContext";
import { useRouter } from "next/navigation";
import { routes } from "../routes/routes";
//lO VAMOS A USAR PARA QUE NO NOS DEJE ENTRAR A ALGUNAS PAGINAS MIENTRAS ESTAMOS LOGUEADOS
const usePublic = () => {
  const { isAuth } = useAuth();
  const router = useRouter();
  useEffect(() => {
    if (isAuth) {
      router.push(routes.dashboard);
    }
  }, [isAuth, router]);
};

export default usePublic;
