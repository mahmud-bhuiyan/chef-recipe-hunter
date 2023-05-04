import { useEffect, useState } from "react";

import ChefsCard from "../ChefsCard/ChefsCard";

function Home() {
  const [chefsData, setChefsData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:7000/chefs")
      .then((res) => res.json())
      .then((data) => setChefsData(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="container">
      <h1 className="text-center my-4">Italian Chefs</h1>
      <div className="row">
        {chefsData.map((chef) => (
          <ChefsCard key={chef.id} chef={chef}></ChefsCard>
        ))}
      </div>
    </div>
  );
}

export default Home;
