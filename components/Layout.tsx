import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    font-family: Menlo, Monaco, 'Lucida Console', 'Liberation Mono',
      'DejaVu Sans Mono', 'Bitstream Vera Sans Mono', 'Courier New',
      monospace, serif;
    box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 25px 50px;
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

const Layout: React.FC<{}> = ({ children }) => (
  <main>
    {children}
    <GlobalStyle />
  </main>
);

export default Layout;
