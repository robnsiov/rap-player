"use client";

import { Form, Formik } from "formik";
import CheckBox from "../../../share/admin/check-box/check-box";
import TextInput from "../../../share/admin/text-input/text-input";
import PageContainer from "../container/page-container";
import { Creators, Creator, SelectedRow } from "./types";
import useAdminHome from "./use-admin-home";

const AdminHome = () => {
  const {
    change,
    clickOnRowManager,
    columns,
    createRows,
    defaultSelected,
    schema,
  } = useAdminHome();
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
                name="src"
                label="Music"
                placeholder="Enter your music link..."
                error={errors.src}
                touched={touched.src}
              />
              <TextInput
                name="cover"
                label="Cover"
                placeholder="Enter your cover link..."
                error={errors.cover}
                touched={touched.cover}
              />
              <TextInput
                name="demo"
                label="Demo"
                placeholder="Enter your demo link..."
                error={errors.demo}
                touched={touched.demo}
              />
              <TextInput
                name="title"
                label="Title"
                placeholder="Enter your title..."
                error={errors.title}
                touched={touched.title}
              />
              <CheckBox />
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
        path="/musics"
        title="Musics"
      />
    </>
  );
};
export default AdminHome;
