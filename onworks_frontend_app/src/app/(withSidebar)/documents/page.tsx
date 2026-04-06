import React from "react";
import DocumentIcon from "../../../icons/DocumentIcon";
import ViewIcon from "../../../icons/ViewIcon";
import UploadIcon from "../../../icons/UploadIcon";
import PlusIcon from "../../../icons/PlusIcon";
import DownloadIcon from "../../../icons/DownloadIcon";
import LetterOrNotesIcon from "../../../icons/LetterOrNotesIcon";
import CalculatorIcon from "../../../icons/CalculatorIcon";
import IdentityIcon from "../../../icons/IdentityIcon";
import CarIcon from "../../../icons/CarIcon";
import PaymentsIcon from "../../../icons/PaymentsIcon";
import TrainingIcon from "../../../icons/TrainingIcon";
import ContentTaskIcon from "../../../icons/ContentTaskIcon";
import MailinglistIcon from "../../../icons/MailinglistIcon";
import TableviewIcon from "../../../icons/TableviewIcon";
import CCAssignedIcon from "../../../icons/CCAssignedIcon";
import FinanceIcon from "../../../icons/FinanceIcon";
import PercentIcon from "../../../icons/PercentIcon";
import CustomSelect from "../../../components/global/CustomSelect";

export default function Documents() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div>
        <div className="flex items-center justify-between  mb-4">
          <CustomSelect
            name="loantype"
            className="text-sm text-gray-600 p-3 rounded-md border border-gray-200 flex font-semibold items-center   bg-white focus:outline-none focus:ring-2 focus:ring-black/20 cursor-pointer"
          >
            <option>Car Loan</option>
            <option>Bike Loan </option>
            <option>Heavy Vehicle Loan</option>
          </CustomSelect>
          <button className="bg-[#FF6B3D] text-white px-4 py-2 rounded-full text-sm font-medium flex items-center gap-1 cursor-pointer hover:bg-orange-600">
            <PlusIcon color="white" size={10} /> Apply for New Loan
          </button>
        </div>
        <div className="bg-white px-6 py-3 rounded-lg shadow-sm">
          <h2 className="font-semibold text-black mb-1">Loan Documents</h2>
          <p className="text-gray-500 text-xs mb-4">
            Access your official loan documents and agreements
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="border border-gray-300 rounded-lg p-4">
              <div className="flex items-center mb-2 gap-3">
                <DocumentIcon />
                <span className="font-semibold text-black text-sm">
                  Loan Agreement
                </span>
              </div>

              <div className="flex flex-wrap gap-3 mt-5">
                <button className="flex-1 min-w-[120px] flex items-center justify-center gap-1 bg-[#FEF4F0] text-orange-500 px-4 py-2 rounded-full text-xs font-medium cursor-pointer">
                  <ViewIcon size={18} color="#F76B1C" /> View
                </button>
                <button className="flex-1 min-w-[120px] flex items-center justify-center gap-1 bg-[#FEF4F0] text-orange-500 px-4 py-2 rounded-full text-xs font-medium cursor-pointer">
                  <DownloadIcon size={18} color="#F76B1C" /> Download
                </button>
              </div>
            </div>

            <div className="border border-gray-300 rounded-lg p-4">
              <div className="flex items-center mb-2 gap-3">
                <LetterOrNotesIcon size={25} />
                <span className="font-semibold text-black text-sm">
                  Sanction Letter
                </span>
              </div>
              <div className="flex flex-wrap gap-3 mt-5">
                <button className="flex-1 min-w-[120px] flex items-center justify-center gap-1 bg-[#FEF4F0] text-orange-500 px-4 py-2 rounded-full text-xs font-medium cursor-pointer">
                  <ViewIcon size={18} color="#F76B1C" /> View
                </button>
                <button className="flex-1 min-w-[120px] flex items-center justify-center gap-1 bg-[#FEF4F0] text-orange-500 px-4 py-2 rounded-full text-xs font-medium cursor-pointer">
                  <DownloadIcon size={18} color="#F76B1C" /> Download
                </button>
              </div>
            </div>

            <div className="border border-gray-300 rounded-lg p-4">
              <div className="flex items-center mb-2 gap-3">
                <CalculatorIcon size={20} />
                <span className="font-semibold text-black text-sm">
                  Repayment Schedule
                </span>
              </div>
              <div className="flex flex-wrap gap-3 mt-5">
                <button className="flex-1 min-w-[120px] flex items-center justify-center gap-1 bg-[#FEF4F0] text-orange-500 px-4 py-2 rounded-full text-xs font-medium">
                  <ViewIcon size={18} color="#F76B1C" /> View
                </button>
                <button className="flex-1 min-w-[120px] flex items-center justify-center gap-1 bg-[#FEF4F0] text-orange-500 px-4 py-2 rounded-full text-xs font-medium">
                  <DownloadIcon size={18} color="#F76B1C" /> Download
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white px-6 py-3 rounded-lg shadow-sm my-6">
          <h2 className="font-semibold text-black mb-2">KYC Documents</h2>
          <p className="text-gray-500 text-xs mb-4">
            Manage your identity verification documents
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="border border-gray-300 rounded-lg p-4">
              <div className="flex items-start justify-between mb-1">
                <div className="flex items-start gap-2">
                  <IdentityIcon className="mt-0.5" />
                  <div>
                    <span className="font-semibold text-black text-sm">
                      Emirates id
                    </span>
                    <p className="text-[10px] text-gray-500">
                      Uploaded on: 24 Jan 2024 • 4.2 MB
                    </p>
                  </div>
                </div>
                <span className="text-[10px] px-2 py-1 rounded-full bg-green-50 text-green-500 font-medium min-w-[70px] inline-flex justify-center">
                  Verified
                </span>
              </div>

              <div className="flex flex-wrap gap-3 mt-5">
                <button className="flex-1 min-w-[120px] flex items-center justify-center gap-1 bg-[#FEF4F0] text-orange-500 px-4 py-2 rounded-full text-xs font-medium">
                  <ViewIcon size={18} color="#F76B1C" /> View
                </button>
                <button className="flex-1 min-w-[120px] flex items-center justify-center gap-1 bg-[#FEF4F0] text-orange-500 px-4 py-2 rounded-full text-xs font-medium">
                  <DownloadIcon size={18} color="#F76B1C" /> Download
                </button>
              </div>
            </div>

            <div className="border border-gray-300 rounded-lg p-4">
              <div className="flex items-start justify-between mb-1">
                <div className="flex items-start gap-2">
                  <CarIcon className="mt-0.5" />
                  <div>
                    <span className="font-semibold text-black text-sm">
                      Driving License
                    </span>
                    <p className="text-[10px] text-gray-500">
                      Uploaded on: 24 Jan 2024 • 4.2 MB
                    </p>
                  </div>
                </div>
                <span className="text-[10px] px-2 py-1 rounded-full bg-green-50 text-green-500 font-medium min-w-[70px] inline-flex justify-center">
                  Verified
                </span>
              </div>

              <div className="flex flex-wrap gap-3 mt-5">
                <button className="flex-1 min-w-[120px] flex items-center justify-center gap-1 bg-[#FEF4F0] text-orange-500 px-4 py-2 rounded-full text-xs font-medium">
                  <ViewIcon size={18} color="#F76B1C" /> View
                </button>
                <button className="flex-1 min-w-[120px] flex items-center justify-center gap-1 bg-[#FEF4F0] text-orange-500 px-4 py-2 rounded-full text-xs font-medium">
                  <DownloadIcon size={18} color="#F76B1C" /> Download
                </button>
              </div>
            </div>

            <div className="border border-gray-300 rounded-lg p-4">
              <div className="flex items-start justify-between mb-1">
                <div className="flex items-start gap-2">
                  <PaymentsIcon className="mt-0.5" />
                  <div>
                    <span className="font-semibold text-black text-sm">
                      PAN Card
                    </span>
                    <p className="text-[10px] text-gray-500">Not provided</p>
                  </div>
                </div>
                <span className="text-[10px] px-2 py-1 rounded-full bg-orange-50 text-orange-500 font-medium min-w-[70px] inline-flex justify-center">
                  Expired
                </span>
              </div>

              <div className="flex flex-wrap gap-3 mt-5">
                <button className="flex-1 min-w-[120px] flex items-center justify-center gap-1 bg-[#FEF4F0] text-orange-500 px-4 py-2 rounded-full text-xs font-medium">
                  <UploadIcon size={18} color="#F76B1C" /> Upload
                </button>
              </div>
            </div>

            <div className="border border-gray-300 rounded-lg p-4">
              <div className="flex items-start justify-between mb-1">
                <div className="flex items-start gap-2">
                  <TrainingIcon className="mt-0.5" />
                  <div>
                    <span className="font-semibold text-black text-sm">
                      Address Proof
                    </span>
                    <p className="text-[10px] text-gray-500">Not provided</p>
                  </div>
                </div>
                <span className="text-[10px] px-2 py-1 rounded-full bg-red-50 text-red-500 font-medium min-w-[70px] inline-flex justify-center">
                  Required
                </span>
              </div>

              <div className="flex flex-wrap gap-3 mt-5">
                <button className="flex-1 min-w-[120px] flex items-center justify-center gap-1 bg-[#FEF4F0] text-orange-500 px-4 py-2 rounded-full text-xs font-medium">
                  <UploadIcon size={18} color="#F76B1C" /> Upload
                </button>
              </div>
            </div>

            <div className="border border-gray-300 rounded-lg p-4">
              <div className="flex items-start justify-between mb-1">
                <div className="flex items-start gap-2">
                  <ContentTaskIcon className="mt-0.5" />
                  <div>
                    <span className="font-semibold text-black text-sm">
                      Income Certificate
                    </span>
                    <p className="text-[10px] text-gray-500">
                      Uploaded on: 24 Jan 2024 • 4.2 MB
                    </p>
                  </div>
                </div>
                <span className="text-[10px] px-2 py-1 rounded-full bg-green-50 text-green-500 font-medium min-w-[70px] inline-flex justify-center">
                  Verified
                </span>
              </div>

              <div className="flex flex-wrap gap-3 mt-5">
                <button className="flex-1 min-w-[120px] flex items-center justify-center gap-1 bg-[#FEF4F0] text-orange-500 px-4 py-2 rounded-full text-xs font-medium">
                  <ViewIcon size={18} color="#F76B1C" /> View
                </button>
                <button className="flex-1 min-w-[120px] flex items-center justify-center gap-1 bg-[#FEF4F0] text-orange-500 px-4 py-2 rounded-full text-xs font-medium">
                  <DownloadIcon size={18} color="#F76B1C" /> Download
                </button>
              </div>
            </div>

            <div className="border border-gray-300 rounded-lg p-4">
              <div className="flex items-start justify-between mb-1">
                <div className="flex items-start gap-2">
                  <MailinglistIcon className="mt-0.5" />
                  <div>
                    <span className="font-semibold text-black text-sm">
                      Employment Letter
                    </span>
                    <p className="text-[10px] text-gray-500">
                      Uploaded on: 24 Jan 2024 • 4.2 MB
                    </p>
                  </div>
                </div>
                <span className="text-[10px] px-2 py-1 rounded-full bg-green-50 text-green-500 font-medium min-w-[70px] inline-flex justify-center">
                  Verified
                </span>
              </div>

              <div className="flex flex-wrap gap-3 mt-5">
                <button className="flex-1 min-w-[120px] flex items-center justify-center gap-1 bg-[#FEF4F0] text-orange-500 px-4 py-2 rounded-full text-xs font-medium">
                  <ViewIcon size={18} color="#F76B1C" /> View
                </button>
                <button className="flex-1 min-w-[120px] flex items-center justify-center gap-1 bg-[#FEF4F0] text-orange-500 px-4 py-2 rounded-full text-xs font-medium">
                  <DownloadIcon size={18} color="#F76B1C" /> Download
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white px-6 py-3 rounded-lg shadow-sm my-6">
          <h2 className="font-semibold text-black mb-2">
            Financial Statements
          </h2>
          <p className="text-gray-500 text-xs mb-4">
            Download your financial statements and certificates
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="border border-gray-300 rounded-lg p-4">
              <div className="flex items-start justify-between mb-1">
                <div className="flex items-start gap-2">
                  <TableviewIcon className="mt-0.5" />
                  <div>
                    <span className="font-semibold text-black text-sm">
                      Amortization Schedule
                    </span>
                    <p className="text-[10px] text-gray-500">60 months</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-3 mt-5">
                <button className="flex-1 min-w-[120px] flex items-center justify-center gap-1 bg-[#FEF4F0] text-orange-500 px-4 py-2 rounded-full text-xs font-medium">
                  <ViewIcon size={18} color="#F76B1C" /> View
                </button>
                <button className="flex-1 min-w-[120px] flex items-center justify-center gap-1 bg-[#FEF4F0] text-orange-500 px-4 py-2 rounded-full text-xs font-medium">
                  <DownloadIcon size={18} color="#F76B1C" /> Download
                </button>
              </div>
            </div>

            <div className="border border-gray-300 rounded-lg p-4">
              <div className="flex items-start justify-between mb-1">
                <div className="flex items-start gap-2">
                  <CCAssignedIcon className="mt-0.5" />
                  <div>
                    <span className="font-semibold text-black text-sm">
                      Payment Statement
                    </span>
                    <p className="text-[10px] text-gray-500">Updated monthly</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-3 mt-5">
                <button className="flex-1 min-w-[120px] flex items-center justify-center gap-1 bg-[#FEF4F0] text-orange-500 px-4 py-2 rounded-full text-xs font-medium">
                  <ViewIcon size={18} color="#F76B1C" /> View
                </button>
                <button className="flex-1 min-w-[120px] flex items-center justify-center gap-1 bg-[#FEF4F0] text-orange-500 px-4 py-2 rounded-full text-xs font-medium">
                  <DownloadIcon size={18} color="#F76B1C" /> Download
                </button>
              </div>
            </div>

            <div className="border border-gray-300 rounded-lg p-4">
              <div className="flex items-start justify-between mb-1">
                <div className="flex items-start gap-2">
                  <PercentIcon className="mt-1.5" size={12} />
                  <div>
                    <span className="font-semibold text-black text-sm">
                      Interest Certificate
                    </span>
                    <p className="text-[10px] text-gray-500">
                      For tax purposes
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-3 mt-5">
                <button className="flex-1 min-w-[120px] flex items-center justify-center gap-1 bg-[#FEF4F0] text-orange-500 px-4 py-2 rounded-full text-xs font-medium">
                  <ViewIcon size={18} color="#F76B1C" /> View
                </button>
                <button className="flex-1 min-w-[120px] flex items-center justify-center gap-1 bg-[#FEF4F0] text-orange-500 px-4 py-2 rounded-full text-xs font-medium">
                  <DownloadIcon size={18} color="#F76B1C" /> Download
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
