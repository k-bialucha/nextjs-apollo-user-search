import React from 'react';

import { Container, HighlightedText } from './UserCard.styled';

interface Props {
  name: string;
}

const UserCard: React.FC<Props> = ({ name }) => {
  return (
    <Container>
      Name: <HighlightedText>{name}</HighlightedText>
    </Container>
  );
};

export default UserCard;
