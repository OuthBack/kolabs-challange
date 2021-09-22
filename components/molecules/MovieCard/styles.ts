import styled from 'styled-components';

export const MovieCardContainer = styled.div`
  display: flex;

  border-radius: ${props => props.theme.border.radius.md};
  box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 8px 0px;

  img {
    border-radius: ${props =>
      `${props.theme.border.radius.md} 0 0 ${props.theme.border.radius.md}`};
  }
`;

export const MovieDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing.margin.sm};
  height: 121px;
  width: -webkit-fill-available;
  padding: ${props =>
    `${props.theme.spacing.padding.md} ${props.theme.spacing.padding.lg}`};

  p {
    display: -webkit-box;
    overflow: hidden;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
  }
`;
