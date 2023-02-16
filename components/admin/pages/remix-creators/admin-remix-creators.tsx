"use client";

import { Form, Formik } from "formik";
import TextInput from "../../../share/admin/text-input/text-input";
import PageContainer from "../container/page-container";
import { Creators, Creator, SelectedRow } from "./types";
import useAdminArtist from "./use-admin-remix-creators";

const AdminRemixCreators = () => {
  const {
    change,
    clickOnRowManager,
    columns,
    createRows,
    defaultSelected,
    schema,
  } = useAdminArtist();
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
                name="name"
                label="Name"
                placeholder="Enter your remix creator..."
                error={errors.name}
                touched={touched.name}
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
      <PageContainer<Creators, Creator, SelectedRow>
        defaultSelected={defaultSelected}
        clickOnRowManager={clickOnRowManager}
        columns={columns}
        createRows={createRows}
        Form={ModalForm}
        onSelectedRow={change}
        path="/creators"
        title="RemixCreators"
      />
    </>
  );
};
export default AdminRemixCreators;
