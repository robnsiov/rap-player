"use client";

import ConfirmModals from "../../modals/confirm-modal/confirm-modal";
import FooterModal from "../../modals/footer-modal/footer-modal";
import Modal from "../../modals/modal/modal";
import TableGrid from "../../table/table-grid";
import usePageContainer from "./use-page-container";
import { Form, Formik } from "formik";
import TextInput from "../../../share/admin/text-input/text-input";
import AdminTitle from "../../title/admin-title";
import { VscEmptyWindow } from "react-icons/vsc";
import PageContainerImpl from "./types";

function PageContainer<Values, Value, SelectedRow>({
  defaultSelected,
  clickOnRowManager,
  columns,
  createRows,
  Form,
  onSelectedRow,
}: PageContainerImpl<Values, Value, SelectedRow>) {
  const {
    rows,
    tableStutus,
    closeModal,
    openModal,
    clickOnFooterBtns,
    confirmModalOperarion,
    operationsLoading,
    selectedRow,
    formSubmit,
    createNewItem,
    addApiOperation,
    onChangePage,
    pages,
    getData,
  } = usePageContainer<Values, Value, SelectedRow>({
    clickOnRowManager,
    defaultSelected,
    columns,
    createRows,
    onSelectedRow,
  });

  return (
    <>
      <div className="w-full flex justify-center items-end flex-col p-4">
        <div className="w-full flex justify-start items-center">
          <AdminTitle title="Category" />
        </div>

        <TableGrid
          columns={columns}
          rows={rows}
          onInsert={createNewItem}
          loading={tableStutus.loading}
          onChangePage={onChangePage}
          totalPages={pages.total}
          activePage={+pages.active}
          fetchError={tableStutus.error}
          tryAgain={getData}
        />

        <Modal open={openModal} close={closeModal}>
          <div className="w-full justify-center items-center">
            <AdminTitle title="Category" />
            <Form
              submit={formSubmit}
              onSelectedRow={onSelectedRow}
              Footer={
                <FooterModal
                  onDelete={() => clickOnFooterBtns("Delete")}
                  onEdit={() => addApiOperation("Edit")}
                  deleteLoader={operationsLoading.deleteLoading}
                  editLoader={operationsLoading.editLoading}
                  createLoader={operationsLoading.insertLoading}
                  create={selectedRow.selected.id === -1}
                />
              }
            />
          </div>
        </Modal>
        <ConfirmModals onConfirm={confirmModalOperarion} />
      </div>
    </>
  );
}
export default PageContainer;
