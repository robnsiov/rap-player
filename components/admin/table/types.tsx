export default interface TableGridImpl {
  columns: Array<string>;
  rows: Array<JSX.Element>;
  loading: boolean;
  onInsert?(): void;
  onChangePage?(page: number): void;
  totalPages?: number
  activePage?: number
}
