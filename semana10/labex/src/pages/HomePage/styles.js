import styled from 'styled-components';

export const ButtonsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 16px;
`;

export const ContentContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 32px;
  grid-template-columns: 1fr 1fr;
  background-color: black;
`;
