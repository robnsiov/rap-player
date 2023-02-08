import { ColumnsType } from "antd/es/table";

const useAdminHome = () => {
  const dataSource = [
    {
      key: "1",
      name: "Mike",
      age: 32,
      address: "10 Downing Street",
    },
    {
      key: "2",
      name: "John",
      age: 42,
      address: "10 Downing Street",
    },
  ];

  const columns: ColumnsType<object> = [
    {
      title: "Name (all screens)",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Address (large screen or bigger)",
      dataIndex: "address",
      key: "address",
    },
  ];

  const clickOnRow = (rec) => {};

  return { columns, dataSource, clickOnRow };
};
export default useAdminHome;
