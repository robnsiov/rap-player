import { useEffect, useState } from "react";
import useConfirmModalStore from "../../../../store/confirm-modal-store";
import fetchRequest from "../../../../utils/fetch-request/fetch-request";
import makeToast from "../../../../utils/toast";
import { useSearchParams, useRouter, usePathname } from "next/navigation";

type APIOperation = "Edit" | "Delete" | "Insert";
function usePageContainer<Values, Value, SelectedRow>({
  clickOnRowManager,
  defaultSelected,
  columns,
  createRows,
  onSelectedRow,
  path,
  openByAnother = false,
  clickOnRowByAnotherOpen = () => {},
}: {
  clickOnRowManager({}: Value): SelectedRow;
  defaultSelected: SelectedRow & { selected: Value };
  columns: Array<string>;
  createRows({
    data,
    clickOnRow,
  }: {
    data: Values;
    clickOnRow(data: Value): void;
  }): Array<JSX.Element>;
  onSelectedRow(data: Value): void;
  path: string;
  openByAnother?: boolean;
  clickOnRowByAnotherOpen?(data: Value): void;
}) {
  const searchParams = useSearchParams();

  const router = useRouter();
  const pathname = usePathname();
  const [dataSource, setDataResource] = useState<Array<JSX.Element>>([]);
  const [pages, setPages] = useState({
    total: 0,
    active: searchParams.get("_page") ?? 1,
  });
  const [tableLoading, setTableLoading] = useState(true);
  const [tableError, setTableError] = useState(false);
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

  const [selectedRow, setSelectedRow] = useState<
    SelectedRow & { selected: { id: number } }
  >(defaultSelected as SelectedRow & { selected: { id: number } });

  const [formValuAfterUpdate, setFormValueAfterUpdate] = useState<{}>({});

  const clickOnRow = (data: Value, newItem?: boolean) => {
    const res = clickOnRowManager(data);
    if (openByAnother) {
      clickOnRowByAnotherOpen(data);
      setSelectedRow(res as SelectedRow & { selected: { id: number } });
      if (newItem) {
        setOpenModal(true);
      }
      return;
    }
    setOpenModal(true);
    onSelectedRow(data);
    setSelectedRow(res as SelectedRow & { selected: { id: number } });
  };

  const getData = async (activePage?: number) => {
    setTableLoading(true);
    const { data, isError } = await fetchRequest<Values>({
      url: `${path}?_page=${activePage ?? pages.active}`,
      onEnd() {
        setTableLoading(false);
      },
    });

    if (isError) {
      setTableError(true);
      return;
    }

    setTableError(false);
    const rows = createRows({ data: data.result as Values, clickOnRow });
    setPages((prev) => ({ ...prev, total: 2 }));
    setDataResource(rows);
  };

  const onChangePage = (page: number) => {
    if (!openByAnother) router.push(`${pathname}?_page=${page}`);
    getData(page);
    setPages((prev) => ({ ...prev, active: page }));
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
      url: `${path}/${selectedRow.selected.id}`,
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
      url: `${path}/${selectedRow.selected.id}`,
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
    const data = formValuAfterUpdate;
    if ("id" in data) delete data.id;
    const { isError } = await fetchRequest({
      method: "POST",
      url: path,
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

  const formSubmit = (data: object) => {
    setFormValueAfterUpdate(data);
    clickOnFooterBtns(apiOperation as APIOperation);
  };

  useEffect(() => {}, [apiOperation]);

  const createNewItem = () => {
    setApiOperation("Insert");
    clickOnRow({ ...defaultSelected.selected, id: -1 }, true);
  };

  const addApiOperation = (operation: APIOperation) => {
    setApiOperation(operation);
  };

  return {
    columns,
    rows: dataSource,
    tableStutus: { loading: tableLoading, error: tableError },
    closeModal,
    openModal,
    clickOnFooterBtns,
    confirmModalOperarion,
    operationsLoading,
    selectedRow,
    formSubmit,
    createNewItem,
    addApiOperation,
    onChangePage,
    pages,
    getData,
  };
}

export default usePageContainer;
