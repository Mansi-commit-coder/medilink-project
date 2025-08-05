"use client";
import React, { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { ChevronDown, MapPin, Search } from "lucide-react";
import { SlCheck } from "react-icons/sl";


interface Doctor {
  id: number;
  doctor_name: string;
  clinic_name: string;
  specialization: string;
  experience_years: number;
  address: string;
  consultation_fee: number;
  rating_percentage: number;
  review_count: number;
  image: string;
}

const DoctorsPage = () => {
  const searchParams = useSearchParams();
  const city = searchParams.get("city")?.toLowerCase();
  const specialization = searchParams.get("specialization")?.toLowerCase();

  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const [filteredDoctors, setFilteredDoctors] = useState<Doctor[]>([]);

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const res = await fetch(
  `http://localhost:8080/api/doctors?city=${city}&specialization=${specialization}`
);

        const data = await res.json();
        setDoctors(data);
      } catch (error) {
        console.error("Failed to fetch doctor data:", error);
      }
    };
    fetchDoctors();
  }, []);

  useEffect(() => {
    if (city && specialization) {
      const filtered = doctors.filter(
        (doc) =>
          doc.specialization.toLowerCase().includes(specialization) &&
          doc.address.toLowerCase().includes(city)
      );
      setFilteredDoctors(filtered);
    }
  }, [doctors, city, specialization]);

  const [cityy, setCityy] = useState("Bangalore");
    const [search, setSearch] = useState("");
    const router = useRouter();
  
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      if (cityy.trim() && search.trim()) {
        router.push(`/doctors?city=${encodeURIComponent(cityy)}&specialization=${encodeURIComponent(search)}`);
        
      }
    };

  return (
    <div className="w-full h-screen" style={{ borderTop: "5.5rem solid white" }}>
      <div className="relative max-w-5xl mx-auto items-center">
      <form onSubmit={handleSubmit} className="w-full mt-1">
          <div className="w-full bg-white overflow-hidden flex shadow-md border border-gray-300 rounded-md">
            {/* City Input */}
            <div className="relative w-[30%] flex items-center border-r border-gray-300">
              <MapPin className="absolute left-3 text-gray-400" size={20} />
              <input
                type="text"
                value={city}
                onChange={(e) => setCityy(e.target.value)}
                className="w-full pl-10 pr-4 py-3 text-black outline-none"
                placeholder="Enter city"
                required
              />
            </div>

            {/* Search Input */}
            <div className="relative w-[70%] flex items-center">
              <button type="submit" className="absolute left-3 text-gray-400 hover:text-blue-500">
                <Search size={20} />
              </button>
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-3 text-black outline-none"
                placeholder="Search doctors, clinics, hospitals, etc."
                required
              />
            </div>

          </div>
        </form>
        </div>
      
    {/* Filter Section */}
        <div className="w-full bg-[#2d3e94] text-white px-6 py-4 flex flex-wrap justify-center items-center gap-4 mt-6">
          {["Gender", "Patient Stories", "Experience"].map((label) => (
            <div className="relative" key={label}>
              <select className="bg-[#454E9D] text-white text-sm pl-4 pr-30 py-2 appearance-none focus:outline-none">
                <option>{label}</option>
                {label === "Gender" && (
                  <>
                    <option>Male</option>
                    <option>Female</option>
                  </>
                )}
                {label === "Patient Stories" && (
                  <>
                    <option>100+ Stories</option>
                    <option>500+ Stories</option>
                  </>
                )}
                {label === "Experience" && (
                  <>
                    <option>5+ Years</option>
                    <option>10+ Years</option>
                  </>
                )}
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-white pointer-events-none" />
            </div>
          ))}

          {/* All Filters */}
          <div className="flex items-center cursor-pointer text-sm mr-6">
            <span>All Filters</span>
            <ChevronDown className="ml-1 h-4 w-4 text-white" />
          </div>

          {/* Sort By */}
          <div className="flex items-center gap-2 text-sm ml-4">
            <span>Sort By</span>
            <div className="relative">
              <select className="bg-[#384a9e] text-white pl-3 pr-12 py-2 w-45 appearance-none focus:outline-none">
                <option>Relevance</option>
                <option>Experience</option>
                <option>Rating</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-white pointer-events-none" />
            </div>
          </div>
        </div>
    <div className="relative max-w-5xl mx-auto items-center min-h-[calc(100vh-50rem)]">
      <h1 className="text-2xl font-semibold mb-4">
        {filteredDoctors.length} {specialization}s available in {city}
      </h1>

      <p className="text-gray-600 mb-6 flex items-center gap-2">
        <SlCheck /> Book appointments with minimum wait-time & verified doctor details
      </p>

      <div className="space-y-6">
        {filteredDoctors.map((doc) => (
          <div
            key={doc.id}
            className="flex gap-4 border border-gray-200 rounded-lg p-4 shadow-sm bg-white"
          >
            {/* Image */}
           <img
  src={`http://localhost:8080/images/${doc.image.split("/").pop()}`}
  alt={doc.doctor_name}
  className="w-20 h-20 object-cover rounded-full"
/>


            {/* Info */}
            <div className="flex-1">
              <h2 className="text-lg font-semibold text-blue-600">
                {doc.doctor_name}
              </h2>
              <p className="text-sm text-gray-600">{doc.specialization}</p>
              <p className="text-sm text-gray-500">
                {doc.experience_years} years experience
              </p>
              <p className="text-sm text-gray-500">{doc.address}</p>
              <p className="text-sm text-gray-600 mt-1">
                ₹{doc.consultation_fee} Consultation Fee
              </p>

              {/* Rating */}
              <div className="flex items-center gap-2 mt-2">
                <span className="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">
                  {doc.rating_percentage}%
                </span>
                <span className="text-sm text-blue-500 underline cursor-pointer">
                  {doc.review_count} Patient Stories
                </span>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col items-end justify-between">
              <span className="text-green-600 font-semibold text-sm">
                📅 Available Today
              </span>
              <button className="bg-blue-500 text-white text-sm px-3 py-2 rounded hover:bg-blue-600">
                Book Clinic Visit
              </button>
              <button className="border mt-2 text-sm px-3 py-2 rounded hover:bg-gray-100">
                Contact Clinic
              </button>
            </div>
          </div>
        ))}
        {filteredDoctors.length === 0 && (
          <p className="text-gray-500">No doctors found.</p>
        )}
      </div>
    </div>
    </div>
  );
};

export default DoctorsPage;