import { z } from "zod";

export default interface PageContainerImpl<Values, Value, SelectedRow> {
  defaultSelected: SelectedRow;
  clickOnRowManager({}: Value): SelectedRow;
  schemaValidation: z.ZodObject<any>;
  columns: Array<string>;
  createRows({
    data,
    clickOnRow,
  }: {
    data: Values;
    clickOnRow(data: Value): void;
  }): Array<JSX.Element>;
}
