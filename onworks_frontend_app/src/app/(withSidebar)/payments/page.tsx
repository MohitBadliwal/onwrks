"use client";
import React, { useState } from "react";
import NotificationIcon from "../../../icons/NotificationIcon";
import InfoIcon from "../../../icons/InfoIcon";
import PendingStatusIcon from "../../../icons/PendingStatusIcon";
import SettingsIcon from "../../../icons/SettingsIcon";
// import PaymentReminderPopup from "../../paymentReminderPopup/page";
import CalendarBlankIcon from "../../../icons/CalendarBlankIcon";
import PaymentsIcon from "../../../icons/PaymentsIcon";
import EmiCollectionIcon from "../../../icons/EmiCollectionIcon";
import RightArrowIcon from "../../../icons/RightArrowIcon";
import BankAccountIcon from "../../../icons/BankAccountIcon";
import MobileIcon from "../../../icons/MobileIcon";
import RestoreIcon from "../../../icons/RestoreIcon";
import DownloadIcon from "../../../icons/DownloadIcon";
import PlusIcon from "../../../icons/PlusIcon";
import EditIcon from "../../../icons/EditIcon";
import DeleteIcon from "../../../icons/DeleteIcon";
import DatePickRangeCalendar from "../../DatePickRangeCalendar/page";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  paymentsSchema,
  PaymentFormData,
} from "../../../components/Validation";
import { useCustomerStore } from "../../../store/useCustomerStore";
import CustomSelect from "../../../components/global/CustomSelect";
import CustomInput from "../../../components/global/CustomInput";

