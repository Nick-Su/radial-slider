import React, { FC } from "react"
import "./timelineHeader.scss"

export const TimelineHeader: FC<{title: string}> = ({title}) => {
  return (
    <div className="timeline-header-container">
      <p>{title}</p>
    </div>
  )
}
