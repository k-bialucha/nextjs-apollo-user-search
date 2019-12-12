import Header from './Header';
import { AppContent, GlobalStyle } from './Layout.styled';

const Layout: React.FC<{}> = ({ children }) => (
  <main>
    <Header />
    <AppContent>{children}</AppContent>
    <GlobalStyle />
  </main>
);

export default Layout;
