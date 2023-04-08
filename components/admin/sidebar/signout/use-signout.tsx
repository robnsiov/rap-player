import { useRouter } from "next/navigation";
import { removeCookie } from "../../../../utils/cookie/cookie";

const useSignout = () => {
  const router = useRouter();
  const onClick = () => {
    removeCookie("token");
    router.replace("/");
  };
  return { onClick };
};
export default useSignout;
