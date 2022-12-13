import styled from "styled-components";
import Image from "next/image";
import Logo from "../../assets/images/Logo(cragList).png";

export default function Header() {
  return (
    <>
      <StyledHeader>
        <Image src={Logo} width={100} />
      </StyledHeader>
    </>
  );
}

const StyledHeader = styled.h1`
  display: flex;
  justify-content: center;
  border: 1px black solid;
`;
