"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import ChevronDownIcon from "@/icons/ChevronDownIcon";
import VerifiedBadge from "@/icons/VerifiedBadge";
import ChevronLeftIcon from "@/icons/ChevronLeftIcon";
import ChevronRightIcon from "@/icons/ChevronRightIcon";
import ChevronUpIcon from "@/icons/ChevronUpIcon";
import { Controller, FieldErrors, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  customerDetailsSchema,
  CustomerDetailsFormValues,
} from "../Validation";
import { useCustomerStore } from "@/store/useCustomerStore";
import CustomInput from "../global/CustomInput";
import CustomSelect from "../global/CustomSelect";
import DatePicker from "../global/DatePicker";

interface StepProps {
  setStep: React.Dispatch<React.SetStateAction<number>>;
}
type Panel = "basic" | "address" | null;
export default function CustomerPersonalDetails({ setStep }: StepProps) {
  const basicRef = useRef<HTMLDetailsElement>(null);
  const addressRef = useRef<HTMLDetailsElement>(null);
  const [Expand, setExpand] = useState<Panel>("basic");

  const { personalDetails, setPersonalDetails, emirateFormDetails } =
    useCustomerStore();

  const togglePanel = (panel: Panel) => {
    setExpand(panel);

    if (panel === "basic") {
      basicRef.current?.setAttribute("open", "true");
      addressRef.current?.removeAttribute("open");
    } else {
      addressRef.current?.setAttribute("open", "true");
      basicRef.current?.removeAttribute("open");
    }
  };
  const detail = "notget";
  const defaultValues: CustomerDetailsFormValues = {
    basic: {
      firstName: "",
      lastName: "",
      middleName: "",
      email: "",
      mobile: "",
      countryofBirth: "",
      countryofResidence: "",
      nationality: "",
      salutation: "",
      gender: "",
      date: "",
      emiratesIDCardNumber: emirateFormDetails?.emiratesIdNumber || "",
      emiratesIDExpiryDate: emirateFormDetails?.expiry || "",
      maritalStatus: "",
      dependents: "",
    },
    address: {
      flatVillaNo: "",
      buildingName: "",
      streetName: "",
      areaLocality: "",
      city: "",
      emirate: "",
      pOBox: "",
      relation: "",
      permanentDifferent: false,
      emergencyDifferent: false,
    },
    agreeCustomerDetailsFill: false,
  };
  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors },
    reset,
  } = useForm<CustomerDetailsFormValues>({
    resolver: zodResolver(customerDetailsSchema),
    defaultValues,
    shouldUnregister: true,
    mode: "onChange",
  });
  const statuses = ["Single", "Married", "Divorced", "Widowed"];
  const dependents = ["0", "1", "2", "3+"];
  const relations = [
    "Spouse",
    "Father",
    "Mother",
    "Brother",
    "Sister",
    "Son",
    "Daughter",
    "Friend",
  ];

  const selectedStatus = watch("basic.maritalStatus");
  const selectedDependents = watch("basic.dependents");
  const selectedRelations = watch("address.relation");

  const permanentDifferent = watch("address.permanentDifferent");
  const emergencyDifferent = watch("address.emergencyDifferent");

  const onError = (errs: FieldErrors<CustomerDetailsFormValues>) => {
    console.log("Validation errors:", errs);
    if (errs?.basic) togglePanel("basic");
    else if (errs?.address) togglePanel("address");
  };

  useEffect(() => {
    if (personalDetails) reset(personalDetails);
  }, [personalDetails, reset]);

  const onSubmit = (data: CustomerDetailsFormValues) => {
    const finalData = { ...data };
    if (permanentDifferent) {
      finalData.address.permanent = {
        flatVillaNoPermanentAddress: data.address.flatVillaNo,
        buildingNamePermanentAddress: data.address.buildingName,
        streetNamePermanentAddress: data.address.streetName,
        areaLocalityPermanentAddress: data.address.areaLocality,
        cityPermanentAddress: data.address.city,
        emiratePermanentAddress: data.address.emirate,
        poBoxPermanentAddress: data.address.pOBox,
      };
    }

    if (emergencyDifferent) {
      finalData.address.emergency = {
        salutationEmergencyDetails: data.basic.salutation,
        firstNameEmergencyDetails: data.basic.firstName,
        middleNameEmergencyDetails: data.basic.middleName,
        lastNameEmergencyDetails: data.basic.lastName,
        mobileEmergencyDetails: data.basic.mobile,
        flatVillaNoEmergencyDetails: data.address.flatVillaNo,
        buildingNameEmergencyDetails: data.address.buildingName,
        streetNameEmergencyDetails: data.address.streetName,
        cityEmergencyDetails: data.address.city,
        areaLocalityEmergencyDetails: data.address.areaLocality,
        emirateEmergencyDetails: data.address.emirate,
        pOBoxEmergencyDetails: data.address.pOBox,
      };
    }
    setPersonalDetails(finalData);
    console.log(" Final form payload:", finalData);
    setStep(2);
  };

  return (
    <div className="flex pt-[96px] h-[calc(100vh-1vh)]">
      <div className="w-1/3 border-r border-gray-100 bg-white flex flex-col items-center pt-5 justify-center">
        <div className="flex items-center justify-center gap-2">
          <ChevronLeftIcon />
          <div className="p-6 rounded-4xl text-center border bg-[#E8F5FF] border-[#7EC7FF] w-[200px] shadow-md">
            <Image
              src="/assets/personalloanIcon.svg"
              alt="Personal Loan"
              width={96}
              height={96}
              className="mx-auto"
            />
            <p>
              <span className="font-bold">98%</span> User get loan
              <br />
              in 10–15 mins
            </p>
            <p className="mt-2 text-xs">2.87 crore happy customers</p>
          </div>
          <ChevronRightIcon />
        </div>
        <div className="flex gap-1 mt-3">
          <button
            disabled
            className="w-2 h-2 rounded-full bg-[#F76B1C] border border-[#F76B1C]"
          ></button>
          <button
            disabled
            className="w-2 h-2 rounded-full border border-gray-400"
          ></button>
          <button
            disabled
            className="w-2 h-2 rounded-full border border-gray-400"
          ></button>
        </div>
        <div className="opacity-50 text-gray-700 my-4 w-1/5 mx-auto border-t"></div>
        <p className="font-bold mt-6 text-sm">BENEFITS</p>
        <div className="mt-2 px-4 py-2 w-[200px] rounded-full text-[10px] text-center bg-[#F8D8C6]">
          Buy online and get a <b>5% discount</b> on processing loan fees
        </div>
      </div>
      <div className="w-2/3 flex flex-col relative">
        <div className="flex-1 overflow-y-auto px-6 py-2">
          <p className="font-bold mb-2">Let&apos;s Get to Know You</p>
          <p className="mb-4 text-xs">
            We&apos;ve used your Emirates ID to fill in details — just review
            and complete.
          </p>
          <form
            onSubmit={handleSubmit(onSubmit, onError)}
            className="space-y-4"
          >
            <details ref={basicRef} open className="mb-2 bg-white ">
              <summary
                onClick={(e) => {
                  e.preventDefault();
                  togglePanel("basic");
                }}
                className="cursor-pointer px-4 py-2 font-medium flex justify-between items-center bg-[#F8D8C6] rounded-t-md text-sm"
              >
                Basic Details
                {Expand === "basic" ? <ChevronUpIcon /> : <ChevronDownIcon />}
              </summary>
              <div className="px-4 py-2 text-sm text-gray-600 grid grid-cols-1 md:grid-cols-2 gap-4 border-gray-200 border border-b-md">
                <CustomSelect
                  label="Salutation"
                  name="basic.salutation"
                  className="w-full py-2 text-gray-700 rounded-lg  border border-gray-300 px-3 invalid:text-gray-400"
                  register={register}
                  error={errors.basic?.salutation?.message?.toString()}
                >
                  <option value="">Select</option>
                  <option>Mr.</option>
                  <option>Ms.</option>
                  <option>Mrs.</option>
                </CustomSelect>

                <CustomInput
                  label="First Name"
                  placeholder="Enter"
                  type="text"
                  name="basic.firstName"
                  className="w-full py-2 border border-gray-300 rounded-lg px-3"
                  register={register}
                  error={errors.basic?.firstName?.message?.toString()}
                />

                <CustomInput
                  label="Middle Name"
                  placeholder="Enter"
                  type="text"
                  name="basic.middleName"
                  className="w-full py-2 border border-gray-300 rounded-lg px-3"
                  register={register}
                  error={errors.basic?.middleName?.message?.toString()}
                />

                <CustomInput
                  label="Last Name"
                  placeholder="Enter"
                  type="text"
                  name="basic.lastName"
                  className="w-full py-2 border border-gray-300 rounded-lg px-3"
                  register={register}
                  error={errors.basic?.lastName?.message?.toString()}
                />

                 <Controller
                                          control={control}
                                          name="basic.date"
                                          render={({ field }) => (
                                            <DatePicker
                                            className="w-full py-2 border border-gray-300 rounded-lg px-3"
                                              label="Date"
                                              placeholder="DD-MM-YYYY"
                                              value={
                                                field.value &&
                                                !isNaN(new Date(field.value).getTime())
                                                  ? new Date(field.value)
                                                      .toISOString()
                                                      .split("T")[0]
                                                  : ""
                                              }
                                              onChange={(value) => field.onChange(value)}
                                              mode="backwardDate"
                                              error={errors.basic?.date?.message?.toString()}
                                            />
                                          )}
                                        />

                <CustomSelect
                  label="Gender"
                  name="basic.gender"
                  className={`w-full py-2 border border-gray-300 rounded-lg px-3 ${
                    !detail ? "bg-[#DBDCDD]" : ""
                  }`}
                  register={register}
                  error={errors.basic?.gender?.message?.toString()}
                >
                  <option value="">Select</option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </CustomSelect>

                <CustomInput
                  label="Nationality"
                  placeholder="Enter"
                  type="text"
                  name="basic.nationality"
                  className={`w-full py-2 border border-gray-300 rounded-lg px-3 ${
                    !detail ? "bg-[#DBDCDD]" : ""
                  }`}
                  register={register}
                  error={errors.basic?.nationality?.message?.toString()}
                />

                <CustomInput
                  label="Country of Birth"
                  placeholder="Enter"
                  type="text"
                  name="basic.countryofBirth"
                  className={`w-full py-2 border border-gray-300 rounded-lg px-3 ${
                    !detail ? "bg-[#DBDCDD]" : ""
                  }`}
                  register={register}
                  error={errors.basic?.countryofBirth?.message?.toString()}
                />

                <CustomInput
                  label="Country of Residence"
                  placeholder="Enter"
                  type="text"
                  name="basic.countryofResidence"
                  className={`w-full py-2 border border-gray-300 rounded-lg px-3 ${
                    !detail ? "bg-[#DBDCDD]" : ""
                  }`}
                  register={register}
                  error={errors.basic?.countryofResidence?.message?.toString()}
                />

                <CustomInput
                  label="Email Id"
                  placeholder="Enter"
                  type="text"
                  name="basic.email"
                  className="w-full py-2 border border-gray-300 rounded-lg px-3"
                  register={register}
                  error={errors.basic?.email?.message?.toString()}
                />

                <CustomInput
                  label="Mobile Number"
                  placeholder="Enter"
                  type="number"
                  name="basic.mobile"
                  inputMode="numeric"
                  pattern="[0-9]*"
                  className="w-full py-2 border border-gray-300 rounded-lg px-3"
                  register={register}
                  error={errors.basic?.mobile?.message?.toString()}
                />

                <CustomInput
                  label="Emirates ID Card Number"
                  placeholder="Enter"
                  type="number"
                  inputMode="numeric"
                  pattern="[0-9]*"
                  name="basic.emiratesIDCardNumber"
                  className={`w-full py-2 border border-gray-300 rounded-lg px-3 ${
                    emirateFormDetails?.emiratesIdNumber
                      ? "bg-[#DBDCDD] cursor-not-allowed"
                      : ""
                  }`}
                  register={register}
                  error={errors.basic?.emiratesIDCardNumber?.message?.toString()}
                  readOnly={!!emirateFormDetails?.emiratesIdNumber}
                />

                 <Controller
                                          control={control}
                                          name="basic.emiratesIDExpiryDate"
                                          render={({ field }) => (
                                            <DatePicker
                                              label="Expiry Date"
                                              placeholder="DD-MM-YYYY"
                                              className="w-full py-2 border border-gray-300 rounded-lg px-3"
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
                                              error={errors.basic?.emiratesIDExpiryDate?.message?.toString()}
                                            />
                                          )}
                                        />

                <div className="col-span-full border-b-2 border-gray-200 my-2"></div>
                <div className="space-y-2">
                  <label className="block text-sm text-gray-700 mb-1">
                    Marital Status
                  </label>
                  <div className="flex gap-2">
                    {statuses.map((status) => (
                      <label key={status} className="w-20">
                        <CustomInput
                          type="radio"
                          name="basic.maritalStatus"
                          value={status}
                          className="hidden"
                          register={register}
                        />

                        <div
                          className={`w-full text-center p-2 rounded-full border text-sm cursor-pointer ${
                            selectedStatus === status
                              ? "bg-[#FAF1EC] text-black border-orange-500"
                              : "border-gray-300 text-gray-700 hover:bg-gray-100"
                          }`}
                        >
                          {status}
                        </div>
                      </label>
                    ))}
                  </div>
                  {errors.basic?.maritalStatus && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.basic.maritalStatus.message}
                    </p>
                  )}
                </div>
                <div className="space-y-2">
                  <label className="block text-sm text-gray-700 mb-1">
                    Number of Dependent
                  </label>
                  <div className="flex gap-2">
                    {dependents.map((status) => (
                      <label key={status} className="w-20">
                        <CustomInput
                          type="radio"
                          name="basic.dependents"
                          value={status}
                          className="hidden"
                          register={register}
                        />
                        <div
                          className={`w-full text-center p-2 rounded-full border text-sm cursor-pointer ${
                            selectedDependents === status
                              ? "bg-[#FAF1EC] text-black border-orange-500"
                              : "border-gray-300 text-gray-700 hover:bg-gray-100"
                          }`}
                        >
                          {status}
                        </div>
                      </label>
                    ))}
                  </div>
                  {errors.basic?.dependents && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.basic.dependents.message}
                    </p>
                  )}
                </div>
              </div>
            </details>
            <details ref={addressRef} className="mb-2 bg-white rounded-md">
              <summary
                onClick={(e) => {
                  e.preventDefault();
                  togglePanel("address");
                }}
                className="cursor-pointer px-4 py-2 font-medium flex justify-between items-center bg-[#F8D8C6] rounded-t-md text-sm"
              >
                Address
                {Expand === "address" ? <ChevronUpIcon /> : <ChevronDownIcon />}
              </summary>
              <div className="w-full px-4 py-2 text-sm text-gray-600 border border-gray-200">
                <h2 className="text-sm font-medium text-black my-2 col-span-full">
                  Current Address
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <CustomInput
                    label="Flat/Villa No."
                    placeholder="Enter"
                    type="text"
                    name="address.flatVillaNo"
                    className="w-full py-2 border border-gray-300 rounded-lg px-3"
                    register={register}
                    error={errors.address?.flatVillaNo?.message?.toString()}
                  />

                  <CustomInput
                    label="Building Name"
                    placeholder="Enter"
                    type="text"
                    name="address.buildingName"
                    className="w-full py-2 border border-gray-300 rounded-lg px-3"
                    register={register}
                    error={errors.address?.buildingName?.message?.toString()}
                  />

                  <CustomInput
                    label="Street Name"
                    placeholder="Enter"
                    type="text"
                    name="address.streetName"
                    className="w-full py-2 border border-gray-300 rounded-lg px-3"
                    register={register}
                    error={errors.address?.streetName?.message?.toString()}
                  />

                  <CustomInput
                    label="Area/Locality"
                    placeholder="Enter"
                    type="text"
                    name="address.areaLocality"
                    register={register}
                    error={errors.address?.areaLocality?.message?.toString()}
                  />

                  <CustomInput
                    label="City"
                    placeholder="Search city"
                    type="text"
                    name="address.city"
                    className="w-full py-2 border border-gray-300 rounded-lg px-3"
                    register={register}
                    error={errors.address?.city?.message?.toString()}
                  />

                  <CustomInput
                    label="Location"
                    placeholder="Search Location"
                    type="text"
                    name="address.emirate"
                    className="w-full py-2 border border-gray-300 rounded-lg px-3"
                    register={register}
                    error={errors.address?.emirate?.message?.toString()}
                  />

                  <CustomInput
                    label="PO Box"
                    placeholder="Enter PO Box"
                    type="number"
                    name="address.pOBox"
                    inputMode="numeric"
                    pattern="[0-9]*"
                    className="w-full py-2 border border-gray-300 rounded-lg px-3 "
                    register={register}
                    error={errors.address?.pOBox?.message?.toString()}
                  />
                  <div className="col-span-full  my-2 flex justify-between">
                    <h2 className="text-sm font-medium text-black">
                      Use Current Address as Permanent Address
                    </h2>
                    <CustomInput
                      type="checkbox"
                      name="address.permanentDifferent"
                      className="checked:accent-black"
                      register={register}
                    />
                  </div>
                  {!permanentDifferent && (
                    <>
                      <CustomInput
                        label="Flat/Villa No."
                        placeholder="Enter"
                        type="text"
                        name="address.permanent.flatVillaNoPermanentAddress"
                        className="w-full py-2 border border-gray-300 rounded-lg px-3 "
                        register={register}
                        error={errors.address?.permanent?.flatVillaNoPermanentAddress?.message?.toString()}
                      />

                      <CustomInput
                        label="Building Name"
                        placeholder="Enter"
                        type="text"
                        name="address.permanent.buildingNamePermanentAddress"
                        className="w-full py-2 border border-gray-300 rounded-lg px-3 "
                        register={register}
                        error={errors.address?.permanent?.buildingNamePermanentAddress?.message?.toString()}
                      />

                      <CustomInput
                        label="Street Name"
                        placeholder="Enter"
                        type="text"
                        name="address.permanent.streetNamePermanentAddress"
                        className="w-full py-2 border border-gray-300 rounded-lg px-3 "
                        register={register}
                        error={errors.address?.permanent?.streetNamePermanentAddress?.message?.toString()}
                      />

                      <CustomInput
                        label="Area/Locality"
                        placeholder="Enter"
                        type="text"
                        name="address.permanent.areaLocalityPermanentAddress"
                        className="w-full py-2 border border-gray-300 rounded-lg px-3 "
                        register={register}
                        error={errors.address?.permanent?.areaLocalityPermanentAddress?.message?.toString()}
                      />

                      <CustomInput
                        label="City"
                        placeholder="Search city"
                        type="text"
                        name="address.permanent.cityPermanentAddress"
                        className="w-full py-2 border border-gray-300 rounded-lg px-3"
                        register={register}
                        error={errors.address?.permanent?.cityPermanentAddress?.message?.toString()}
                      />

                      <CustomInput
                        label="Location"
                        placeholder="Search Location"
                        type="text"
                        name="address.permanent.emiratePermanentAddress"
                        className="w-full py-2 border border-gray-300 rounded-lg px-3"
                        register={register}
                        error={errors.address?.permanent?.emiratePermanentAddress?.message?.toString()}
                      />

                      <CustomInput
                        label="PO Box"
                        placeholder="Enter PO Box"
                        type="number"
                        inputMode="numeric"
                        pattern="[0-9]*"
                        name="address.permanent.poBoxPermanentAddress"
                        className="w-full py-2 border border-gray-300 rounded-lg px-3 "
                        register={register}
                        error={errors.address?.permanent?.poBoxPermanentAddress?.message?.toString()}
                      />

                      <div className="col-span-full border-b-2 border-gray-200 my-2"></div>
                    </>
                  )}
                  <div className="col-span-full  my-2 flex justify-between">
                    <h2 className="text-sm font-medium text-black">
                      Emergency Contact Details
                    </h2>
                    <CustomInput
                      type="checkbox"
                      name="address.emergencyDifferent"
                      className="checked:accent-black"
                      register={register}
                    />
                  </div>
                  {!emergencyDifferent && (
                    <>
                      <CustomSelect
                        label="Salutation"
                        name="address.emergency.salutationEmergencyDetails"
                        register={register}
                        className="w-full py-2 text-gray-700 rounded-lg  border border-gray-300 px-3 invalid:text-gray-400"
                        error={errors.address?.emergency?.salutationEmergencyDetails?.message?.toString()}
                      >
                        <option value="">Select</option>
                        <option>Mr.</option>
                        <option>Ms.</option>
                        <option>Mrs.</option>
                      </CustomSelect>

                      <CustomInput
                        label="First Name"
                        placeholder="Enter"
                        type="text"
                        name="address.emergency.firstNameEmergencyDetails"
                        className="w-full py-2 border border-gray-300 rounded-lg px-3 "
                        register={register}
                        error={errors.address?.emergency?.firstNameEmergencyDetails?.message?.toString()}
                      />

                      <CustomInput
                        label="Middle Name"
                        placeholder="Enter"
                        type="text"
                        name="address.emergency.middleNameEmergencyDetails"
                        className="w-full py-2 border border-gray-300 rounded-lg px-3 "
                        register={register}
                        error={errors.address?.emergency?.middleNameEmergencyDetails?.message?.toString()}
                      />

                      <CustomInput
                        label="Last Name"
                        placeholder="Enter"
                        type="text"
                        name="address.emergency.lastNameEmergencyDetails"
                        className="w-full py-2 border border-gray-300 rounded-lg px-3 "
                        register={register}
                        error={errors.address?.emergency?.lastNameEmergencyDetails?.message?.toString()}
                      />

                      <CustomInput
                        label="Mobile No."
                        placeholder="Enter"
                        maxLength={10}
                        type="text"
                        name="address.emergency.mobileEmergencyDetails"
                        className="w-full py-2 border border-gray-300 rounded-lg px-3 "
                        register={register}
                        error={errors.address?.emergency?.mobileEmergencyDetails?.message?.toString()}
                      />

                      <CustomInput
                        label="Flat/Villa No."
                        placeholder="Enter"
                        type="text"
                        name="address.emergency.flatVillaNoEmergencyDetails"
                        className="w-full py-2 border border-gray-300 rounded-lg px-3 "
                        register={register}
                        error={errors.address?.emergency?.flatVillaNoEmergencyDetails?.message?.toString()}
                      />

                      <CustomInput
                        label="Building Name"
                        placeholder="Enter"
                        type="text"
                        name="address.emergency.buildingNameEmergencyDetails"
                        className="w-full py-2 border border-gray-300 rounded-lg px-3 "
                        register={register}
                        error={errors.address?.emergency?.buildingNameEmergencyDetails?.message?.toString()}
                      />

                      <CustomInput
                        label="Street Name"
                        placeholder="Enter"
                        type="text"
                        name="address.emergency.streetNameEmergencyDetails"
                        className="w-full py-2 border border-gray-300 rounded-lg px-3 "
                        register={register}
                        error={errors.address?.emergency?.streetNameEmergencyDetails?.message?.toString()}
                      />

                      <CustomInput
                        label="Area/Locality"
                        placeholder="Enter"
                        type="text"
                        name="address.emergency.areaLocalityEmergencyDetails"
                        className="w-full py-2 border border-gray-300 rounded-lg px-3 "
                        register={register}
                        error={errors.address?.emergency?.areaLocalityEmergencyDetails?.message?.toString()}
                      />

                      <CustomInput
                        label="City"
                        placeholder="Search city"
                        type="text"
                        name="address.emergency.cityEmergencyDetails"
                        className="w-full py-2 border border-gray-300 rounded-lg px-3"
                        register={register}
                        error={errors.address?.emergency?.cityEmergencyDetails?.message?.toString()}
                      />

                      <CustomInput
                        label="Location"
                        placeholder="Search Location"
                        type="text"
                        name="address.emergency.emirateEmergencyDetails"
                        className="w-full py-2 border border-gray-300 rounded-lg px-3"
                        register={register}
                        error={errors.address?.emergency?.emirateEmergencyDetails?.message?.toString()}
                      />

                      <CustomInput
                        label="PO Box"
                        placeholder="Enter PO Box"
                        type="number"
                        inputMode="numeric"
                        pattern="[0-9]*"
                        name="address.emergency.pOBoxEmergencyDetails"
                        className="w-full py-2 border border-gray-300 rounded-lg px-3 "
                        register={register}
                        error={errors.address?.emergency?.pOBoxEmergencyDetails?.message?.toString()}
                      />
                      <div className="col-span-full border-b-2 border-gray-200 my-2"></div>
                    </>
                  )}
                  <div className="space-y-2 col-span-full">
                    <label className="block text-sm text-gray-700 mb-1 ">
                      Relation
                    </label>
                    <div className="flex gap-2 flex-wrap">
                      {relations.map((status) => (
                        <label key={status} className="w-20">
                          <CustomInput
                            type="radio"
                            name="address.relation"
                            value={status}
                            className="hidden"
                            register={register}
                          />
                          <div
                            className={`w-full text-center p-2 rounded-full border text-sm cursor-pointer ${
                              selectedRelations === status
                                ? "bg-[#FAF1EC] text-black border-orange-500"
                                : "border-gray-300 text-gray-700 hover:bg-gray-100"
                            }`}
                          >
                            {status}
                          </div>
                        </label>
                      ))}
                    </div>
                    {errors.address?.relation && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.address.relation.message}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </details>

            <div className="flex my-5 items-start">
              <CustomInput
                type="checkbox"
                label="I hereby confirm that the information provided above is accurate
                to the best of my knowledge. By providing my information, I
                agree to CreditVerse processing my personal information in line
                with the privacy policy on CreditVerse. "
                labelClassName="text-[10px] px-3"
                name="agreeCustomerDetailsFill"
                className="checked:accent-black"
                register={register}
                error={errors.agreeCustomerDetailsFill?.message?.toString()}
              />
            </div>

            <div className="bg-white flex justify-between items-center py-2 px-4 border-t border-gray-200">
              <div className="hidden md:flex items-center text-xs text-gray-500 gap-2">
                <VerifiedBadge /> Your data is 100% safe
              </div>
              <div className="flex gap-4">
                <button className="rounded-full font-semibold text-xs shadow-md w-[120px] border border-gray-400 py-2 cursor-pointer">
                  Back
                </button>
                <button
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
  );
}
