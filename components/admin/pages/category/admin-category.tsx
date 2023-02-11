"use client";

import ConfirmModals from "../../modals/confirm-modal/confirm-modal";
import FooterModal from "../../modals/footer-modal/footer-modal";
import Modal from "../../modals/modal/modal";
import TableGrid from "../../table/table-grid";
import useAdminCategory from "./use-admin-category";
import { Form, Formik } from "formik";
import TextInput from "../../../share/admin/text-input/text-input";
import AdminTitle from "../../title/admin-title";
import { VscEmptyWindow } from "react-icons/vsc";

const AdminCategory = () => {
  const {
    columns,
    rows,
    tableStutus,
    closeModal,
    openModal,
    clickOnFooterBtns,
    confirmModalOperarion,
    operationsLoading,
    selectedRow,
    validation,
    formSubmit,
    createNewItem,
    addApiOperation,
    onChangePage,
    pages,
  } = useAdminCategory();

  return (
    <>
      <div className="w-full flex justify-center items-end flex-col p-4">
        <div className="w-full flex justify-start items-center">
          <AdminTitle title="Category" />
        </div>
        <VscEmptyWindow
          onClick={createNewItem}
          className="text-xl cursor-pointer text-one-dark-500 hover:text-gray-400"
        />
        <TableGrid
          columns={columns}
          rows={rows}
          // clickOnErrorMessage={getData}
          // onRow={clickOnRow}
          onInsert={createNewItem}
          loading={tableStutus.loading}
          onChangePage={onChangePage}
          totalPages={pages.total}
          activePage={+pages.active}
          // error={tableStutus.error}
        />

        <Modal open={openModal} close={closeModal}>
          <div className="w-full justify-center items-center">
            <AdminTitle title="Category" />
            <Formik
              validationSchema={validation}
              initialValues={selectedRow.defaultForm}
              onSubmit={formSubmit}
              enableReinitialize={true}
            >
              {({ touched, errors }) => (
                <Form className="w-full">
                  <div className="mb-3 w-full">
                    <TextInput
                      name="title"
                      label="Title"
                      placeholder="Enter your category..."
                      error={errors.title}
                      touched={touched.title}
                    />
                  </div>
                  <FooterModal
                    onDelete={() => clickOnFooterBtns("Delete")}
                    onEdit={() => addApiOperation("Edit")}
                    deleteLoader={operationsLoading.deleteLoading}
                    editLoader={operationsLoading.editLoading}
                    createLoader={operationsLoading.insertLoading}
                    create={selectedRow.selected.id === -1}
                  />
                </Form>
              )}
            </Formik>
          </div>
        </Modal>
        <ConfirmModals onConfirm={confirmModalOperarion} />
      </div>
    </>
  );
};
export default AdminCategory;
