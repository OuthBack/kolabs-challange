import styled from 'styled-components';

export const FilterMovieRowContainer = styled.li<{ selected: boolean }>`
  text-decoration: none;
  display: flex;
  justify-content: space-between;
  padding: ${props =>
    `${props.theme.spacing.padding.md} ${props.theme.spacing.padding.md}`};
  transition: ${props => props.theme.transition.fs} ease-in-out;
  ${props =>
    props.selected &&
    `
    background-color: ${props.theme.colors.tertiary};
    h2 {
      font-weight: bold
    };
  `}

  :hover {
    background-color: ${props => props.theme.colors.tertiary};
    * {
      transition: ${props => props.theme.transition.fs} ease-in-out;
    }

    .minibox {
      background-color: ${props => props.theme.colors.primary};
    }
  }
`;
