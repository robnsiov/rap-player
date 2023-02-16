import AdminTitleImpl from "./types";

const AdminTitle = ({ title }: AdminTitleImpl) => {
  return (
    <>
      <h1 className="text-5xl text-one-dark-500 font-extrabold mb-8 md:text-4xl break-words">
        {title}
      </h1>
    </>
  );
};
export default AdminTitle;
