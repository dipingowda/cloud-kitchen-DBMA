"use client"
import Image from "next/image";
import LandingPage from "@/components/LandingPage"; // Import the LandingPage component

import { useEffect, useState } from 'react';

export default function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('/api/getData')
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <main>
      <div>
      <LandingPage /> 
      </div>
      <div>
      <ul>
        {data.map((item, index) => (
          <li className = 'text-yellow-500' key={index}>{JSON.stringify(item)}</li>
        ))}
      </ul>
      </div>
      
    </main>
  );
}
