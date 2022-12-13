import { routes } from "../../data/lib.js";

export default function RoutesList() {
  return (
    <ul>
      {routes?.map((route) => (
        <li key={route.id}>
          {route.name} / {route.grade} / {route.area}
        </li>
      ))}
    </ul>
  );
}
