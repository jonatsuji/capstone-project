import fav_empty from "../../public/images/favorite_empty.png";
import fav_filled from "../../public/images/favorite_filled.png";
import Image from "next/image";
import { useState } from "react";
import styled from "styled-components";

export default function FavButton({ currentRoute }) {
  const [isFavourite, setIsFavourite] = useState(
    currentRoute.isFavourite || false
  );

  const toggleFavourite = () => {
    if (!currentRoute.hasOwnProperty("isFavourite")) {
      currentRoute.isFavourite = true;
    } else {
      currentRoute.isFavourite = !currentRoute.isFavourite;
    }
    setIsFavourite(currentRoute.isFavourite);
    console.log(currentRoute);
  };

  return (
    <StyledButton onClick={toggleFavourite}>
      <Image
        src={isFavourite ? fav_filled : fav_empty}
        alt="Toggle Favourite"
        width={30}
        height={30}
      />
    </StyledButton>
  );
}

const StyledButton = styled.button`
  background-color: transparent;
  border-radius: 8px;
  border: none;
  height: 30px;
  align-self: center;
`;
