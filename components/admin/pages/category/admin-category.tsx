"use client";

import Button from "../../../share/admin/button/button";
import ConfirmModals from "../../modals/confirm-modal/confirm-modal";
import FooterModal from "../../modals/footer-modal/footer-modal";
import Modal from "../../modals/modal/modal";
import TableGrid from "../../table/table-grid";
import useAdminCategory from "./use-admin-category";
import { Form, Formik } from "formik";
import TextInput from "../../../share/admin/text-input/text-input";

const AdminCategory = () => {
  const {
    clickOnRow,
    columns,
    dataSource,
    getData,
    tableStutus,
    closeModal,
    openModal,
    clickOnFooterBtns,
    confirmModalOperarion,
    operationsLoading,
  } = useAdminCategory();
  console.log(columns);

  return (
    <>
      <TableGrid
        columns={columns}
        dataSource={dataSource}
        clickOnErrorMessage={getData}
        onRow={clickOnRow}
        loading={tableStutus.loading}
        error={tableStutus.error}
      />

      <Modal open={openModal} close={closeModal}>
        <div className="w-full justify-center items-center">
          <Formik
            // validationSchema={validation}
            initialValues={{ category: "" }}
            onSubmit={() => {}}
          >
            {({ touched, errors }) => (
              <Form className="w-full">
                <div className="mb-3 w-full">
                  <TextInput
                    name="category"
                    label="category"
                    placeholder="Enter your category..."
                    error={errors.category}
                    touched={touched.category}
                  />
                </div>
                <FooterModal
                  onDelete={() => clickOnFooterBtns("Delete")}
                  onEdit={() => clickOnFooterBtns("Edit")}
                  deleteLoader={operationsLoading.deleteLoading}
                  editLoader={operationsLoading.editLoading}
                />
              </Form>
            )}
          </Formik>
        </div>
      </Modal>
      <ConfirmModals onConfirm={confirmModalOperarion} />
    </>
  );
};
export default AdminCategory;
