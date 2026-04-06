"use client";
import React from "react";
import AddNewBranchPopup from "../../addNewBranchPopup/page";
import BranchDetailsPupup from "../../branchDetailsPopup/page";
import BranchOrColumnStackIcon from "@/icons/BranchOrColumnStackIcon";
import StarOrReviewIcon from "@/icons/StarOrReviewIcon";
import BankAccountIcon from "@/icons/BankAccountIcon";
import ProgressGraphIcon from "@/icons/ProgressGraphIcon";
import EditIcon from "@/icons/EditIcon";
import DeleteIcon from "@/icons/DeleteIcon";
import InfoIcon from "@/icons/InfoIcon";
import ArrowTiltRightIcon from "@/icons/ArrowTiltRightIcon";
import UploadIcon from "@/icons/UploadIcon";
import ViewIcon from "@/icons/ViewIcon";
import { useDealerStore } from "@/store/useDealerStore";
import LocationAddressIcon from "@/icons/LocationAddressIcon";
import BranchM_Icon from "@/icons/BranchM_Icon";

export default function BranchManagement() {
  const {
    isAddNewBranch,
    setIsAddNewBranch,
    isBranchdetails,
    setIsBranchDetails,
  } = useDealerStore();

  return (
    <div className="flex bg-gray-50 min-h-screen">
      <div className={`flex-1 transition-all duration-300 ease-in-out `}>
        <div className="min-h-screen bg-gray-50">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-xl font-semibold">Branch Management</h1>
            <div className="flex items-center gap-4">
              <button
                className="flex gap-1 text-white bg-orange-500 rounded-full px-8 py-2 text-sm cursor-pointer hover:bg-orange-600"
                onClick={() => setIsAddNewBranch(true)}
              >
               <BranchM_Icon color="white"/> Add Branch
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <div className="text-xs p-3 rounded-md  bg-white shadow-sm   flex justify-between items-center">
              <div className="space-y-1">
                <p>Total Branch</p>
                <h2 className="font-medium text-base">20</h2>
              </div>
              <span className="p-1.5 rounded-md bg-[#E7F5ED] text-center inline-block">
                <BranchOrColumnStackIcon size={20} />
              </span>
            </div>
            <div className="text-xs p-3 rounded-md  bg-white shadow-sm   flex justify-between items-center">
              <div className="space-y-1">
                <p>Active Branch</p>
                <h2 className="font-medium text-base">25</h2>
              </div>
              <span className="p-1.5 rounded-md bg-[#FAF4F5] text-center inline-block">
                <StarOrReviewIcon size={20} />
              </span>
            </div>
            <div className="text-xs p-3 rounded-md  bg-white shadow-sm   flex justify-between items-center">
              <div className="space-y-1">
                <p>Active Branch</p>
                <h2 className="font-medium text-base">82.0%</h2>
              </div>
              <span className="p-1.5 rounded-md bg-[#EEF4FC] text-center inline-block">
                <BankAccountIcon size={20} />
              </span>
            </div>
            <div className="text-xs p-3 rounded-md  bg-white shadow-sm   flex justify-between items-center">
              <div className="space-y-1">
                <p>Avg. Conversion Rate</p>
                <h2 className="font-medium text-base">140</h2>
              </div>
              <span className="p-1.5 rounded-md bg-[#fDFEE3] text-center inline-block">
                <ProgressGraphIcon size={20} />
              </span>
            </div>
          </div>

          <div className="mt-6 bg-gray-50 flex items-center justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
              <div className="  bg-white shadow rounded-2xl p-4">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="p-1.5 rounded-md bg-[#FAF4F5] text-center inline-block">
                        <BankAccountIcon size={20} color="#FAF4F5" />
                      </span>
                      <div>
                      <h2 className="text-md font-semibold flex items-center">Qatar<InfoIcon size={12} className="ms-1"/></h2>
                      <p className="text-sm text-gray-500">Suresh Reddy</p>
                      </div>
                      
                    </div>
                    
                    <p className="flex gap-1 text-xs text-black my-2">
                     <LocationAddressIcon/> Bur Dubai Branch – 155 Khalid Bin Al Waleed Rd – Al
                      Mankhool – Qatar
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs bg-green-100 text-green-600 px-2 py-1 rounded-full">
                      Active
                    </span>
                    <button className="text-gray-500 hover:text-gray-700 cursor-pointer">
                      <EditIcon size={20} />
                    </button>
                    <button className="text-red-500 hover:text-red-700 cursor-pointer">
                      <DeleteIcon size={20} color="#DA1E28" />
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="bg-blue-50 rounded-md p-4 text-center">
                    <p className="text-2xl font-semibold">8</p>
                    <p className="text-sm text-gray-500">Staff Members</p>
                  </div>
                  <div className="bg-blue-50 rounded-md p-4 text-center">
                    <p className="text-2xl font-semibold">156</p>
                    <p className="text-sm text-gray-500">Applications</p>
                  </div>
                </div>

                <div>
                  <p className="text-sm font-medium text-gray-600 mb-2">
                    Conversion Rate
                  </p>
                  <div className="flex items-center gap-2">
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-green-500 h-2 rounded-full"
                        style={{ width: "81.2%" }}
                      ></div>
                    </div>

                    <p className="text-sm font-semibold text-gray-600 mt-1 text-right">
                      <label className="text-green-500">81.2%</label>
                    </p>
                  </div>
                </div>
              </div>

              <div className="  bg-white shadow rounded-2xl p-4">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="p-1.5 rounded-md bg-[#FAF4F5] text-center inline-block">
                        <BankAccountIcon size={20} color="#FAF4F5" />
                      </span>
                      <div>
                      <h2 className="text-md font-semibold flex items-center">Qatar<InfoIcon size={12} className="ms-1"/></h2>
                      <p className="text-sm text-gray-500">Suresh Reddy</p>
                      </div>
                      
                    </div>
                    <p className="flex gap-1 text-xs text-black my-2">
                     <LocationAddressIcon/> Unit md – 146 - Financial Ctr St – Dubai – United Arab Emirates
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs bg-green-100 text-green-600 px-2 py-1 rounded-full">
                      Active
                    </span>
                    <button className="text-gray-500 hover:text-gray-700 cursor-pointer">
                      <EditIcon size={20} />
                    </button>
                    <button className="text-red-500 hover:text-red-700 cursor-pointer">
                      <DeleteIcon size={20} color="#DA1E28" />
                    </button>
                    <button className="text-red-500 hover:text-red-700"></button>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="bg-blue-50 rounded-md p-4 text-center">
                    <p className="text-2xl font-semibold">10</p>
                    <p className="text-sm text-gray-500">Staff Members</p>
                  </div>
                  <div className="bg-blue-50 rounded-md p-4 text-center">
                    <p className="text-2xl font-semibold">120</p>
                    <p className="text-sm text-gray-500">Applications</p>
                  </div>
                </div>

                <div>
                  <p className="text-sm font-medium text-gray-600 mb-2">
                    Conversion Rate
                  </p>
                  <div className="flex items-center gap-2">
                    <div className="flex w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-green-500 h-2 rounded-full"
                        style={{ width: "92.2%" }}
                      ></div>
                    </div>
                    <p className="text-sm font-semibold text-gray-600 mt-1 text-right">
                      <label className="text-green-500">92.2%</label>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-sm mt-6">
            <div className="flex justify-between items-center">
              <h2 className="text-md font-semibold mb-4">
                Branch Performance Comparison
              </h2>

              <div className="flex justify-between items-center mb-4">
                <div className="flex gap-2 text-orange-500 font-semibold cursor-pointer text-xs items-center">
                  <ArrowTiltRightIcon color="#f7770eff" />
                  <span> View More</span>
                  <div className="border-r-2 border-gray-300 h-6 mx-2" />
                  <UploadIcon size={17} color="#f7770eff" />
                  <span> Export</span>
                </div>
              </div>
            </div>

            <div className="overflow-x-auto border border-gray-200 rounded-md">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-[#FAF1EC] text-sm text-left">
                    <th className="p-3 border-r-2 border-white">Branch</th>
                    <th className="p-3 border-r-2 border-white">Manager</th>
                    <th className="p-3 border-r-2 border-white">Staff</th>
                    <th className="p-3 border-r-2 border-white">Application</th>
                    <th className="p-3 border-r-2 border-white">
                      Conversion Rate
                    </th>
                    <th className="p-3 border-r-2 border-white">Performance</th>
                    <th className="p-3">Actions</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  <tr className="" onClick={() => setIsBranchDetails(true)}>
                    <td className="p-3">
                      <div className="font-medium">Doha</div>
                    </td>
                    <td className="p-3">Suresh Ready</td>
                    <td className="p-3">40</td>
                    <td className="p-3">140</td>
                    <td className="p-3 text-green-600">82%</td>
                    <td className="p-3">
                      <div className="flex items-center gap-2">
                        <div className="w-15 bg-gray-200 h-2 rounded-full">
                          <div className="h-2 w-[72%] bg-green-500 rounded-full"></div>
                        </div>
                        <span className="text-xs">Excellent</span>
                      </div>
                    </td>
                    <td className="p-3 flex gap-3 text-gray-500">
                      <ViewIcon size={20} /> <EditIcon size={20} />{" "}
                      <DeleteIcon size={20} color="#DA1E28" />
                    </td>
                  </tr>

                  <tr className="border-t border-gray-300">
                    <td className="p-3">
                      <div className="font-medium">Qatar</div>
                    </td>
                    <td className="p-3">Preeti Singh</td>
                    <td className="p-3">34</td>
                    <td className="p-3">120</td>
                    <td className="p-3 text-green-600">75%</td>
                    <td className="p-3">
                      <div className="flex items-center gap-2">
                        <div className="w-15 bg-gray-200 h-2 rounded-full">
                          <div className="h-2 w-[72%] bg-orange-400 rounded-full"></div>
                        </div>
                        <span className="text-xs">Good</span>
                      </div>
                    </td>
                    <td className="p-3 flex gap-3 text-gray-500">
                      <ViewIcon size={20} /> <EditIcon size={20} />{" "}
                      <DeleteIcon size={20} color="#DA1E28" />
                    </td>
                  </tr>

                  <tr className="border-t border-gray-300">
                    <td className="p-3">
                      <div className="font-medium">Doha</div>
                    </td>
                    <td className="p-3">Suresh Ready</td>
                    <td className="p-3">40</td>
                    <td className="p-3">140</td>
                    <td className="p-3 text-green-600">82%</td>
                    <td className="p-3">
                      <div className="flex items-center gap-2">
                        <div className="w-15 bg-gray-200 h-2 rounded-full">
                          <div className="h-2 w-[72%] bg-green-500 rounded-full"></div>
                        </div>
                        <span className="text-xs">Excellent</span>
                      </div>
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
        </div>
      </div>
      {isAddNewBranch && <AddNewBranchPopup />}
      {isBranchdetails && <BranchDetailsPupup />}
    </div>
  );
}
