"use client";

import { Form, Formik } from "formik";
import { z } from "zod";
import { toFormikValidationSchema } from "zod-formik-adapter";
import TextInput from "../../../share/admin/text-input/text-input";
import PageContainer from "../container/page-container";
import { useState } from "react";
interface Category {
  id: number;
  title: string;
}
type Categories = Array<Category>;
interface SelectedRow {
  defaultForm: { title: string };
  selected: Category;
}

const clickOnRowManager = ({ id, title }: Category): SelectedRow => {
  return {
    defaultForm: { title },
    selected: { id, title },
  };
};
const schema = z.object({
  title: z.string().min(2).max(32).trim(),
});
const columns = ["id", "title"];
const createRows = ({
  data,
  clickOnRow,
}: {
  data: Categories;
  clickOnRow: (data: Category) => void;
}) => {
  return data.map(({ id, title }) => (
    <tr
      key={id}
      className="cursor-pointer"
      onClick={() => clickOnRow({ id, title })}
    >
      <td>{id}</td>
      <td>{title}</td>
    </tr>
  ));
};

const AdminCategory = () => {
  const [defaultSelected, setDefaultForm] = useState<SelectedRow>({
    defaultForm: { title: "" },
    selected: { id: -1, title: "" },
  });
  const change = (data: Category) => {
    setDefaultForm({ ...defaultSelected, defaultForm: data });
  };
  const U: React.FC<{
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
        validationSchema={toFormikValidationSchema(schema)}
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
        Form={U}
        onSelectedRow={change}
      />
    </>
  );
};
export default AdminCategory;
