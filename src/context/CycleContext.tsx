import React, { createContext, useContext, useState } from "react";

export interface CycleProps {
  id: string;
  task: string;
  duration: number;
  startDate: Date;
  interruptedDate?: Date;
  finishedDate?: Date;
}

export interface NewCycleFormData {
  task: string;
  minutesAmount: number;
}

interface CyclesContextProps {
  activeCycle: CycleProps | undefined;
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
  const [cycles, setCycles] = useState<CycleProps[]>([]);
  const [activeCycleId, setActiveCycleId] = useState<string | null>(null);
  const [secondsPassed, setSecondsPassed] = useState(0);

  const activeCycle = cycles.find(cycle => cycle.id === activeCycleId);

  function setSecondsAmountPassed(seconds: number) {
    setSecondsPassed(seconds);
  }

  function markCurrentCycleAsFinished() {
    setCycles(prevState =>
      prevState.map(cycle => {
        if (cycle.id === activeCycleId) {
          return { ...cycle, finishedDate: new Date() };
        }

        return cycle;
      }),
    );

    setActiveCycleId(null);
  }

  function interruptCurrentCycle() {
    setCycles(prevState =>
      prevState.map(cycle => {
        if (cycle.id === activeCycleId) {
          return { ...cycle, interruptedDate: new Date() };
        }

        return cycle;
      }),
    );

    setActiveCycleId(null);
  }

  function createNewCycle(data: NewCycleFormData) {
    const duration = data.minutesAmount;

    const newCycle: CycleProps = {
      id: String(Date.now()),
      task: data.task,
      duration,
      startDate: new Date(),
    };

    setCycles(prevState => [...prevState, newCycle]);
    setActiveCycleId(newCycle.id);
    setSecondsPassed(0);
  }

  return (
    <CyclesContext.Provider
      value={{
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
