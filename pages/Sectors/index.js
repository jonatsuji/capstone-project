import styled from "styled-components";
import { sectors } from "../../data/lib";
import Link from "next/link";

export default function SectorsList() {
  return (
    <StyledPageContainer>
      {sectors.map((sector) => (
        <StyledCard key={sector.id}>
          <Link href={`/areas`}>
            {sector.name} / Routes: {sector.routes}
          </Link>
        </StyledCard>
      ))}
    </StyledPageContainer>
  );
}

const StyledCard = styled.div`
  border: 1px black solid;
  border-radius: 35px;
  padding: 80px;
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
