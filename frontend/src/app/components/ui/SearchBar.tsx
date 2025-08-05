'use client';

import React from 'react';

export default function SearchBar({
  city,
  setCity,
  specialization,
  setSpecialization,
}: {
  city: string;
  setCity: (value: string) => void;
  specialization: string;
  setSpecialization: (value: string) => void;
}) {
  return (
    <div className="w-full bg-white rounded-none shadow-md px-6 py-5 flex flex-col md:flex-row items-center gap-4 ">
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city (e.g., JP Nagar)"
        className="w-full md:w-1/2 px-4 py-3 text-black border border-gray-300 rounded-none focus:outline-none"
      />
      <input
        type="text"
        value={specialization}
        onChange={(e) => setSpecialization(e.target.value)}
        placeholder="Enter specialization (e.g., Dermatologist)"
        className="w-full md:w-1/2 px-4 py-3 text-black border border-gray-300 rounded-none focus:outline-none"
      />
    </div>
  );
}
