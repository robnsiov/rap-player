"use client";

import { Form, Formik } from "formik";
import TextInput from "../../../share/admin/text-input/text-input";
import PageContainer from "../container/page-container";
import AdminCategoryImpl, { Categories, Category, SelectedRow } from "./types";
import useAdminCategory from "./use-admin-categories";

const AdminCategory = ({
  openByAnother = false,
  clickOnRowByAnotherOpen = () => {},
}: AdminCategoryImpl) => {
  const {
    change,
    clickOnRowManager,
    columns,
    createRows,
    defaultSelected,
    schema,
  } = useAdminCategory();
  const ModalForm: React.FC<{
    Footer: React.ReactNode;
    submit: (data: Object) => void;
  }> = ({
    Footer,
    submit,
  }: {
    Footer: React.ReactNode;
    submit: (data: Object) => void;
  }) => {
    return (
      <Formik
        validationSchema={schema}
        initialValues={defaultSelected.defaultForm}
        onSubmit={submit}
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
            {Footer}
          </Form>
        )}
      </Formik>
    );
  };

  return (
    <>
      <PageContainer<Categories, Category, SelectedRow>
        defaultSelected={defaultSelected}
        clickOnRowManager={clickOnRowManager}
        columns={columns}
        createRows={createRows}
        Form={ModalForm}
        onSelectedRow={change}
        path="/categories"
        title="Categories"
        modalTitle="Category"
        openByAnother={openByAnother}
        clickOnRowByAnotherOpen={clickOnRowByAnotherOpen}
      />
    </>
  );
};
export default AdminCategory;
