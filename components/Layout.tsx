import { createGlobalStyle } from 'styled-components';
import Header from './Header';

const GlobalStyle = createGlobalStyle`
  * {
    font-family: Menlo, Monaco, 'Lucida Console', 'Liberation Mono',
      'DejaVu Sans Mono', 'Bitstream Vera Sans Mono', 'Courier New',
      monospace, serif;
    box-sizing: border-box;
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

const Layout: React.FC<{}> = ({ children }) => (
  <main>
    <Header />
    <div>{children}</div>
    <GlobalStyle />
  </main>
);

export default Layout;
