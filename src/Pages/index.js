import React from "react";
import TopLocations from "../Containers/TopLocations";
import FormSection from "../Containers/Form";

const HomePage = () => {
  return (
    <>
      <div style={{ display: "flex", flexDirection: "column", width: "auto" }}>
        <FormSection />
        <TopLocations />
      </div>
    </>
  );
};

export default HomePage;
