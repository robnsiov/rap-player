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
  schemaValidation,
  columns,
  createRows,
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
    validation,
    formSubmit,
    createNewItem,
    addApiOperation,
    onChangePage,
    pages,
    getData,
  } = usePageContainer<Values, Value, SelectedRow>({
    clickOnRowManager,
    defaultSelected,
    schemaValidation,
    columns,
    createRows,
  });

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
            <Formik
              validationSchema={validation}
              initialValues={selectedRow.defaultForm as any}
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
}
export default PageContainer;
