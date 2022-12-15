import { useRouter } from "next/router";
import Link from "next/link";
import { routes } from "../../../data/lib";
import Header from "../../../components/Header/Header";

export default function Route() {
  const router = useRouter();
  const { sectorRoute } = router.query;

  if (sectorRoute === undefined) {
    return null;
  }

  const sectorRoutes = routes.filter((route) => route.sector === sectorRoute);

  return (
    <>
      <ul>
        {sectorRoutes.map((sectorRoute) => (
          <li>
            {sectorRoute.name} / {sectorRoute.grade}
          </li>
        ))}
      </ul>
      <Link href={`/sectors/${sectorRoutes[0].area}`}>Back to overview</Link>
    </>
  );
}
