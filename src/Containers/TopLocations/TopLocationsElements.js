import styled from "styled-components";

export const TopLocationsContainer = styled.div`
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #F0A830;
  padding: 32px 0;
`;

export const TopLocationsWrapper = styled.div`
  margin: 0 auto;
  width: 80%;
  display: grid;
  align-items: stretch;
  grid-gap: 32px;
  padding: 16px 48px;
  grid-template-columns: auto auto auto;
  transition: 1.3s;

  @media screen and (max-width: 1200px) {
    grid-template-columns: auto auto;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: auto;
    padding: 0px 12px;
  }
`;

export const TopLocationsH1 = styled.h1`
  font-size: 2.5rem;
  margin-top: 32px;
  margin-bottom: 32px;

  @media screen and (max-width: 768px) {
    font-size: 2rem;
  }
`;
