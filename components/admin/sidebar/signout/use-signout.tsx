import { useRouter } from "next/navigation";
import { constants } from "../../../../constants/constants";
import fetchRequest from "../../../../utils/fetch-request/fetch-request";

const useSignout = () => {
  const router = useRouter();
  const onClick = async () => {
    await fetchRequest({ method: "POST", url: constants.admin.signout });
    localStorage.removeItem("token");
    router.replace("/");
  };
  return { onClick };
};
export default useSignout;
