import { useRouter } from "next/router";
import Link from "next/link";
import { sectors } from "../../data/lib";
import styled from "styled-components";
import Header from "../../components/Header/Header.js";
import Image from "next/image";
import BackArrow from "../../public/images/back-arrow-white.png";
import SearchBar from "../../components/SearchBar/SearchBar";

export default function Sectors() {
  const router = useRouter();
  const { areaSector } = router.query;

  if (!areaSector) {
    return null;
  }

  const areaSectors = sectors.filter((sector) => sector.area === areaSector);

  return (
    <>
      <Header />
      <SearchBar />
      <ImgWrapper href="/">
        <Image src={BackArrow} alt="back-arrow" width={30} height={30} />
      </ImgWrapper>
      <StyledPageContainer>
        {areaSectors.map((areaSector) => (
          <StyledSectorCard key={areaSector.id}>
            <StyledLink href={`routes/${areaSector.name}`}>
              {areaSector.name}
            </StyledLink>
            <StyledRoutes>Routes: {areaSector.routes}</StyledRoutes>
            <StyledStone>{areaSector.stone}</StyledStone>
          </StyledSectorCard>
        ))}
      </StyledPageContainer>
    </>
  );
}

const StyledSectorCard = styled.div`
  text-align: left;
  align-items: flex-end;
  font-weight: bold;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  justify-content: center;
  background-color: #af9164;
  border: 1px black solid;
  border-radius: 35px;
  padding: 20px;
  margin: 10px;
  :hover {
    cursor: pointer;
  }
  font-size: 25px;
`;

const StyledLink = styled(Link)`
  text-decoration: underline;
  color: #002400;
  grid-column-start: 1;
  grid-column-end: 3;
  box-shadow: inset 0 0 0 0 #54b3d6;
  margin: 0 -0.25rem;
  padding: 0 0.25rem;
`;

const StyledRoutes = styled.div`
  font-size: 16px;
  grid-column-start: 1;
  grid-column-end: 3;
  border-top: 1px black solid;
`;

const StyledStone = styled.div`
  font-size: 16px;
  border-top: 1px black solid;
`;

const StyledPageContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;
  justify-content: flex-end;
  gap: 20px;
  height: 100vh;
  margin-top: 80px;
`;

const ImgWrapper = styled(Link)`
  position: relative;
  top: 80px;
  left: 15px;
`;
