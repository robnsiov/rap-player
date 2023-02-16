import { useState } from "react";
import { z } from "zod";
import { toFormikValidationSchema } from "zod-formik-adapter";
import { Creators, Creator, SelectedRow } from "./types";

const useAdminCreator = () => {
  const [defaultSelected, setDefaultForm] = useState<SelectedRow>({
    defaultForm: { name: "" },
    selected: { id: -1, name: "" },
  });
  const change = (data: Creator) => {
    setDefaultForm({ ...defaultSelected, defaultForm: data });
  };
  const clickOnRowManager = ({ id, name }: Creator): SelectedRow => {
    return {
      defaultForm: { name },
      selected: { id, name },
    };
  };
  const schema = z.object({
    name: z.string().min(2).max(32).trim(),
  });
  const columns = ["id", "name"];
  const createRows = ({
    data,
    clickOnRow,
  }: {
    data: Creators;
    clickOnRow: (data: Creator) => void;
  }) => {
    return data.map(({ id, name }) => (
      <tr
        key={id}
        className="cursor-pointer"
        onClick={() => clickOnRow({ id, name })}
      >
        <td>{id}</td>
        <td>{name}</td>
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
export default useAdminCreator;
