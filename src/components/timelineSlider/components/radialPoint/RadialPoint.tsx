import React, { FC } from "react";
import { IRadialSliderPoint } from "../../interfaces";
import "./radialPoint.scss";

interface IProps {
  item: IRadialSliderPoint;
  isActive: boolean;
  onClick: () => void;
}

export const RadialPoint: FC<IProps> = ({ item, isActive, onClick }) => {
  const angle = item.displayAngle;
  const transform = `rotate(${angle}deg) translate(${item.radius}px) rotate(${-angle}deg)`;

  return (
    <div
      className={`radial-point ${isActive ? "active" : ""}`}
      style={{ transform }}
      onClick={onClick}
      role="button"
      tabIndex={0}
    >
      <div className="point-dot">
        <span className="point-index">{item.index + 1}</span> 
      </div>

      {isActive && (
        <div className="point-label">{item.periodName}</div>
      )}
    </div>
  );
}
