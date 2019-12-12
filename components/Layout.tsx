import { ThemeProvider } from 'styled-components';
import Header from './Header';
import { AppContent, GlobalStyle } from './Layout.styled';

import { appTheme } from '../styling/theme';

const APP_TITLE = 'GitHub User Search';

const Layout: React.FC<{}> = ({ children }) => (
  <ThemeProvider theme={appTheme}>
    <main>
      <Header title={APP_TITLE} />
      <AppContent>{children}</AppContent>
      <GlobalStyle />
    </main>
  </ThemeProvider>
);

export default Layout;
