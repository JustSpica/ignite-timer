import styled, { css } from "styled-components";

export const CountdownContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    gap: 1rem;

    font-family: "Roboto mono", monospace;
    font-size: 10rem;
    line-height: 8rem;

    span {
      padding: 2rem 1rem;

      border-radius: 8px;

      background-color: ${theme["gray-700"]};
    }
  `}
`;

export const CountdownDivider = styled.div`
  ${({ theme }) => css`
    width: 4rem;
    padding: 2rem 0;

    display: flex;
    justify-content: center;

    color: ${theme["green-500"]};

    overflow: hidden;
  `}
`;
