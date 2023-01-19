import Areas from "../components/Areas/Areas";

export default function Home({ areas, routes }) {
  return (
    <>
      <Areas areas={areas} routes={routes} />
    </>
  );
}
