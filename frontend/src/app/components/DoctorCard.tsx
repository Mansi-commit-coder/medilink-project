import React from "react";

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

const DoctorCard = ({ doctor }: { doctor: Doctor }) => {
  return (
    <div className="p-5 border border-gray-300 rounded-lg shadow bg-white hover:shadow-md transition flex gap-6">
      <img
        src={`/${doctor.image}`}
        alt={doctor.doctor_name}
        className="w-24 h-24 object-cover rounded-full border"
      />
      <div>
        <h2 className="text-xl font-semibold text-[#1a237e]">{doctor.doctor_name}</h2>
        <p className="text-gray-700">{doctor.specialization}</p>
        <p className="text-sm text-gray-600">{doctor.clinic_name}</p>
        <p className="text-sm text-gray-600">{doctor.address}</p>
        <p className="text-sm text-gray-600">Experience: {doctor.experience_years} years</p>
        <p className="text-sm text-gray-600">Fee: ₹{doctor.consultation_fee}</p>
        <p className="text-sm text-gray-600">
          Rating: {doctor.rating_percentage}% ({doctor.review_count} reviews)
        </p>
      </div>
    </div>
  );
};

export default DoctorCard;