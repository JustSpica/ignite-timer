import React, { useEffect } from "react";
import { differenceInSeconds } from "date-fns";

import { useCycles } from "context/CycleContext";

import { CountdownContainer, CountdownDivider } from "./styles";

export function Countdown() {
  const {
    activeCycle,
    activeCycleId,
    secondsPassed,
    markCurrentCycleAsFinished,
    setSecondsAmountPassed,
  } = useCycles();

  const currentDuration = activeCycle
    ? activeCycle.duration - secondsPassed
    : 0;

  const minutes = String(Math.floor(currentDuration / 60)).padStart(2, "0");
  const seconds = String(currentDuration % 60).padStart(2, "0");

  useEffect(() => {
    let interval: number;

    if (activeCycle) {
      interval = setInterval(() => {
        const secondsDifference = differenceInSeconds(
          new Date(),
          activeCycle.startDate,
        );

        if (secondsDifference >= activeCycle.duration) {
          console.log("aqui 01");
          markCurrentCycleAsFinished();
          setSecondsAmountPassed(activeCycle.duration);
        } else {
          console.log("aqui 02");
          setSecondsAmountPassed(secondsDifference);
        }
      }, 1000);
    }

    return () => {
      clearInterval(interval);
    };
  }, [activeCycle, activeCycleId]);

  useEffect(() => {
    if (activeCycle) {
      document.title = `Timer: ${minutes} : ${seconds}`;
    }
  }, [activeCycle, minutes, seconds]);

  return (
    <CountdownContainer>
      <span>{minutes[0]}</span>
      <span>{minutes[1]}</span>
      <CountdownDivider>:</CountdownDivider>
      <span>{seconds[0]}</span>
      <span>{seconds[1]}</span>
    </CountdownContainer>
  );
}
