import styled from "styled-components";
import Image from "next/image";
import Logo from "../../assets/images/Logo-light.png";

export default function Header() {
  return (
    <StyledHeader>
      <Image src={Logo} width={150} alt="logo-light" />
    </StyledHeader>
  );
}

const StyledHeader = styled.h1`
  display: flex;
  justify-content: center;
  //border: 1px black solid;
`;
