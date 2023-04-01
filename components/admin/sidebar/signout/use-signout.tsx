import { useRouter } from "next/navigation";

const useSignout = () => {
  const router = useRouter();
  const onClick = () => {
    localStorage.removeItem("token");
    router.replace("/");
  };
  return { onClick };
};
export default useSignout;
