import { useRouter } from "next/router";
import Link from "next/link";
import { routes } from "../../../data/lib";
import Header from "../../../components/Header/Header";
import SearchBar from "../../../components/SearchBar/SearchBar";
import styled from "styled-components";
import BackArrow from "../../../public/images/back-arrow.png";
import Image from "next/image";

export default function Route() {
  const router = useRouter();
  const { sectorRoute } = router.query;

  if (!sectorRoute) {
    return null;
  }

  const sectorRoutes = routes.filter((route) => route.sector === sectorRoute);

  function addSlugProperty(routes) {
    routes.forEach(function (route) {
      if (!route.hasOwnProperty("slug")) {
        route.slug = createSlug(route.name);
      }
    });
  }

  function createSlug(name) {
    return name
      .toLowerCase()
      .replace(/[^\w ]+/g, "")
      .replace(/ +/g, "-");
  }

  addSlugProperty(routes);

  return (
    <>
      <StyledPageContainer>
        <Header />

        <StyledHeadline>{sectorRoutes[0].sector}</StyledHeadline>
        <ImgWrapper href={`/sectors/${sectorRoutes[0].area}`}>
          <Image src={BackArrow} alt="back-arrow" width={30} height={30} />
        </ImgWrapper>
        <StyledList>
          {sectorRoutes.map((sectorRoute) => (
            <StyledLink
              href={`/sectors/routes/singlePage/${sectorRoute.slug}`}
              key={sectorRoute.id}
            >
              <StyledRoute>
                <div>{sectorRoute.name}</div>
                <StyledGrade>{sectorRoute.grade}</StyledGrade>
              </StyledRoute>
            </StyledLink>
          ))}
        </StyledList>
      </StyledPageContainer>
      <SearchBar />
    </>
  );
}

const StyledPageContainer = styled.div`
  background-image: url("/images/stacked-peaks-haikei.png");
  height: 100vh;
  background-size: cover;
  //border: 3px green solid;
  display: flex;
  justify-content: center;
  overflow-y: hidden;
`;

const StyledHeadline = styled.h1`
  position: relative;
  top: 50px;
`;

const StyledRoute = styled.li`
  border-top: 1px black solid;
  background-color: var(--color-item);
  display: grid;
  grid-template-columns: 85% 1fr;
  padding: 10px;
  font-size: 18px;
`;

const StyledGrade = styled.div`
  text-align: end;
  border-left: 1px black solid;
`;

const StyledList = styled.ul`
  position: absolute;
  top: 110px;
  //border-bottom: 3px black solid;
  padding-inline-start: 0px;
  list-style: none;
  width: 100vw;
  display: flex;
  flex-direction: column;
  height: 550px;
  overflow-y: scroll;
`;

const ImgWrapper = styled(Link)`
  position: absolute;
  top: 80px;
  left: 15px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`;
