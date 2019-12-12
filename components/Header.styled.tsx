import styled from 'styled-components';
import { IAppTheme } from '../styling/theme';

interface Props {
  theme: IAppTheme;
}

export const Container = styled.nav`
  display: flex;
  align-items: center;

  width: 100vw;
  height: 70px;
  padding: 5px 20px;

  background-color: ${(props: Props) => props.theme.main};
`;

export const AppTitleText = styled.span`
  font-size: 40px;
  font-weight: 600;
  color: ${(props: Props) => props.theme.highlightText};
`;
