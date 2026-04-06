"use client";
import LoadingOrProgressCircleIcon from "@/icons/LoadingOrProgressCircleIcon";
import RightTickCheckIcon from "@/icons/RightTickCheckIcon";
import React from "react";

interface StepperProps {
  step: number;
}

const steps = [
  "Personal Details",
  "Employment Details",
  "Vehicle Details",
  "Loan Estimate",
  "Review and Confirmation",
];

export default function StepperDetails({ step }: StepperProps) {
  const getStatus = (index: number) => {
    if (step === index + 1) return "current";
    if (step > index + 1) return "completed";
    return "upcoming";
  };

  const getStepBgClass = (status: string) => {
    switch (status) {
      case "current":
        return "bg-[#FF6A00] text-white";
      case "completed":
        return "bg-green-600 text-white";
      default:
        return "bg-white text-black border border-gray-400";
    }
  };

  const getLineWidth = (index: number) => {
    if (index >= steps.length - 1) return "";

    if (index === steps.length - 2) return "flex-auto";

    if (step === index + 1) return "flex-[2]";

    if (step === index) return "flex-[2]";

    return "flex-1";
  };

  const progress = Math.round(((step - 1) / steps.length) * 100);
  return (
    <div className="fixed top-12 w-full gap-3 border-b border-gray-200 bg-[#F8F8F8] z-40 px-4 py-1 flex justify-between items-center h-12 right-0">
      <div className="flex-1 flex items-center gap-2">
        {steps.map((label, index) => {
          const status = getStatus(index);

          return (
            <div
              key={index}
              className={`flex items-center ${
                index === steps.length - 1 ? "" : "flex-1"
              }`}
            >
              <div
                className={`w-6 h-6 rounded-sm flex items-center justify-center text-xs ${getStepBgClass(
                  status
                )}`}
              >
                {status === "completed" ? (
                  <RightTickCheckIcon color="white" />
                ) : (
                  index + 1
                )}
              </div>

              {(index + 1 === step || index + 1 === step + 1) && (
                <span className="ml-1 text-xs whitespace-nowrap">{label}</span>
              )}

              {index < steps.length - 1 && (
                <div
                  className={`border-t border-dashed border-black transition-all duration-300 mx-2 ${getLineWidth(
                    index
                  )}`}
                ></div>
              )}
            </div>
          );
        })}
      </div>

      <div className="flex items-center gap-4 shrink-0">
        <button className="rounded-full bg-white text-xs px-4 py-2 border border-gray-400">
          Save as draft
        </button>
        <div className="h-8 border-r-2 border-gray-300"></div>
        <div className="relative w-10 h-10">
          <LoadingOrProgressCircleIcon progress={progress} />
          <div className="absolute inset-0 flex items-center justify-center text-xs text-green-600">
            {progress}%
          </div>
        </div>
      </div>
    </div>
  );
}
