import { useRouter } from "next/router";
import Link from "next/link";
import { sectors } from "../../data/lib";
import styled from "styled-components";
import Header from "../../components/Header/Header.js";

export default function Sectors() {
  const router = useRouter();
  const { areaSector } = router.query;

  if (areaSector === undefined) {
    return null;
  }

  const areaSectors = sectors.filter((sector) => sector.area === areaSector);

  return (
    <>
      <Header />
      <Link href="/">Back to overview</Link>
      <StyledPageContainer>
        {areaSectors.map((areaSector) => (
          <StyledSectorCard key={areaSector.id}>
            <Link href={`routes/${areaSector.name}`}>
              {areaSector.name} / {areaSector.routes}
            </Link>
          </StyledSectorCard>
        ))}
      </StyledPageContainer>
    </>
  );
}

const StyledSectorCard = styled.div`
  border: 1px black solid;
  border-radius: 35px;
  padding: 60px;
  :hover {
    cursor: pointer;
  }
`;

const StyledPageContainer = styled.div`
  display: grid;
  grid-template-columns: 80%;
  justify-content: center;
  gap: 20px;
`;
