import React, { createContext, useContext, useReducer, useState } from "react";

import {
  createNewCycleAction,
  interruptCurrentCycleAction,
  markCurrentCycleAsFinishedAction,
} from "reducers/cycles/actions";
import { Cycle, CyclesState, cyclesReducer } from "reducers/cycles/reducer";

export interface NewCycleFormData {
  task: string;
  minutesAmount: number;
}

interface CyclesContextProps {
  cycles: Cycle[];
  activeCycle: Cycle | undefined;
  activeCycleId: string | null;
  secondsPassed: number;
  markCurrentCycleAsFinished: () => void;
  setSecondsAmountPassed: (seconds: number) => void;
  interruptCurrentCycle: () => void;
  createNewCycle: (data: NewCycleFormData) => void;
}

interface CyclesProviderProps {
  children: React.ReactNode;
}

const CyclesContext = createContext({} as CyclesContextProps);

export function CyclesProvider({ children }: CyclesProviderProps) {
  const [cyclesState, dispatch] = useReducer(cyclesReducer, {
    activeCycleId: null,
    cycles: [],
  } as CyclesState);

  const [secondsPassed, setSecondsPassed] = useState(0);

  const { cycles, activeCycleId } = cyclesState;

  const activeCycle = cycles.find(cycle => cycle.id === activeCycleId);

  function setSecondsAmountPassed(seconds: number) {
    setSecondsPassed(seconds);
  }

  function markCurrentCycleAsFinished() {
    dispatch(markCurrentCycleAsFinishedAction());
  }

  function interruptCurrentCycle() {
    dispatch(interruptCurrentCycleAction());
  }

  function createNewCycle(data: NewCycleFormData) {
    const duration = data.minutesAmount * 60;

    const newCycle: Cycle = {
      id: String(Date.now()),
      task: data.task,
      duration,
      startDate: new Date(),
    };

    dispatch(createNewCycleAction(newCycle));

    setSecondsPassed(0);
  }

  return (
    <CyclesContext.Provider
      value={{
        cycles,
        activeCycle,
        activeCycleId,
        secondsPassed,
        markCurrentCycleAsFinished,
        setSecondsAmountPassed,
        interruptCurrentCycle,
        createNewCycle,
      }}
    >
      {children}
    </CyclesContext.Provider>
  );
}

export function useCycles() {
  const context = useContext(CyclesContext);

  return context;
}
