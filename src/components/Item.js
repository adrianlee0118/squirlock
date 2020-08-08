import React from "react";
import cx from "classnames";

import SliderContext from "";
import ShowDetailsButton from "";
import Mark from "";

import "./App.css";
import { element } from "prop-types";

const Item = ({ movie }) => (
  <SliderContext.Consumer>
    {({ onSelectSlide, currentSlide, elementRef }) => {
      const isActive = currentSlide && currentSlide.id === movie.id;

      return (
        <div
          ref={elementRef}
          className={cx("item", { "item--open": isActive })}
        >
          <img src={movie.image} alt="" />
          <ShowDetailsButton onClick={() => onSelectSlide(movie)} />
          {isActive && <Mark />}
        </div>
      );
    }}
  </SliderContext.Consumer>
);

export default Item;
