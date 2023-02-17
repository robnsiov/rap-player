"use client";

import { Form, Formik } from "formik";
import CheckBox from "../../../share/admin/check-box/check-box";
import MultiSelect from "../../../share/admin/multi-select/multi-select";
import TextInput from "../../../share/admin/text-input/text-input";
import Modal from "../../modals/modal/modal";
import AdminCategory from "../category/admin-categories";
import PageContainer from "../container/page-container";
import { Musics, Music, SelectedRow } from "./types";
import useAdminHome from "./use-admin-home";

const AdminHome = () => {
  const {
    change,
    clickOnRowManager,
    columns,
    createRows,
    defaultSelected,
    schema,
    clickOnCategoryRow,
    closeModal,
    openModal,
    removeCategory,
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
              <MultiSelect
                selections={defaultSelected.defaultForm.categories}
                onClickDB={() => closeModal(true)}
                label="Categories"
                onSelect={removeCategory}
                error={errors.categories as string | undefined}
                touched={touched.categories as boolean | undefined}
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
      <PageContainer<Musics, Music, SelectedRow>
        defaultSelected={defaultSelected}
        clickOnRowManager={clickOnRowManager}
        columns={columns}
        createRows={createRows}
        Form={ModalForm}
        onSelectedRow={change}
        path="/musics"
        title="Musics"
      />
      <Modal open={openModal} close={closeModal}>
        <AdminCategory
          openByAnother={true}
          clickOnRowByAnotherOpen={clickOnCategoryRow}
        />
      </Modal>
    </>
  );
};
export default AdminHome;
