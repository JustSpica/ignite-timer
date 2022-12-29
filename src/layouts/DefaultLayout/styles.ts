import styled, { css } from "styled-components";

export const RootDefaultLayout = styled.div`
  ${({ theme }) => css`
    max-width: 74rem;
    height: calc(100vh - 10rem);
    margin: 5rem auto;
    padding: 2.5rem;

    display: flex;
    flex-direction: column;

    border-radius: 8px;

    background-color: ${theme["gray-800"]};
  `}
`;
