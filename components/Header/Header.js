import styled from "styled-components";
import Image from "next/image";
import Logo from "../../public/images/Logo-light.png";
import Link from "next/link";
import HEART from "../../public/images/favorite_pagebutton.png";

export default function Header() {
  return (
    <StyledHeader>
      <Link href="/">
        <Image src={Logo} width={150} alt="logo-light" />
      </Link>
      <StyledHeartButton href="/favourites">
        <Image src={HEART} alt="fav_pagebutton" width={30} height={30} />
        <StyledFavourites>Favourites</StyledFavourites>
      </StyledHeartButton>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  background-color: var(--color-beige);
  position: fixed;
  width: 100vw;
  margin: 0px;
  padding: 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  top: 0px;
  z-index: 999;
`;

const StyledFavourites = styled.p`
  text-decoration: none;
  color: black;
  font-size: 15px;
  margin: 0px;
  padding: 0px;
`;

const StyledHeartButton = styled(Link)`
  position: absolute;
  text-decoration: none;
  margin-right: 10px;
  align-self: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  right: 0px;
`;
