import styled from "styled-components";
import { routes } from "../../data/lib";
import Link from "next/link";
import { useState } from "react";

export default function SearchBar() {
  const [filteredData, setFilteredData] = useState([]);

  function handleFilter(event) {
    const searchEntry = event.target.value;
    const newFilter = routes.filter((value) => {
      return value.name.toLowerCase().includes(searchEntry.toLowerCase());
    });
    if (searchEntry === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  }

  return (
    <StyledSearch>
      <StyledSearchInputs>
        <input
          type="text"
          placeholder="search a Route..."
          onChange={handleFilter}
        />
        <StyledSearchIcon></StyledSearchIcon>
      </StyledSearchInputs>
      {filteredData.length != 0 && (
        <StyledSearchResults>
          {filteredData.slice(0, 10).map((route) => {
            return (
              <SyteledResultLink key={route.id} href="/sectors/routes">
                <SytledResultItem className="resultItem">
                  <p className="resultText">{route.name}</p>
                </SytledResultItem>
              </SyteledResultLink>
            );
          })}
        </StyledSearchResults>
      )}
    </StyledSearch>
  );
}

const StyledSearch = styled.div`
  justify-content: flex-start;
  align-self: center;
`;

const StyledSearchInputs = styled.div``;

const StyledSearchIcon = styled.div``;

const StyledSearchResults = styled.div`
  position: absolute;
  margin-top: 5px;
  width: 300px;
  height: 200px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  overflow: hidden;
  overflow-y: auto;

  .resultText {
    margin-left: 10px;
  }
`;

const SytledResultItem = styled.article`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;

  &:hover {
    background-color: lightgray;
  }
`;

const SyteledResultLink = styled(Link)`
  text-decoration: none;
  color: black;
`;
