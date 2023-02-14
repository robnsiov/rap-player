export default interface PageContainerImpl<Values, Value, SelectedRow> {
  defaultSelected: SelectedRow & { selected: Value };
  clickOnRowManager({}: Value): SelectedRow;
  columns: Array<string>;
  createRows({
    data,
    clickOnRow,
  }: {
    data: Values;
    clickOnRow(data: Value): void;
  }): Array<JSX.Element>;
  Form: React.FC<{
    Footer: React.ReactNode;
    submit: (data: Object) => void;
    onSelectedRow: (data: Value) => void;
  }>;
  onSelectedRow: (data: Value) => void;
}
