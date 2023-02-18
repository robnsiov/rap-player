"use client";

import { Form, Formik } from "formik";
import CheckBox from "../../../share/admin/check-box/check-box";
import MultiSelect from "../../../share/admin/multi-select/multi-select";
import TextInput from "../../../share/admin/text-input/text-input";
import SwitchButton from "../../../share/switch-button/switch-button";
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
    toggleTopCheckBox,
    handlePasteToInputs,
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
        {({ touched, errors, setFieldValue }) => (
          <Form className="w-full">
            <div className="mb-3 w-full">
              <TextInput
                name="src"
                label="Music"
                placeholder="Enter your music link..."
                error={errors.src}
                touched={touched.src}
                inputProps={{
                  onChange(e: React.FormEvent<HTMLInputElement>) {
                    handlePasteToInputs(
                      e.currentTarget.value,
                      "src",
                      setFieldValue
                    );
                  },
                }}
              />
              <TextInput
                name="cover"
                label="Cover"
                placeholder="Enter your cover link..."
                error={errors.cover}
                touched={touched.cover}
                inputProps={{
                  onChange(e: React.FormEvent<HTMLInputElement>) {
                    handlePasteToInputs(
                      e.currentTarget.value,
                      "cover",
                      setFieldValue
                    );
                  },
                }}
              />
              <TextInput
                name="demo"
                label="Demo"
                placeholder="Enter your demo link..."
                error={errors.demo}
                touched={touched.demo}
                inputProps={{
                  onChange(e: React.FormEvent<HTMLInputElement>) {
                    handlePasteToInputs(
                      e.currentTarget.value,
                      "demo",
                      setFieldValue
                    );
                  },
                }}
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
              <CheckBox
                onChange={toggleTopCheckBox}
                checked={defaultSelected.defaultForm.top}
                label="Top"
                error={errors.top}
                touched={touched.top}
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
