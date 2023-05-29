import React, { useState } from "react";
import {
  FormContainer,
  FormWrapper,
  FormRow,
  Column1,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  Column2,
  CardWrapper,
} from "./FormElements";
import SearchDropDown from "../../Components/SearchDropDown/SearchDropDown";
import Card from "../../Components/Card/Card";
import cities from "../../citynames.json";

const FormSection = () => {
  const [data] = useState(cities);
  const [filteredData, setFilteredData] = useState([]);
  const [selectedValue, setSelectedValue] = useState("");

  const handleChange = (e) => {
    const { target } = e;
    if (!target.value.trim()) return setFilteredData([]);

    const filteredValue = data.filter((item) =>
      item.toLowerCase().startsWith(target.value.toLowerCase())
    );
    setFilteredData(filteredValue);
  };

  return (
    <>
      <FormContainer>
        <FormWrapper>
          <FormRow>
            <Column1>
              <TextWrapper>
                <TopLine>Find Your Local Weather</TopLine>
                <Heading>Simple Weather App</Heading>
                <Subtitle>
                  Get the weather conditions, temperature, wind speed and
                  humidity.
                </Subtitle>
              </TextWrapper>
              <SearchDropDown
                filteredData={filteredData}
                value={selectedValue}
                onChange={handleChange}
                onSelect={(item) => setSelectedValue(item)}
              />
            </Column1>
            <Column2>
              <CardWrapper>
                <Card city={selectedValue} />
              </CardWrapper>
            </Column2>
          </FormRow>
        </FormWrapper>
      </FormContainer>
    </>
  );
};

export default FormSection;
