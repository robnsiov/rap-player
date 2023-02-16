interface Category {
  id: number;
  title: string;
}
type Categories = Array<Category>;
interface SelectedRow {
  defaultForm: { title: string };
  selected: Category;
}
export type { Categories, Category, SelectedRow };
