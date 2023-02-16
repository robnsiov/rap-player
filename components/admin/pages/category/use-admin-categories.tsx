import { useState } from "react";
import { z } from "zod";
import { toFormikValidationSchema } from "zod-formik-adapter";
import { Categories, Category, SelectedRow } from "./types";

const useAdminCategory = () => {
  const [defaultSelected, setDefaultForm] = useState<SelectedRow>({
    defaultForm: { title: "" },
    selected: { id: -1, title: "" },
  });
  const change = (data: Category) => {
    setDefaultForm({ ...defaultSelected, defaultForm: data });
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

  return {
    schema: toFormikValidationSchema(schema),
    defaultSelected,
    clickOnRowManager,
    columns,
    createRows,
    change,
  };
};
export default useAdminCategory;
