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

const BaseCountdownButton = styled.button`
  width: 100%;
  padding: 1rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  font-weight: bold;

  border: 0;
  border-radius: 8px;

  cursor: pointer;
  transition: all 150ms;

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

export const StartCountdownButton = styled(BaseCountdownButton)`
  ${({ theme }) => css`
    background-color: ${theme["green-500"]};
    color: ${theme["gray-100"]};

    &:not(:disabled):hover {
      background-color: ${theme["green-700"]};
    }
  `}
`;
export const StopCountdownButton = styled(BaseCountdownButton)`
  ${({ theme }) => css`
    background-color: ${theme["red-500"]};
    color: ${theme["gray-100"]};

    &:focus {
      box-shadow: 0 0 0 2px ${theme["red-500"]};
    }

    &:not(:disabled):hover {
      background-color: ${theme["red-700"]};
    }
  `}
`;
