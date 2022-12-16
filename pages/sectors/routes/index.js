import Header from "../../../components/Header/Header.js";
import { routes } from "../../../data/lib.js";

export default function RoutesList() {
  return (
    <>
      <Header />
      <ul>
        {routes?.map((route) => (
          <li key={route.id}>
            {route.name} / {route.grade} / {route.area}
          </li>
        ))}
      </ul>
    </>
  );
}
