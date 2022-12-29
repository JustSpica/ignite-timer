import { createGlobalStyle, css } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }

  ${({ theme }) => css`
    body {
      background-color: ${theme["gray-900"]};
      color: ${theme["gray-300"]};
    }

    :focus {
      outline: 0;
      box-shadow: 0 0 0 2px ${theme["green-500"]};
    }
  `}
`;
