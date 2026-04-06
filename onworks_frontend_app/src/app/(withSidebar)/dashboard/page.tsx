import React from "react";
import Image from "next/image";
import PaymentsIcon from "../../../icons/PaymentsIcon";
import ActiveLoansIcons from "../../../icons/ActiveLoansIcon";
import CalendarBlankIcon from "../../../icons/CalendarBlankIcon";
import CalendarTickIcon from "../../../icons/CalendarTickIcon";
import PaperlessIcon from "../../../icons/PaperlessIcon";
import BankNoteArrowIcon from "../../../icons/BankNoteArrowIcon";
import InfoIcon from "../../../icons/InfoIcon";
import CheckCircle from "../../../icons/CheckCircle";
import ArrowTiltRightIcon from "../../../icons/ArrowTiltRightIcon";
import PlusIcon from "../../../icons/PlusIcon";
export default function Dashboard() {
  return (
    <div className=" bg-gray-50 min-h-screen">
      <h2 className="font-bold text-lg">Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="text-xs p-4 rounded-lg bg-[#D9EDFF] flex justify-between">
          <div className="space-y-2">
            <p>Total Active Loans</p>
            <h2 className="font-semibold text-lg">2</h2>
          </div>
          <div>
            <span className="p-2 rounded-md bg-[#F0F8FF]    text-center inline-block">
              <PaymentsIcon />
            </span>
          </div>
        </div>

        <div className="text-xs p-4 rounded-lg bg-[#FEF2CD] flex justify-between">
          <div className="space-y-2">
            <p>Outstanding Amount</p>
            <h2 className="font-semibold text-lg">AED 35,000</h2>
          </div>
          <div>
            <span className="p-2 rounded-md bg-[#FFFAEB]    text-center inline-block">
              <ActiveLoansIcons />
            </span>
          </div>
        </div>

        <div className="text-xs p-4 rounded-lg bg-[#EFDFFF] flex justify-between">
          <div className="space-y-2">
            <p>Next EMI Date</p>
            <h2 className="font-semibold text-lg">25th July</h2>
          </div>
          <div>
            <span className="p-2 rounded-md bg-[#F9F2FF]    text-center inline-block">
              <CalendarBlankIcon />
            </span>
          </div>
        </div>

        <div className="text-xs p-4 rounded-lg bg-[#FFC3AD45] flex justify-between">
          <div className="space-y-2">
            <p>Total Paid Amount</p>
            <h2 className="font-semibold text-lg">AED 12,000</h2>
          </div>
          <div>
            <span className="p-2 rounded-md bg-[#FDF7F5]    text-center inline-block">
              <BankNoteArrowIcon />
            </span>
          </div>
        </div>
      </div>
      <div className="bg-white p-4 rounded-lg shadow mb-6">
        <div className="flex justify-between items-center">
          <div className="font-semibold flex items-center">
            Loan Application Tracker{" "}
            <div className="border-l-2 border-gray-300 h-5 mx-4"/>
            <span className="text-gray-400 font-normal text-sm">Loan#CL204449353 </span>
            <span className="ms-2 flex items-center">
              <InfoIcon size={12}/>
            </span>
          </div>
          <button className="bg-orange-500 text-white px-4 py-1 rounded-full text-sm flex items-center gap-1 cursor-pointer">
            <PlusIcon color="white" size={10}/> Apply for New Loan
          </button>
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
            <p className="text-xs text-gray-500 mt-2">Relationship Manager</p>
            <p className=" ">Krishna</p>
            </div>
          </div>
        </div>
        <div className="mt-6">
          <div className="flex items-center gap-4 text-sm justify-between">
            <div className="flex gap-4">
              <span className="flex items-center gap-1">
                <p className="w-3 h-3 rounded-full bg-green-500"/>
                <span className="text-green-500">Submitted</span>
              </span>
              <span className="flex items-center gap-1">
                <p className="w-3 h-3 rounded-full bg-blue-500"/>  <span className="text-blue-500">Under
                Review</span>
              </span>
              <span className="flex items-center gap-1">
                <span className="w-3 h-3 rounded-full bg-gray-300"/> 
                Approved
              </span>
              <span className="flex items-center gap-1">
                <span className="w-3 h-3 rounded-full bg-gray-300"/> 
                Disbursed
              </span>
            </div>
            <div>
              <div className="flex justify-end mt-4">
                <a
                  href="#"
                  className="text-xs font-medium flex items-center gap-1 hover:underline cursor-pointer"
                >
                  View More
                  <ArrowTiltRightIcon color="#F76B1C"/>
                </a>
              </div>
            </div>
          </div>

          <div className="mt-3 w-full h-2 bg-gray-200 rounded-full overflow-hidden">
            <div className="h-2 w-1/2 bg-gradient-to-r from-blue-500 to-green-500"></div>
          </div>
        </div>
      </div>
      <div className="bg-white p-4 rounded-lg shadow mb-6">
        <h2 className="font-semibold mb-4 flex items-center">
          My Loans 
          <span className="ms-1">
            <InfoIcon size={12}/>
          </span>
        </h2>
        <div className="overflow-hidden rounded-lg border border-gray-200 text-xs">
          <table className="w-full border-collapse text-center">
            <thead>
              <tr className="bg-[#FAF1EC]">
                <th className="p-2 border-r-2 border-white">Loan ID</th>
                <th className="p-2 border-r-2 border-white">Type</th>
                <th className="p-2 border-r-2 border-white">
                  Disbursed Amount
                </th>
                <th className="p-2 border-r-2 border-white">EMI Amount</th>
                <th className="p-2 border-r-2 border-white">EMI Due</th>
                <th className="p-2 border-r-2 border-white">Start Date</th>
                <th className="p-2 ">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-200">
                <td className="p-2">LDJV345</td>
                <td className="p-2">New Car</td>
                <td className="p-2">AED 33000</td>
                <td className="p-2">AED 4300</td>
                <td className="p-2">2025-07-15</td>
                <td className="p-2">2025-07-15</td>
                <td className="p-2">
                  <span className="px-3 py-1 rounded-full bg-orange-50 text-orange-500 font-medium w-24 text-center inline-block">
                    Pending
                  </span>
                </td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="p-2">LDJV345</td>
                <td className="p-2">New Car</td>
                <td className="p-2">AED 32000</td>
                <td className="p-2">AED 4200</td>
                <td className="p-2">2025-07-15</td>
                <td className="p-2">2025-04-12</td>
                <td className="p-2">
                  <span className="px-3 py-1 rounded-full bg-green-50 text-green-500 font-medium w-24 text-center inline-block">
                    Active
                  </span>
                </td>
              </tr>
              <tr>
                <td className="p-2">LDJV346</td>
                <td className="p-2">Used Car</td>
                <td className="p-2">AED 16000</td>
                <td className="p-2">AED 4200</td>
                <td className="p-2">2025-07-15</td>
                <td className="p-2">2025-04-19</td>
                <td className="p-2">
                  <span className="px-3 py-1 rounded-full bg-green-50 text-green-500 font-medium w-24 text-center inline-block">
                    Active
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="bg-white p-4 rounded-lg shadow mb-6">
        <h2 className="font-semibold mb-4 flex items-center">
          Upcoming & Past EMI Payments 
          <span className="ms-2">
            <InfoIcon size={12}/>
          </span>
        </h2>
        <div className="overflow-hidden rounded-lg border border-gray-200 text-xs text-center">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-[#FAF1EC] ">
                <th className="p-2 border-r-2 border-white">EMI Due Date</th>
                <th className="p-2 border-r-2 border-white">EMI Amount</th>
                <th className="p-2 border-r-2 border-white">Status</th>
                <th className="p-2">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-200">
                <td className="p-2">2025-07-05</td>
                <td className="p-2">AED 18300</td>
                <td className="p-2">
                  <span className="px-3 py-1 rounded-full bg-orange-50 text-orange-500 font-medium w-24 text-center inline-block">
                    Pending
                  </span>
                </td>
                <td className="p-2">
                  <button className="bg-orange-500 text-white px-3 py-1 rounded-full cursor-pointer">
                    Pay Now
                  </button>
                </td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="p-2">2025-06-15</td>
                <td className="p-2">AED 14200</td>
                <td className="p-2">
                  <span className="px-3 py-1 rounded-full bg-green-50 text-green-500 font-medium w-24 text-center inline-block">
                    Active
                  </span>
                </td>
                <td className="p-2">
                  <button className="bg-orange-500 text-white px-3 py-1 rounded-full cursor-pointer">
                    Pay Now
                  </button>
                </td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="p-2">2025-08-10</td>
                <td className="p-2">AED 21300</td>
                <td className="p-2">
                  <span className="px-3 py-1 rounded-full bg-green-50 text-green-500 font-medium w-24 text-center inline-block">
                    Active
                  </span>
                </td>
                <td className="p-2">-</td>
              </tr>
              <tr>
                <td className="p-2">2025-07-15</td>
                <td className="p-2">AED 12300</td>
                <td className="p-2">
                  <span className="px-3 py-1 rounded-full bg-green-50 text-green-500 font-medium w-24 text-center inline-block">
                    Active
                  </span>
                </td>
                <td className="p-2">-</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-[#FAF1EC] border border-[#F7D5C2] ps-4 rounded-lg flex items-center justify-between">
          <div className="flex flex-col gap-4">
            <div>
              <h3 className="font-semibold text-[#F76B1C]">
                Simplify your life
              </h3>
              <p className="text-sm">
                Get the personal loan that works for you
              </p>
            </div>
            <div className="text-xs flex gap-4 text-gray-500">
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
        <div className="bg-gray-100 rounded-lg flex items-stretch justify-between text-white overflow-hidden">
          <div className="bg-gradient-to-tr from-[#4d4d4d] to-[#E9EbEC] flex flex-col gap-4 justify-center items-start p-4 w-3/5">
            <div>
              <h3 className="font-semibold">Pre-Approved Car or Bike Loan</h3>
              <p className="text-sm">
                Car or Bike Loan – No delays, no stress.
              </p>
            </div>
            <div className="text-xs text-[#BDBDBD]">
              <div className="flex gap-1">
                <p className="flex gap-1">
                  <CalendarTickIcon /> Flexible EMI Option
                </p>
                <div className="border-r-2 border-gray-300 h-5" />
                <p className="flex gap-1">
                  <PaperlessIcon /> 100% Paperless
                </p>
              </div>
              <p className="flex gap-1">
                <CheckCircle /> Instant Approval
              </p>
            </div>
          </div>

          <div className="w-2/5">
            <Image
              src="/assets/bikeCarDash1.png"
              alt="Bike Car Dashboard"
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
