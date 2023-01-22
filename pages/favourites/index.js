import Header from "../../components/Header/Header";
import ShowFavourites from "../../components/ShowFavourites/ShowFavourites";

export default function Favourites({ routes }) {
  return (
    <>
      <Header />
      <ShowFavourites routes={routes} />
    </>
  );
}
