import styled from 'styled-components';

export const FilterHeaderRowContainer = styled.div`
  border-radius: ${props =>
      `${props.theme.border.radius.md} ${props.theme.border.radius.md}`}
    0 0;
  background-color: ${props => props.theme.colors.quarternary};
  padding: ${props => props.theme.spacing.padding.lg};

  * {
    font-weight: bold;
  }
`;
