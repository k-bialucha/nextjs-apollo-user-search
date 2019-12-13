import styled from 'styled-components';
import { IAppTheme } from '../../styling/theme';

export const StyledButton = styled.button`
  padding: 5px 10px;
  border: 2px solid ${(props: { theme: IAppTheme }) => props.theme.main};
  border-radius: 5px;
  font-size: 120%;

  color: white;
  background-color: ${(props: { theme: IAppTheme }) => props.theme.main};

  transition: background-color 0.3s, border-color 0.3s;

  &:focus,
  &:hover {
    outline: none;
    /* TODO: use theme */
    border-color: steelblue;
    background-color: steelblue;
  }

  &:disabled {
    border-color: ${(props: { theme: IAppTheme }) => props.theme.border};
    background-color: ${(props: { theme: IAppTheme }) => props.theme.border};
  }
`;
