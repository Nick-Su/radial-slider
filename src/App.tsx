import React from "react";
import { timelineData, TimelineSlider } from "./components/timelineSlider";
import './styles/styles.scss';

const App = () => {
  return (
    <TimelineSlider data={timelineData} />
  )
};

export default App;
