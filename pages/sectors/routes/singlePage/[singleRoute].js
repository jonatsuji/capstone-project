import { useRouter } from "next/router";
import Link from "next/link";
import { routes } from "../../../../data/lib";
import Header from "../../../../components/Header/Header";
import styled from "styled-components";
import SearchBar from "../../../../components/SearchBar/SearchBar";
import BackArrow from "../../../../public/images/back-arrow.png";
import Image from "next/image";

export default function SingleRoute() {
  const router = useRouter();
  const { singleRoute } = router.query;

  if (!singleRoute) {
    return null;
  }

  const singleRoutes = routes.filter((route) => route.slug === singleRoute);

  return (
    <>
      <StyledPageContainer>
        <Header />

        {singleRoutes.map((singleRoute) => (
          <StyledHeadline key={singleRoute.id}>
            {singleRoute.name}
          </StyledHeadline>
        ))}
        <ImgWrapper href={`/sectors/routes/${singleRoutes[0].sector}`}>
          <Image src={BackArrow} alt="back-arrow" width={30} height={30} />
        </ImgWrapper>
      </StyledPageContainer>
    </>
  );
}

const StyledPageContainer = styled.div`
  background-image: url("/images/stacked-peaks-haikei.png");
  height: 100vh;
  background-size: cover;
  //border: 1px green solid;
  display: flex;
  justify-content: center;
  overflow-y: hidden;
`;

const ImgWrapper = styled(Link)`
  position: absolute;
  top: 80px;
  left: 15px;
`;

const StyledHeadline = styled.h1`
  position: relative;
  top: 50px;
`;
