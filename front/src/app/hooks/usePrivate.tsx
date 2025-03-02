import { useEffect } from "react";
import { useAuth } from "../context/authContext";
import { useRouter } from "next/navigation";
import { routes } from "../routes/routes";
const usePrivate = () => {
  const { isAuth } = useAuth();
  const router = useRouter();
  useEffect(() => {
    if (!isAuth) {
      router.push(routes.home);
    }
  }, [isAuth, router]);
};

export default usePrivate;
