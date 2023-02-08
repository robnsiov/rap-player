"use client";

import useAdminModalStore from "../../../../store/active-modal-store";
import TableGrid from "../../table/table-grid";
import useAdminHome from "./use-admin-home";

const AdminHome = () => {
  const { columns, dataSource, clickOnRow } = useAdminHome();
  const [open, setOpen] = useAdminModalStore((state) => [
    state.open,
    state.setOpen,
  ]);
  return (
    <>
      <TableGrid dataSource={dataSource} columns={columns} onRow={clickOnRow} />

      <button onClick={() => setOpen(true)}>open</button>
    </>
  );
};
export default AdminHome;
