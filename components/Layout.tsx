import { ThemeProvider } from 'styled-components';
import Header from './Header';
import { AppContent, GlobalStyle } from './Layout.styled';

import { appTheme } from '../styling/theme';

const Layout: React.FC<{}> = ({ children }) => (
  <ThemeProvider theme={appTheme}>
    <main>
      <Header />
      <AppContent>{children}</AppContent>
      <GlobalStyle />
    </main>
  </ThemeProvider>
);

export default Layout;
