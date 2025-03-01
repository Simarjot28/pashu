// pages/index.js

import { useEffect, useState } from "react";

const HomePage = () => {
  const [animals, setAnimals] = useState([]);

  useEffect(() => {
    const fetchAnimals = async () => {
      const response = await fetch("/api/adopt");
      const data = await response.json();
      setAnimals(data);
    };

    fetchAnimals();
  }, []);

  return (
    <div className="container">
      <h1>Available Animals for Adoption</h1>
      <div>
        {animals.length === 0 ? (
          <p>No animals available for adoption.</p>
        ) : (
          <ul>
            {animals.map((animal) => (
              <li key={animal.id}>
                <h3>{animal.name}</h3>
                <p>Type: {animal.type}</p>
                <p>Description: {animal.description}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default HomePage;
