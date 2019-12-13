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
    color: ${(props: { theme: IAppTheme }) => props.theme.main};
  }
  p {
    font-size: 14px;
    line-height: 24px;
  }
`;

export const PageContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  padding: 1em 30px;

  > * {
    max-width: 800px;
    margin-bottom: 1em;
  }
`;
