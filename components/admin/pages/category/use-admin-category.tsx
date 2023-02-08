import { ColumnsType } from "antd/es/table";
import { useEffect, useState } from "react";
import useConfirmModalStore from "../../../../store/confirm-modal-store";
import fetchRequest from "../../../../utils/fetch-request/fetch-request";

interface Category {
  id: number;
  title: string;
  key: number;
}
type Categories = Array<Category>;
type APIOperation = "Edit" | "Delete";

const useAdminCategory = () => {
  const [dataSource, setDataResource] = useState<Categories>([]);
  const [tableStutus, setTableStatus] = useState({
    error: false,
    loading: false,
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
  });

  const getData = async () => {
    setTableStatusManager("loading", true);
    const { data, isError } = await fetchRequest<Categories>({
      url: "/categories",
      onEnd() {
        setTableStatusManager("loading", false);
      },
    });

    if (isError) {
      setTableStatusManager("error", true);
      return;
    }
    data.result.forEach((item) => (item.key = item.id));
    setDataResource(data.result);
  };

  const setTableStatusManager = (key: "loading" | "error", status: boolean) => {
    if (key === "loading") setTableStatus({ ...tableStutus, loading: status });
    else if (key === "error") setTableStatus({ ...tableStutus, error: status });
  };

  useEffect(() => {
    setTableStatus({ ...tableStutus, loading: true });
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
  };

  const editOperation = () => {
    setTimeout(() => {
      setOperationsLoadingManager("Edit", false);
    }, 2000);

    // in finall
    setOpenModal(false);
  };

  const deleteOperation = () => {
    setTimeout(() => {
      setOperationsLoadingManager("Delete", false);
    }, 2000);

    // in finall
    setOpenModal(false);
    getData();
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
    }
  };

  const clickOnRow = (rec: { id: number; title: string }) => {
    setOpenModal(true);
  };

  const columns: ColumnsType<object> = [
    {
      title: "id",
      dataIndex: "id",
      key: "id",
      responsive: ["md"],
    },
    {
      title: "title",
      dataIndex: "title",
      key: "title",
      responsive: ["md"],
    },
  ];

  return {
    columns,
    dataSource,
    clickOnRow,
    getData,
    tableStutus,
    closeModal,
    openModal,
    clickOnFooterBtns,
    confirmModalOperarion,
    operationsLoading,
  };
};

export default useAdminCategory;
