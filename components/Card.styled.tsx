import styled from 'styled-components';
import { IAppTheme } from '../styling/theme';

export const Container = styled.div`
  width: 100%;
  padding: 20px;
  border: 1px solid ${(props: { theme: IAppTheme }) => props.theme.border};
`;

export const Title = styled.h2`
  color: ${(props: { theme: IAppTheme }) => props.theme.main};
  margin: 0;
`;
