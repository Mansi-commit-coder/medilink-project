"use client";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import DoctorCard from "./DoctorCard";

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

const DoctorList = () => {
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const searchParams = useSearchParams();
  const city = searchParams.get("city")?.toLowerCase() || "";
  const specialization = searchParams.get("specialization")?.toLowerCase() || "";

  useEffect(() => {
    fetch("/doctorlist.json")
      .then((res) => res.json())
      .then((data) => setDoctors(data));
  }, []);

  const filtered = doctors.filter(
    (doc) =>
      doc.address.toLowerCase().includes(city) &&
      doc.specialization.toLowerCase().includes(specialization)
  );

  return (
    <div className="max-w-5xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-6 text-[#1a237e]">
        Doctors in {city.charAt(0).toUpperCase() + city.slice(1)} for{" "}
        {specialization.charAt(0).toUpperCase() + specialization.slice(1)}
      </h1>

      {filtered.length === 0 ? (
        <p className="text-gray-500">No doctors found for the selected criteria.</p>
      ) : (
        <div className="grid gap-6">
          {filtered.map((doctor) => (
            <DoctorCard key={doctor.id} doctor={doctor} />
          ))}
        </div>
      )}
    </div>
  );
};

export default DoctorList;