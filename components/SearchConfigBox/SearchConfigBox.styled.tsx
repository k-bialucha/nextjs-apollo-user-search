import styled from 'styled-components';
import { IAppTheme } from '../../styling/theme';

export const Card = styled.div`
  width: 100%;
  padding: 20px;
  border: 1px solid ${(props: { theme: IAppTheme }) => props.theme.border};
`;

export const Title = styled.h2`
  color: ${(props: { theme: IAppTheme }) => props.theme.main};
  margin: 0;
`;

export const ControlsContainer = styled.p`
  display: flex;
  justify-content: center;

  > * {
    margin: 0 5px;
  }
`;
