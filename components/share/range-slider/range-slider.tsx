import { forwardRef, MutableRefObject } from "react";
import { Range, Direction, getTrackBackground } from "react-range";
import RangeSliderImpl, { VolumeRefImpl } from "./types";

const RangeSlider = forwardRef<VolumeRefImpl, RangeSliderImpl>(
  (
    {
      onChange,
      values,
      max = 100,
      min = 1,
      step = 0.1,
      thumbStyles = {},
      trackStyles = {},
      innerStyles = {},
      direction = Direction.Up,
      colors = ["#fff", "#acaaaa1c"],
    },
    ref
  ) => {
    const defaultTrackStyles = {
      height: "30px",
      display: "flex",
      width: "3px",
      ...trackStyles,
    };
    const defaultThumbStyles = {
      height: "10px",
      width: "10px",
      backgroundColor: "#fff",
      borderRadius: "50%",
      border: "2px solid #fff",
      zIndex: "5",
      transition: "0s",
      ...thumbStyles,
    };

    const innerDefaultStyles = {
      height: "30px",
      width: "3px",
      borderRadius: "4px",
      ...innerStyles,
    };
    return (
      <>
        <div ref={ref}>
          <Range
            step={step}
            min={min}
            max={max}
            direction={direction}
            values={values}
            onChange={onChange}
            renderTrack={({ props, children }) => (
              <div
                key={"3"}
                onMouseDown={props.onMouseDown}
                onTouchStart={props.onTouchStart}
                style={{
                  ...props.style,
                  ...defaultTrackStyles,
                }}
              >
                <div
                  key={"2"}
                  ref={props.ref}
                  style={{
                    ...innerDefaultStyles,
                    background: getTrackBackground({
                      values,
                      colors,
                      min,
                      max,
                      direction,
                    }),
                    alignSelf: "center",
                  }}
                >
                  {children}
                </div>
              </div>
            )}
            renderThumb={({ props }) => (
              <div
                {...props}
                key={"1"}
                style={{
                  ...props.style,
                  ...defaultThumbStyles,
                }}
              />
            )}
          />
        </div>
      </>
    );
  }
);

RangeSlider.displayName = "RangeSlider";
export default RangeSlider;
