import styled from 'styled-components';
import { IAppTheme } from '../../styling/theme';

export const Container = styled.div`
  border-bottom: 2px solid
    ${(props: { theme: IAppTheme }) => props.theme.border};

  margin: 0.8em 0;
  padding: 0.5em;
`;

export const HighlightedText = styled.span`
  color: ${(props: { theme: IAppTheme }) => props.theme.main};
  font-weight: 600;
`;
