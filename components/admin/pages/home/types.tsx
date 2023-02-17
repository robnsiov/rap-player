interface Music {
  id: number;
  src: string;
  demo: string;
  cover: string;
  top: boolean;
  title: string;
  categories: Array<{ id: number; title: string }>;
}
type Musics = Array<Music>;
interface SelectedRow {
  defaultForm: Music;
  selected: Music;
}
export type { Musics, Music, SelectedRow };
