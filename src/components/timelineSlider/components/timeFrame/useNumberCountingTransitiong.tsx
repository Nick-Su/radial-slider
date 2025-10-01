import React, { useEffect, RefObject } from "react";
import { gsap } from "gsap";

interface IUse {
  ref: RefObject<HTMLSpanElement | null>,
  countFrom: RefObject<{
    val: number;
  }>,
  value: number;
  duration?: number;
}

const useNumberCountingTransition = ({ ref, countFrom, value, duration = 0.5}: IUse) => {
  useEffect(() => {
    gsap.killTweensOf(countFrom.current);

    gsap.to(countFrom.current, {
      val: value,
      duration: duration,
      ease: "power1.out",
      onUpdate: () => {
        if (ref.current) {
          ref.current.textContent = Math.floor(countFrom.current.val).toString();
        }
      },
    });
  }, [value]);
}

export default useNumberCountingTransition;
