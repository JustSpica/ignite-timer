import React from "react";
import { useFormContext } from "react-hook-form";

import { FormContainer, MinutesAmountInput, TaskInput } from "./styles";

interface NewCycleFormProps {
  disabled: boolean;
}

export function Form({ disabled }: NewCycleFormProps) {
  const { register } = useFormContext();

  return (
    <FormContainer>
      <label htmlFor="task">Vou trabalhar em</label>
      <TaskInput
        id="task"
        type="text"
        disabled={disabled}
        placeholder="Dê um nome para o seu projeto"
        {...register("task")}
      />

      <label htmlFor="minutesAmount">durante</label>
      <MinutesAmountInput
        id="minutesAmount"
        type="number"
        disabled={disabled}
        placeholder="00"
        step={5}
        min={5}
        max={60}
        {...register("minutesAmount", { valueAsNumber: true })}
      />

      <span>minutos.</span>
    </FormContainer>
  );
}
