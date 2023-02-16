"use client";
import Link from "next/link";
import AdminTitle from "../components/admin/title/admin-title";

export default function NotFound() {
  return (
    <>
      <div
        className="w-full h-screen bg-one-white flex justify-center 
      items-center flex-col text-white"
      >
        <AdminTitle title="dsd" />
        <h2 className="text-4xl" style={{ color: "red" }}>
          Not Found
        </h2>
        <p>Could not find requested resource</p>
        <Link href={"/"}>Home</Link>
      </div>
    </>
  );
}
