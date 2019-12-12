import styled from 'styled-components';
import { IAppTheme } from '../../styling/theme';

export const StyledSelect = styled.select`
  border: 2px solid ${(props: { theme: IAppTheme }) => props.theme.border};
  border-radius: 5px;
  padding: 5px 10px;
  background-color: white;
  font-size: 120%;
`;
