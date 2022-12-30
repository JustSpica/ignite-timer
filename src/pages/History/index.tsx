import React from "react";

import { HistoryRoot, HistoryContainerList, Status } from "./styles";

export function History() {
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
            <tr>
              <td>Tarefa 01</td>
              <td>25 minutos</td>
              <td>2 meses</td>
              <td>
                <Status statusColor="green">Concluído</Status>
              </td>
            </tr>
            <tr>
              <td>Tarefa 01</td>
              <td>25 minutos</td>
              <td>2 meses</td>
              <td>
                <Status statusColor="red">Interrompido</Status>
              </td>
            </tr>
            <tr>
              <td>Tarefa 01</td>
              <td>25 minutos</td>
              <td>2 meses</td>
              <td>
                <Status statusColor="yellow">Em andamento</Status>
              </td>
            </tr>
          </tbody>
        </table>
      </HistoryContainerList>
    </HistoryRoot>
  );
}
