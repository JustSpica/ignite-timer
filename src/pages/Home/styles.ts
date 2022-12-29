import styled, { css } from "styled-components";

export const RootHome = styled.main`
  flex: 1;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3.5rem;
  }
`;

export const FormContainer = styled.div`
  ${({ theme }) => css`
    width: 100%;

    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;

    font-size: 1.125rem;
    font-weight: bold;

    color: ${theme["gray-100"]};
  `}
`;

const BaseInput = styled.input`
  ${({ theme }) => css`
    height: 2.5rem;
    padding: 0 0.5rem;

    font-size: 1.125rem;
    font-weight: bold;

    border: 0;
    border-bottom: 2px solid ${theme["gray-500"]};

    background-color: transparent;
    color: ${theme["gray-100"]};

    &:focus {
      box-shadow: none;
      border-color: ${theme["green-500"]};
    }

    &::placeholder {
      color: ${theme["gray-500"]};
    }
  `}
`;

export const TaskInput = styled(BaseInput)`
  flex: 1;
`;

export const MinutesAmountInput = styled(BaseInput)`
  width: 4rem;
`;

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

export const StartCountdownButton = styled.button`
  ${({ theme }) => css`
    width: 100%;
    padding: 1rem;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;

    font-weight: bold;

    border: 0;
    border-radius: 8px;

    background-color: ${theme["green-500"]};
    color: ${theme["gray-100"]};

    cursor: pointer;
    transition: all 150ms;

    &:disabled {
      opacity: 0.7;
      cursor: not-allowed;
    }

    &:not(:disabled):hover {
      background-color: ${theme["green-700"]};
    }
  `}
`;
