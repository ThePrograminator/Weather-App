import React, { useState } from "react";
import { BsArrowLeftSquare, BsArrowRightSquare } from "react-icons/bs";
import Card from "../Card/Card";
import { CaourselContainer, CardContainer } from "./CarouselElements";

const Carousel = (props) => {
  const [current, setCurrent] = useState(0);
  const iconStyle = { height: "4rem", width: "4rem", color: "#FCEbb6" };
  const length = props.data.length;

  const nextItem = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevItem = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <CaourselContainer>
      <BsArrowLeftSquare onClick={prevItem} style={iconStyle} />

      {props.data.map((item, index) => {
        return (
          <CardContainer key={index} index={index} current={current}>
            {index === current && <Card city={item}></Card>}
          </CardContainer>
        );
      })}
      <BsArrowRightSquare onClick={nextItem} style={iconStyle} />
    </CaourselContainer>
  );
};

export default Carousel;
