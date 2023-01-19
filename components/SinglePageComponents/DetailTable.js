import styled from "styled-components";
import { useRouter } from "next/router";

export default function DetailTable({ routes }) {
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
      {currentRoute.video != "" && (
        <StyledDetailItem>
          <StyledProperty>Video:</StyledProperty>
          <StyledPropertyValue>
            <StyledYoutubeLink href={currentRoute.video}>
              watch on youtube
            </StyledYoutubeLink>
          </StyledPropertyValue>{" "}
        </StyledDetailItem>
      )}
    </StyledDetails>
  );
}

const StyledDetails = styled.ul`
  position: relative;
  grid-area: c;
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

const StyledYoutubeLink = styled.a`
  text-decoration: none;
  color: darkred;
`;

const StyledPropertyValue = styled.p`
  text-align: right;
`;
