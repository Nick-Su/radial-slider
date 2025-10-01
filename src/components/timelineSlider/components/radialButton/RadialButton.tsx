import React, { FC, CSSProperties } from "react";
import ChevronLeft from "../../../../assets/chevronLeft.svg";
import ChevronRight from "../../../../assets/chevronRight.svg";
import "./radialButton.scss";

interface IRadialButton {
  type: 'left' | 'right';
  disabled?: boolean;
  stroke?: string;
  styles?: CSSProperties;
  onClickFn: (...args: any) => void;
}

export const RadialButton: FC<IRadialButton> = ({ disabled, type, onClickFn, stroke = '#42567A', styles }) => {
  return (
     <button
      disabled={disabled}
      onClick={() => onClickFn()}
      className="radial-button"
      style={styles}
    >
      {type === 'left' ? (
        <ChevronLeft stroke={stroke} />
        ) : (
          <ChevronRight stroke={stroke} />
      )}
    </button>
  )
}
