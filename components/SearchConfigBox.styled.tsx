import styled from 'styled-components';
import { IAppTheme } from '../styling/theme';

export const Card = styled.div`
  width: 100%;
  padding: 20px;
  border: 1px solid #999;
`;

export const Title = styled.h2`
  color: ${(props: { theme: IAppTheme }) => props.theme.main};
  margin: 0;
`;
