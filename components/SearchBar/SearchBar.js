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
    <>
      {filteredData.length != 0 && (
        <StyledSearch>
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
        </StyledSearch>
      )}

      <StyledSearchInputs>
        <input
          type="text"
          placeholder="search a Route..."
          onChange={handleFilter}
        />
      </StyledSearchInputs>
    </>
  );
}

const StyledSearch = styled.div`
  display: flex;
  position: fixed;
  bottom: 5px;
  width: 100%;
  justify-content: center;
  align-self: center;
  //border: 1px red solid;
  height: 250px;
`;

const StyledSearchInputs = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  width: 100%;
  bottom: 5px;
  //border: 1px green solid;

  input {
    position: relative;
    width: 90%;
    height: 40px;
    font-size: 20px;
    background-color: transparent;
    color: white;
    border: none;
    border-radius: 10px;

    :hover {
      outline: 1px solid var(--color-brown);
    }
    :focus {
      outline: 2px solid var(--color-brown);
      caret-color: white;
    }
    :placeholder-shown {
      &:focus {
        color: transparent;
      }
    }
  }
`;

const StyledSearchResults = styled.div`
  position: absolute;
  margin-top: 5px;
  width: 89%;
  height: 200px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  overflow: hidden;
  overflow-y: auto;
  border-radius: 10px;
  background-color: var(--color-beige);

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
