export interface ITimeLinePeriodEvent {
  milestone: string | number;
  description: string;
}

export interface ITimeLinePeriod {
  periodStart: number;
  periodEnd: number;
  periodName: string;
  events: ITimeLinePeriodEvent[];
}

export interface ITimelineData {
  timelineTitile: string;
  periods: ITimeLinePeriod[];
}

export interface IRadialSliderPoint {
  index: number;
  displayAngle: number;
  radius: number;
  periodStart: number;
  periodEnd: number;
  periodName: string;
  events: ITimeLinePeriodEvent[];
}
