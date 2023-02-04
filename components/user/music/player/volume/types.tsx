export default interface VoluemImpl {
  volume: number;
  onChange(volume: Array<number>): void;
  key: string;
}
