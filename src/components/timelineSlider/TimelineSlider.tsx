import React, { FC, useState } from "react";
import { RadialSlider } from "./components/RadialSlider";
import "./timelineSlider.scss";
import { ITimelineData } from "./interfaces";
import { TimelineHeader } from "./components/timelineHeader/TimelineHeader";
import { HorizontalSlider } from "./components/horizontalSlider/HorizontalSlider";

interface ITimelineSlider {
  data: ITimelineData;
}

export const TimelineSlider: FC<ITimelineSlider> = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  return (
    <div className="container">
      <TimelineHeader title={data.timelineTitile} />
      <RadialSlider data={data} activeIndex={activeIndex} setActiveIndex={setActiveIndex} />

      <div className="horizontal-slider-container">
        <HorizontalSlider events={data.periods[activeIndex].events} />
      </div>
    </div>
  )
}
