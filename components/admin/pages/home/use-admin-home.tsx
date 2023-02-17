import { cloneDeep, filter } from "lodash";
import { useState } from "react";
import { z } from "zod";
import { toFormikValidationSchema } from "zod-formik-adapter";
import makeToast from "../../../../utils/toast";
import { Category } from "../category/types";
import { Musics, Music, SelectedRow } from "./types";

const useAdminHome = () => {
  const [defaultSelected, setDefaultForm] = useState<SelectedRow>({
    defaultForm: {
      src: "",
      demo: "",
      title: "",
      cover: "",
      top: false,
      categories: [],
      id: -1,
    },
    selected: {
      id: -1,
      src: "",
      demo: "",
      title: "",
      cover: "",
      top: false,
      categories: [],
    },
  });
  const [openModal, setOpenModal] = useState(false);

  const closeModal = (open?: boolean) => {
    setOpenModal(open ?? false);
  };

  const change = (data: Music) => {
    const keys = Object.keys(data) as Array<keyof Music>;
    keys.forEach((key) => {
      if (data[key] === undefined) {
        data[key] = defaultSelected.defaultForm[key];
      }
    });

    setDefaultForm({ ...defaultSelected, defaultForm: data });
  };
  const clickOnRowManager = ({
    id,
    cover,
    demo,
    src,
    title,
    top,
    categories,
  }: Music): SelectedRow => {
    console.log(categories);
    return {
      defaultForm: { cover, demo, src, title, top, categories, id },
      selected: { id, cover, demo, src, title, top, categories },
    };
  };
  const schema = z.object({
    name: z.string().min(2).max(32).trim(),
    categories: z.array(z.object({ id: z.number(), title: z.string() })).min(1),
  });
  const columns = ["id", "cover", "src", "demo", "title", "top", "categories"];
  const createRows = ({
    data,
    clickOnRow,
  }: {
    data: Musics;
    clickOnRow: (data: Music) => void;
  }) => {
    return data.map(({ id, cover, demo, src, title, top, categories }) => (
      <tr
        key={id}
        className="cursor-pointer"
        onClick={() =>
          clickOnRow({ id, cover, demo, src, title, top, categories })
        }
      >
        <td>{id}</td>
        <td>{cover}</td>
        <td>{src}</td>
        <td>{demo}</td>
        <td>{title}</td>
        <td>{top ? "YES" : "NO"}</td>
        <td>psd</td>
      </tr>
    ));
  };

  const clickOnCategoryRow = ({ id, title }: Category) => {
    if (id === -1) return;
    const catTitles = defaultSelected.defaultForm.categories.map(
      ({ title }) => title
    );
    if (catTitles.includes(title)) {
      makeToast({ message: "duplicate item", type: "error" });
      return;
    }
    const defaultData = defaultSelected;
    defaultData.defaultForm.categories.push({ id, title });
    setDefaultForm(defaultData);
    closeModal();
  };

  const removeCategory = (dataId: number) => {
    const defaultData = defaultSelected;
    defaultData.defaultForm.categories =
      defaultData.defaultForm.categories.filter(({ id }) => id !== dataId);

    const clone = cloneDeep(defaultData);

    setDefaultForm(clone);
    closeModal();
  };

  return {
    schema: toFormikValidationSchema(schema),
    defaultSelected,
    clickOnRowManager,
    columns,
    createRows,
    change,
    clickOnCategoryRow,
    openModal,
    closeModal,
    removeCategory,
  };
};
export default useAdminHome;
