import styled from "styled-components";

export const SearchContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
`;

export const SearchInput = styled.input`
  width: 100%;
  padding-left: 1.25rem;
  padding-right: 1.25rem;
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  font-size: 1.125rem;
  line-height: 1.75rem;
  border-radius: 9999px;
  border-width: 2px;
  border-color: #5e412f;
  outline: 2px solid transparent;
  outline-offset: 2px;
  background: #fcebb6;

  &:focus {
    border-color: black;
  }
`;

export const SearchResultsContainter = styled.div`
  position: "absolute";
  margin-top: 0.25rem;
  background: "white";
  overflow-y: auto;
  width: 100%;
  padding: 0.5rem;
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  border-bottom-left-radius: 0.25rem;
  border-bottom-right-radius: 0.25rem;
  max-height: 9rem;
  background: #fcebb6;
`;

export const Searchitem = styled.div`
  cursor: pointer;
  padding: 0.5rem;
  background-color: ${({ index, focusedIndex }) =>
    index === focusedIndex ? "rgb(0,0,0,0.1)" : ""};
  color: black;

  &:hover {
    background: black;
    background-color: rgba(0, 0, 0, 0.1);
  }
`;
