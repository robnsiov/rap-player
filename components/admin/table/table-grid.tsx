"use client";
import { ColumnsType } from "antd/es/table";
import dynamic from "next/dynamic";
import { Puff } from "react-loading-icons";
import TableGridImpl from "./types";

const DataTable = dynamic(() => import("antd/es/table"), {
  ssr: false,
  loading: () => <Puff stroke="#181D27" className="mb-2" />,
});

const TableGrid = ({
  onRow,
  columns,
  dataSource,
  loading = false,
  error = false,
  errorMessage = "We can not fetch data, for more details : developer tools > console tab .",
  clickOnErrorMessage = () => {},
}: TableGridImpl) => {
  return (
    <>
      <div className="flex justify-center items-end flex-col w-full p-4">
        {loading && <Puff stroke="#181D27" className="mb-2" />}
        <div className="w-full flex justify-start items-start mb-2">
          {error && (
            <div className="bg-red-400 text-white py-1 px-3 text-sm rounded font-bold">
              <span>{errorMessage}</span>
              <button
                onClick={clickOnErrorMessage}
                className="ml-2 underline hover:text-gray-200"
              >
                Try Again?
              </button>
            </div>
          )}
        </div>
        <div className="w-full overflow-hidden">
          <DataTable
            className="rounded-xl bg-gray-300"
            dataSource={dataSource}
            columns={columns}
            scroll={{ x: 540 }}
            pagination={{ pageSize: 10 }}
            onRow={(record, rowIndex) => {
              return {
                onClick: () => onRow(record, rowIndex),
              };
            }}
          ></DataTable>
        </div>
      </div>
    </>
  );
};
export default TableGrid;
