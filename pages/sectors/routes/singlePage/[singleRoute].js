import { useRouter, useState } from "next/router";
import Link from "next/link";
import Header from "../../../../components/Header/Header";
import styled from "styled-components";
import "mapbox-gl/dist/mapbox-gl.css";
import BackArrow from "../../../../public/images/back-arrow.png";
import Image from "next/image";
import DetailTable from "../../../../components/SinglePageComponents/DetailTable";
import MapContainer from "../../../../components/SinglePageComponents/Map";
import Comments from "../../../../components/SinglePageComponents/Comments";
import ROUTE_IMAGE from "../../../../public/images/overhang-red-stone.jpg";
import FavButton from "../../../../components/SinglePageComponents/FavButton";

export default function SingleRoute({ routes }) {
  const router = useRouter();
  const { singleRoute } = router.query;

  if (!singleRoute) {
    return null;
  }

  const currentRoute = routes.find((route) => route.slug === singleRoute);

  return (
    <>
      <Header />
      <StyledPageContainer>
        <StyledHeadline>
          {currentRoute.name}
          <StyledFavButton currentRoute={currentRoute} />
        </StyledHeadline>
        <ImgWrapper href={`/sectors/routes/${currentRoute.sector}`}>
          <Image src={BackArrow} alt="back-arrow" width={35} height={35} />
        </ImgWrapper>

        <DetailTable routes={routes} />
        <StyledMediaContainer>
          <Image
            src={ROUTE_IMAGE}
            alt="Image of route"
            width={470}
            height={280}
          />
        </StyledMediaContainer>
        <MapContainer routes={routes} />
        <Comments currentRouteID={currentRoute.id} />
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
    "g g"
    "h h";
  grid-template-columns: 1fr 1fr;
`;

const StyledFavButton = styled(FavButton)`
  align-self: center;
`;

const ImgWrapper = styled(Link)`
  position: sticky;
  top: 15px;
  margin-left: 15px;
  grid-area: a;
  align-self: center;
  z-index: 1000;
  gap: 10px;
`;

const StyledHeadline = styled.h1`
  top: 50px;
  grid-area: b;
  text-align: right;
  margin-right: 10px;
  display: flex;
  gap: 10px;
`;

const StyledMediaContainer = styled.div`
  border: 1px solid black;
  grid-area: d;
  width: 90vw;
  height: 200px;
  top: 130px;
  justify-self: center;
  overflow: hidden;
`;
