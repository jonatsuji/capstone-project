import { useRouter } from "next/router";
import Link from "next/link";
import { sectors } from "../../data/lib";

export default function Sectors() {
  const router = useRouter();
  const { areaSector } = router.query;

  // if (areaSector === undefined) {
  //   return null;
  // }

  const areaSectors = sectors.filter((sector) => sector.area === areaSector);

  {
    areaSectors.map((areaSector) => {
      return (
        <h2 key={areaSector.id}>
          <Link href={`routes/${areaSector.name}`}>
            {areaSector.name} / {areaSector.routes}
          </Link>
        </h2>
      );
    });
  }
}
