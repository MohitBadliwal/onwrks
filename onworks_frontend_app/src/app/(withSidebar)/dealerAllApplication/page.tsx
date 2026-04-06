"use client";
import React, { useState } from "react";
import UserProfileDrawer from "@/components/UserProfileDrawer";
import NotificationDrawer from "@/components/NotificationDrawer";
import ApplicationDetailsPupup from "../../applicationDetailsPopup/page";
import InfoIcon from "@/icons/InfoIcon";
import UploadIcon from "@/icons/UploadIcon";
import ViewIcon from "@/icons/ViewIcon";
import EditIcon from "@/icons/EditIcon";
import DeleteIcon from "@/icons/DeleteIcon";

export default function DealerAllApplication() {
  const [isProfileDrawerOpen, setIsProfileDrawerOpen] = useState(false);
  const [isNotificationDrawerOpen, setIsNotificationDrawerOpen] =
    useState(false);
  const [isApplicationdetails, setIsApplicationDetails] = useState(false);
  return (
    <div className="flex bg-gray-50 min-h-screen">
      {isProfileDrawerOpen && (
        <UserProfileDrawer onClose={() => setIsProfileDrawerOpen(false)} />
      )}
      {isNotificationDrawerOpen && (
        <NotificationDrawer
          onClose={() => setIsNotificationDrawerOpen(false)}
        />
      )}

      <div className={`flex-1  transition-all duration-300 ease-in-out`}>
        <div className="  bg-white  p-4 shadow-md rounded-md">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-xl font-semibold flex items-center">
              All Application
              <span className="text-gray-400 ms-2">
                <InfoIcon />
              </span>
            </h1>
            <div className="flex items-center gap-4">
              <select className="border rounded-md px-3 py-1 text-sm w-48">
                <option>Loan Type: All</option>
                <option>Auto Loan</option>
                <option>Personal Loan</option>
              </select>
              <div className="border-r-2 border-gray-300 h-5" />
              <button className="text-orange-500 font-semibold flex items-center gap-2 cursor-pointer">
                <span>
                  <UploadIcon color="darkorange" size={20} />
                </span>
                Export
              </button>
            </div>
          </div>

          <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white">
            <table className="min-w-full text-sm text-left">
              <thead className="bg-[#fef7f5] ">
                <tr>
                  <th className="px-4 py-3 font-semibold border border-r-2 border-white">
                    APPLICATION
                  </th>
                  <th className="px-4 py-3 font-semibold border border-r-2 border-white">
                    Customer
                  </th>
                  <th className="px-4 py-3 font-semibold border border-r-2 border-white">
                    Loan Details
                  </th>
                  <th className="px-4 py-3 font-semibold border border-r-2 border-white">
                    Status
                  </th>
                  <th className="px-4 py-3 font-semibold border border-r-2 border-white">
                    Priority
                  </th>
                  <th className="px-4 py-3 font-semibold border border-r-2 border-white">
                    Created Date
                  </th>
                  <th className="px-4 py-3 font-semibold">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr className=" ">
                  <td
                    className="px-4 py-3"
                    onClick={() => setIsApplicationDetails(true)}
                  >
                    <div className="font-medium">AP0013</div>
                    <div className="text-xs text-gray-500">Auto Loan</div>
                  </td>
                  <td className="px-4 py-3">
                    <div className="font-medium">Rajesh Kumar</div>
                    <div className="text-xs text-gray-500">+91 9876543210</div>
                  </td>
                  <td className="px-4 py-3">
                    <div>AED 33000</div>
                    <div className="text-xs text-gray-500">60 months</div>
                  </td>
                  <td className="px-4 py-3">
                    <span className="px-2 py-1 text-xs rounded-full bg-orange-100 text-orange-600">
                      Pending
                    </span>
                  </td>
                  <td className="px-4 py-3">—</td>
                  <td className="px-4 py-3">15 Jun 25</td>
                  <td className="px-4 py-3 flex gap-3">
                    <button>
                      <ViewIcon size={15} />
                    </button>
                    <button>
                      <EditIcon size={15} />
                    </button>
                    <button>
                      <DeleteIcon size={15} color="red" />
                    </button>
                  </td>
                </tr>

                <tr className="border-t border-gray-200">
                  <td className="px-4 py-3">
                    <div className="font-medium">AP0143</div>
                    <div className="text-xs text-gray-500">Auto Loan</div>
                  </td>
                  <td className="px-4 py-3">
                    <div className="font-medium">Priya Sharma</div>
                    <div className="text-xs text-gray-500">+91 9876543210</div>
                  </td>
                  <td className="px-4 py-3">
                    <div>AED 32000</div>
                    <div className="text-xs text-gray-500">60 months</div>
                  </td>
                  <td className="px-4 py-3">
                    <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-600">
                      Active
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <p className="flex items-center gap-1 text-xs text-green-600">
                      ● <span className="text-black"> Low</span>
                    </p>
                  </td>
                  <td className="px-4 py-3">19 July 25</td>
                  <td className="px-4 py-3 flex gap-3">
                    <button>
                      <ViewIcon size={15} />
                    </button>
                    <button>
                      <EditIcon size={15} />
                    </button>
                    <button>
                      <DeleteIcon size={15} color="red" />
                    </button>
                  </td>
                </tr>

                <tr className="border-t border-gray-200">
                  <td className="px-4 py-3">
                    <div className="font-medium">AP0123</div>
                    <div className="text-xs text-gray-500">Auto Loan</div>
                  </td>
                  <td className="px-4 py-3">
                    <div className="font-medium">Ashish</div>
                    <div className="text-xs text-gray-500">+91 9876543210</div>
                  </td>
                  <td className="px-4 py-3">
                    <div>AED 16000</div>
                    <div className="text-xs text-gray-500">26 months</div>
                  </td>
                  <td className="px-4 py-3">
                    <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-600">
                      Active
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <span className="flex items-center gap-1 text-xs text-green-600">
                      ● <span className="text-black"> Low</span>
                    </span>
                  </td>
                  <td className="px-4 py-3">01 Sep 25</td>
                  <td className="px-4 py-3 flex gap-3">
                    <button>
                      <ViewIcon size={15} />
                    </button>
                    <button>
                      <EditIcon size={15} />
                    </button>
                    <button>
                      <DeleteIcon size={15} color="red" />
                    </button>
                  </td>
                </tr>
                <tr className="border-t border-gray-200">
                  <td className="px-4 py-3">
                    <div className="font-medium">AP0123</div>
                    <div className="text-xs text-gray-500">Auto Loan</div>
                  </td>
                  <td className="px-4 py-3">
                    <div className="font-medium">Ashish</div>
                    <div className="text-xs text-gray-500">+91 9876543210</div>
                  </td>
                  <td className="px-4 py-3">
                    <div>AED 16000</div>
                    <div className="text-xs text-gray-500">26 months</div>
                  </td>
                  <td className="px-4 py-3">
                    <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-600">
                      Active
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <span className="flex items-center gap-1 text-xs text-green-600">
                      ● <span className="text-black"> Low</span>
                    </span>
                  </td>
                  <td className="px-4 py-3">01 Sep 25</td>
                  <td className="px-4 py-3 flex gap-3">
                    <button>
                      <ViewIcon size={15} />
                    </button>
                    <button>
                      <EditIcon size={15} />
                    </button>
                    <button>
                      <DeleteIcon size={15} color="red" />
                    </button>
                  </td>
                </tr>
                <tr className="border-t border-gray-200">
                  <td className="px-4 py-3">
                    <div className="font-medium">AP0123</div>
                    <div className="text-xs text-gray-500">Auto Loan</div>
                  </td>
                  <td className="px-4 py-3">
                    <div className="font-medium">Ashish</div>
                    <div className="text-xs text-gray-500">+91 9876543210</div>
                  </td>
                  <td className="px-4 py-3">
                    <div>AED 16000</div>
                    <div className="text-xs text-gray-500">26 months</div>
                  </td>
                  <td className="px-4 py-3">
                    <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-600">
                      Active
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <span className="flex items-center gap-1 text-xs text-green-600">
                      ● <span className="text-black"> Low</span>
                    </span>
                  </td>
                  <td className="px-4 py-3">01 Sep 25</td>
                  <td className="px-4 py-3 flex gap-3">
                    <button>
                      <ViewIcon size={15} />
                    </button>
                    <button>
                      <EditIcon size={15} />
                    </button>
                    <button>
                      <DeleteIcon size={15} color="red" />
                    </button>
                  </td>
                </tr>
                <tr className="border-t border-gray-200">
                  <td className="px-4 py-3">
                    <div className="font-medium">AP0123</div>
                    <div className="text-xs text-gray-500">Auto Loan</div>
                  </td>
                  <td className="px-4 py-3">
                    <div className="font-medium">Ashish</div>
                    <div className="text-xs text-gray-500">+91 9876543210</div>
                  </td>
                  <td className="px-4 py-3">
                    <div>AED 16000</div>
                    <div className="text-xs text-gray-500">26 months</div>
                  </td>
                  <td className="px-4 py-3">
                    <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-600">
                      Active
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <span className="flex items-center gap-1 text-xs text-green-600">
                      ● <span className="text-black"> Low</span>
                    </span>
                  </td>
                  <td className="px-4 py-3">01 Sep 25</td>
                  <td className="px-4 py-3 flex gap-3">
                    <button>
                      <ViewIcon size={15} />
                    </button>
                    <button>
                      <EditIcon size={15} />
                    </button>
                    <button>
                      <DeleteIcon size={15} color="red" />
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="flex justify-between items-center mt-4 text-sm text-gray-600 bg-white p-2 rounded-md">
          <div>01 of 10 pages</div>
          <div className="flex items-center gap-2">
            <button className="px-2">◀</button>
            <button className="px-2">▶</button>
          </div>
          <div>
            Row per page:{" "}
            <select className="border rounded-md px-2 py-1 text-sm">
              <option>8</option>
              <option>10</option>
              <option>20</option>
            </select>
          </div>
        </div>
      </div>
      {isApplicationdetails && <ApplicationDetailsPupup />}
    </div>
  );
}
