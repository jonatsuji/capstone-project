import Image from "next/image";
import BackArrow from "../../public/images/back-arrow.png";
import styled from "styled-components";
import { useRouter } from "next/router";
import Link from "next/link";

export default function ShowFavourites({ routes }) {
  const favouriteObjects = routes.filter((route) => route.isFavourite === true);

  const router = useRouter();

  return (
    <>
      <ImgWrapper onClick={() => router.back()}>
        <Image src={BackArrow} alt="back-arrow" width={35} height={35} />
      </ImgWrapper>
      <StyledTopic>Your Favourites</StyledTopic>
      <StyledList>
        {favouriteObjects.map((route) => (
          <StyledLink
            href={`/sectors/routes/singlePage/${route.slug}`}
            key={route.id}
          >
            <StyledRoute>
              <div>
                {route.name} / {route.sector} / {route.area}
              </div>
              <StyledGrade>{route.grade}</StyledGrade>
            </StyledRoute>
          </StyledLink>
        ))}
      </StyledList>
    </>
  );
}

const ImgWrapper = styled.button`
  position: relative;
  top: 15px;
  margin-left: 15px;
  grid-area: a;
  align-self: center;
  z-index: 1000;
  gap: 10px;
  background-color: transparent;
  border: none;
`;

const StyledGrade = styled.div`
  text-align: end;
  border-left: 1px black solid;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

const StyledList = styled.ul`
  position: absolute;
  top: 110px;
  padding-inline-start: 0px;
  list-style: none;
  width: 100vw;
  display: flex;
  flex-direction: column;
  height: 72%;
  overflow-y: scroll;
`;

const StyledRoute = styled.li`
  border: 1px black solid;
  background-color: var(--color-item);
  display: grid;
  grid-template-columns: 85% 1fr;
  padding: 10px;
  font-size: 18px;
`;

const StyledTopic = styled.h1`
  position: relative;
  color: black;
  padding-left: 10px;
  font-size: 25px;
  font-weight: bold;
  text-decoration: underline;
  z-index: -1;
  margin-top: 40px;
`;
