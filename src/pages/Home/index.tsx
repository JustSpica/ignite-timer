import React from "react";
import { Play } from "phosphor-react";

import * as Styled from "./styles";

export function Home() {
  return (
    <Styled.RootHome>
      <form>
        <Styled.FormContainer>
          <label htmlFor="task">Vou trabalhar em</label>
          <Styled.TaskInput
            id="task"
            type="text"
            placeholder="Dê um nome para o seu projeto"
          />

          <label htmlFor="minutesAmount">durante</label>
          <Styled.MinutesAmountInput
            id="minutesAmount"
            type="number"
            placeholder="00"
            step={5}
            min={5}
            max={60}
          />

          <span>minutos.</span>
        </Styled.FormContainer>

        <Styled.CountdownContainer>
          <span>0</span>
          <span>0</span>
          <Styled.CountdownDivider>:</Styled.CountdownDivider>
          <span>0</span>
          <span>0</span>
        </Styled.CountdownContainer>

        <Styled.StartCountdownButton type="submit">
          <Play size={24} />
          Começar
        </Styled.StartCountdownButton>
      </form>
    </Styled.RootHome>
  );
}
