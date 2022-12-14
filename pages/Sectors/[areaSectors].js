import { useRouter } from "next/router";
import Link from "next/link";
import { sectors } from "../../data/lib";

export default function Sectors() {
  const router = useRouter();
  const { slug } = router.query;

  if (slug === undefined) {
    return null;
  }

  const areaSectors = sectors.filter((sector) => sector.area === slug);
  return (
    <>
      {areaSectors.map((areaSector) => (
        <h2>
          {areaSector.name} / {areaSector.routes}
        </h2>
      ))}

      <Link href="/">Back to overview</Link>
    </>
  );
}
