'use client';

import React from 'react';
import { MapPin, Search } from 'lucide-react';

const DoctorSearchBox = () => {
  return (
    <div className="w-full max-w-3xl mx-auto bg-white rounded border shadow-sm flex flex-col md:flex-row overflow-hidden">
      {/* City input */}
      <div className="flex items-center px-4 py-3 border-b md:border-b-0 md:border-r w-full md:w-1/3">
        <MapPin className="text-gray-500 mr-2" />
        <input
          type="text"
          placeholder="Bangalore"
          className="w-full focus:outline-none text-sm"
        />
      </div>

      {/* Search input */}
      <div className="flex items-center px-4 py-3 w-full md:w-2/3">
        <Search className="text-gray-500 mr-2" />
        <input
          type="text"
          placeholder="Search doctors, clinics, hospitals, etc."
          className="w-full focus:outline-none text-sm"
        />
      </div>
    </div>
  );
};

export default DoctorSearchBox;
