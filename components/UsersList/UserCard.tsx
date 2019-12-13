import React from 'react';
import Link from 'next/link';

import { Container, HighlightedText, ProfileButton } from './UserCard.styled';

interface Props {
  name: string;
}

const UserCard: React.FC<Props> = ({ name }) => {
  return (
    <Container>
      Name: <HighlightedText>{name}</HighlightedText>
      <Link href={`/user/${name}`}>
        <ProfileButton type="button">show more</ProfileButton>
      </Link>
    </Container>
  );
};

export default UserCard;
