export interface IAppTheme {
  main: string;
  border: string;
  baseText: string;
  highlightText: string;
}

export const appTheme: IAppTheme = {
  main: 'dodgerblue',
  border: '#aaa',
  baseText: '#444',
  // TODO: consider to remove
  highlightText: 'white',
};
