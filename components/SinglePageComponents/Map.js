import Map from "react-map-gl";
import { Marker, GeolocateControl, NavigationControl } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import styled from "styled-components";
import { useRouter } from "next/router";
import { routes } from "../../data/lib";

export default function MapContainer() {
  const router = useRouter();
  const { singleRoute } = router.query;

  if (!singleRoute) {
    return null;
  }

  const currentRoute = routes.find((route) => route.slug === singleRoute);

  return (
    <StyledMapContainer id="map">
      <StyledMapHeadline>Location</StyledMapHeadline>
      <Map
        mapboxAccessToken="pk.eyJ1Ijoiam9uYXRzdWppIiwiYSI6ImNsY3Jpamc3MjAxNXYzcG14ZWhsZjJpcTkifQ.J65lhDbm_-LV0-exyyKFlA"
        style={{
          width: "100vw",
          maxWidth: "800px",
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
  );
}

const StyledMapHeadline = styled.h2`
  text-align: center;
  font-size: 30px;
  width: 100vw;
`;

const StyledMapContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  grid-area: g;
  align-self: center;
  align-items: center;
`;
