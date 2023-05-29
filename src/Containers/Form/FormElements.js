import styled from "styled-components";

export const FormContainer = styled.div`
  color: white;
  background: #f07818;
  padding: 32px 0;

  @media screen and (max-width: 768px) {
    padding: 64px 0;
  }
`;

export const FormWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 480px;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;

  @media screen and (max-width: 768px) {
    height: 860px;
  }
`;

export const FormRow = styled.div`
  display: grid;
  grid-template-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: "col1 col1 col2";

  @media screen and (max-width: 768px) {
    grid-template-areas: "col1 col1" "col2 col2";
  }
`;

export const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;
  min-height: 400px;
  height: 75%;
`;

export const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;
`;

export const CardWrapper = styled.div`
  width: 300px;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;

  @media screen and (max-width: 768px) {
    padding-bottom: 0px;
  }
`;

export const TopLine = styled.p`
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
`;

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
`;
