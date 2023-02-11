import { useEffect, useState } from "react";
import { z } from "zod";
import { toFormikValidationSchema } from "zod-formik-adapter";
import useConfirmModalStore from "../../../../store/confirm-modal-store";
import fetchRequest from "../../../../utils/fetch-request/fetch-request";
import makeToast from "../../../../utils/toast";
import { useSearchParams, useRouter, usePathname } from "next/navigation";

interface Category {
  id: number;
  title: string;
}
type Categories = Array<Category>;
type APIOperation = "Edit" | "Delete" | "Insert";

const useAdminCategory = () => {
  const searchParams = useSearchParams();
  
  const router = useRouter();
  const pathname = usePathname();
  const [dataSource, setDataResource] = useState<Array<JSX.Element>>([]);
  const [pages, setPages] = useState({
    total: 0,
    active: searchParams.get("_page") ?? 1,
  });
  const [tableStutus, setTableStatus] = useState({
    error: false,
    loading: true,
  });
  const [openModal, setOpenModal] = useState(false);

  const closeModal = () => {
    setOpenModal(false);
  };

  const [apiOperation, setApiOperation] = useState<APIOperation>();

  const [setOpenConfirmModal] = useConfirmModalStore((state) => [
    state.setOpen,
  ]);
  const [operationsLoading, setOperationsLoading] = useState({
    deleteLoading: false,
    editLoading: false,
    insertLoading: false,
  });

  const [selectedRow, setSelectedRow] = useState<{
    defaultForm: { title: string };
    selected: Category;
  }>({
    defaultForm: { title: "" },
    selected: { id: -1, title: "" },
  });

  const [formValuAfterUpdate, setFormValueAfterUpdate] = useState<{
    title: string;
  }>({ title: "" });

  const getData = async (activePage?: number) => {
    setTableStatusManager("loading", true);
    const { data, isError } = await fetchRequest<Categories>({
      url: `/categories?_page=${activePage ?? pages.active}`,
      onEnd() {
        setTableStatusManager("loading", false);
      },
    });

    if (isError) {
      setTableStatusManager("error", true);
      return;
    }

    const rows = data.result.map(({ id, title }) => (
      <tr
        key={id}
        className="cursor-pointer"
        onClick={() => clickOnRow({ id, title })}
      >
        <td>{id}</td>
        <td>{title}</td>
      </tr>
    ));
    setPages((prev) => ({ ...prev, total: 2 }));
    setDataResource(rows);
  };

  const onChangePage = (page: number) => {
    router.push(`${pathname}?_page=${page}`);
    getData(page);
    setPages((prev) => ({ ...prev, active: page }));
  };

  const setTableStatusManager = (key: "loading" | "error", status: boolean) => {
    if (key === "loading") setTableStatus({ ...tableStutus, loading: status });
    else if (key === "error") setTableStatus({ ...tableStutus, error: status });
  };

  useEffect(() => {
    getData();
  }, []);

  const setOperationsLoadingManager = (
    operation: APIOperation,
    status: boolean
  ) => {
    if (operation === "Delete")
      setOperationsLoading({ ...operationsLoading, deleteLoading: status });
    else if (operation === "Edit")
      setOperationsLoading({ ...operationsLoading, editLoading: status });
    else if (operation === "Insert")
      setOperationsLoading({ ...operationsLoading, insertLoading: status });
  };

  const finalOperation = () => {
    setOpenModal(false);
    getData();
  };

  const editOperation = async () => {
    const { isError } = await fetchRequest({
      method: "PATCH",
      url: `/categories/${selectedRow.selected.id}`,
      inputData: formValuAfterUpdate,
      onEnd() {
        setOperationsLoadingManager("Edit", false);
      },
    });
    if (!isError) {
      finalOperation();
      makeToast({ message: "The operation was successful", type: "success" });
      return;
    }
    makeToast({ message: "The operation failed", type: "error" });
  };

  const deleteOperation = async () => {
    const { isError } = await fetchRequest({
      method: "DELETE",
      url: `/categories${selectedRow.selected.id}`,
      onEnd() {
        setOperationsLoadingManager("Delete", false);
      },
    });
    if (!isError) {
      finalOperation();
      makeToast({ message: "The operation was successful", type: "success" });
      return;
    }
    makeToast({ message: "The operation failed", type: "error" });
  };

  const insertOperation = async () => {
    const { isError } = await fetchRequest({
      method: "POST",
      url: "categories",
      inputData: formValuAfterUpdate,
      onEnd() {
        setOperationsLoadingManager("Insert", false);
      },
    });
    if (!isError) {
      finalOperation();
      makeToast({ message: "The operation was successful", type: "success" });
      return;
    }
    makeToast({ message: "The operation failed", type: "error" });
  };

  const clickOnFooterBtns = (operation: APIOperation) => {
    setApiOperation(operation);
    setOpenConfirmModal(true);
  };

  const confirmModalOperarion = () => {
    setOpenConfirmModal(false);
    if (apiOperation === "Delete") {
      setOperationsLoadingManager("Delete", true);
      deleteOperation();
    } else if (apiOperation === "Edit") {
      editOperation();
      setOperationsLoadingManager("Edit", true);
    } else if (apiOperation === "Insert") {
      insertOperation();
      setOperationsLoadingManager("Insert", true);
    }
  };

  const formSubmit = (data: { title: string }) => {
    setFormValueAfterUpdate(data);
    clickOnFooterBtns(apiOperation as APIOperation);
  };

  const clickOnRow = ({ id, title }: Category) => {
    setOpenModal(true);
    setSelectedRow({
      defaultForm: { title },
      selected: { id, title },
    });
  };

  useEffect(() => {}, [apiOperation]);

  console.log(pages);

  const createNewItem = () => {
    setApiOperation("Insert");
    clickOnRow({ id: -1, title: "" });
  };

  const addApiOperation = (operation: APIOperation) => {
    setApiOperation(operation);
  };

  const columns = ["id", "title"];
  const schema = z.object({
    title: z.string().min(2).max(32).trim(),
  });

  return {
    columns,
    rows: dataSource,
    tableStutus,
    closeModal,
    openModal,
    clickOnFooterBtns,
    confirmModalOperarion,
    operationsLoading,
    selectedRow,
    validation: toFormikValidationSchema(schema),
    formSubmit,
    createNewItem,
    addApiOperation,
    onChangePage,
    pages,
  };
};

export default useAdminCategory;
