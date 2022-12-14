import { useRouter } from "next/router";
import Link from "next/link";
import { routes } from "../../../data/lib";

export default function Route() {
  const router = useRouter();
  const slug = router.query.slug;

  if (slug === undefined) {
    return null;
  }

  const sectorRoutes = routes.filter((route) => route.sector === slug);

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
