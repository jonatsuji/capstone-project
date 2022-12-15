import styled from "styled-components";
import Image from "next/image";
import Logo from "../../public/images/Logo-light.png";

export default function Header() {
  return (
    <StyledHeader>
      <Image src={Logo} width={150} alt="logo-light" />
    </StyledHeader>
  );
}

const StyledHeader = styled.h1`
  background-color: var(--color-beige);
  position: fixed;
  width: 100vw;
  margin: 0px;
  padding: 10px;
  display: flex;
  justify-content: center;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  //border: 1px black solid;
`;
