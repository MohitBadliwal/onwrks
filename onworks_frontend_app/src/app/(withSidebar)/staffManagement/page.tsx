"use client";
import React from "react";
import AddStaffPopup from "../../addStaffPopup/page";
import StaffDetailsPupup from "../../staffDetailsPopup/page";
import UploadIcon from "@/icons/UploadIcon";
import StaffM_Icon from "@/icons/StaffM_Icon";
import ProgressGraphIcon from "@/icons/ProgressGraphIcon";
import StaffM_ActiveIcon from "@/icons/StaffM_ActiveIcon";
import ArrowTiltRightIcon from "@/icons/ArrowTiltRightIcon";
import ViewIcon from "@/icons/ViewIcon";
import EditIcon from "@/icons/EditIcon";
import DeleteIcon from "@/icons/DeleteIcon";
import InfoIcon from "@/icons/InfoIcon";
import UserAddIcon from "@/icons/UserAddIcon";
import { useDealerStore } from "@/store/useDealerStore";
import FactorIcon from "@/icons/FactorIcon";
import CalendarBlankIcon from "@/icons/CalendarBlankIcon";


export default function StaffManagement() {
  const { isAddStaff, setIsAddStaff, isStaffdetails, setIsStaffDetails } =
    useDealerStore();

  return (
    <div className="flex bg-gray-50 min-h-screen">
      <div className={`flex-1 transition-all duration-300 ease-in-out`}>
        <div className="min-h-screen bg-gray-50">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-xl font-semibold">Staff Management</h1>
            <div className="flex items-center gap-4">
              <button
                onClick={() => setIsAddStaff(true)}
                className="flex gap-1 text-white bg-orange-500 rounded-full px-8 py-2 text-sm cursor-pointer hover:bg-orange-600"
              >
                <UserAddIcon color="white" /> Add Staff
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <div className="text-xs px-6 rounded-md  bg-white shadow-sm   flex justify-between items-center">
              <div className="space-y-1">
                <p>Total Staff</p>
                <h2 className="font-medium text-base">20</h2>
              </div>
              <span className="p-1.5 rounded-md bg-[#E7F5ED] text-center inline-block">
                <StaffM_Icon />
              </span>
            </div>
            <div className="text-xs p-6 rounded-md  bg-white shadow-sm   flex justify-between items-center">
              <div className="space-y-1">
                <p>Active Staff</p>
                <h2 className="font-medium text-base">25</h2>
              </div>
              <span className="p-1.5 rounded-md bg-[#FAF4F5] text-center inline-block">
                <StaffM_ActiveIcon />
              </span>
            </div>
            <div className="text-xs p-6 rounded-md  bg-white shadow-sm   flex justify-between items-center">
              <div className="space-y-1">
                <p>Avg. Conversion Rate</p>
                <h2 className="font-medium text-base">82.0%</h2>
              </div>
              <span className="p-1.5 rounded-md bg-[#EEF4Fc] text-center inline-block">
                <ProgressGraphIcon size={20} />
              </span>
            </div>
            <div className="text-xs p-6 rounded-md  bg-white shadow-sm   flex justify-between items-center">
              <div className="space-y-1">
                <p>Total Applications</p>
                <h2 className="font-medium text-base">140</h2>
              </div>
              <span className="p-1.5 rounded-md bg-[#FDFEE3] text-center inline-block">
                <FactorIcon size={20} />
              </span>
            </div>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-sm">
            <div className="flex justify-between items-center">
              <h2 className="text-md font-semibold mb-4">Staff Members</h2>

              <div className="flex justify-between items-center mb-4">
                <div className="flex gap-2">
                  <div className="flex items-center border border-gray-300 rounded-sm px-2 py-1 text-xs text-gray-600 bg-white dealerReportsAndAnalysticsDatePicker">
                    <CalendarBlankIcon size={15} className="me-2" />
                    <input
                      type="date"
                      className="outline-none bg-transparent text-gray-800 font-medium"
                    />
                    <span className="me-3">to</span>
                    <input
                      type="date"
                      className="outline-none bg-transparent text-gray-800 font-medium"
                    />
                  </div>
                  <select className="border rounded-md px-3 py-1 text-xs w-48">
                    <option>Loan Type: All</option>
                  </select>
                </div>
                <div className="border-r-2 border-gray-300 h-6 mx-4" />
                <div className="flex gap-2 text-orange-500 font-semibold cursor-pointer text-xs items-center">
                  <ArrowTiltRightIcon color="#f7770eff" />
                  <span> View More</span>
                  <div className=" border-r-2 border-gray-300 h-6 mx-2" />
                  <UploadIcon size={17} color="#f7770eff" />
                  <span className="mt-0.5"> Export</span>
                </div>
              </div>
            </div>

            <div className="overflow-x-auto border border-gray-200 rounded-md">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-[#FAF1EC] text-sm text-left">
                    <th className="p-3 border-r-2 border-white">
                      Staff Member
                    </th>
                    <th className="p-3 border-r-2 border-white">Role</th>
                    <th className="p-3 border-r-2 border-white">
                      Application Handled
                    </th>
                    <th className="p-3 border-r-2 border-white">
                      Conversation Rate
                    </th>
                    <th className="p-3 border-r-2 border-white">
                      Average Time
                    </th>
                    <th className="p-3 border-r-2 border-white">Status</th>
                    <th className="p-3">Actions</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  <tr className="">
                    <td className="p-3" onClick={() => setIsStaffDetails(true)}>
                      <div className="font-medium">Suresh Readdy</div>
                      <div className="text-gray-500 text-xs">
                        suresh.readdy@gmail.com
                      </div>
                    </td>
                    <td className="p-3">Branch Manager</td>
                    <td className="p-3">40</td>
                    <td className="p-3">
                      <div className="flex items-center gap-2">
                        <div className="w-20 bg-gray-200 h-2 rounded-full">
                          <div className="h-2 w-[82%] bg-green-500 rounded-full"></div>
                        </div>
                        <span>82%</span>
                      </div>
                    </td>
                    <td className="p-3">2.5 Days</td>
                    <td className="p-3">
                      <span className="px-2 py-1 rounded-full text-xs bg-green-100 text-green-600">
                        Active
                      </span>
                    </td>
                    <td className="p-3 flex gap-3 text-gray-500">
                      <ViewIcon size={20} /> <EditIcon size={20} />{" "}
                      <DeleteIcon size={20} color="#DA1E28" />
                    </td>
                  </tr>

                  <tr className="border-t border-gray-300">
                    <td className="p-3">
                      <div className="font-medium">Pankaj Readdy</div>
                      <div className="text-gray-500 text-xs">
                        pankaj.readdy@gmail.com
                      </div>
                    </td>
                    <td className="p-3">Credit Analyst</td>
                    <td className="p-3">45</td>
                    <td className="p-3">
                      <div className="flex items-center gap-2">
                        <div className="w-20 bg-gray-200 h-2 rounded-full">
                          <div className="h-2 w-[82%] bg-green-500 rounded-full"></div>
                        </div>
                        <span>82%</span>
                      </div>
                    </td>
                    <td className="p-3">3 Days</td>
                    <td className="p-3">
                      <span className="px-2 py-1 rounded-full text-xs bg-orange-100 font-bold text-[#ff8b00]">
                        On leave
                      </span>
                    </td>
                    <td className="p-3 flex gap-3 text-gray-500">
                      <ViewIcon size={20} /> <EditIcon size={20} />{" "}
                      <DeleteIcon size={20} color="#DA1E28" />
                    </td>
                  </tr>

                  <tr className="border-t border-gray-300">
                    <td className="p-3">
                      <div className="font-medium">Preeti Singh</div>
                      <div className="text-gray-500 text-xs">
                        preeti.singh@gmail.com
                      </div>
                    </td>
                    <td className="p-3">Customer Service Rep</td>
                    <td className="p-3">76</td>
                    <td className="p-3">
                      <div className="flex items-center gap-2">
                        <div className="w-20 bg-gray-200 h-2 rounded-full">
                          <div className="h-2 w-[92%] bg-green-500 rounded-full"></div>
                        </div>
                        <span>92%</span>
                      </div>
                    </td>
                    <td className="p-3">2 Days</td>
                    <td className="p-3">
                      <span className="px-2 py-1 rounded-full text-xs bg-green-100 text-green-600">
                        Active
                      </span>
                    </td>
                    <td className="p-3 flex gap-3 text-gray-500">
                      <ViewIcon size={20} /> <EditIcon size={20} />{" "}
                      <DeleteIcon size={20} color="#DA1E28" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="mt-6 bg-gray-50 flex items-center justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
              <div className="bg-white rounded-2xl shadow p-6">
                <h2 className="text-md font-semibold mb-4 flex items-center gap-2">
                  Role Distribution
                  <InfoIcon />
                </h2>

                <div className="mb-6">
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Brand Admin</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-green-500 h-2 rounded-full"
                        style={{ width: "82%" }}
                      ></div>
                    </div>
                    <span className="text-sm font-medium text-green-600 ms-2">
                      82%
                    </span>
                  </div>
                </div>

                <div className="mb-6">
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">
                      Relationship Manager
                    </span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-green-500 h-2 rounded-full"
                        style={{ width: "70%" }}
                      ></div>
                    </div>
                    <span className="text-sm font-medium text-green-600 ms-2">
                      70%
                    </span>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Dealer</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-green-500 h-2 rounded-full"
                        style={{ width: "92%" }}
                      ></div>
                    </div>
                    <span className="text-sm font-medium text-green-600 ms-2">
                      92%
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow p-6">
                <h2 className="text-md font-semibold mb-4 flex items-center gap-2">
                  Performance Leaderboard
                  <InfoIcon />
                </h2>

                <div className="bg-blue-50 p-4 rounded-md border border-blue-200 flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 flex items-center justify-center bg-white text-blue-500 rounded-full border text-xs font-semibold">
                      1
                    </div>
                    <div>
                      <p className="font-semibold text-sm">Suresh Reddy</p>
                      <p className="text-xs text-gray-500">Branch Admin</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-green-600 font-semibold text-sm">
                      91.2%
                    </p>
                    <p className="text-xs text-gray-500">67 application</p>
                  </div>
                </div>

                <div className="bg-blue-50 p-4 rounded-md border border-blue-200 flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 flex items-center justify-center bg-white text-blue-500 rounded-full border text-xs font-semibold">
                      2
                    </div>
                    <div>
                      <p className="text-sm font-semibold">Neha Singh</p>
                      <p className="text-xs text-gray-500">Dealer</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-green-600 font-semibold text-sm">
                      88.2%
                    </p>
                    <p className="text-xs text-gray-500">60 application</p>
                  </div>
                </div>

                <div className="bg-blue-50 p-4 rounded-md border border-blue-200 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 flex items-center justify-center bg-white text-blue-500 rounded-full border text-xs font-semibold">
                      3
                    </div>
                    <div>
                      <p className="font-semibold text-sm">Amit Pal</p>
                      <p className="text-xs text-gray-500">
                        Relationship Manager
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-green-600 font-semibold text-sm">
                      81.2%
                    </p>
                    <p className="text-xs text-gray-500">70 application</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isAddStaff && <AddStaffPopup />}
      {isStaffdetails && <StaffDetailsPupup />}
    </div>
  );
}
