import React, { useState, useRef, useEffect, useCallback } from "react";
import {
  SearchContainer,
  SearchInput,
  SearchResultsContainter,
  Searchitem,
} from "./SearchDropDownElements";

const SearchDropDown = (props) => {
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const [showResults, setShowResults] = useState(false);
  const [defaultValue, setDefaultValue] = useState("");
  const resultContainer = useRef(null);

  const handleSelection = (selectedIndex) => {
    const selectedItem = props.filteredData[selectedIndex];
    if (!selectedItem) return resetSearchComplete();
    props.onSelect(selectedItem);
    resetSearchComplete();
  };

  const resetSearchComplete = useCallback(() => {
    setFocusedIndex(-1);
    setShowResults(false);
  }, []);

  const handleKeyDown = (e) => {
    const { key } = e;
    let nextIndexCount = 0;

    // move down
    if (key === "ArrowDown")
      nextIndexCount = (focusedIndex + 1) % props.filteredData.length;

    // move up
    if (key === "ArrowUp")
      nextIndexCount =(focusedIndex + props.filteredData.length - 1) % props.filteredData.length;

    // hide search results
    if (key === "Escape")
      resetSearchComplete();

    // select the current item
    if (key === "Enter") {
      e.preventDefault();
      handleSelection(focusedIndex);
    }

    setFocusedIndex(nextIndexCount);
  };

  const handleChange = (e) => {
    setDefaultValue(e.target.value);
    props.onChange(e);
  };

  useEffect(() => {
    if (!resultContainer.current) return;

    resultContainer.current.scrollIntoView({
      block: "center",
    });
  }, [focusedIndex]);

  useEffect(() => {
    if (props.filteredData.length > 0 && !showResults) setShowResults(true);

    if (props.filteredData.length <= 0) setShowResults(false);
  }, [props.filteredData]);

  useEffect(() => {
    if (props.value) setDefaultValue(props.value);
  }, [props.value]);

  return (
    <SearchContainer>
      <div
        tabIndex={1}
        onBlur={resetSearchComplete}
        onKeyDown={handleKeyDown}
        style={{ position: "sticky", width: "100%" }}
      >
        <SearchInput
          type={"text"}
          placeholder="Search City..."
          onChange={handleChange}
          value={defaultValue}
        />
        {showResults && (
          <SearchResultsContainter>
            {props.filteredData.map((item, index) => {
              return (
                <Searchitem
                  key={index}
                  ref={index === focusedIndex ? resultContainer : null}
                  index={index}
                  focusedIndex={focusedIndex}
                  onMouseDown={() => handleSelection(index)}
                >
                  {item}
                </Searchitem>
              );
            })}
          </SearchResultsContainter>
        )}
      </div>
    </SearchContainer>
  );
};

export default SearchDropDown;
