"use client";
import React, { useEffect, useState } from "react";
import ChevronDownIcon from "@/icons/ChevronDownIcon";
import VerifiedBadge from "@/icons/VerifiedBadge";
import Congratulation from "./ConfirmationCongratulation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  customerReviewAndConfirmationSchema,
  customerReviewAndConfirmationFormData,
} from "../Validation";
import { useCustomerStore } from "@/store/useCustomerStore";
import CustomInput from "../global/CustomInput";
import { createCustomer } from "@/services/CustomerService";
import { useRouter } from "next/navigation";
import { ca } from "zod/locales";
import { useToastStore } from "@/store/useToastStore";
interface StepProps {
  setStep: React.Dispatch<React.SetStateAction<number>>;
}
export default function ReviewandConfirmation({ setStep }: StepProps) {
  const [isCongratulationOpen, setisCongratulationOpen] = useState(false);
  const { addToast } = useToastStore();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<customerReviewAndConfirmationFormData>({
    resolver: zodResolver(customerReviewAndConfirmationSchema),
    defaultValues: {
      agreeForAcknowledgementOfYourDetails: false,
    },
  });

  const {
    reviewAndConfirmationDetails,
    setReviewAndConfirmationDetails,
    loanEstimateFormDetails,
    personalDetails,
    employmentDetails,
    vehicleDetails,
    createEMandateFormDetails,
  } = useCustomerStore();
  const router = useRouter();

  useEffect(() => {
    if (reviewAndConfirmationDetails) reset(reviewAndConfirmationDetails);
  }, [reviewAndConfirmationDetails, reset]);

  const loanAmount = loanEstimateFormDetails?.loanAmount ?? 0;
  const interestRate = loanEstimateFormDetails?.interestRate ?? 0;
  const tenure = loanEstimateFormDetails?.tenure ?? 0;

  const interestAmount = loanAmount * (interestRate / 100) * (tenure / 12);
  const totalRepayable = loanAmount + interestAmount + 1000;
  const monthlyAmount = tenure > 0 ? totalRepayable / tenure : 0;

  const onSubmit = async (data: customerReviewAndConfirmationFormData) => {
    setReviewAndConfirmationDetails(data);
    console.log("Form Data:", data);
    const tradeExistingVehicle: boolean =
      vehicleDetails?.CustomerExistingVehicleTradePlanning === "Yes" || false;
    setisCongratulationOpen(true);
    setStep(6);
    try {
      const res = await createCustomer({
        salutation: personalDetails?.basic.salutation || "",
        firstName: personalDetails?.basic.firstName || "",
        middleName: personalDetails?.basic.middleName || "",
        lastName: personalDetails?.basic.lastName || "",
        dob: personalDetails?.basic.date
          ? new Date(personalDetails.basic.date).toISOString()
          : "",
        gender: personalDetails?.basic.gender || "",
        nationality: personalDetails?.basic.nationality || "",
        countryOfBirth: personalDetails?.basic.countryofBirth || "",
        countryOfResidence: personalDetails?.basic.countryofResidence || "",
        email: personalDetails?.basic.email || "",
        mobile: personalDetails?.basic.mobile || "",
        emirateIdCardNumber: personalDetails?.basic.emiratesIDCardNumber || "",
        emirateIdExpiryDate: personalDetails?.basic.emiratesIDExpiryDate
          ? new Date(personalDetails.basic.emiratesIDExpiryDate).toISOString()
          : "",
        maritalStatus: personalDetails?.basic.maritalStatus || "",
        numberOfDependents: Number(personalDetails?.basic.dependents) || 0,
        houseNo: personalDetails?.address.flatVillaNo || "",
        buildingName: personalDetails?.address.buildingName || "",
        streetName: personalDetails?.address.streetName || "",
        locality: personalDetails?.address.areaLocality || "",
        city: personalDetails?.address.city || "",
        location: personalDetails?.address.emirate || "",
        poBox: personalDetails?.address.pOBox || "",
        permanentHouseNo:
          personalDetails?.address?.permanent?.flatVillaNoPermanentAddress ||
          "",
        permanentBuildingName:
          personalDetails?.address?.permanent?.buildingNamePermanentAddress ||
          "",
        permanentStreetName:
          personalDetails?.address?.permanent?.streetNamePermanentAddress || "",
        permanentLocality:
          personalDetails?.address?.permanent?.areaLocalityPermanentAddress ||
          "",
        permanentCity:
          personalDetails?.address?.permanent?.cityPermanentAddress || "",
        permanentLocation:
          personalDetails?.address?.permanent?.emiratePermanentAddress || "",
        permanentPoBox:
          personalDetails?.address?.permanent?.poBoxPermanentAddress || "",
        emergencySalutation:
          personalDetails?.address?.emergency?.salutationEmergencyDetails || "",
        emergencyFirstName:
          personalDetails?.address?.emergency?.firstNameEmergencyDetails || "",
        emergencyMiddleName:
          personalDetails?.address?.emergency?.middleNameEmergencyDetails || "",
        emergencyLastName:
          personalDetails?.address?.emergency?.lastNameEmergencyDetails || "",
        emergencyMobile:
          personalDetails?.address?.emergency?.mobileEmergencyDetails || "",
        emergencyHouseNo:
          personalDetails?.address?.emergency?.flatVillaNoEmergencyDetails ||
          "",
        emergencyBuildingName:
          personalDetails?.address?.emergency?.buildingNameEmergencyDetails ||
          "",
        emergencyStreetName:
          personalDetails?.address?.emergency?.streetNameEmergencyDetails || "",
        emergencyLocality:
          personalDetails?.address?.emergency?.areaLocalityEmergencyDetails ||
          "",
        emergencyCity:
          personalDetails?.address?.emergency?.cityEmergencyDetails || "",
        emergencyLocation:
          personalDetails?.address?.emergency?.emirateEmergencyDetails || "",
        emergencyPoBox:
          personalDetails?.address?.emergency?.pOBoxEmergencyDetails || "",
        relation: personalDetails?.address?.relation || "",
        companyName: employmentDetails?.employmentDetails.CompanyName || "",
        designation: employmentDetails?.employmentDetails.Designation || "",
        department: employmentDetails?.employmentDetails.Department || "",
        monthlySalary:
          Number(employmentDetails?.employmentDetails.MonthlySalaryInAED) || 0,
        companyHouseNo:
          employmentDetails?.companyAddress.flatVillaNoCompanyAddress || "",
        companyBuildingName:
          employmentDetails?.companyAddress.BuildingNameCompanyAddress || "",
        companyStreetName:
          employmentDetails?.companyAddress.StreetnameCompanyAddress || "",
        companyLocality:
          employmentDetails?.companyAddress.AreaLocalityCompanyAddress || "",
        companyCity: employmentDetails?.companyAddress.CityCompanyAddress || "",
        companyLocation:
          employmentDetails?.companyAddress.EmirateCompanyAddress || "",
        companyPoBox:
          employmentDetails?.companyAddress.PoBoxCompanyAddress || "",
        carDealerName: vehicleDetails?.CustomerVehicleDealerName || "",
        vehicleBrand: vehicleDetails?.CustomerVehicleBrand || "",
        carModalYear: Number(vehicleDetails?.CustomerVehicleModalYear) || 0,
        salesPersonName: vehicleDetails?.CustomerVehicleSalesPersonName || "",
        expectedDeliveryDate: vehicleDetails?.CustomerVehicleExpiryDeliveryDate
          ? new Date(
              vehicleDetails.CustomerVehicleExpiryDeliveryDate
            ).toISOString()
          : "",
        purchasePrice:
          Number(vehicleDetails?.CustomerVehiclePurchasePrice) || 0,
        tradeExistingVehicle: tradeExistingVehicle || false,
        comprehensiveInsurance:
          vehicleDetails?.agreeCustomerVehicleComprehensiveInsurance || false,
      });
      console.log("Create Customer response:", res);
    } catch (error) {
      addToast({
          title: "Form Data Submit Failed!",
          description: "Please try re-submit again.",
          variant: "error"
        });
    }
  };

  return (
    <>
      <div className="flex flex-col h-screen pt-[96px]">
        <div className="flex flex-col pt-[10px] pb-[64px] px-4 md:px-6 flex-grow overflow-auto">
          <p className="font-bold mb-2 text-sm md:text-base">
            Almost there! Let’s make sure everything looks good.
          </p>
          <div className="flex justify-between items-center flex-wrap gap-2 mb-4">
            <p className="text-xs text-gray-600">
              Here’s a quick look at the key details of your loan application.
            </p>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <details
              open
              onClick={(e) => e.preventDefault()}
              className="mb-2 bg-white rounded-md group"
            >
              <summary className="cursor-pointer px-4 py-3 font-medium flex justify-between items-center bg-[#F8D8C6] rounded-t-md text-sm">
                Review Your Loan Application <ChevronDownIcon />
              </summary>

              <div className="w-full  bg-white shadow rounded-lg p-6 space-y-6">
                <div className="grid grid-cols-3 text-center bg-gray-100 rounded-lg p-4">
                  <div>
                    <p className="text-sm text-gray-500">Loan Amount</p>
                    <p className="text-xl font-semibold text-orange-600">
                      AED {loanAmount}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Loan Tenure</p>
                    <p className="text-xl font-semibold text-orange-600">
                      {tenure} Months
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">EMI</p>
                    <p className="text-xl font-semibold text-orange-600">
                      AED {monthlyAmount.toFixed(2)}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold mb-2 text-sm">
                      Personal Information
                    </h3>
                    <div className=" border border-gray-300 rounded-lg p-4 text-xs space-y-2">
                      <p>
                        <span className="font-bold">Name:</span>{" "}
                        {personalDetails?.basic.salutation}{" "}
                        {personalDetails?.basic.firstName}{" "}
                        {personalDetails?.basic.middleName}{" "}
                        {personalDetails?.basic.lastName}
                      </p>
                      <p>
                        <span className="font-bold">Address:</span>{" "}
                        {personalDetails?.address.flatVillaNo}{" "}
                        {personalDetails?.address.buildingName}{" "}
                        {personalDetails?.address.streetName}{" "}
                        {personalDetails?.address.areaLocality}{" "}
                        {personalDetails?.address.city}{" "}
                      </p>
                      <p>
                        <span className="font-bold">Contact No.:</span>{" "}
                        {personalDetails?.basic.mobile}
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2 text-sm">
                      Employment Details
                    </h3>
                    <div className="border-gray-300 border rounded-lg p-4 text-xs space-y-2">
                      <p>
                        <span className="font-bold">Company Name:</span>{" "}
                        {employmentDetails?.employmentDetails.CompanyName}
                      </p>
                      <p>
                        <span className="font-bold">
                          Annual Income (in AED):
                        </span>{" "}
                        {Number(
                          employmentDetails?.employmentDetails
                            .MonthlySalaryInAED
                        ) * 12}
                      </p>
                      <p>
                        <span className="font-bold">Designation:</span>
                        {employmentDetails?.employmentDetails.Designation}
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2 text-sm">
                      Vehicle Details
                    </h3>
                    <div className="border-gray-300 border rounded-lg p-4 text-xs space-y-2">
                      <p>
                        <span className="font-bold">Vehicle:</span>{" "}
                        {vehicleDetails?.CustomerVehicleBrand}
                      </p>
                      <p>
                        <span className="font-bold">
                          Estimated Vehicle Value (in AED):
                        </span>{" "}
                        {vehicleDetails?.CustomerVehiclePurchasePrice}
                      </p>
                      <p>
                        <span className="font-bold">Insurance:</span>{" "}
                        {vehicleDetails?.agreeCustomerVehicleComprehensiveInsurance
                          ? "Yes"
                          : "No"}
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2 text-sm">
                      Bank details to receive loan
                    </h3>
                    <div className="border-gray-300 border rounded-lg p-4 text-xs space-y-2">
                      <p>
                        <span className="font-bold">Account Holder Name:</span>{" "}
                        {personalDetails?.basic.salutation}{" "}
                        {personalDetails?.basic.firstName}{" "}
                        {personalDetails?.basic.middleName}{" "}
                        {personalDetails?.basic.lastName}
                      </p>
                      <p>
                        <span className="font-bold">IBAN:</span>{" "}
                        AE070331234567890123456
                      </p>
                      <p>
                        <span className="font-bold">Bank Name:</span>{" "}
                        {createEMandateFormDetails?.CreateEMandateBankName}
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2 text-sm">
                      Mandate Details
                    </h3>
                    <div className="border-gray-300 border rounded-lg p-4 text-xs space-y-2">
                      <p>
                        <span className="font-bold">Start Date:</span>{" "}
                        {createEMandateFormDetails?.CreateEMandateStartDate} to{" "}
                        <span className="font-medium">End Date:</span>{" "}
                        {createEMandateFormDetails?.CreateEMandateEndDate}
                      </p>
                      <p>
                        <span className="font-bold">Frequency:</span>{" "}
                        {createEMandateFormDetails?.CreateEMandateFrequency}
                      </p>
                      <p>
                        <span className="font-bold">Amount:</span>{" "}
                        {
                          createEMandateFormDetails?.CreateEMandateRequiredAmountNumber
                        }{" "}
                        AED
                      </p>
                    </div>
                  </div>
                </div>
                <div className="text-sm mt-4 space-y-2">
                  <h2 className="">Everything looks good?</h2>
                  <p>
                    • Please review your details carefully before submitting
                    your application.
                  </p>
                  <p>
                    • If you need to make any changes,{" "}
                    <span className="font-bold cursor-pointer">click Edit</span>{" "}
                    beside the relevant section.
                  </p>
                </div>
                <div>
                  <button
                    className="rounded-full font-semibold text-xs shadow-md w-[150px] text-white bg-[#F76B1C] py-2 cursor-pointer"
                    onClick={() => router.push("/stepperSummary")}
                  >
                    More
                  </button>
                </div>
              </div>
            </details>
            <h2>Declaration Statement</h2>
            <div className="flex my-1 items-start">
              <CustomInput
                type="checkbox"
                label="I hereby declare that all the information provided is true,
                complete, and correct to the best of my knowledge. I understand
                that this submission is final and will be used to process my
                auto loan application."
                labelClassName="text-[10px] px-3"
                name="agreeForAcknowledgementOfYourDetails"
                className="checked:accent-black"
                register={register}
                error={errors.agreeForAcknowledgementOfYourDetails?.message?.toString()}
              />
            </div>
            <div className="fixed bottom-0 left-0 right-0 bg-white flex justify-between items-center py-2 px-4 border-t border-gray-200 flex-wrap gap-2">
              <div className="hidden md:flex items-center text-xs text-gray-500 gap-2">
                <VerifiedBadge /> Your data is 100% safe
              </div>
              <div className="flex gap-4 w-full md:w-auto justify-end">
                <button
                  onClick={() => setStep(4)}
                  className="rounded-full font-semibold text-xs shadow-md w-[150px] border border-gray-400 py-2 cursor-pointer"
                >
                  Back and Edit
                </button>
                <button
                  type="submit"
                  className="rounded-full font-semibold text-xs shadow-md w-[150px] text-white bg-[#F76B1C] py-2 cursor-pointer"
                >
                  Confirm & Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      {isCongratulationOpen && (
        <Congratulation onClose={() => setisCongratulationOpen(false)} />
      )}
    </>
  );
}
