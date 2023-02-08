import { ColumnsType } from "antd/es/table";

export default interface TableGridImpl {
  columns: ColumnsType<object>;
  dataSource: Array<object>;
  onRow(record: object, index: number | undefined): void;
  loading?: boolean;
  error?: boolean;
  errorMessage?: string;
  clickOnErrorMessage?(): void;
}
