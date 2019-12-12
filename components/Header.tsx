import React from 'react';

import { AppTitleText, Container } from './Header.styled';

const Header: React.FC<{}> = () => (
  <Container>
    <AppTitleText>GitHub User Search</AppTitleText>
  </Container>
);

export default Header;
