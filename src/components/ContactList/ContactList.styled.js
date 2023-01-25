import styled from 'styled-components';

export const List = styled.li`
  list-style: none;
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const ButtonList = styled.button`
  margin-left: 10px;
`;
