import { useEffect, useState } from "react";
import ChefsCard from "../ChefsCard/ChefsCard";
import ContactUS from "../ContactUS/ContactUS";

function Home() {
  const [chefsData, setChefsData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:7000/chefs")
      .then((res) => res.json())
      .then((data) => setChefsData(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <div className="my-5">
        <h1 className="text-center my-5">Italian Chefs</h1>
        <div className="row">
          {chefsData.map((chef) => (
            <ChefsCard key={chef.id} chef={chef}></ChefsCard>
          ))}
        </div>
      </div>
      <ContactUS></ContactUS>
    </>
  );
}

export default Home;
