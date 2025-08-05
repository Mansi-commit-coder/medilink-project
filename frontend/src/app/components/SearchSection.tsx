"use client";
import { MapPin, Search } from "lucide-react";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

interface SearchSectionProps {
  compactMode?: boolean;
}

function SearchSection({ compactMode = false }: SearchSectionProps) {
  const [city, setCity] = useState("Bangalore");
  const [search, setSearch] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (city.trim() && search.trim()) {
      router.push(
        `/doctors?city=${encodeURIComponent(city)}&specialization=${encodeURIComponent(search)}`
      );
    }
  };

  return (
    <div className="w-full h-full">
      <div className="w-full h-24 bg-[#F1F0F5]" />

      <div
        className={`w-full ${compactMode
          ? "bg-white border-b border-gray-200 py-4"
          : "relative min-h-[calc(100vh-6rem)] bg-cover bg-no-repeat bg-center"
          }`}
        style={
          compactMode
            ? {}
            : {
              backgroundImage: "url('/background.jpg')",
            }
        }
      >
        {!compactMode && <div className="absolute inset-0 bg-[#1a237e]/60" />}

        <div
          className={`relative z-10 ${compactMode
            ? "max-w-5xl mx-auto px-4"
            : "flex flex-col items-center justify-center px-4 py-16 md:py-24 max-w-4xl mx-auto text-white h-full"
            }`}
        >
          {!compactMode && (
            <>
              <h1 className="text-4xl md:text-5xl font-semibold mt-6 mb-2 text-center">
                Your home for health
              </h1>
              <h2 className="text-xl md:text-2xl font-medium mt-6 mb-1 text-center">
                Find and Book
              </h2>
            </>
          )}

          <form onSubmit={handleSubmit} className={`w-full mt-6`}>
<div className="w-full bg-white overflow-hidden flex rounded-md">
              {/* City Input */}
              <div className="relative w-[30%] flex items-center border-r border-gray-300">
                <MapPin className="absolute left-3 text-gray-400" size={20} />
                <input
                  type="text"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 text-black outline-none"
                  placeholder="Enter city"
                  required
                />
              </div>

              {/* Search Input */}
              <div className="relative w-[70%] flex items-center">
                <button
                  type="submit"
                  className="absolute left-3 text-gray-400 hover:text-blue-500"
                  aria-label="Search"
                >
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

          {!compactMode && (
            <div className="text-sm text-[#727AC2] flex items-center gap-4 mt-4 flex-wrap w-full">
              <p className="font-medium">Popular searches:</p>
              {["Dermatologist", "Pediatrician", "Gynecologist/Obstetrician", "Others"].map((term) => (
                <span
                  key={term}
                  onClick={() => {
                    setSearch(term);
                    router.push(
                      `/doctors?city=${encodeURIComponent(city)}&specialization=${encodeURIComponent(search)}`
                    );
                  }}
                  className="cursor-pointer hover:underline"
                >
                  {term}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default SearchSection;
