import styled from "styled-components";
import { areas } from "../../data/lib";
import Link from "next/link";
import SearchBar from "../SearchBar/SearchBar";

export default function Areas() {
  return (
    <>
      <StyledPageContainer>
        <StyledUl>
          <StyledTopic>Boulderareas</StyledTopic>
          {areas.map((area) => (
            <StyledList key={area.id}>
              <StyledLink href={`sectors/${area.name}`}>
                <StyledCard>
                  <StyledName>{area.name}</StyledName>
                  <StyledRoutes>Routes: {area.routes}</StyledRoutes>
                  <StyledStone>{area.stone}</StyledStone>
                  <StyledCountry>{area.country}</StyledCountry>
                </StyledCard>
              </StyledLink>
            </StyledList>
          ))}
        </StyledUl>
      </StyledPageContainer>
      <SearchBar />
    </>
  );
}

const StyledUl = styled.ul`
  padding-inline-start: 0px;
  //border: 1px green solid;
  margin-top: 230px;
`;

const StyledCard = styled.article`
  text-align: left;
  align-items: flex-end;
  font-weight: bold;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  justify-content: center;
  background-color: #af9164;
  border: 1px black solid;
  border-radius: 35px;
  padding: 20px;
  max-width: 800px;

  width: 100vw;
  :hover {
    cursor: pointer;
  }

  font-size: 25px;
  -webkit-box-shadow: 0px 12px 10px -6px rgba(0, 0, 0, 0.73);
  box-shadow: 0px 12px 10px -6px rgba(0, 0, 0, 0.73);
`;

const StyledLink = styled(Link)`
  text-decoration: underline;
  color: #002400;
  box-shadow: inset 0 0 0 0 #54b3d6;
  margin: 0 -0.25rem;
  padding: 0 0.25rem;
`;

const StyledRoutes = styled.p`
  margin: 0px;
  font-size: 16px;
  grid-column-start: 1;
  grid-column-end: 3;
  border-top: 1px black solid;
`;

const StyledName = styled.p`
  font-size: 24px;
  grid-column-start: 1;
  grid-column-end: 3;
  margin: 0px;
`;

const StyledStone = styled.p`
  font-size: 16px;
  border-top: 1px black solid;
  margin: 0px;
`;

const StyledCountry = styled.p`
  font-size: 16px;
  margin: 0px;
  border-top: 1px black solid;
`;

const StyledPageContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  height: 92vh;
  overflow-x: hidden;
`;

const StyledTopic = styled.h1`
  position: relative;
  color: black;
  //border: 1px solid green;
  padding-left: 10px;
  font-size: 25px;
  font-weight: bold;
  text-decoration: underline;
  z-index: -1;
`;

const StyledList = styled.li`
  display: flex;
  list-style: none;
  //border: 1px solid black;
  width: 100%;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
`;
