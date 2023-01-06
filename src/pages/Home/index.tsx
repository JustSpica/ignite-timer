import React from "react";
import { useForm, FormProvider } from "react-hook-form";
import { HandPalm, Play } from "phosphor-react";

import { useCycles, NewCycleFormData } from "context/CycleContext";

import { Form } from "./components/Form";
import { Countdown } from "./components/Countdown";

import * as Styled from "./styles";

export function Home() {
  const newCycleForm = useForm<NewCycleFormData>({
    defaultValues: {
      minutesAmount: 0,
      task: "",
    },
  });

  const { activeCycle, interruptCurrentCycle, createNewCycle } = useCycles();

  const { handleSubmit, watch, reset } = newCycleForm;

  function handleCreateNewCycle(data: NewCycleFormData) {
    createNewCycle(data);
    reset();
  }

  const task = watch("task");
  const isSubmitDisabled = !task;

  const isThereAnActiveCycle = !!activeCycle;

  return (
    <Styled.RootHome>
      <form onSubmit={handleSubmit(handleCreateNewCycle)}>
        <FormProvider {...newCycleForm}>
          <Form disabled={isThereAnActiveCycle} />
        </FormProvider>
        <Countdown />
        {isThereAnActiveCycle ? (
          <Styled.StopCountdownButton
            type="button"
            onClick={interruptCurrentCycle}
          >
            <HandPalm size={24} />
            Interromper
          </Styled.StopCountdownButton>
        ) : (
          <Styled.StartCountdownButton
            disabled={isSubmitDisabled}
            type="submit"
          >
            <Play size={24} />
            Começar
          </Styled.StartCountdownButton>
        )}
      </form>
    </Styled.RootHome>
  );
}
