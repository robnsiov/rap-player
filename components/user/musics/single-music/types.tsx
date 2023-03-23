export default interface SingleMusicImpl {
  index: number;
  title: string;
  artists: Array<{ name: string; id: number }>;
  duration: number;
  cover: string;
  src: string;
  demo?: string;
  id: number;
  firstPlay: boolean;
}
