"use client";
import SignoutImpl from "./types";
import useSignout from "./use-signout";

const SignOut = ({ icon, title, closeSidebar }: SignoutImpl) => {
  const { onClick } = useSignout();
  return (
    <>
      <div
        onClick={onClick}
        className="mb-1 w-full flex justify-start items-center rounded-lg px-2 py-2 w-ful
        l hover:bg-gray-700 group cursor-pointer"
      >
        {" "}
        <div className="text-xl">{icon}</div>
        {!closeSidebar && <span className="ml-1 md:hidden">{title}</span>}
      </div>
    </>
  );
};

export default SignOut;
