import { useRouter } from "next/router";
import Link from "next/link";
import { routes } from "../../../data/lib";
import Header from "../../../components/Header/Header";
import SearchBar from "../../../components/SearchBar/SearchBar";

export default function Route() {
  const router = useRouter();
  const { sectorRoute } = router.query;

  if (!sectorRoute) {
    return null;
  }

  const sectorRoutes = routes.filter((route) => route.sector === sectorRoute);

  return (
    <>
      <Header />
      <SearchBar />
      <ul>
        {sectorRoutes.map((sectorRoute) => (
          <li key={sectorRoute.id}>
            {sectorRoute.name} / {sectorRoute.grade}
          </li>
        ))}
      </ul>
      <Link href={`/sectors/${sectorRoutes[0].area}`}>Back to overview</Link>
    </>
  );
}
