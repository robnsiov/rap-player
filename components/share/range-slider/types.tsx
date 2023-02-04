import { Direction } from "react-range";

export default interface RangeSliderImpl {
  step?: number;
  min?: number;
  max?: number;
  values: Array<number>;
  onChange(values: Array<number>): void;
  trackStyles?: React.CSSProperties;
  thumbStyles?: React.CSSProperties;
  innerStyles?: React.CSSProperties;
  colors?: Array<string>;
  direction?: Direction;
}
export type VolumeRefImpl = HTMLDivElement ;
