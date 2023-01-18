import GlobalStyles from "../components/GlobalStyles";
import { useState, useEffect } from "react";

function MyApp({ Component, pageProps }) {
  const [boulderData, setBoulderData] = useState([]);
  const areas = [];
  const sectors = [];
  const routes = [];

  async function fetchBoulderData() {
    try {
      const response = await fetch("/api/boulder-datas");
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    async function performFetch() {
      const boulderData = await fetchBoulderData();
      setBoulderData(boulderData);
    }
    performFetch();
  }, []);

  boulderData.forEach((dataObject) => {
    if (dataObject.type === "area") {
      areas.push(dataObject);
    } else if (dataObject.type === "sector") {
      sectors.push(dataObject);
    } else if (dataObject.type === "route") {
      routes.push(dataObject);
    }
  });

  if (routes.length === 0 && sectors.length === 0 && areas.length === 0) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <GlobalStyles />
      <Component
        {...pageProps}
        areas={areas}
        sectors={sectors}
        routes={routes}
      />
    </>
  );
}

export default MyApp;
