import { useRouter } from "next/router";
import Link from "next/link";
import { routes } from "../../../data/lib";
import Header from "../../../components/Header/Header";
import SearchBar from "../../../components/SearchBar/SearchBar";
import styled from "styled-components";
import BackArrow from "../../../public/images/back-arrow-white.png";
import Image from "next/image";

export default function Route() {
  const router = useRouter();
  const { sectorRoute } = router.query;

  if (!sectorRoute) {
    return null;
  }

  const sectorRoutes = routes.filter((route) => route.sector === sectorRoute);

  return (
    <StyledPageContainer>
      <Header />
      <ImgWrapper href={`/sectors/${sectorRoutes[0].area}`}>
        <Image src={BackArrow} alt="back-arrow" width={30} height={30} />
      </ImgWrapper>
      <SearchBar />
      <StyledList>
        {sectorRoutes.map((sectorRoute) => (
          <li key={sectorRoute.id}>
            {sectorRoute.name} / {sectorRoute.grade}
          </li>
        ))}
      </StyledList>
    </StyledPageContainer>
  );
}

const StyledPageContainer = styled.div`
  background-image: url("/images/stacked-peaks-haikei.png");
  height: 100vh;
  background-size: cover;
  border: 1px green solid;
  display: flex;
  justify-content: center;
`;

const StyledList = styled.ul`
  position: absolute;
  top: 60px;
  border: 1px red solid;
  padding-inline-start: 0px;
  list-style: none;
`;

const ImgWrapper = styled(Link)`
  position: absolute;
  top: 80px;
  left: 15px;
`;