export default function Payments() {
  const [isPaymentReminder, setIsPaymentReminder] = useState(false);
  const [View, setView] = useState<boolean>(false);
  const { dateRangeCalendar, selectedPayment, setSelectedPayment } =
    useCustomerStore();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PaymentFormData>({
    resolver: zodResolver(paymentsSchema),
    defaultValues: {
      paymentType: "",
      paymentAmount: "",
      paymentMethod: "",
    },
    mode: "onChange",
  });

  const onSubmit = (data: PaymentFormData) => {
    setSelectedPayment(data);
    console.log("Form Data:", data);
  };
  return (
    <div className="bg-gray-50 min-h-screen">
      <div>
        <div className="flex items-center justify-between  mb-4">
          <CustomSelect
            name="CustomerVehicleLoanType"
            className="text-sm text-gray-600 p-3 rounded-md border border-gray-200 flex font-semibold items-center   bg-white focus:outline-none focus:ring-2 focus:ring-black/20 cursor-pointer"
            register={register}
            error={errors.CustomerVehicleLoanType?.message?.toString()}
          >
            <option value="">Select</option>
            <option>Car Loan No: CL2044484953 </option>
            <option>Bike Loan No: CL2044484953 </option>
            <option>Heavy vehicle Loan No: CL2044484953</option>
          </CustomSelect>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2   gap-6 w-full mb-4">
          <div className="bg-white rounded-2xl shadow p-6 space-y-4">
            <h2 className=" font-semibold text-gray-900 flex items-center gap-2">
              Upcoming EMI
              <InfoIcon size={12} />
            </h2>

            <div className="bg-red-50 border border-red-100 rounded-xl p-4 flex justify-between items-start">
              <div>
                <p className="text-xs text-gray-500">EMI Amount</p>
                <p className="text-xl font-bold text-red-600">AED 4,000</p>
                <p className="text-xs text-gray-600 flex items-center gap-1">
                  <CalendarBlankIcon color="gray" size={12} /> Sunday{" "}
                  <span className="font-medium text-black">July 15, 2025</span>
                </p>
              </div>
              <span className="text-red-600 text-xs font-medium bg-red-100 px-3 py-1 rounded-full">
                -23 Days Left
              </span>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-xs p-3 rounded-lg border border-gray-200 flex justify-between items-center">
                <div className="space-y-1">
                  <p>EMI paid</p>
                  <h2 className="font-semibold text-base">18</h2>
                </div>
                <span className="p-1.5 rounded-md bg-[#DCEAFD] text-center inline-block">
                  <EmiCollectionIcon size={25} />
                </span>
              </div>
              <div className="text-xs p-3 rounded-lg border border-gray-200 flex justify-between items-center">
                <div className="space-y-1">
                  <p>EMI Remaining</p>
                  <h2 className="font-semibold text-base">42</h2>
                </div>
                <span className="p-1.5 rounded-md bg-[#F6EDFF] text-center inline-block">
                  <PendingStatusIcon />
                </span>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow p-6 space-y-4">
            <h2 className="text-xl font-semibold text-gray-900">
              Quick Actions
            </h2>
            <div
              className="flex justify-between items-center border border-gray-200 rounded-xl p-4 cursor-pointer hover:bg-gray-50"
              onClick={() => setIsPaymentReminder(true)}
            >
              <div className="flex gap-3">
                <div>
                  <NotificationIcon size={25} />
                </div>
                <div>
                  <p className="font-semibold text-gray-800 flex items-center gap-2 text-sm">
                    Set Payment Reminder
                  </p>
                  <p className="text-xs text-gray-500">
                    Get notified before the due date
                  </p>
                </div>
              </div>
              <RightArrowIcon />
            </div>
            <div className="flex justify-between items-center border border-gray-200 rounded-xl p-4 cursor-pointer hover:bg-gray-50">
              <div className="flex gap-3">
                <div>
                  <SettingsIcon size={25} />
                </div>
                <div>
                  <p className="font-semibold text-gray-800 flex items-center gap-2 text-sm">
                    Payment Setting
                  </p>
                  <p className="text-xs text-gray-500">
                    Change payment method or auto debit
                  </p>
                </div>
              </div>
              <RightArrowIcon />
            </div>
            <div className="bg-[#EDF3ED] border   border-green-100 rounded-xl p-4">
              <div className="flex gap-3">
                <div>
                  <PaymentsIcon size={25} />
                </div>
                <div>
                  <p className="font-medium text-gray-800 flex items-center gap-2 text-sm">
                    Current payment mode
                  </p>
                  <p className="text-xs font-semibold  ">
                    Auto Debit - Adib Bank
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="  p-6 bg-white rounded-xl shadow mb-4">
            <div className="flex items-center gap-2 mb-6">
              <h2 className=" font-semibold">Make Payment</h2>
              <div className="border border-r border-gray-300 h-5" />
              <span className="text-gray-500 text-sm">Loan#CL204449353</span>
              <InfoIcon size={12} />
            </div>
            <h3 className="font-semibold text-gray-700 mb-4">
              Choose Payment Option
            </h3>
            <div className="w-full md:w-[65%]">
              <div className="flex flex-col md:flex-row md:justify-between gap-6 mb-6">
                <label className="flex items-start gap-2 ml-1 cursor-pointer">
                  <div className="flex flex-col">
                    <CustomInput
                      type="radio"
                      label="Pay Current EMI"
                      labelClassName="font-semibold"
                      name="paymentType"
                      value="Pay Current EMI"
                      className="peer appearance-none w-4 h-4 rounded-full border-2 border-black-400  bg-white shadow checked:border-orange-500 checked:border-[4px]"
                      register={register}
                    />
                    <span className="mx-6 text-xs">AED 5000</span>
                  </div>
                </label>
                <label className="flex items-start gap-2 cursor-pointer">
                  <div className="flex flex-col">
                    <CustomInput
                      type="radio"
                      label="Part Payment"
                      labelClassName="font-semibold"
                      name="paymentType"
                      value="PartPayment"
                      className="peer appearance-none w-4 h-4 rounded-full border-2 border-black-400  bg-white shadow checked:border-orange-500 checked:border-[4px]"
                      register={register}
                    />
                    <span className="mx-6 text-xs">Enter Custom Amount</span>
                  </div>
                </label>
                <label className="flex items-start gap-2 cursor-pointer">
                  <div className="flex flex-col">
                    <CustomInput
                      type="radio"
                      label="Full Foreclosure"
                      labelClassName="font-semibold"
                      name="paymentType"
                      value="Full Foreclosure"
                      className="peer appearance-none w-4 h-4 rounded-full border-2 border-black-400  bg-white shadow checked:border-orange-500 checked:border-[4px]"
                      register={register}
                    />
                    <span className="mx-6 text-xs">AED 45000</span>
                  </div>
                </label>
              </div>
              {errors.paymentType?.message && (
                <p className="text-red-500 text-xs my-2">
                  {errors.paymentType.message}
                </p>
              )}
            </div>
            <div className="mb-6">
              <CustomInput
                label="Enter Amount"
                type="number"
                 inputMode="numeric"
                pattern="[0-9]*"
                notImportant={false}
                name="paymentAmount"
                className="w-sm border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                register={register}
                error={errors.paymentAmount?.message?.toString()}
              />
            </div>
            <h3 className="font-semibold text-gray-700 mb-4">Payment Method</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
              <div className="w-full max-w-sm">
                <label className="flex items-center justify-between rounded-lg border border-gray-200 bg-gray-50 p-4 cursor-pointer hover:shadow transition">
                  <div className="flex items-center gap-3">
                    <BankAccountIcon />
                    <span className="text-gray-800 font-medium">
                      Net Banking
                    </span>
                  </div>
                  <CustomInput
                    type="radio"
                    name="paymentMethod"
                    value="Net Banking"
                    className="w-4 h-4 accent-black"
                    register={register}
                  />
                </label>
              </div>
              <div className="w-full max-w-sm">
                <label className="flex items-center justify-between rounded-lg border border-gray-200 bg-gray-50 p-4 cursor-pointer hover:shadow transition">
                  <div className="flex items-center gap-3">
                    <MobileIcon />
                    <span className="text-gray-800 font-medium">
                      Digital Wallets
                    </span>
                  </div>
                  <CustomInput
                    type="radio"
                    name="paymentMethod"
                    value="Digital Wallets"
                    className="w-4 h-4 accent-black"
                    register={register}
                  />
                </label>
              </div>
              <div className="w-full max-w-sm">
                <label className="flex items-center justify-between rounded-lg border border-gray-200 bg-gray-50 p-4 cursor-pointer hover:shadow transition">
                  <div className="flex items-center gap-3">
                    <PaymentsIcon size={25} />
                    <span className="text-gray-800 font-medium">
                      Direct Debit
                    </span>
                  </div>
                  <CustomInput
                    type="radio"
                    name="paymentMethod"
                    value="Direct Debit"
                    className="w-4 h-4 accent-black"
                    register={register}
                  />
                </label>
              </div>
              <div className="w-full max-w-sm">
                <label className="flex items-center justify-between rounded-lg border border-gray-200 bg-gray-50 p-4 cursor-pointer hover:shadow transition">
                  <div className="flex items-center gap-3">
                    <RestoreIcon size={25} />
                    <span className="text-gray-800 font-medium">
                      Auto Debit
                    </span>
                  </div>
                  <CustomInput
                    type="radio"
                    name="paymentMethod"
                    value="Auto Debit"
                    className="w-4 h-4 accent-black"
                    register={register}
                  />
                </label>
              </div>
              {errors.paymentMethod?.message && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.paymentMethod.message}
                </p>
              )}
            </div>
            <div className="flex justify-between items-center border-t border-gray-300 pt-4">
              <div>
                <p className="text-lg font-bold">AED 5000</p>
                <p className="text-gray-500 text-sm">Payable Amount</p>
              </div>
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-2 text-xs rounded-full cursor-pointer">
                Proceed to Pay AED 5000
              </button>
            </div>
          </div>
        </form>
        {View ? (
          <div>
            {View && <DatePickRangeCalendar onClose={() => setView(false)} />}
          </div>
        ) : (
          <div className="bg-white p-4 rounded-lg shadow mb-4">
            <div className="flex justify-between">
              <h2 className="font-semibold mb-2 flex items-center">
                Payment History
                <span className="ms-2">
                  <InfoIcon size={12} />
                </span>
              </h2>
              <div
                onClick={() => setView(true)}
                className="mb-2 flex items-center border border-gray-300 rounded-sm px-2 text-xs text-gray-600 bg-white dealerReportsAndAnalysticsDatePicker"
              >
                <CalendarBlankIcon size={15} className="me-2" />
                <label className="font-medium text-black">
                  {dateRangeCalendar && dateRangeCalendar.start
                    ? dateRangeCalendar.start.toLocaleDateString()
                    : "DD-MM-YYYY"}
                </label>
                <span className="mx-1 text-black">to</span>
                <label className="font-medium text-black">
                  {dateRangeCalendar && dateRangeCalendar.end
                    ? dateRangeCalendar.end.toLocaleDateString()
                    : "DD-MM-YYYY"}
                </label>
              </div>
            </div>
            <div className="overflow-hidden rounded-lg border border-gray-200 text-xs text-center">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-[#FAF1EC] ">
                    <th className="p-2 border-r-2 border-white"> Date</th>
                    <th className="p-2 border-r-2 border-white"> Amount</th>
                    <th className="p-2 border-r-2 border-white">
                      Payment Method
                    </th>
                    <th className="p-2 border-r-2 border-white">Status</th>
                    <th className="p-2 border-r-2 border-white">Receipt</th>
                    <th className="p-2">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="p-2">2025-07-05</td>
                    <td className="p-2">AED 18300</td>
                    <td className="p-2">Net Banking</td>
                    <td className="p-2">
                      <span className="px-3 py-1 rounded-full bg-green-50 text-green-500 font-medium w-24 text-center inline-block">
                        Paid
                      </span>
                    </td>
                    <td className="p-2">RECP92473277</td>
                    <td className="p-2 flex items-center  justify-center gap-1">
                      <DownloadIcon color="blue" size={15} />
                      <a href="#" className="text-blue-600">
                        Download
                      </a>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="p-2">2025-07-05</td>
                    <td className="p-2">AED 18300</td>
                    <td className="p-2">Net Banking</td>
                    <td className="p-2">
                      <span className="px-3 py-1 rounded-full bg-green-50 text-green-500 font-medium w-24 text-center inline-block">
                        Paid
                      </span>
                    </td>
                    <td className="p-2">RECP92473277</td>
                    <td className="p-2 flex items-center  justify-center gap-1">
                      <DownloadIcon color="blue" size={15} />
                      <a href="#" className="text-blue-600">
                        Download
                      </a>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="p-2">2025-07-05</td>
                    <td className="p-2">AED 18300</td>
                    <td className="p-2">Net Banking</td>
                    <td className="p-2">
                      <span className="px-3 py-1 rounded-full bg-red-50 text-red-500 font-medium w-24 text-center inline-block">
                        Failed
                      </span>
                    </td>
                    <td className="p-2">RECP92473277</td>
                    <td className="p-2 flex items-center  justify-center gap-1">
                      <DownloadIcon color="blue" size={15} />
                      <a href="#" className="text-blue-600">
                        Download
                      </a>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="p-2">2025-07-05</td>
                    <td className="p-2">AED 18300</td>
                    <td className="p-2">Net Banking</td>
                    <td className="p-2">
                      <span className="px-3 py-1 rounded-full bg-green-50 text-green-500 font-medium w-24 text-center inline-block">
                        Paid
                      </span>
                    </td>
                    <td className="p-2">RECP92473277</td>
                    <td className="p-2 flex items-center  justify-center gap-1">
                      <DownloadIcon color="blue" size={15} />
                      <a href="#" className="text-blue-600">
                        Download
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="bg-gray-100 rounded-xl p-6 flex justify-between items-center w-full mt-4">
              <div className="text-center">
                <p className="text-xs text-gray-600">Total Payment</p>
                <p className="text-md font-bold">5</p>
              </div>
              <div className="text-center">
                <p className="text-xs text-gray-600">Total Amount</p>
                <p className="text-md font-bold">AED 16,000</p>
              </div>
              <div className="text-center">
                <p className="text-xs text-gray-600">Successful payments</p>
                <p className="text-md font-bold">AED 16,000</p>
              </div>
            </div>
          </div>
        )}
        <div className="w-full  bg-white rounded-xl shadow p-4 mb-4">
          <div className="flex items-center justify-between mb-4">
            <h2 className=" font-semibold text-gray-900 flex items-center gap-1">
              Auto Debit Setup
              <InfoIcon size={12} />
            </h2>
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-medium px-4 py-1 rounded-full shadow text-xs flex gap-1 items-center cursor-pointer">
              <PlusIcon size={10} color="white" /> Add E-Mandate
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 items-center md:justify-between text-center md:text-left gap-4">
            <div className="flex gap-6 justify-between">
              <div className="space-y-1">
                <p className="font-medium">Adib Bank</p>
                <p className="text-xs">IBAN AE034567XXXXXX</p>
              </div>
              <div className="space-y-1">
                <p className="text-gray-500 text-xs">Start Date</p>
                <p className="font-medium text-gray-800 text-sm">
                  24 June 2020
                </p>
              </div>
              <div className="space-y-1">
                <p className="text-gray-500 text-xs">End Date</p>
                <p className="font-medium text-gray-800 text-sm">
                  24 June 2030
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 text-orange-500 font-medium cursor-pointer justify-center md:justify-end">
              <button className="flex items-center gap-1 hover:underline text-sm cursor-pointer">
                <EditIcon color="#F76B1C" />
                Edit
              </button>
              <button className="flex items-center gap-1 hover:underline text-sm cursor-pointer">
                <DeleteIcon color="#F76B1C" size={15} />
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* {isPaymentReminder && <PaymentReminderPopup />} */}
    </div>
  );
}
