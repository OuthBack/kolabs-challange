import styled from 'styled-components';

export const SearchInput = styled.input`
  width: 100%;
  padding: ${props =>
    `${props.theme.spacing.padding.md} ${props.theme.spacing.padding.xl}`};
  color: ${props => props.theme.font.colors.secundary};
  border: 0;
  border-bottom: 1px solid ${props => props.theme.colors.tertiary};
  font-size: ${props => props.theme.font.size.md};
`;

export const SearchBarContainer = styled.span`
  width: 100%;

  form {
    position: relative;
    .search-icon {
      position: absolute;
      left: 7px;
      top: 14px;
    }
  }
`;
