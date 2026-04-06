"use client";
import React, { useEffect, useRef, useState } from "react";
import ChevronDownIcon from "@/icons/ChevronDownIcon";
import VerifiedBadge from "@/icons/VerifiedBadge";
import UploadDocuments from "@/components/global/UploadDocuments";
import ChevronUpIcon from "@/icons/ChevronUpIcon";
import { useForm, FieldErrors, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  customerEmploymentDetailsSchema,
  CustomerEmploymentDetailsFormData,
} from "../Validation";
import { useCustomerStore } from "@/store/useCustomerStore";
import CustomInput from "../global/CustomInput";
import { uploadDocument } from "@/services/DocumentService";
import { DocumentType } from "@/utils/type";
import { useAuthStore } from "@/store/useAuthStore";

type Panel = "employmentDetails" | "companyAddress" | null;

interface StepProps {
  setStep: React.Dispatch<React.SetStateAction<number>>;
}

export default function EmploymentDetails({ setStep }: StepProps) {
  const employmentDetailsRef = useRef<HTMLDetailsElement>(null);
  const companyAddressRef = useRef<HTMLDetailsElement>(null);
  const [Expand, setExpand] = useState<Panel>("employmentDetails");
  const { userType } = useAuthStore();

  const togglePanel = (panel: Panel) => {
    if (Expand === panel) return;

    setExpand(panel);

    if (panel === "employmentDetails") {
      employmentDetailsRef.current?.setAttribute("open", "true");
      companyAddressRef.current?.removeAttribute("open");
    } else {
      companyAddressRef.current?.setAttribute("open", "true");
      employmentDetailsRef.current?.removeAttribute("open");
    }
  };

  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors },
    reset,
  } = useForm<CustomerEmploymentDetailsFormData>({
    resolver: zodResolver(customerEmploymentDetailsSchema),
    defaultValues: {
      employmentDetails: {
        CompanyName: "",
        Designation: "",
        Department: "",
        MonthlySalaryInAED: "",
        uploadDocuments: undefined,
      },
      companyAddress: {
        flatVillaNoCompanyAddress: "",
        BuildingNameCompanyAddress: "",
        StreetnameCompanyAddress: "",
        AreaLocalityCompanyAddress: "",
        CityCompanyAddress: "",
        EmirateCompanyAddress: "",
        PoBoxCompanyAddress: "",
      },
      agreeCustomerEmploymentDetailsFill: false,
    },
    mode: "onChange",
  });

  const CompanyName = watch("employmentDetails.CompanyName");
  const CompanyAddress = watch("companyAddress");

  const onError = (errs: FieldErrors<CustomerEmploymentDetailsFormData>) => {
    if (errs?.employmentDetails) togglePanel("employmentDetails");
    else if (errs?.companyAddress) togglePanel("companyAddress");
  };
  const {
    personalDetails,
    employmentDetails,
    setEmploymentDetails,
    showCompany,
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
    if (employmentDetails) reset(employmentDetails);
  }, [employmentDetails, reset]);

  const onSubmit = async (data: CustomerEmploymentDetailsFormData) => {
    setEmploymentDetails(data);
    console.log("Form Data:", data);
    await uploadDocument(
      DocumentType.SalarySlip,
      userType,
      data.employmentDetails.uploadDocuments[0]
    );
    if (data.employmentDetails.uploadDocuments.length === 2) {
      await uploadDocument(
        DocumentType.SalarySlip,
        userType,
        data.employmentDetails.uploadDocuments[1]
      );
    }
    if (data.employmentDetails.uploadDocuments.length === 3) {
      await uploadDocument(
        DocumentType.SalarySlip,
        userType,
        data.employmentDetails.uploadDocuments[2]
      );
    }
    setStep(3);
  };

  return (
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
                {personalDetails?.basic.emiratesIDCardNumber}
              </p>
            </div>
            <div className="border-b border-gray-200" />
            <div className="space-y-1">
              <p className="text-gray-500">Email ID</p>
              <p className="font-semibold">{personalDetails?.basic.email}</p>
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
            {showCompany && (
              <>
                <div className="border-b border-gray-200" />
                <div className="space-y-1">
                  <p className="text-gray-500">Company Name</p>
                  <p className="font-semibold">{CompanyName}</p>
                </div>
                <div className="border-b border-gray-200" />
                <div className="space-y-1">
                  <p className="text-gray-500">Company Address</p>
                  <p className="font-semibold">
                    {`${CompanyAddress.flatVillaNoCompanyAddress}${
                      CompanyAddress.flatVillaNoCompanyAddress && ","
                    }  ${CompanyAddress.BuildingNameCompanyAddress}${
                      CompanyAddress.BuildingNameCompanyAddress && "-"
                    } ${CompanyAddress.StreetnameCompanyAddress}${
                      CompanyAddress.StreetnameCompanyAddress && "-"
                    }  ${CompanyAddress.AreaLocalityCompanyAddress}${
                      CompanyAddress.AreaLocalityCompanyAddress && "-"
                    }  ${CompanyAddress.CityCompanyAddress}${
                      CompanyAddress.CityCompanyAddress && "-"
                    }  ${CompanyAddress.EmirateCompanyAddress}
                  
                  `}
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
      <div className="w-2/3 flex flex-col relative">
        <div className="flex-1 overflow-y-auto px-6 py-2">
          <p className="font-bold mb-2">Your current employment details</p>
          <p className="mb-4 text-xs">
            Your job info helps us with your loan approval.
          </p>
          <form
            onSubmit={handleSubmit(onSubmit, onError)}
            className="space-y-4"
          >
            <details open ref={employmentDetailsRef} className="mb-2 bg-white ">
              <summary
                onClick={(e) => {
                  e.preventDefault();
                  togglePanel("employmentDetails");
                }}
                className="cursor-pointer px-4 py-2 font-medium flex justify-between items-center bg-[#F8D8C6] rounded-t-md text-sm"
              >
                Employment Details{" "}
                {Expand === "employmentDetails" ? (
                  <ChevronUpIcon />
                ) : (
                  <ChevronDownIcon />
                )}
              </summary>
              <div className="px-4 py-2 text-sm text-gray-600 grid grid-cols-1 md:grid-cols-2 gap-4 border-gray-200 border border-b-md">
                <CustomInput
                  label="Company Name"
                  placeholder="Enter Brand"
                  type="text"
                  name="employmentDetails.CompanyName"
                  className="w-full py-2 border border-gray-300 rounded-lg px-3"
                  register={register}
                  error={errors.employmentDetails?.CompanyName?.message?.toString()}
                />
                <CustomInput
                  label="Designation:"
                  placeholder="Enter "
                  type="text"
                  name="employmentDetails.Designation"
                  className="w-full py-2 border border-gray-300 rounded-lg px-3"
                  register={register}
                  error={errors.employmentDetails?.Designation?.message?.toString()}
                />
                <CustomInput
                  label="Department:"
                  placeholder="Enter"
                  type="text"
                  name="employmentDetails.Department"
                  className="w-full py-2 border border-gray-300 rounded-lg px-3"
                  register={register}
                  error={errors.employmentDetails?.Department?.message?.toString()}
                />
                <CustomInput
                  label=" Monthly Salary(in AED)"
                  placeholder="Enter"
                  type="number"
                  inputMode="numeric"
                  pattern="[0-9]*"
                  name="employmentDetails.MonthlySalaryInAED"
                  className="w-full py-2 border border-gray-300 rounded-lg px-3"
                  register={register}
                  error={errors.employmentDetails?.MonthlySalaryInAED?.message?.toString()}
                />

                <div>
                  <label className="block text-sm text-gray-700 mb-1 ">
                    Upload your 3 months salary slip or salary certificate
                    <span className="text-red-500">*</span>
                  </label>
                  <Controller
                    control={control}
                    name="employmentDetails.uploadDocuments"
                    render={({ field }) => (
                      <UploadDocuments
                        requiredFilesCount={3}
                        multiple
                        files={field.value || []}
                        onFileChange={(files) => field.onChange(files || [])}
                      />
                    )}
                  />
                  {errors.employmentDetails?.uploadDocuments &&
                    typeof errors.employmentDetails.uploadDocuments.message ===
                      "string" && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.employmentDetails.uploadDocuments.message}
                      </p>
                    )}
                </div>
              </div>
            </details>
            <details
              ref={companyAddressRef}
              className="mb-2 bg-white rounded-md"
            >
              <summary
                onClick={(e) => {
                  e.preventDefault();
                  togglePanel("companyAddress");
                }}
                className="cursor-pointer px-4 py-2 font-medium flex justify-between items-center bg-[#F8D8C6] rounded-t-md text-sm"
              >
                Company Address
                {Expand === "companyAddress" ? (
                  <ChevronUpIcon />
                ) : (
                  <ChevronDownIcon />
                )}
              </summary>
              <div className="px-4 py-2 text-sm text-gray-600 grid grid-cols-1 md:grid-cols-2 gap-4 border-gray-200 border border-b-md">
                <h2 className="text-sm font-medium text-black my-2 col-span-full">
                  Current Address
                </h2>
                <CustomInput
                  label="Flat/Villa No."
                  placeholder="Enter"
                  type="text"
                  name="companyAddress.flatVillaNoCompanyAddress"
                  className="w-full py-2 border border-gray-300 rounded-lg px-3"
                  register={register}
                  error={errors.companyAddress?.flatVillaNoCompanyAddress?.message?.toString()}
                />
                <CustomInput
                  label="Building Name"
                  placeholder="Enter"
                  type="text"
                  name="companyAddress.BuildingNameCompanyAddress"
                  className="w-full py-2 border border-gray-300 rounded-lg px-3"
                  register={register}
                  error={errors.companyAddress?.BuildingNameCompanyAddress?.message?.toString()}
                />
                <CustomInput
                  label="Street Name"
                  placeholder="Enter"
                  type="text"
                  name="companyAddress.StreetnameCompanyAddress"
                  className="w-full py-2 border border-gray-300 rounded-lg px-3"
                  register={register}
                  error={errors.companyAddress?.StreetnameCompanyAddress?.message?.toString()}
                />
                <CustomInput
                  label="Area/Locality"
                  placeholder="Enter"
                  type="text"
                  name="companyAddress.AreaLocalityCompanyAddress"
                  className="w-full py-2 border border-gray-300 rounded-lg px-3"
                  register={register}
                  error={errors.companyAddress?.AreaLocalityCompanyAddress?.message?.toString()}
                />
                <CustomInput
                  label="City"
                  placeholder="Enter"
                  type="text"
                  name="companyAddress.CityCompanyAddress"
                  className="w-full py-2 border border-gray-300 rounded-lg px-3"
                  register={register}
                  error={errors.companyAddress?.CityCompanyAddress?.message?.toString()}
                />
                <CustomInput
                  label="Location"
                  placeholder="Enter Location"
                  type="text"
                  name="companyAddress.EmirateCompanyAddress"
                  className="w-full py-2 border border-gray-300 rounded-lg px-3"
                  register={register}
                  error={errors.companyAddress?.EmirateCompanyAddress?.message?.toString()}
                />
                <CustomInput
                  label="PO Box"
                  placeholder="Enter"
                  type="number"
                  inputMode="numeric"
                  pattern="[0-9]*"
                  name="companyAddress.PoBoxCompanyAddress"
                  className="w-full py-2 border border-gray-300 rounded-lg px-3 "
                  register={register}
                  error={errors.companyAddress?.PoBoxCompanyAddress?.message?.toString()}
                />
              </div>
            </details>
            <div className="flex my-5 items-start">
              <CustomInput
                type="checkbox"
                label="I hereby confirm that the information provided above is accurate
                to the best of my knowledge. By providing my information, I
                agree to CreditVerse processing my personal information in line
                with the privacy policy on CreditVerse."
                labelClassName="text-[10px] px-3"
                name="agreeCustomerEmploymentDetailsFill"
                className="checked:accent-black"
                register={register}
                error={errors.agreeCustomerEmploymentDetailsFill?.message?.toString()}
              />
            </div>
            <div className="bg-white flex justify-between items-center py-2 px-4 border-t border-gray-200">
              <div className="hidden md:flex items-center text-xs text-gray-500 gap-2">
                <VerifiedBadge /> Your data is 100% safe
              </div>
              <div className="flex gap-4">
                <button
                  onClick={() => {
                    setStep(1);
                  }}
                  className="rounded-full font-semibold text-xs shadow-md w-[120px] border border-gray-400 py-2 cursor-pointer"
                >
                  Back
                </button>
                <button
                  type="submit"
                  className="rounded-full font-semibold text-xs shadow-md w-[120px]  text-white bg-[#F76B1C]  py-2 cursor-pointer"
                >
                  Continue
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
