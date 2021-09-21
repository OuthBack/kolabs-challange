import styled from 'styled-components';

export const MiniBoxContainer = styled.div`
  border-radius: ${props => props.theme.border.radius.md};
  padding: 0 ${props => props.theme.spacing.padding.sm};
  background-color: ${props => props.theme.colors.tertiary};
  font-weight: 400;
`;
