import React, { FC, useRef } from "react";
import "./timeFrame.scss";
import useNumberCountingTransition from "./useNumberCountingTransitiong";

interface IProps {
  periodStart: number;
  periodEnd: number;
}

export const TimeFrame: FC<IProps> = ({ periodStart, periodEnd }) => {
  const refPeriodStart = useRef<HTMLSpanElement>(null);
  const refPeriodEnd = useRef<HTMLSpanElement>(null);
  const periodStartCountFrom = useRef({ val: periodStart - 10 });
  const periodEndCountFrom = useRef({ val: periodEnd - 10 });

  useNumberCountingTransition({ref: refPeriodStart, countFrom: periodStartCountFrom, value: periodStart});
  useNumberCountingTransition({ref: refPeriodEnd, countFrom: periodEndCountFrom, value: periodEnd, duration: 0.7});

  return (
    <div className="time-frame-container">
      <p>
        <span ref={refPeriodStart}>{periodStart}</span>
        <span ref={refPeriodEnd}>{periodEnd}</span>
      </p>
    </div>
  )
}
