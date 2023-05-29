import styled from "styled-components";

export const CaourselContainer = styled.section`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 0 32px;
`;

export const CardContainer = styled.div`
  opacity: ${({ index, current }) => (index === current ? 1 : 0)};
  width: ${({ index, current }) => (index === current ? "80%" : "0%")};
  padding: ${({ index, current }) => (index === current ? "0 32px" : "0 0")};
  transition: opacity 0.5s ease-in-out;
`;
