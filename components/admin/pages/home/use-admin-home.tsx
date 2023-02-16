import { useState } from "react";
import { z } from "zod";
import { toFormikValidationSchema } from "zod-formik-adapter";
import { Creators, Creator, SelectedRow } from "./types";

const useAdminHome = () => {
  const [defaultSelected, setDefaultForm] = useState<SelectedRow>({
    defaultForm: {
      src: "",
      demo: "",
      title: "",
      cover: "",
      top: false,
    },
    selected: { id: -1, src: "", demo: "", title: "", cover: "", top: false },
  });
  const change = (data: Creator) => {
    setDefaultForm({ ...defaultSelected, defaultForm: data });
  };
  const clickOnRowManager = ({
    id,
    cover,
    demo,
    src,
    title,
    top,
  }: Creator): SelectedRow => {
    return {
      defaultForm: { cover, demo, src, title, top },
      selected: { id, cover, demo, src, title, top },
    };
  };
  const schema = z.object({
    name: z.string().min(2).max(32).trim(),
  });
  const columns = ["id", "cover", "src", "demo", "title", "top"];
  const createRows = ({
    data,
    clickOnRow,
  }: {
    data: Creators;
    clickOnRow: (data: Creator) => void;
  }) => {
    return data.map(({ id, cover, demo, src, title, top }) => (
      <tr
        key={id}
        className="cursor-pointer"
        onClick={() => clickOnRow({ id, cover, demo, src, title, top })}
      >
        <td>{id}</td>
        <td>{cover}</td>
        <td>{src}</td>
        <td>{demo}</td>
        <td>{title}</td>
        <td>{top ? "YES" : "NO"}</td>
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
export default useAdminHome;
