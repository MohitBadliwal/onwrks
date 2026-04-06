import React from "react";
import CalendarBlankIcon from "../../../icons/CalendarBlankIcon";
import InfoIcon from "../../../icons/InfoIcon";
import RevenueIcon from "../../../icons/RevenueIcon";
import PendingStatusIcon from "../../../icons/PendingStatusIcon";
import PercentIcon from "../../../icons/PercentIcon";
import CheckCircle from "../../../icons/CheckCircle";
import ClockIcon from "../../../icons/ClockIcon";
import PlusIcon from "../../../icons/PlusIcon";
import ProgressGraphIcon from "../../../icons/ProgressGraphIcon";
import CircularGraph from "../../../icons/CircularGraph";
import ArrowTiltRightIcon from "../../../icons/ArrowTiltRightIcon";
import CheckCircleOutTickIcon from "../../../icons/CheckCircleOutTickIcon";
import InfoInverseIcon from "../../../icons/InfoInverseIcon";
import CustomSelect from "../../../components/global/CustomSelect";
export default function MyLoans() {
  const segments = [
    { color: "#1382D9", percent: 60 },
    { color: "#FFC233", percent: 40 },
  ];
  return (
    <div className=" bg-gray-50 min-h-screen">
      <div>
        <div className="flex items-center justify-between  mb-4">
          <CustomSelect
            name="loantype"
            className="text-sm text-gray-600 p-3 rounded-md border border-gray-200 flex font-semibold items-center   bg-white focus:outline-none focus:ring-2 focus:ring-black/20"
          >
            <option>Car Loan No: CL2044484953 </option>
            <option>Bike Loan No: CL2044484953 </option>
            <option>Heavy Vehicle Loan No: CL2044484953</option>
          </CustomSelect>
          <button className="bg-[#FF6B3D] text-white px-4 py-2 rounded-full text-sm font-medium flex items-center gap-1 cursor-pointer hover:bg-orange-600">
            <PlusIcon size={10} color="white" /> Apply for New Loan
          </button>
        </div>
        <div className="bg-white border border-gray-200 rounded-lg px-4 py-1 shadow-sm mb-4">
          <div className="flex flex-wrap justify-between items-center">
            <div className="font-semibold flex items-center">
              Active Loan Summary
              <div className="border-l-2 border-gray-300 h-5 mx-4" />
              <span className="text-gray-400 font-normal text-sm">
                Loan#CL204449353
              </span>
              <span className="ms-2">
                <InfoIcon size={12} />
              </span>
            </div>
            <div className="p-2">
              <span className="text-xs px-2 py-1 rounded-full bg-green-50 text-green-500 font-medium w-24 text-center inline-block">
                Active
              </span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <div className="text-xs p-3 rounded-lg border border-gray-200 flex justify-between items-center">
              <div className="space-y-1">
                <p>Loan Amount</p>
                <h2 className="font-medium text-base">AED 45,000</h2>
              </div>
              <span className="p-1.5 rounded-md bg-[#F0F8FF] text-center inline-block">
                <RevenueIcon />
              </span>
            </div>
            <div className="text-xs p-3 rounded-lg border border-gray-200 flex justify-between items-center">
              <div className="space-y-1">
                <p>Tenure</p>
                <h2 className="font-medium text-base">6 Years</h2>
              </div>
              <span className="p-1.5 rounded-md bg-[#FFEDD7] text-center inline-block">
                <PendingStatusIcon />
              </span>
            </div>
            <div className="text-xs p-3 rounded-lg border border-gray-200 flex justify-between items-center">
              <div className="space-y-1">
                <p>Interest Rate</p>
                <h2 className="font-medium text-base">7.5% Per Annum</h2>
              </div>
              <span className="p-3 rounded-md bg-[#FAF4F5] text-center inline-block">
                <PercentIcon color="black" size={15} />
              </span>
            </div>
            <div className="text-xs p-3 rounded-lg border border-gray-200 flex justify-between items-center">
              <div className="space-y-1">
                <p>Progress</p>
                <h2 className="font-medium text-base">66.5% Completed</h2>
              </div>
              <span className="p-2 rounded-md bg-[#EDF3ED] text-center inline-block">
                <ProgressGraphIcon size={20} />
              </span>
            </div>
          </div>
          <div>
            <div className="flex justify-between text-xs text-gray-500">
              <span>Loan Timeline</span>
              <span>65.5% Complete</span>
            </div>
            <div className="my-1 w-full h-2 bg-gray-200 rounded-full overflow-hidden">
              <div className="h-2 w-1/2 bg-gradient-to-r from-blue-500 to-green-500"></div>
            </div>
            <div className="flex justify-between text-xs text-gray-500 mb-1">
              <p className="flex items-center gap-1">
                <CalendarBlankIcon size={12} color="gray" />
                Start Date
                <span className="font-base text-black ms-1"> May 15, 2024</span>
              </p>
              <p className="flex items-center gap-1">
                <CalendarBlankIcon size={12} color="gray" />
                End Date
                <span className="font-base text-black ms-1"> May 15, 2024</span>
              </p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm flex flex-col">
            <div className="flex items-center justify-between mb-2">
              <p className="font-bold text-sm flex gap-2 items-center">
                Upcoming EMI <InfoIcon size={12} />
              </p>
              <span className="bg-[#FF9800] text-white text-xs px-2 py-1 rounded-full">
                Scheduled
              </span>
            </div>
            <div className="bg-[#EEF4FC] text-center  p-3 rounded-lg">
              <p className="text-xs text-gray-500">EMI Amount</p>
              <p
                className="text-xl
               font-bold text-[#0054B6]"
              >
                AED 4,000
              </p>
              <p className="text-xs text-gray-500 flex justify-center gap-1 items-center">
                <CalendarBlankIcon size={12} color="gray" /> Sunday
                <span className="font-semibold text-black">July 15, 2025</span>
              </p>
            </div>
            <div className="mt-4 text-xs bg-[#EDF3ED] p-2 rounded-full text-center">
              <p>
                <span className="font-semibold">34/60</span> EMI’s Completed
              </p>
            </div>
            <p className="text-gray-500 text-xs text-center my-2">
              Days Until Due
            </p>
            <p className="text-center font-semibold"> 188 Days Over Due</p>
            <div className="mt-auto pt-4 flex gap-2">
              <button className="flex-1 bg-[#FAF1EC] text-[#F76B1C] px-3 py-2 rounded-full text-xs cursor-pointer">
                Schedule Payment
              </button>
              <button className="flex-1 bg-[#F76B1C] border border-[#F76B1C] text-white px-3 py-2 rounded-full text-xs cursor-pointer">
                Pay Now
              </button>
            </div>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
            <p className="font-bold text-sm flex gap-2 items-center">
              Outstanding Amount
              <InfoIcon size={12} />
            </p>
            <div className="flex flex-col justify-around items-center gap-4">
              <CircularGraph size={140} segments={segments} strokeWidth={25} />
              <div className="flex gap-3">
                <div className="flex items-center space-x-1 text-xs">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  <span>Paid Off</span>
                </div>
                <div className="flex items-center space-x-1 text-xs">
                  <span className="w-2 h-2 bg-[#FFC233] rounded-full"></span>
                  <span>Due</span>
                </div>
              </div>
            </div>
            <div className="border-t border-gray-300 w-full my-2" />
            <div className="text-xs space-y-2">
              <div className="flex justify-between items-center mb-3">
                <span className="font-semibold text-black">
                  Total Due Amount
                </span>
                <span className="font-semibold text-black">AED 19,000</span>
              </div>
              <div className="flex justify-between items-center  ">
                <span className="text-gray-500">Original Loan Amount</span>
                <span className="text-gray-500 font-semibold">AED 45,000</span>
              </div>
              <div className="flex justify-between items-center mb-3">
                <span className="text-gray-500">Amount Paid</span>
                <span className="text-gray-500 font-semibold">AED 16,500</span>
              </div>
              <div className="flex justify-between items-center ">
                <span className="font-semibold text-black">
                  Outstanding Balance
                </span>
                <span className="font-semibold text-black">AED 28,000</span>
              </div>
            </div>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg   shadow-sm  p-5 space-y-1">
            <p className="font-bold text-sm flex gap-2 items-center">
              Total Paid Amount
              <InfoIcon size={12} />
            </p>
            <p className="text-gray-500 text-xs">Cumulative Amount</p>
            <div className="flex justify-between mb-3">
              <p className="text-sm font-semibold">AED 16,000</p>

              <div className="flex items-center gap-2">
                <CheckCircle color="green" size={20} />
                <p className="text-xs text-gray-700">
                  33 of 60 EMI&apos;s Completed
                </p>
              </div>
            </div>
            <div className=" mb-3">
              <div className="flex justify-between">
                <p className="text-gray-500 text-xs mb-1">Payment Progress</p>
                <span className="text-xs text-gray-600">55%</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-blue-500 to-green-400"
                    style={{ width: "55%" }}
                  ></div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3 mb-4">
              <div className="bg-[#EDF3ED] rounded-lg p-4 text-start text-sm">
                <p className="text-xs ">Principal Due</p>
                <p className=" font-semibold">AED 14,000</p>
              </div>
              <div className="bg-[#EEF4FC] rounded-lg p-4 text-start text-sm">
                <p className="text-xs ">Interest Due</p>
                <p className=" font-semibold">AED 2300</p>
              </div>
            </div>
            <div className="border-t border-gray-300 w-full" />
            <div className="text-xs space-y-2">
              <div className="flex justify-between items-center mb-3">
                <span className="font-semibold text-black">
                  Payment Summary
                </span>
              </div>
              <div className="flex justify-between items-center  ">
                <span className="text-gray-500">Principal Component</span>
                <span className="text-gray-500 font-semibold">AED 45,000</span>
              </div>
              <div className="flex justify-between items-center mb-3">
                <span className="text-gray-500">Interest Component</span>
                <span className="text-gray-500 font-semibold">AED 16,500</span>
              </div>
              <div className="flex justify-between items-center ">
                <span className="font-semibold text-black">Total Paid</span>
                <span className="font-semibold text-black">AED 28,000</span>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow mb-6">
          <div className="flex justify-between items-center">
            <div className="font-semibold flex items-center">
                Loan Application Tracker
              <div className="border-l-2 border-gray-300 h-5 mx-4"></div>
              <span className="text-gray-400 font-normal text-sm">
                Loan#CL204449353
              </span>
              <span className="ms-2">
                <InfoIcon size={12} />
              </span>
            </div>
          </div>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
            <div className="space-y-3">
              <div className="space-y-1">
                <p className="text-xs text-gray-500">Application ID:</p>
                <p className="font-bold">APP-987654321</p>
              </div>
              <div className="space-y-1">
                <p className="text-xs text-gray-500 mt-2">Last Updated</p>
                <p className="text-sm">2024-06-10</p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="space-y-1">
                <p className="text-xs text-gray-500">Vehicle Details</p>
                <p className="font-bold">Land Rover</p>
              </div>
              <div className="space-y-1">
                <p className="text-xs text-gray-500 mt-2">
                  Relationship Manager
                </p>
                <p className=" ">Krishna</p>
              </div>
            </div>
          </div>
          <div className="mt-6">
            <div className="flex items-center gap-4 text-sm justify-between">
              <div className="flex gap-4">
                <span className="flex items-center gap-1">
                  <span className="w-3 h-3 rounded-full bg-green-500  " />
                  <p className="text-green-500">Submitted</p>
                </span>
                <span className="flex items-center gap-1">
                  <span className="w-3 h-3 rounded-full bg-blue-500" />
                  <p className="text-blue-500"> Under Review</p>
                </span>
                <span className="flex items-center gap-1">
                  <span className="w-3 h-3 rounded-full bg-gray-300" />
                  <p>Approved</p>
                </span>
                <span className="flex items-center gap-1">
                  <span className="w-3 h-3 rounded-full bg-gray-300" />
                  <p> Disbursed</p>
                </span>
              </div>
              <div>
                <div className="flex justify-end mt-4">
                  <a
                    href="#"
                    className="text-xs font-medium  flex items-center gap-1 hover:underline"
                  >
                    View More
                    <ArrowTiltRightIcon color="orange" size={15} />
                  </a>
                </div>
              </div>
            </div>
            <div className="mt-3 w-full h-2 bg-gray-200 rounded-full overflow-hidden">
              <div className="h-2 w-1/2 bg-gradient-to-r from-blue-500 to-green-500"></div>
            </div>
          </div>
        </div>
        <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
          <div className="flex justify-between items-center mb-3">
            <div className="flex justify-between items-center">
              <div className="font-semibold flex ">
                Loan Application Tracker
                <div className="border-l-2 border-gray-300 h-5 mx-4" />
                <span className="text-gray-400 font-normal text-sm">
                  Loan#CL204449353
                </span>
              </div>
            </div>
            <button className="  bg-[#FAF1EC] text-[#F76B1C] px-2 py-1 rounded-full text-xs">
              Under Review
            </button>
          </div>
          <div className=" ">
            <div className="flex items-start gap-3 bg-[#EDF3ED] p-4 rounded-md">
              <CheckCircleOutTickIcon />
              <div className="flex justify-between w-full items-center">
                <div className=" ">
                  <p className="font-medium text-sm">Application Submitted</p>
                  <p className="text-xs text-gray-500">
                    Your loan application has been successfully submitted.
                  </p>
                </div>
                <div>
                  <p className="text-xs text-gray-400">Nov 1, 2024</p>
                </div>
              </div>
            </div>
            <div className="border-l-2 border-gray-300 h-5 ms-8" />
            <div className="flex items-start gap-3 bg-[#EDF3ED] p-4 rounded-md">
              <CheckCircleOutTickIcon />
              <div className="flex justify-between w-full items-center">
                <div className=" ">
                  <p className="font-medium text-sm">Document Verification</p>
                  <p className="text-xs text-gray-500">
                    Your documents are being reviewed.
                  </p>
                </div>
                <div>
                  <p className="text-xs text-gray-400">Nov 3, 2024</p>
                </div>
              </div>
            </div>
            <div className="border-l-2 border-gray-300 h-5 ms-8" />
            <div className="flex items-start gap-3 bg-[#EFF6FF] p-4 rounded-md">
              <ClockIcon />
              <div className="flex justify-between w-full items-center">
                <div className=" ">
                  <p className="font-medium text-sm">Credit Assessment</p>
                  <p className="text-xs text-gray-500">
                    Your credit profile is being analyzed.
                  </p>
                </div>
              </div>
            </div>
            <div className="border-l-2 border-gray-300 h-5 ms-8" />
            <div className="flex items-start gap-3 bg-[#E9EBEA] p-4 rounded-md">
              <InfoInverseIcon />
              <div className="flex justify-between w-full items-center">
                <div className=" ">
                  <p className="font-medium text-sm">Final Approval</p>
                  <p className="text-xs text-gray-500">
                    Your credit profile is being evaluated by our underwriting
                    team.
                  </p>
                </div>
              </div>
            </div>
            <div className="border-l-2 border-gray-300 h-5 ms-8" />
            <div className="flex items-start gap-3 bg-[#E9EBEA] p-4 rounded-md">
              <InfoInverseIcon />
              <div className="flex justify-between w-full items-center">
                <div className=" ">
                  <p className="font-medium text-sm">Loan Disbursement</p>
                  <p className="text-xs text-gray-500">
                    Funds will be transferred to your account upon approval.
                  </p>
                </div>
              </div>
            </div>
            <div className="border-l-2 border-gray-300 h-5 ms-8" />
            <div className="flex gap-3 bg-[#EFF6FF] px-4 py-2 rounded-md items-center">
              <ClockIcon />
              <div className="flex justify-between w-full items-center">
                <p className="text-xs text-gray-500">
                  Your application is currently being reviewed. We&apos;ll
                  notify you of any updates.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
