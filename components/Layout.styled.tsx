import styled, { createGlobalStyle } from 'styled-components';

import { IAppTheme } from '../styling/theme';

export const GlobalStyle = createGlobalStyle`
  * {
    font-family: Menlo, Monaco, 'Lucida Console', 'Liberation Mono',
      'DejaVu Sans Mono', 'Bitstream Vera Sans Mono', 'Courier New',
      monospace, serif;
    box-sizing: border-box;
    color: ${(props: { theme: IAppTheme }) => props.theme.baseText};
  }
  body {
    margin: 0;
    width: 100vw;
    overflow-x: hidden;
  }
  a {
    color: #22bad9;
  }
  p {
    font-size: 14px;
    line-height: 24px;
  }
  article {
    margin: 0 auto;
    max-width: 650px;
  }
`;

export const AppContent = styled.div`
  width: 100%;
  padding: 1em 30px;
`;
