import React, { FC } from "react";
import { RadialButton } from "../radialButton/RadialButton";
import "./radialControls.scss";

function formatNumber(num: number) {
  return String(num).padStart(2, '0');
}

interface IRadialControls {
  activeIndex: number;
  itemsNum: number;
  changeSlide: (...args: any) => void;
}

export const RadialControls: FC<IRadialControls> = ({ activeIndex, itemsNum, changeSlide }) => {
  return (
    <div className="controls">
      <p>{formatNumber(activeIndex + 1)}/{formatNumber(itemsNum)}</p>
      <div className="buttons-container">
        <RadialButton 
          type={"left"}
          disabled={activeIndex === 0}
          onClickFn={() => changeSlide('previous')}
          stroke={activeIndex === 0 ? '#9BA5B9' : '#42567A'}
        />
        <RadialButton 
          type={"right"}
          disabled={activeIndex === itemsNum - 1}
          onClickFn={() => changeSlide('next')}
          stroke={activeIndex === 0 ? '#9BA5B9' : '#42567A'}
        />
      </div>
    </div>
  )
}
