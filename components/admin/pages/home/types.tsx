interface Creator {
  id: number;
  src: string;
  demo: string;
  cover: string;
  top: boolean;
  title: string;
}
type Creators = Array<Creator>;
interface SelectedRow {
  defaultForm: {
    src: string;
    demo: string;
    cover: string;
    top: boolean;
    title: string;
  };
  selected: Creator;
}
export type { Creators, Creator, SelectedRow };
