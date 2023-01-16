import styled from "styled-components";
import { routes } from "../../data/lib";
import { useRouter } from "next/router";

export default function DetailTable() {
  const router = useRouter();
  const { singleRoute } = router.query;

  if (!singleRoute) {
    return null;
  }
  const currentRoute = routes.find((route) => route.slug === singleRoute);

  return (
    <StyledDetails>
      <StyledDetailItem>
        <StyledProperty>Grade:</StyledProperty>
        <StyledPropertyValue>{currentRoute.grade}</StyledPropertyValue>
      </StyledDetailItem>
      <StyledDetailItem>
        <StyledProperty>Stone:</StyledProperty>
        <StyledPropertyValue>{currentRoute.stone}</StyledPropertyValue>{" "}
      </StyledDetailItem>
      <StyledDetailItem>
        <StyledProperty>Length:</StyledProperty>
        <StyledPropertyValue>{currentRoute.length}</StyledPropertyValue>{" "}
      </StyledDetailItem>
      <StyledDetailItem>
        <StyledProperty>Walk:</StyledProperty>
        <StyledPropertyValue>{currentRoute.walkTime}</StyledPropertyValue>{" "}
      </StyledDetailItem>
      <StyledDetailItem>
        <StyledProperty>Sector:</StyledProperty>
        <StyledPropertyValue>{currentRoute.sector}</StyledPropertyValue>{" "}
      </StyledDetailItem>
      <StyledDetailItem>
        <StyledProperty>Area:</StyledProperty>
        <StyledPropertyValue>{currentRoute.area}</StyledPropertyValue>{" "}
      </StyledDetailItem>
    </StyledDetails>
  );
}

const StyledDetails = styled.ul`
  position: relative;
  grid-area: e;
  line-height: 15px;
  list-style: none;
  padding-inline-start: 0px;
  font-size: 25px;
  font-weight: 1000;
  justify-self: center;
`;
const StyledDetailItem = styled.li`
  border-bottom: 2px black solid;
  width: 80vw;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const StyledProperty = styled.p``;

const StyledPropertyValue = styled.p`
  text-align: right;
`;
