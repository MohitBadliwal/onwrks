"use client";
import ActiveApplicationsIcons from "../../../icons/ActiveApplicationsIcon";
import ErrorIcon from "../../../icons/ErrorIcon";
import InfoIcon from "../../../icons/InfoIcon";
import PendingStatusIcon from "../../../icons/PendingStatusIcon";
import TotalApplicationIcon from "../../../icons/TotalApplicationIcon";
import React from "react";

export default function DealerDashboard() {
  return (
    <div className="flex bg-gray-50 min-h-screen">
      <div className={`flex-1  transition-all duration-300 ease-in-out`}>
        <h2 className="font-bold text-lg">Dashboard</h2>
        <div className="py-3 min-h-screen">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white rounded-2xl shadow p-5">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-gray-500 text-xs">Total Applications</p>
                    <h2 className="mt-2 text-md font-semibold leading-tight">
                      1,247
                    </h2>
                  </div>
                  <span className="h-10 w-10 rounded-md bg-[#EDF3ED] flex items-center justify-center">
                    <TotalApplicationIcon size={25} />
                  </span>
                </div>
                <p className="mt-1 text-green-600 text-xs">
                  +12.5% from last month
                </p>
              </div>
              <div className="bg-white rounded-2xl shadow p-5">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-gray-500 text-xs">Active Applications</p>
                    <h2 className="mt-2 text-md font-semibold leading-tight">
                      1,247
                    </h2>
                  </div>
                  <span className="h-10 w-10 rounded-md bg-[#FAF4F5] flex items-center justify-center">
                    <ActiveApplicationsIcons size={25} />
                  </span>
                </div>
                <p className="mt-1 text-green-600 text-xs">
                  +12.5% from last month
                </p>
              </div>
              <div className="bg-white rounded-2xl shadow p-5">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-gray-500 text-xs">Pending & Rework</p>
                    <h2 className="mt-2 text-md font-semibold leading-tight">
                      1,247
                    </h2>
                  </div>
                  <span className="h-10 w-10 rounded-md bg-[#EEF4FC] flex items-center justify-center">
                    <PendingStatusIcon size={25} />
                  </span>
                </div>
                <p className="mt-1 text-red-600 text-xs">
                  -3.1% from last month
                </p>
              </div>
              <div className="bg-white rounded-2xl shadow p-5">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-gray-500 text-xs">
                      Defaulted Applications
                    </p>
                    <h2 className="mt-2 text-md font-semibold leading-tight">
                      1,247
                    </h2>
                  </div>
                  <span className="h-10 w-10 rounded-md bg-[#FFF2D1] flex items-center justify-center">
                    <ErrorIcon size={25} color="black" />
                  </span>
                </div>
                <p className="mt-1 text-green-600 text-xs">
                  3.1% from last month
                </p>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow p-6   flex flex-col items-start justify-center">
              <h2 className="text-md font-semibold text-gray-800 mb-6 flex items-center gap-2">
                Application Status Distribution{" "}
                <span className="text-gray-400">
                  <InfoIcon />
                </span>
              </h2>
              <div className="flex items-start justify-between w-full gap-8">
                <div className="space-y-4 text-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 bg-[#336DFF] rounded-full"></span>{" "}
                    Active 57%
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 bg-[#AF416D] rounded-full"></span>{" "}
                    Pending 29%
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 bg-[#87D8E3] rounded-full"></span>{" "}
                    Default 12%
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 bg-[#F76B1C] rounded-full"></span>{" "}
                    Rework 11%
                  </div>
                </div>
                <svg width="150" height="150" viewBox="0 0 36 36">
                  <circle
                    cx="18"
                    cy="18"
                    r="15"
                    fill="none"
                    stroke="#FACC15"
                    strokeWidth="6"
                    strokeDasharray="76, 35"
                  />
                  <circle
                    cx="18"
                    cy="18"
                    r="15"
                    fill="none"
                    stroke="#3B82F6"
                    strokeWidth="6"
                    strokeDasharray="25, 81.6"
                    transform="rotate(-90 18 18)"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-6">
            <div className="bg-white shadow rounded-2xl p-5">
              <h2 className="text-md font-semibold text-gray-800 flex items-center">
                Conversion Rate Trend (%)
                <span className="text-gray-400">
                  <InfoIcon />
                </span>
              </h2>
              <div className="mt-4">
                <div className="h-40 bg-gray-100 rounded-md flex items-center justify-center text-gray-400 text-sm">
                  Chart
                </div>
              </div>
              <div className="mt-4">
                <div className="flex items-center justify-between mt-2">
                  <p className="text-gray-500 text-sm">Loan Conversion Rate</p>
                  <span className="text-lg font-bold">78.5%</span>
                </div>
                <p className="text-green-500 text-xs font-medium float-right">
                  +2.3% from last month
                </p>
              </div>
            </div>
            <div className="bg-white shadow rounded-2xl p-5">
              <h2 className="text-md font-semibold text-gray-800 flex items-center">
                Avg. Approval Time (Days)
                <span className="text-gray-400">
                  <InfoIcon />
                </span>
              </h2>
              <div className="mt-4">
                <div className="h-40 bg-gray-100 rounded-md flex items-center justify-center text-gray-400 text-sm">
                  Chart
                </div>
              </div>
              <div className="mt-4">
                <div className="flex items-center justify-between mt-2">
                  <p className="text-gray-500 text-sm">Avg Approval Time</p>
                  <span className="text-lg font-bold">3.2 Days</span>
                </div>
                <p className="text-green-500 text-xs font-medium float-right">
                  +8.7% from last month
                </p>
              </div>
            </div>
            <div className="bg-white shadow rounded-2xl p-5">
              <h2 className="text-md font-semibold text-gray-800 flex items-center">
                Profit Trend (in AED)
                <span className="text-gray-400">
                  <InfoIcon />
                </span>
              </h2>
              <div className="mt-4">
                <div className="h-40 bg-gray-100 rounded-md flex items-center justify-center text-gray-400 text-sm">
                  Chart
                </div>
              </div>
              <div className="mt-4">
                <div className="flex items-center justify-between mt-2">
                  <p className="text-gray-500 text-sm">Total Profit</p>
                  <span className="text-lg font-bold">99,000</span>
                </div>
                <p className="text-green-500 text-xs font-medium float-right">
                  +18% from last month
                </p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-6">
            <div className="bg-white shadow rounded-2xl p-5">
              <h2 className="text-md font-semibold text-gray-800 flex items-center">
                Earning Breakdown (in AED)
                <span className="text-gray-400">
                  <InfoIcon />
                </span>
              </h2>
              <div className="mt-4">
                <div className="h-40 bg-gray-100 rounded-md flex items-center justify-center text-gray-400 text-sm">
                  Chart
                </div>
              </div>
            </div>
            <div className="bg-white shadow rounded-2xl p-5">
              <h2 className="text-md font-semibold text-gray-800 flex items-center">
                Branch Performance Leaderboard
                <span className="text-gray-400">
                  <InfoIcon />
                </span>
              </h2>
              <div className="mt-4">
                <div className="w-full  rounded-md bg-blue-50 p-3 shadow-sm">
                  <div className="flex justify-between items-center">
                    <div>
                      <h2 className="text-sm font-semibold text-gray-900">
                        Dubai
                      </h2>
                      <p className="text-xs text-gray-500">156 applications</p>
                    </div>

                    <div className="text-right">
                      <p className="text-sm font-semibold text-emerald-600">
                        81.2%
                      </p>
                      <p className="text-xs text-gray-500">Conversion rate</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <div className="w-full  rounded-md bg-blue-50 p-3 shadow-sm">
                  <div className="flex justify-between items-center">
                    <div>
                      <h2 className="text-sm font-semibold text-gray-900">
                        Doha
                      </h2>
                      <p className="text-xs text-gray-500">156 applications</p>
                    </div>

                    <div className="text-right">
                      <p className="text-sm font-semibold text-emerald-600">
                        81.2%
                      </p>
                      <p className="text-xs text-gray-500">Conversion rate</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <div className="w-full  rounded-md bg-blue-50 p-3 shadow-sm">
                  <div className="flex justify-between items-center">
                    <div>
                      <h2 className="text-sm font-semibold text-gray-900">
                        Qatar
                      </h2>
                      <p className="text-xs text-gray-500">156 applications</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-semibold text-emerald-600">
                        81.2%
                      </p>
                      <p className="text-xs text-gray-500">Conversion rate</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white shadow-md rounded-2xl p-5">
            <h2 className="text-md font-semibold mb-4">Top Performing Staff</h2>
            <div className="overflow-hidden rounded-md border border-gray-200 text-xs text-center">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-[#FAF1EC] text-gray-600">
                    <th className="px-6 py-3 rounded-l-md border-r-2 border-white text-black">
                      Name
                    </th>
                    <th className="px-6 py-3 border-r-2 border-white text-black">Role</th>
                    <th className="px-6 py-3 border-r-2 border-white text-black">
                      Applications
                    </th>
                    <th className="px-6 py-3 border-r-2 border-white text-black">
                      Conversion Rate
                    </th>
                    <th className="px-6 py-3 rounded-r-lg text-black">
                      Avg. Approval Time
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white rounded-xl shadow-sm">
                    <td className="px-6 py-4">Suresh Reddy</td>
                    <td className="px-6 py-4">
                      <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-600 text-xs font-medium">
                        Branch Admin
                      </span>
                    </td>
                    <td className="px-6 py-4">68</td>
                    <td className="px-6 py-4 text-green-600 font-medium">
                      76%
                    </td>
                    <td className="px-6 py-4">3.5 Days</td>
                  </tr>
                  <tr className="bg-white rounded-xl shadow-sm border-t border-gray-200">
                    <td className="px-6 py-4">Neha Singh</td>
                    <td className="px-6 py-4">
                      <span className="px-3 py-1 rounded-full bg-green-100 text-green-600 text-xs font-medium">
                        Dealer
                      </span>
                    </td>
                    <td className="px-6 py-4">70</td>
                    <td className="px-6 py-4 text-green-600 font-medium">
                      80%
                    </td>
                    <td className="px-6 py-4">3.5 Days</td>
                  </tr>
                  <tr className="bg-white rounded-xl shadow-sm border-t border-gray-200">
                    <td className="px-6 py-4">Neelam Vats</td>
                    <td className="px-6 py-4">
                      <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-600 text-xs font-medium">
                        RM
                      </span>
                    </td>
                    <td className="px-6 py-4">52</td>
                    <td className="px-6 py-4 text-green-600 font-medium">
                      83%
                    </td>
                    <td className="px-6 py-4">2.5 Days</td>
                  </tr>
                  <tr className="bg-white rounded-xl shadow-sm border-t border-gray-200">
                    <td className="px-6 py-4">Barkha Singh</td>
                    <td className="px-6 py-4">
                      <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-600 text-xs font-medium">
                        Branch Admin
                      </span>
                    </td>
                    <td className="px-6 py-4">85</td>
                    <td className="px-6 py-4 text-green-600 font-medium">
                      80%
                    </td>
                    <td className="px-6 py-4">3.5 Days</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
