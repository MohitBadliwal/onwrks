"use client";
import React, { useEffect, useState } from "react";
import ChevronUpIcon from "@/icons/ChevronUpIcon";
import VerifiedBadge from "@/icons/VerifiedBadge";
import UploadDocuments from "@/components/global/UploadDocuments";
import CreateEMandate from "../../app/createEMandate/page";
import InfoIcon from "@/icons/InfoIcon";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  customerVehicleDetailsSchema,
  CustomerVehicleDetailsFormData,
} from "../Validation";
import { useCustomerStore } from "@/store/useCustomerStore";
import ModalPopup from "@/app/modalPopup/page";
import CustomInput from "../global/CustomInput";
import CustomSelect from "../global/CustomSelect";
import { uploadDocument } from "@/services/DocumentService";
import { DocumentType } from "@/utils/type";
import { useAuthStore } from "@/store/useAuthStore";
import SearchIcon from "@/icons/SearchIcon";
import DatePicker from "../global/DatePicker";
import { useToastStore } from "@/store/useToastStore";

interface StepProps {
  setStep: React.Dispatch<React.SetStateAction<number>>;
}
export default function VehicleDetails({ setStep }: StepProps) {
  const { userType } = useAuthStore();
  const [View, setView] = useState<boolean>(false);
  const [showDealerModal, setShowDealerModal] = useState<boolean>(false);
  const [dealerSearch, setDealerSearch] = useState<string>("");
  const { addToast, removeToast } = useToastStore();
  const {
    register,
    handleSubmit,
    control,
    watch,
    setValue,
    formState: { errors },
    reset,
  } = useForm<CustomerVehicleDetailsFormData>({
    resolver: zodResolver(customerVehicleDetailsSchema),
    defaultValues: {
      CustomerVehicleDealerName: "",
      CustomerVehicleBrand: "",
      CustomerVehicleModalYear: "",
      CustomerVehicleSalesPersonName: "",
      CustomerVehicleExpiryDeliveryDate: "",
      CustomerVehiclePurchasePrice: "",
      CustomerVehicleQuotationDocument: undefined,
      CustomerExistingVehicleTradePlanning: "",
      agreeCustomerVehicleComprehensiveInsurance: false,
      agreeCustomerVehicleOneTimeCharge: false,
      agreeCustomerVehicleCheckBankStatement: false,
    },
    mode: "onChange",
  });

  const rangeMap = [
    { label: "Yes", value: "Yes" },
    { label: "No", value: "No" },
  ];

  const dealersList = [
    { id: 1, name: "Audi Showroom" },
    { id: 2, name: "Mahindra Showroom" },
    { id: 3, name: "Nissan Showroom" },
    { id: 4, name: "Toyota Showroom" },
    { id: 5, name: "BMW Showroom" },
    { id: 6, name: "Mercedes-Benz Showroom" },
    { id: 7, name: "Honda Showroom" },
    { id: 8, name: "Ford Showroom" },
  ];

  const filteredDealers = dealersList.filter((dealer) =>
    dealer.name.toLowerCase().includes(dealerSearch.toLowerCase())
  );
  const handleSelectDealer = (dealer: { id: number; name: string }) => {
    setValue("CustomerVehicleDealerName", dealer.name, {
      shouldValidate: true,
    });
    setShowDealerModal(false);
    setDealerSearch("");
  };

  const {
    personalDetails,
    vehicleDetails,
    setVehicleDetails,
    employmentDetails,
    setShowCompany,
  } = useCustomerStore();
  const calculateAge = (dobString?: string) => {
    if (!dobString) return null;

    const dob = new Date(dobString);
    const today = new Date();

    let age = today.getFullYear() - dob.getFullYear();
    const monthDiff = today.getMonth() - dob.getMonth();
    const dayDiff = today.getDate() - dob.getDate();

    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
      age--;
    }

    return age;
  };

  const age = calculateAge(personalDetails?.basic?.date);

  useEffect(() => {
    if (vehicleDetails) reset(vehicleDetails);
  }, [vehicleDetails, reset]);

  const selectedRange = watch("CustomerExistingVehicleTradePlanning");

  const onSubmit = async (data: CustomerVehicleDetailsFormData) => {
    setVehicleDetails(data);
    console.log(" Form Data:", data);
    const loadingToastId = addToast({
      title: "Uploading Documents...",
      description: "Please wait a moment.",
      variant: "warning",
      duration: 0,
    });
    setView(true);
    try {
      await uploadDocument(
        DocumentType.Quotation,
        userType,
        data.CustomerVehicleQuotationDocument![0]
      );
       addToast({
          title: "Documents Uploaded!",
          description: "Your documents have been uploaded successfully.",
          variant: "success",
          duration: 6000,
        });
    } catch (error) {
      addToast({
          title: "Documents Upload Failed",
          description: "Please try again.",
          variant: "success",
          duration: 6000,
        });
    } finally {
      removeToast(loadingToastId);
    }
  };

  const onBack = () => {
    setShowCompany(true);
    setStep(2);
  };
  return (
    <>
      {View ? (
        <CreateEMandate setStep={setStep} />
      ) : (
        <div className="font-sans bg-[#F8F8F8]">
          <div className="flex pt-[96px] h-[calc(100vh-1vh)]">
            <div className="w-1/3 border-r border-gray-100 bg-white flex flex-col   pt-5   p-6 space-y-4 mx-auto">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-orange-200 rounded-full flex items-center justify-center text-lg font-semibold text-gray-700">
                  {personalDetails?.basic.firstName[0]}
                  {personalDetails?.basic.lastName[0]}
                </div>
                <div className="space-y-1">
                  <h2 className="text-xs font-semibold text-gray-900">
                    {personalDetails?.basic.salutation}{" "}
                    {personalDetails?.basic.firstName}{" "}
                    {personalDetails?.basic.middleName}{" "}
                    {personalDetails?.basic.lastName}
                  </h2>
                  <p className="text-xs text-gray-600">
                    {" "}
                    {personalDetails?.basic.mobile}
                  </p>
                </div>
              </div>
              <div>
                <h3 className="text-xs font-bold text-gray-800 mb-4">
                  Profile summary
                </h3>

                <div className="space-y-2 text-xs text-gray-700">
                  <div className="space-y-1">
                    <p className="text-gray-500">Emirates ID</p>
                    <p className="font-semibold">
                      {" "}
                      {personalDetails?.basic?.emiratesIDCardNumber}
                    </p>
                  </div>
                  <div className="border-b border-gray-200" />
                  <div className="space-y-1">
                    <p className="text-gray-500">Email ID</p>
                    <p className="font-semibold">
                      {personalDetails?.basic.email}
                    </p>
                  </div>
                  <div className="border-b border-gray-200" />
                  <div className="space-y-1">
                    <p className="text-gray-500">Passport Number</p>
                    <p className="font-semibold">345-1234-56789</p>
                  </div>
                  <div className="border-b border-gray-200" />
                  <div className="space-y-1">
                    <p className="text-gray-500">Age</p>
                    <p className="font-semibold">{age}</p>
                  </div>
                  <div className="border-b border-gray-200" />
                  <div className="space-y-1">
                    <p className="text-gray-500">Company Name</p>
                    <p className="font-semibold">
                      {employmentDetails?.employmentDetails.CompanyName}
                    </p>
                  </div>
                  <div className="border-b border-gray-200" />
                  <div className="space-y-1">
                    <p className="text-gray-500">Company Address</p>
                    <p className="font-semibold">
                      {`${
                        employmentDetails?.companyAddress
                          .flatVillaNoCompanyAddress
                      }${
                        employmentDetails?.companyAddress
                          .flatVillaNoCompanyAddress && ","
                      }  ${
                        employmentDetails?.companyAddress
                          .BuildingNameCompanyAddress
                      }${
                        employmentDetails?.companyAddress
                          .BuildingNameCompanyAddress && "-"
                      } ${
                        employmentDetails?.companyAddress
                          .StreetnameCompanyAddress
                      }${
                        employmentDetails?.companyAddress
                          .StreetnameCompanyAddress && "-"
                      }  ${
                        employmentDetails?.companyAddress
                          .AreaLocalityCompanyAddress
                      }${
                        employmentDetails?.companyAddress
                          .AreaLocalityCompanyAddress && "-"
                      }  ${
                        employmentDetails?.companyAddress.CityCompanyAddress
                      }${
                        employmentDetails?.companyAddress.CityCompanyAddress &&
                        "-"
                      }  ${
                        employmentDetails?.companyAddress.EmirateCompanyAddress
                      }
                  `}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-2/3 flex flex-col relative">
              <div className="flex-1 overflow-y-auto px-6 py-2">
                <p className="font-bold mb-2">Tell Us About the Vehicle</p>
                <p className="mb-4 text-xs">
                  See how your EMI splits between principal and interest each
                  month.
                </p>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  <details className="mb-2 bg-white " open>
                    <summary className="cursor-pointer px-4 py-2 font-medium flex justify-between items-center bg-[#F8D8C6] rounded-t-md text-sm">
                      Vehicle Detail <ChevronUpIcon />
                    </summary>
                    <div className="px-4 py-2 text-sm text-gray-600 grid grid-cols-1 md:grid-cols-2 gap-4 border-gray-200 border border-b-md">
                      <div className="relative">
                        <CustomInput
                          label="Car Dealer Name"
                          name="CustomerVehicleDealerName"
                          className="w-full py-2 text-gray-700 rounded-lg  border border-gray-300 px-3"
                          register={register}
                          icon={
                            <button
                              type="button"
                              onClick={(e) => {
                                e.preventDefault();
                                setShowDealerModal(!showDealerModal);
                              }}
                            >
                              <SearchIcon
                                size={15}
                                className="mt-6 cursor-pointer"
                              />
                            </button>
                          }
                        />

                        {showDealerModal && (
                          <ModalPopup
                            size="sm"
                            className="absolute mt-16 inset-0 z-50"
                          >
                            <div className="flex justify-between items-center mb-3">
                              <h3 className="text-sm font-bold">
                                Search Dealers ({filteredDealers.length})
                              </h3>
                              <button
                                onClick={() => {
                                  setShowDealerModal(false);
                                  setDealerSearch("");
                                }}
                                className="text-gray-500 hover:text-gray-700 cursor-pointer"
                              >
                                ✕
                              </button>
                            </div>

                            <CustomInput
                              type="text"
                              name="dealerSearch"
                              placeholder="Type dealer name..."
                              value={dealerSearch}
                              onChange={(e) => setDealerSearch(e.target.value)}
                              className="w-full p-3 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-orange-500"
                              autoFocus
                            />

                            <div className="max-h-60 overflow-y-auto">
                              {filteredDealers.length > 0 ? (
                                <ul className="space-y-1">
                                  {filteredDealers.map((dealer) => (
                                    <li
                                      key={dealer.id}
                                      className="p-3 hover:bg-orange-50 cursor-pointer rounded-lg transition-colors flex items-center"
                                      onClick={() => handleSelectDealer(dealer)}
                                    >
                                      <span className="text-sm">
                                        {dealer.name}
                                      </span>
                                    </li>
                                  ))}
                                </ul>
                              ) : (
                                <p className="text-center text-gray-500 py-8 text-sm">
                                  {dealerSearch
                                    ? `No dealers found for "${dealerSearch}"`
                                    : "Start typing to search..."}
                                </p>
                              )}
                            </div>
                          </ModalPopup>
                        )}
                        {errors.CustomerVehicleDealerName?.message && (
                          <p className="text-red-500 text-xs mt-1 md:col-span-2">
                            {errors.CustomerVehicleDealerName.message}
                          </p>
                        )}
                      </div>

                      <CustomInput
                        label="Vehicle Brand"
                        placeholder="Enter Brand"
                        type="text"
                        name="CustomerVehicleBrand"
                        className="w-full py-2 border border-gray-300 rounded-lg px-3"
                        register={register}
                        error={errors.CustomerVehicleBrand?.message?.toString()}
                      />
                      <CustomSelect
                        label="Car Modal Year"
                        name="CustomerVehicleModalYear"
                        className="w-full py-2 text-gray-700 rounded-lg  border border-gray-300 px-3 "
                        register={register}
                        error={errors.CustomerVehicleModalYear?.message?.toString()}
                      >
                        <option value="">Select</option>
                        <option>2023</option>
                        <option>2024</option>
                        <option>2025</option>
                      </CustomSelect>

                      <CustomInput
                        label="Sales Person Name"
                        name="CustomerVehicleSalesPersonName"
                        className="w-full py-2 border border-gray-300 rounded-lg px-3  "
                        register={register}
                        error={errors.CustomerVehicleSalesPersonName?.message?.toString()}
                      />

                      <Controller
                        control={control}
                        name="CustomerVehicleExpiryDeliveryDate"
                        render={({ field }) => (
                          <DatePicker
                            label="Expected Delivery Date(Max. delivery time: 30
                              days)"
                            placeholder="DD-MM-YYYY"
                            className="w-full py-2 text-gray-700 rounded-lg  border border-gray-300 px-3"
                            value={
                              field.value &&
                              !isNaN(new Date(field.value).getTime())
                                ? new Date(field.value)
                                    .toISOString()
                                    .split("T")[0]
                                : ""
                            }
                            onChange={(value) => field.onChange(value)}
                            mode="forwardDate"
                            maxDate={
                              new Date(Date.now() + 30 * 24 * 60 * 60 * 1000)
                            }
                            error={errors.CustomerVehicleExpiryDeliveryDate?.message?.toString()}
                          />
                        )}
                      />
                      <CustomInput
                        label="Purchase Price"
                        name="CustomerVehiclePurchasePrice"
                        type="number"
                        inputMode="numeric"
                        pattern="[0-9]*"
                        className="w-full py-2 border border-gray-300 rounded-lg px-3  "
                        register={register}
                        error={errors.CustomerVehiclePurchasePrice?.message?.toString()}
                      />

                      <div>
                        <label className="block text-sm text-gray-700 mb-1 ">
                          Quotation document
                          <span className="text-red-500">*</span>
                        </label>
                        <Controller
                          control={control}
                          name="CustomerVehicleQuotationDocument"
                          render={({ field }) => (
                            <UploadDocuments
                              requiredFilesCount={1}
                              files={field.value || []}
                              onFileChange={(files) =>
                                field.onChange(files || [])
                              }
                            />
                          )}
                        />
                        {errors.CustomerVehicleQuotationDocument &&
                          typeof errors.CustomerVehicleQuotationDocument
                            .message === "string" && (
                            <p className="text-red-500 text-xs mt-1">
                              {errors.CustomerVehicleQuotationDocument.message}
                            </p>
                          )}
                      </div>
                      <div className=" col-span-full space-y-4">
                        <p>
                          Are you planning to trade in your existing Vehicle?
                        </p>

                        <div className="flex gap-3">
                          {rangeMap.map((range) => (
                            <div className="flex gap-3" key={range.value}>
                              <CustomInput
                                type="radio"
                                label={range.label}
                                name="CustomerExistingVehicleTradePlanning"
                                value={range.value}
                                checked={selectedRange === range.value}
                                className={
                                  selectedRange === range.value
                                    ? `peer appearance-none w-4 h-4 rounded-full border-5 border-orange-500 bg-white shadow cursor-pointer checked:border-orange-500`
                                    : `peer appearance-none w-4 h-4 rounded-full border-3 border-gray-400  bg-white shadow cursor-pointer checked:border-orange-500`
                                }
                                register={register}
                              />
                            </div>
                          ))}
                        </div>
                      </div>
                      {errors.CustomerExistingVehicleTradePlanning?.message && (
                        <p className="text-red-500 text-xs mt-1">
                          {errors.CustomerExistingVehicleTradePlanning.message}
                        </p>
                      )}
                      <div className="col-span-full border-b border-gray-200 my-2" />
                      <div className="space-y-4">
                        <p>Protect Your Ride with the Right Insurance</p>
                        <div className="flex">
                          <CustomInput
                            type="checkbox"
                            label="Comprehensive Insurance"
                            name="agreeCustomerVehicleComprehensiveInsurance"
                            className="mr-2 checked:accent-[#ff5900]"
                            register={register}
                            error={errors.agreeCustomerVehicleComprehensiveInsurance?.message?.toString()}
                          />
                          <div className="mt-1 ml-1 items-center">
                            <InfoIcon size={12} color="gray" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </details>
                  <div className="flex my-5 items-start">
                    <CustomInput
                      type="checkbox"
                      label="I approve the one time charge of CreditVerse 26.25
                      (inclusive of VAT) for credit check with Al Etihad Credit
                      Bureau which will be charged to me only if and when the
                      Murabaha sale contract is concluded read more. "
                      labelClassName="text-[10px] px-3"
                      name="agreeCustomerVehicleCheckBankStatement"
                      className="checked:accent-black"
                      register={register}
                      error={errors.agreeCustomerVehicleCheckBankStatement?.message?.toString()}
                    />
                  </div>

                  <div className="flex my-5 items-start">
                    <CustomInput
                      type="checkbox"
                      label=" I hereby authorize CreditVerse to check my last 6 months
                      statement of account via UAEFTS using my account number
                      entered. Why Consent is needed and how the information
                      will be used? Your consent (permission) for us to obtain
                      and share your account information, including the
                      transaction details for the identified period, is needed
                      for the purposes listed and explained below. The
                      information provided will be shared and retained in
                      accordance with applicable law concerning data security
                      and privacy protections. The information you authorize us
                      to obtain and share will be used determine your
                      eligibility for the product. You understand that some
                      services may not be available to you unless you consent to
                      share/release information as stated in this Authorization."
                      labelClassName="text-[10px] px-3 "
                      name="agreeCustomerVehicleOneTimeCharge"
                      className="checked:accent-black"
                      register={register}
                      error={errors.agreeCustomerVehicleOneTimeCharge?.message?.toString()}
                    />
                  </div>
                  <div className="bg-white flex justify-between items-center py-2 px-4 border-t border-gray-200">
                    <div className="hidden md:flex items-center text-xs text-gray-500 gap-2">
                      <VerifiedBadge /> Your data is 100% safe
                    </div>
                    <div className="flex gap-4">
                      <button
                        onClick={onBack}
                        className="rounded-full font-semibold text-xs shadow-md w-[120px] border border-gray-400 py-2 cursor-pointer"
                      >
                        Back
                      </button>
                      <button
                        onClick={() => {}}
                        type="submit"
                        className="rounded-full font-semibold text-xs shadow-md w-[120px] text-white bg-[#F76B1C] py-2 cursor-pointer"
                      >
                        Continue
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
