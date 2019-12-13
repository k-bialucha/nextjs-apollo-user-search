import styled from 'styled-components';
import { IAppTheme } from '../../styling/theme';

// TODO: extract to common mixin
export const StyledInput = styled.input`
  border: 2px solid ${(props: { theme: IAppTheme }) => props.theme.border};
  border-radius: 5px;
  padding: 5px 10px;
  background-color: white;
  font-size: 120%;

  &:focus,
  &:hover {
    outline: none;
    border-color: ${(props: { theme: IAppTheme }) => props.theme.main};
  }
`;
