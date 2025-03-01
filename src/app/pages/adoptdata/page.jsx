"use client";

import { useEffect, useState } from "react";

const HomePage = () => {
  const [animals, setAnimals] = useState([]);

  useEffect(() => {
    const fetchAnimals = async () => {
      try {
        // Fetch the data from Firebase Realtime Database with the correct URL
        const response = await fetch("https://adoption11-default-rtdb.firebaseio.com/.json");
        const data = await response.json();
        
        // Assuming the data is an object with keys as IDs, we can transform it into an array
        const animalsArray = Object.keys(data).map((key) => ({
          id: key,
          ...data[key]
        }));

        setAnimals(animalsArray);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchAnimals();
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4">
      <div className="max-w-3xl w-full p-6 bg-white rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-4 text-black">Available Animals for Adoption</h1>
        <div>
          {animals.length === 0 ? (
            <p>No animals available for adoption.</p>
          ) : (
            <ul className="space-y-4">
              {animals.map((animal) => (
                <li key={animal.id} className="border-b pb-4">
                  <h3 className="text-xl font-semibold text-black">{animal.name}</h3>
                  <p className="text-gray-600">Type: {animal.type}</p>
                  <p className="text-gray-500">Description: {animal.description}</p>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
