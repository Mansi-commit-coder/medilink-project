import { FaRegComments, FaBriefcase } from "react-icons/fa";
import { BsCart2 } from "react-icons/bs";
import { TbReportMedical } from "react-icons/tb";
import { LuBookOpenText } from "react-icons/lu";
import { PiFlask } from "react-icons/pi";

export default function BottomNav() {
  return (
    <div className="fixed bottom-0 w-full bg-[#1C1F58] text-white py-4">
      <div className="max-w-7xl mx-auto w-full px-8 flex justify-between items-center divide-x divide-white/20">
        
        <div className="flex flex-col items-center flex-1">
          <FaRegComments className="mb-1" />
          <span className="text-sm text-center">Consult with a doctor</span>
        </div>

        <div className="flex flex-col items-center flex-1">
          <BsCart2  className="mb-1" />
          <span className="text-sm text-center">Order Medicines</span>
        </div>

        <div className="flex flex-col items-center flex-1">
          <TbReportMedical className="mb-1" />
          <span className="text-sm text-center">View medical records</span>
        </div>

        <div className="flex flex-col items-center flex-1 px-2">
  <div className="flex items-center space-x-1">
    <PiFlask />
    <span className="text-[10px] text-white bg-green-600 px-1 rounded-full leading-none">New</span>
  </div>
  <span className="text-sm mt-1">Book test</span>
</div>


        <div className="flex flex-col items-center flex-1">
          <LuBookOpenText className="mb-1" />
          <span className="text-sm text-center">Read articles</span>
        </div>

        <div className="flex flex-col items-center flex-1">
          <FaBriefcase className="mb-1" />
          <span className="text-sm text-center">For healthcare providers</span>
        </div>

      </div>
    </div>
  );
}