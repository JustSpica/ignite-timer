import styled, { css, DefaultTheme } from "styled-components";

export const HistoryRoot = styled.main`
  ${({ theme }) => css`
    padding: 3.5rem;

    flex: 1;
    display: flex;
    flex-direction: column;

    h1 {
      font-size: 1.5rem;

      color: ${theme["gray-100"]};
    }
  `}
`;

export const HistoryContainerList = styled.div`
  ${({ theme }) => css`
    margin-top: 2rem;

    flex: 1;

    overflow: auto;

    table {
      width: 100%;
      min-width: 600px;

      border-collapse: collapse;

      th {
        padding: 1rem;

        font-size: 0.875rem;
        line-height: 1.6;
        text-align: left;

        background-color: ${theme["gray-600"]};
        color: ${theme["gray-100"]};

        &:first-child {
          padding-left: 1.5rem;
          border-top-left-radius: 8px;
        }

        &:last-child {
          padding-right: 1.5rem;
          border-top-right-radius: 8px;
        }
      }

      td {
        padding: 1rem;

        font-size: 0.875rem;
        line-height: 1.6;

        border-top: 4px solid ${theme["gray-800"]};

        background-color: ${theme["gray-700"]};

        &:first-child {
          width: 50%;
          padding-left: 1.5rem;
        }

        &:last-child {
          padding-right: 1.5rem;

          line-height: 1;
        }
      }
    }
  `}
`;

const statusColorsModifiers = {
  green: (theme: DefaultTheme) => css`
    background-color: ${theme["green-500"]};
  `,
  yellow: (theme: DefaultTheme) => css`
    background-color: ${theme["yellow-500"]};
  `,
  red: (theme: DefaultTheme) => css`
    background-color: ${theme["red-500"]};
  `,
};

interface StatusProps {
  statusColor: keyof typeof statusColorsModifiers;
}

export const Status = styled.span<StatusProps>`
  ${({ theme, statusColor }) => css`
    display: flex;
    align-items: center;
    gap: 0.5rem;

    &::before {
      content: "";
      width: 0.5rem;
      height: 0.5rem;

      border-radius: 9999px;

      ${!!statusColor && statusColorsModifiers[statusColor](theme)}
    }
  `}
`;
