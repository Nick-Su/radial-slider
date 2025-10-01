import React, { FC, useMemo, SetStateAction, Dispatch } from "react";
import "./RadialSlider.scss";
import { ITimelineData } from "../interfaces";
import { RadialControls } from "./radialControls/RadialControls";
import { RadialPoint } from "./radialPoint/RadialPoint";
import { IRadialSliderPoint } from "../interfaces";
import { TimeFrame } from "./timeFrame/TimeFrame";

interface IProps {
  data: ITimelineData;
  targetAngle?: number;
  activeIndex: number;
  setActiveIndex: Dispatch<SetStateAction<number>>
}

export const RadialSlider:FC<IProps> = ({ data, activeIndex, setActiveIndex, targetAngle = 290 }) => {
  const periods = data.periods;
  const anglePer = Math.floor(360 / periods.length);

  const positioned: IRadialSliderPoint[] = useMemo(() => {
    return periods.map((it, i) => {
      const displayAngle = (i - activeIndex) * anglePer + targetAngle ;
      const radius = (() => {
        if (displayAngle > 500) return 269;
        if (displayAngle > 460 && displayAngle < 500) return 264;
        if (displayAngle > 190 && displayAngle < 300) return 269;
        if (displayAngle > 130 && displayAngle < 192) return 266;

        return 262
      })()
      return { ...it, index: i, displayAngle, radius };
    });
  }, [periods, activeIndex, anglePer, targetAngle]);

  const changeSlide = (direction: 'previous' | 'next') => {
    if (direction === 'previous') {
      setActiveIndex((s) => s - 1);
    } else {
       setActiveIndex((s) => s + 1);
    }
  }

  return (
    <div className="radial-wrapper">
      <div className="horizontal-decoration-line" />
      <div className="vertical-decoration-line" />

      <TimeFrame periodStart={periods[activeIndex].periodStart} periodEnd={periods[activeIndex].periodEnd} />

      <div className="mobile-period-title">{data.periods[activeIndex].periodName}</div>
      <div className="mobile-bottom-decorator" />

      <div className="radial-circle">
        {positioned.map((p) => (
          <RadialPoint
            key={p.index}
            item={p}
            onClick={() => setActiveIndex(p.index)}
            isActive={p.index === activeIndex}
          />
        ))}
      </div>
    
      <RadialControls activeIndex={activeIndex} changeSlide={changeSlide} itemsNum={periods.length} />
    </div>
  );
}
