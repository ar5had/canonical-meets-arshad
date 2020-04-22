import React, { useState, useEffect } from "react";
import CardsWrapper from "./CardsWrapper";

function App() {
  // Runs only on initial mount
  // Fetches data from wordpress api
  useEffect(() => {
    fetch("https://admin.insights.ubuntu.com/wp-json/wp/v2/posts?per_page=3&page=1&_embed=True")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);

  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  return (
    <section style={{ margin: "1.5rem 0" }}>
      {isLoading ? (
        <p className='u-align-text--center'>Loading...</p>
      ) : (
        <CardsWrapper data={data} />
      )}
    </section>
  );
}

export default App;
