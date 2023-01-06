import React from "react";
import { formatDistanceToNow, secondsToMinutes } from "date-fns";
import { ptBR } from "date-fns/locale";

import { useCycles } from "context/CycleContext";

import { HistoryRoot, HistoryContainerList, Status } from "./styles";

export function History() {
  const { cycles } = useCycles();

  return (
    <HistoryRoot>
      <h1>Meu histórico</h1>

      <HistoryContainerList>
        <table>
          <thead>
            <tr>
              <th>Tarefa</th>
              <th>Duração</th>
              <th>Início</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {cycles.map(cycle => (
              <tr key={cycle.id}>
                <td>{cycle.task}</td>
                <td>{secondsToMinutes(cycle.duration)} minutos</td>
                <td>
                  {formatDistanceToNow(cycle.startDate, {
                    addSuffix: true,
                    locale: ptBR,
                  })}
                </td>
                <td>
                  {cycle.finishedDate && (
                    <Status statusColor="green">Concluído</Status>
                  )}
                  {cycle.interruptedDate && (
                    <Status statusColor="red">Interrompido</Status>
                  )}
                  {!cycle.finishedDate && !cycle.interruptedDate && (
                    <Status statusColor="yellow">Em andamento</Status>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </HistoryContainerList>
    </HistoryRoot>
  );
}
