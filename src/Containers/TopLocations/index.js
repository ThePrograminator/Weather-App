import React, { useState, useEffect } from "react";
import {
  TopLocationsContainer,
  TopLocationsWrapper,
  TopLocationsH1,
} from "./TopLocationsElements";
import Card from "../../Components/Card/Card";
import Carousel from "../../Components/Carousel/Carousel";

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

const TopLocations = () => {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );
  const topLocations = [
    "London",
    "Paris",
    "Madrid",
    "Berlin",
    "Rome",
    "Athens",
  ];

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <TopLocationsContainer id="portfolio">
      <TopLocationsH1>Top Cities</TopLocationsH1>
      {windowDimensions.width > 768 ? (
        <TopLocationsWrapper>
          {topLocations.map((item, index) => (
            <Card key={index} city={item} />
          ))}
        </TopLocationsWrapper>
      ) : (
        <Carousel data={topLocations} />
      )}
    </TopLocationsContainer>
  );
};

export default TopLocations;
