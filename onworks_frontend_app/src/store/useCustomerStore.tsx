import { create } from "zustand";
import {
  EligibilityFormData,
  EmiratesFormInputs,
  EmiFormData,
  LoanEstimateFormData,
  CustomerDetailsFormValues,
  CustomerEmploymentDetailsFormData,
  CustomerVehicleDetailsFormData,
  customerReviewAndConfirmationFormData,
  CustomerCreateEMandateFormData,
  PaymentFormData,
} from "@/components/Validation";

// Define the state shape
interface CustomerState {
  loanType: string | null;
  setLoanType: (type: string) => void;

  showCompany: boolean | null;
  setShowCompany: (type: boolean) => void;

  selectedLoan: string | null;
  setSelectedLoan: (type: string) => void;

  selectedPayment: PaymentFormData | null;
  setSelectedPayment: (details: PaymentFormData) => void;

  vehiclePreference: string | null;
  setVehiclePreference: (type: string) => void;

  applicationType: string | null;
  setApplicationType: (type: string) => void;

  emirateFormDetails: EmiratesFormInputs | null;
  setEmirateFormDetails: (details: EmiratesFormInputs) => void;

  eligibilityFormDetails: EligibilityFormData | null;
  setEligibilityFormDetails: (details: EligibilityFormData) => void;

  emiFormDetails: EmiFormData | null;
  setEmiFormDetails: (data: EmiFormData) => void;

  loanEstimateFormDetails: LoanEstimateFormData | null;
  setLoanEstimateFormDetails: (data: LoanEstimateFormData) => void;

  personalDetails: CustomerDetailsFormValues | null;
  setPersonalDetails: (data: CustomerDetailsFormValues) => void;

  employmentDetails: CustomerEmploymentDetailsFormData | null;
  setEmploymentDetails: (data: CustomerEmploymentDetailsFormData) => void;

  vehicleDetails: CustomerVehicleDetailsFormData | null;
  setVehicleDetails: (data: CustomerVehicleDetailsFormData) => void;

  reviewAndConfirmationDetails: customerReviewAndConfirmationFormData | null;
  setReviewAndConfirmationDetails: (
    data: customerReviewAndConfirmationFormData
  ) => void;

  createEMandateFormDetails: CustomerCreateEMandateFormData | null;
  setcreateEMandateFormDetails: (data: CustomerCreateEMandateFormData) => void;

  dateRangeCalendar: { start: Date | null; end: Date | null };
  setDateRangeCalendar: (range: {
    start: Date | null;
    end: Date | null;
  }) => void;

  clearAll: () => void;
}

// Create store with types
export const useCustomerStore = create<CustomerState>((set) => ({
  loanType: null,
  setLoanType: (type) => set({ loanType: type }),

  showCompany: null,
  setShowCompany: (type) => set({ showCompany: type }),

  selectedLoan: "Individual",
  setSelectedLoan: (type) => set({ selectedLoan: type }),

  selectedPayment: null,
  setSelectedPayment: (details) => set({ selectedPayment: details}),

  vehiclePreference: null,
  setVehiclePreference: (type) => set({ vehiclePreference: type }),

  applicationType: null,
  setApplicationType: (type) => set({ applicationType: type }),

  emirateFormDetails: null,
  setEmirateFormDetails: (details) => set({ emirateFormDetails: details }),

  eligibilityFormDetails: null,
  setEligibilityFormDetails: (details) =>
    set({ eligibilityFormDetails: details }),

  emiFormDetails: null,
  setEmiFormDetails: (data) => set({ emiFormDetails: data }),

  loanEstimateFormDetails: null,
  setLoanEstimateFormDetails: (data) => set({ loanEstimateFormDetails: data }),

  personalDetails: null,
  setPersonalDetails: (data) => set({ personalDetails: data }),

  employmentDetails: null,
  setEmploymentDetails: (data) => set({ employmentDetails: data }),

  vehicleDetails: null,
  setVehicleDetails: (data) => set({ vehicleDetails: data }),

  reviewAndConfirmationDetails: null,
  setReviewAndConfirmationDetails: (data) =>
    set({ reviewAndConfirmationDetails: data }),

  createEMandateFormDetails: null,
  setcreateEMandateFormDetails: (data) =>
    set({ createEMandateFormDetails: data }),

  dateRangeCalendar: { start: null, end: null },
  setDateRangeCalendar: (range) => set({ dateRangeCalendar: range }),

  clearAll: () =>
    set({
      loanType: null,
      selectedLoan: "Individual",
      selectedPayment:null,
      vehiclePreference: null,
      applicationType: null,
      emirateFormDetails: null,
      eligibilityFormDetails: null,
      emiFormDetails: null,
      loanEstimateFormDetails: null,
      personalDetails: null,
      employmentDetails: null,
      vehicleDetails: null,
      reviewAndConfirmationDetails: null,
      createEMandateFormDetails: null,
      dateRangeCalendar: { start: null, end: null },
      showCompany: null,
    }),
}));
