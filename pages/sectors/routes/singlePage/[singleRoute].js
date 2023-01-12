import { useRouter } from "next/router";
import Link from "next/link";
import { routes } from "../../../../data/lib";
import Header from "../../../../components/Header/Header";
import styled from "styled-components";
import "mapbox-gl/dist/mapbox-gl.css";
import Map from "react-map-gl";
import { Marker, GeolocateControl, NavigationControl } from "react-map-gl";
import BackArrow from "../../../../public/images/back-arrow.png";
import Image from "next/image";

export default function SingleRoute() {
  const router = useRouter();
  const { singleRoute } = router.query;

  if (!singleRoute) {
    return null;
  }

  const currentRoute = routes.find((route) => route.slug === singleRoute);

  // function addMeter(meter) {
  //   if (meter.trim.length > 0) {
  //     return meter + "m";
  //   } else {
  //     return meter;
  //   }
  // }

  return (
    <>
      <Header />
      <StyledPageContainer>
        <StyledHeadline>{currentRoute.name}</StyledHeadline>

        <StyledLocationLink href="#map">See Location</StyledLocationLink>
        <ImgWrapper href={`/sectors/routes/${currentRoute.sector}`}>
          <Image src={BackArrow} alt="back-arrow" width={30} height={30} />
        </ImgWrapper>
        <StyledMediaContainer>
          <p>img</p>
        </StyledMediaContainer>
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
            <StyledPropertyValue>
              {currentRoute.length}
            </StyledPropertyValue>{" "}
          </StyledDetailItem>
          <StyledDetailItem>
            <StyledProperty>Walk:</StyledProperty>
            <StyledPropertyValue>
              {currentRoute.walkTime}
            </StyledPropertyValue>{" "}
          </StyledDetailItem>
          <StyledDetailItem>
            <StyledProperty>Sector:</StyledProperty>
            <StyledPropertyValue>
              {currentRoute.sector}
            </StyledPropertyValue>{" "}
          </StyledDetailItem>
          <StyledDetailItem>
            <StyledProperty>Area:</StyledProperty>
            <StyledPropertyValue>{currentRoute.area}</StyledPropertyValue>{" "}
          </StyledDetailItem>
        </StyledDetails>
        <StyledMapContainer id="map">
          <StyledMapHeadline>Location</StyledMapHeadline>
          <Map
            mapboxAccessToken="pk.eyJ1Ijoiam9uYXRzdWppIiwiYSI6ImNsY3Jpamc3MjAxNXYzcG14ZWhsZjJpcTkifQ.J65lhDbm_-LV0-exyyKFlA"
            style={{
              width: "100vw",
              height: "300px",
              borderRadius: "15px",
              border: "2px solid black",
            }}
            initialViewState={{
              longitude: currentRoute.lng,
              latitude: currentRoute.lat,
              zoom: 15,
            }}
            mapStyle="mapbox://styles/mapbox/outdoors-v12"
          >
            <Marker
              longitude={currentRoute.lng}
              latitude={currentRoute.lat}
              mapboxAccessToken="pk.eyJ1Ijoiam9uYXRzdWppIiwiYSI6ImNsY3Jpamc3MjAxNXYzcG14ZWhsZjJpcTkifQ.J65lhDbm_-LV0-exyyKFlA"
            />
            <GeolocateControl />
            <NavigationControl />
          </Map>
        </StyledMapContainer>
      </StyledPageContainer>
    </>
  );
}

const StyledPageContainer = styled.div`
  background-image: url("/images/stacked-peaks-haikei.png");
  background: hsla(230, 50%, 70%, 0.4);
  background-size: cover;
  margin-top: 61px;
  justify-items: stretch;
  display: grid;
  min-height: 100vh;
  grid-template-rows: auto;
  grid-template-areas:
    "a b"
    "c c"
    "d d"
    "e e"
    "f f"
    "g g";
  grid-template-columns: 1fr 1fr;
`;

const ImgWrapper = styled(Link)`
  margin-left: 15px;
  grid-area: a;
  align-self: center;
`;

const StyledLocationLink = styled.a`
  position: relative;
  grid-area: d;
`;

const StyledHeadline = styled.h1`
  top: 50px;
  grid-area: b;
  text-align: right;
  margin-right: 40px;
`;

const StyledMediaContainer = styled.div`
  border: 1px solid red;
  grid-area: c;
  width: 90vw;
  height: 200px;
  top: 130px;
  justify-self: center;
`;

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

const StyledMapHeadline = styled.h2`
  text-align: center;
  font-size: 30px;
`;

const StyledMapContainer = styled.div`
  position: relative;
  grid-area: g;
  justify-self: center;
`;
