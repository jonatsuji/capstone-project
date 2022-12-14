import styled from "styled-components";
import { areas } from "../../data/lib";
import Link from "next/link";

export default function Areas() {
  return (
    <StyledPageContainer>
      {areas.map((area) => (
        <StyledCard key={area.id}>
          <Link href={`sectors/${area.name}`}>
            {area.name} / {area.country}
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
