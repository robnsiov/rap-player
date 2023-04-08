import { redirect } from "next/navigation";
import { Suspense } from "react";
import { constants } from "../../../../constants/constants";
import { cookies } from "next/headers";
import ProtectedImpl from "./types";
const checkAuth = async (adminProtect: boolean) => {
  try {
    const res = await fetch(`${constants.baseURL}${constants.admin.profile}`, {
      headers: { authorization: `Bearer ${cookies().get("token")?.value}` },
      method: "POST",
      cache: "no-store",
    });
    if (!res.ok) {
      redirect("/");
    }
    if (adminProtect) redirect("/admin");
    return true;
  } catch (err) {
    console.log(err);
    redirect("/");
  }
};

const Protected = async ({ children, adminProtect = false }: ProtectedImpl) => {
  // adminProtect : for signup, signin
  const isAuth = await checkAuth(adminProtect);
  return <Suspense fallback={<p>wait...</p>}>{isAuth && children}</Suspense>;
};

export default Protected;
