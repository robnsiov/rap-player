"use client";
import SkeletonLoading from "../../share/skeleton/skeleton";
import { VscEmptyWindow } from "react-icons/vsc";
import { Pagination } from "@mantine/core";

import { Table } from "@mantine/core";
import TableGridImpl from "./types";
const TableGrid = ({
  columns,
  rows,
  loading,
  onInsert = () => {},
  onChangePage = () => {},
  totalPages = 0,
  activePage = 0,
}: TableGridImpl) => {
  return (
    <div className="w-full flex justify-center items-end flex-col">
      <div className="w-full min-h-[531px]">
        <div className="w-full rounded-lg overflow-hidden border-2 border-gray-300 mt-3">
          <Table
            horizontalSpacing="xl"
            verticalSpacing="sm"
            striped
            highlightOnHover
            withColumnBorders
          >
            <thead>
              <tr>
                {columns.map((value) => (
                  <th key={value}>{value}</th>
                ))}
              </tr>
            </thead>
            <tbody>{!loading && rows}</tbody>
          </Table>
          {loading && (
            <div className="w-full flex justify-center items-center">
              <SkeletonLoading
                baseColor="#2c313a38"
                highlightColor="#ffffff"
                inProp={true}
                fadeClassName="rounded-none"
                count={10}
                className="h-[40px]"
                containerClassName="space-y-2"
              />
            </div>
          )}
          {!loading && rows.length === 0 && (
            <div className="w-full flex justify-center items-center p-3">
              <VscEmptyWindow
                onClick={onInsert}
                className="text-xl cursor-pointer text-one-dark-500 hover:text-gray-400"
              />
            </div>
          )}
        </div>
      </div>
      <Pagination
        mt={15}
        total={totalPages}
        page={activePage}
        onChange={onChangePage}
        styles={() => ({
          item: {
            "&[data-active]": {
              background: "#2c313a",
            },
          },
        })}
      />
    </div>
  );
};
export default TableGrid;
