import Header from "../../../components/Header/Header.js";

export default function RoutesList({ routes }) {
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
