import { cloneDeep, filter } from "lodash";
import { useState } from "react";
import { z } from "zod";
import { toFormikValidationSchema } from "zod-formik-adapter";
import { constants } from "../../../../constants/constants";
import imageUrl from "../../../../utils/image-url/image-url";
import makeToast from "../../../../utils/toast";
import ImageRow from "../../../share/admin/image-row/image-row";
import MusicRow from "../../../share/admin/music-row/music-row";
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
        <td>
          <ImageRow src={imageUrl(cover)} />
        </td>
        <td>
          <MusicRow data={src} />
        </td>
        <td>
          <MusicRow data={demo} />
        </td>
        <td>{title}</td>
        <td>{top ? "on" : "off"}</td>
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

  const toggleTopCheckBox = (check: boolean) => {
    const defaultData = defaultSelected;
    defaultData.defaultForm.top = check;
    const clone = cloneDeep(defaultData);
    setDefaultForm(clone);
  };

  const handlePasteToInputs = (
    value: string,
    key: string,
    setFieldValue: (key: string, value: any) => void
  ) => {
    const indexStartBracket = value.indexOf("**");
    const indexEndBracket = value.indexOf("##");
    if (indexEndBracket !== -1 && indexStartBracket !== -1) {
      const str = value.slice(indexStartBracket + 2, indexEndBracket);
      const firstIndex = str.indexOf("@");
      const lastIndex = str.lastIndexOf("@");
      const itemOne = str.slice(0, firstIndex);
      const itemTwo = str.slice(firstIndex + 1, lastIndex);
      const itemThree = str.slice(lastIndex + 1);
      setFieldValue("src", itemOne);
      setFieldValue("cover", itemTwo);
      setFieldValue("demo", itemThree);
    } else {
      setFieldValue(key, value);
    }
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
    toggleTopCheckBox,
    handlePasteToInputs,
  };
};
export default useAdminHome;
