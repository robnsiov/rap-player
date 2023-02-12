"use client";

import { z } from "zod";
import PageContainer from "../container/page-container";

interface Category {
  id: number;
  title: string;
}
type Categories = Array<Category>;
interface SelectedRow {
  defaultForm: { title: string };
  selected: Category;
}

const defaultSelected: SelectedRow = {
  defaultForm: { title: "" },
  selected: { id: -1, title: "" },
};
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
  return (
    <>
      <PageContainer<Categories, Category, SelectedRow>
        defaultSelected={defaultSelected}
        clickOnRowManager={clickOnRowManager}
        schemaValidation={schema}
        columns={columns}
        createRows={createRows}
      />
    </>
  );
};
export default AdminCategory;
