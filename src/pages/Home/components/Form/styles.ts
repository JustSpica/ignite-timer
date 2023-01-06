import styled, { css } from "styled-components";

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