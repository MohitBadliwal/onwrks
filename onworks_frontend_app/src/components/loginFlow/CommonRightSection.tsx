import React from "react";
import Image from "next/image";
import FinanceIcon from "@/icons/FinanceIcon";
import ReUseIcon from "@/icons/ReUseIcon";
import PercentIcon from "@/icons/PercentIcon";

export default function CommonRightSection() {
  return (
    <div className="w-full md:w-1/2 flex flex-col overflow-hidden items-end">
      <div className="hidden md:flex h-[20%] min-h-[20%] w-[70%] bg-[#fff8f3] justify-center items-center text-center">
  <div>
    <h2 className="font-extrabold text-lg">Drive your Dream.</h2>
    <p className="text-base">We’ll Take Care of the Finance.</p>
  </div>
</div>
     <div className="h-[40%] w-[90%] md:w-full md:mx-0 mx-auto flex justify-center items-center">
  <Image
    src="/assets/login_image.jpg"
    alt="Bike and Car"
    width={700}
    height={600}
    className="w-full h-full"
  />
</div>


      <div className="h-full w-full md:h-[40%] md:w-[70%] bg-[#fff8f3] flex flex-col gap-6 justify-center items-center py-8 px-4">
  <div className="flex items-center gap-4 px-4 py-4 sm:py-0 rounded-full bg-white shadow w-full sm:w-80">
    <FinanceIcon className="w-8 h-8 sm:w-auto sm:h-auto" /> 
    <p className="text-2xl sm:text-xs">
      Financing of upto <strong>AED 1 million</strong>
    </p>
  </div>

  <div className="flex items-center gap-4 px-4 py-4 sm:py-0.5 rounded-full bg-white shadow w-full sm:w-80">
    <ReUseIcon  /> 
    <p className="text-2xl sm:text-xs">
      Flexible repayment term <strong>upto 60 month</strong>
    </p>
  </div>

  <div className="flex items-center gap-4 px-4 py-4 sm:py-1 rounded-full bg-white shadow w-full sm:w-80">
    <PercentIcon size={15} color="#F76B1C" className="ml-1" />
    <p className="text-2xl sm:text-xs ms-1">
      Profit rates starting from <strong>2.25% p.a</strong>
    </p>
  </div>
</div>


    </div>
  );
}
