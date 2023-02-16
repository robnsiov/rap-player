interface Artist {
  id: number;
  name: string;
}
type Artists = Array<Artist>;
interface SelectedRow {
  defaultForm: { name: string };
  selected: Artist;
}
export type { Artists, Artist, SelectedRow };
