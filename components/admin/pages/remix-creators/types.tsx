interface Creator {
  id: number;
  name: string;
}
type Creators = Array<Creator>;
interface SelectedRow {
  defaultForm: { name: string };
  selected: Creator;
}
export type { Creators, Creator, SelectedRow };
