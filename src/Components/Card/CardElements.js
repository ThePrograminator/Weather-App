import styled from "styled-components";

export const CardContainer = styled.div`
  background: #78c0a8;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  max-height: 496px;
  padding: 30px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;
  min-height: 400px;
  width: 100%;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;

export const CardH2 = styled.h2`
  word-break: break-all;
  font-size: 1.75rem;
  margin-bottom: 10px;
  @media screen and (max-width: 600px) {
    font-size: 1.5rem;
  }
`;

export const CardP = styled.p`
  font-size: 1.25rem;
  text-align: center;
  max-height: 80px;
  @media screen and (max-width: 600px) {
    font-size: 1rem;
  }
`;

export const CardBottomContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  padding: 16px 0;
`;

export const WeatherInfoContainer = styled.div`
  display: flex;
  flex: 1 1 0px;
  flex-direction: column;
  align-items: center;
`;
