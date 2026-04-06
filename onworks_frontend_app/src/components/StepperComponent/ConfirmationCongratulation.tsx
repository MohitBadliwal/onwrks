"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import VerifiedBadge from "@/icons/VerifiedBadge";
import { useRouter } from "next/navigation";
import PaperlessIcon from "@/icons/PaperlessIcon";
import CalendarTickIcon from "@/icons/CalendarTickIcon";
import CloseIcon from "@/icons/CloseIcon";
import { useAuthStore } from "@/store/useAuthStore";

interface ICongratulationDrawerProps {
  onClose: () => void;
}
export default function ConfirmationCongratulation({
  onClose,
}: ICongratulationDrawerProps) {
  const [StringAndImageChange, setStringAndImageChange] =
    useState<boolean>(false);
  const router = useRouter();
  const { userType } = useAuthStore();
  useEffect(() => {
    if (StringAndImageChange) {
      const timer = setTimeout(() => {
        if (userType === "customer") {
          router.push("/dashboard");
        } else {
          router.push("/dealerDashboard");
        }
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [StringAndImageChange, userType, router]);
  return (
    <div className="fixed inset-0 z-50 bg-black/50  flex  mt-12 justify-center">
      <div className="max-w-xl mx-auto flex items-center justify-center p-4 md:px-8">
        <div className="w-full max-w-[500px] rounded-2xl  py-2 bg-white shadow-md flex flex-col relative">
          <div className="space-y-2 px-4 text-center">
            <div className="flex">
              {!StringAndImageChange ? (
                <Image
                  src="/assets/carFinance.gif"
                  alt="Eligibility Illustration"
                  width={96}
                  height={96}
                  className="mx-auto mt-4 w-24 h-24"
                />
              ) : (
                <Image
                  src="/assets/CongratulationImage.gif"
                  alt="Eligibility Illustration"
                  width={96}
                  height={96}
                  className="mx-auto mt-4 w-24 h-24"
                />
              )}
              <div onClick={onClose}>
                <CloseIcon />
              </div>
            </div>
            <h2 className="text-green-500 font-semibold text-2xl">
              Congratulations!
            </h2>
            <p className="text-gray-600 text-xs">
              Your loan application has been submitted successfully.{" "}
            </p>
            <div className="border-t border-[#DBDCDD] my-2 mx-20" />
            <div>
              <p className="font-semibold texs-sm">
                Application ID:
                <span className="font-normal text-gray-500 ms-1">
                  APP-987654321
                </span>
              </p>
            </div>
            <div>
              <p className="font-semibold texs-sm">
                Reference Number:
                <span className="font-normal text-gray-500 ms-1">
                  REF-987654321
                </span>
              </p>
            </div>

            <div className="inline-block px-6 py-2 rounded-full bg-[#FAF1EC]">
              {!StringAndImageChange ? (
                <p className=" ">
                  Disbursal Amount:{" "}
                  <span className="text-black font-bold">AED 230,000</span>
                </p>
              ) : (
                <p className=" ">Your loan is currently under review</p>
              )}
            </div>
            {StringAndImageChange && (
              <p className="text-xs">
                A bank representative will contact you shortly to guide you
                through the next steps.
              </p>
            )}
            <p className="text-ws">Thank you for choosing us!</p>
            <div className="bg-[#E8F5FF]   ps-4 rounded-lg flex items-center justify-between">
              <div className="flex flex-col gap-4">
                <div className="flex flex-col items-start">
                  <h3 className="font-semibold text-[#0B64C3]">
                    Simplify your life
                  </h3>
                  <p className="text-xs">
                    Get the personal loan that works for you
                  </p>
                </div>
                <div className="text-[10px] flex gap-4 text-gray-500">
                  <p className="flex gap-1">
                    <CalendarTickIcon />
                    Flexible Loan Tenures
                  </p>
                  <div className="border-r-2 border-gray-300 h-5" />
                  <p className="flex gap-1">
                    <span>
                      <PaperlessIcon />
                    </span>
                    100% Paperless
                  </p>
                </div>
              </div>
              <Image
                src="/assets/familyIcon.png"
                alt="Family Icon"
                width={200}
                height={200}
              />
            </div>
            {!StringAndImageChange && (
              <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-1">
                <button
                  onClick={()=>setStringAndImageChange(true)}
                  className="bg-orange-500 text-white rounded-full   text-xs px-10 py-2 shadow-md cursor-pointer"
                >
                  Track Your Application
                </button>
              </div>
            )}

            <div className="flex items-center space-x-1 text-xs text-gray-500 mt-4 md:hidden gap-2">
              <VerifiedBadge />
              <span>Your data is 100% safe</span>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden md:flex fixed bottom-4 left-4 items-center text-xs text-gray-500 px-3 py-1 z-40 gap-2">
        <VerifiedBadge />
        <span>Your data is 100% safe</span>
      </div>
    </div>
  );
}
