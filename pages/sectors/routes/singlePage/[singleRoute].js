import { useRouter } from "next/router";
import Link from "next/link";
import { routes } from "../../../../data/lib";
import Header from "../../../../components/Header/Header";
import styled from "styled-components";
import "mapbox-gl/dist/mapbox-gl.css";
import BackArrow from "../../../../public/images/back-arrow.png";
import Image from "next/image";
import DetailTable from "../../../../components/SinglePageComponents/DetailTable";
import MapContainer from "../../../../components/SinglePageComponents/Map";
import Comments from "../../../../components/SinglePageComponents/Comments";

export default function SingleRoute() {
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
        <StyledHeadline>{currentRoute.name}</StyledHeadline>
        <ImgWrapper href={`/sectors/routes/${currentRoute.sector}`}>
          <Image src={BackArrow} alt="back-arrow" width={30} height={30} />
        </ImgWrapper>
        <StyledMediaContainer>
          <p>img</p>
        </StyledMediaContainer>
        <DetailTable />
        <MapContainer />
        <Comments id={currentRoute.id} />
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

const ImgWrapper = styled(Link)`
  position: sticky;
  top: 15px;
  margin-left: 15px;
  grid-area: a;
  align-self: center;
  z-index: 1000;
`;

const StyledLocationLink = styled.a`
  position: relative;
  grid-area: d;
  text-align: center;
  margin-top: 10px;
  color: black;
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
