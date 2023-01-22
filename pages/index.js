
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import logo from "../public/images/Logo(cragList).png";


export default function Home({ areas, routes }) {
  return (

    <Pagecontainer>
      <ImgWrapper>
        <StyledLogo src={logo} />
        <StyledLink href={"/startAreas"}>Start Exploring...</StyledLink>
      </ImgWrapper>
    </Pagecontainer>
  );
}

const Pagecontainer = styled.section`
  height: 100vh;
  width: 100vw;
  background-image: url("/images/Studio_Project.gif");
  background-size: cover;
`;

const ImgWrapper = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background: rgb(255, 255, 255);
  background: linear-gradient(
    0deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(187, 187, 187, 0.9066220238095238) 30%,
    rgba(253, 187, 45, 0) 100%
  );
  z-index: 9999;
`;

const StyledLink = styled(Link)`
  text-align: center;
  position: absolute;
  top: 75%;
  color: black;
  font-size: 27px;
`;

const StyledLogo = styled(Image)`
  position: absolute;
  bottom: 0px;
  overflow: hidden;
  width: 150px;
  height: auto;
`;
