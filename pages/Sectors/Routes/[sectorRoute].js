import { useRouter } from "next/router";
import Link from "next/link";
import { routes } from "../../../data/lib";

export default function Route() {
  const router = useRouter();
  const { sectorRoute } = router.query;

  if (sectorRoute === undefined) {
    return null;
  }

  const sectorRoutes = routes.filter((route) => route.sector === sectorRoute);

  return (
    <>
      {sectorRoutes.map((sectorRoute) => (
        <h2>
          {sectorRoute.name} / {sectorRoute.grade}
        </h2>
      ))}

      <Link href="/">Back to overview</Link>
    </>
  );
}
