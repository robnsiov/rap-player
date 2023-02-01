export default interface SingleMusicImpl {
  index: number;
  title: string;
  artists: Array<{ name: string; id: number }>;
  duration: number;
  demo: string;
}
