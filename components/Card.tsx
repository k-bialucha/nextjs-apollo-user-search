import React from 'react';

import { Container, Title } from './Card.styled';

interface Props {
  title?: string;
}

const Card: React.FC<Props> = ({ title, children }) => {
  return (
    <Container>
      {title && <Title>{title}</Title>}
      {children}
    </Container>
  );
};

export default Card;
