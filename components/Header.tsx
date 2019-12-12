import React from 'react';

import { AppTitleText, Container } from './Header.styled';

interface Props {
  title: string;
}

const Header: React.FC<Props> = ({ title }) => (
  <Container>
    <AppTitleText>{title}</AppTitleText>
  </Container>
);

export default Header;
