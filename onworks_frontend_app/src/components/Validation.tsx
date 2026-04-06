import { z } from "zod";

export const numericString = z
  .string()
  .regex(/^[0-9]+$/, "Must contain only digits");

const today = new Date();
const maxDate = new Date();
maxDate.setDate(today.getDate() + 30);

/* ----------------- Login ----------------- */

export const loginSchema = z.object({
  emailOrMobile: z
    .string()
    .nonempty("This field is required")
    .refine(
      (val) =>
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val) || /^[0-9]{10}$/.test(val),
      "Enter a valid email or 10-digit mobile number"
    ),
});

export type LoginFormInputs = z.infer<typeof loginSchema>;

/* ----------------- SignUp ----------------- */

export const SignUpSchema = z.object({
   nationalId: numericString
      .min(9, "National ID must be  9 digits")
      .max(9,"National ID must be  9 digits")
      .optional()
      .or(z.literal("")),
  residentId: numericString
      .min(9, "Resident ID must be  9 digits")
      .max(9,"Resident ID must be  9 digits")
      .optional()
      .or(z.literal("")),
  email: z.email("Invalid email address"),
  phone: z.string().regex(/^[0-9]{10}$/, "Mobile number must be 10 digits"),
  idExpiry: z
    .string()
    .min(1, "Expiry date is required")
    .refine((val) => {
      const selectedDate = new Date(val);
      return selectedDate >= today;
    }, "Expiry date is not valid"),
  countryCode: z.string().min(1, "Country code is required"),
  userId:z.string(),

}).refine(
    (data) =>
      (data.nationalId && data.nationalId.trim() !== "") ||
      (data.residentId && data.residentId.trim() !== ""),
    {
      message: "Either National ID or Resident ID is required",
      path: ["nationalId"], // can point to either field
    }
  );

export type SignUpFormInputs = z.infer<typeof SignUpSchema>;

/* ----------------- OtpVerification ----------------- */
export const otpVerificationSchema = z.object({
  OtpVerification: z
    .string()
    .regex(/^[0-9]{6}$/, "Must contain only 6 digits Otp"),
});

export type OtpVerificationFormInputs = z.infer<typeof otpVerificationSchema>;

/* ----------------- Eligibility ----------------- */
export const eligibilitySchema = z.object({
  incomeRange: z.string().min(1, "Please select an income range"),
  occupation: z.string().min(1, "Occupation is required"),
  salarySlip: z
    .any()
    .refine((file) => file instanceof File || Array.isArray(file), {
      message: "Upload salary slip or certificate",
    }),
  otherIncome: numericString.optional().or(z.literal("")),
  existingLoan: numericString.optional().or(z.literal("")),
  creditLimit: numericString.min(1, "Credit card limit is required"),
  desiredLoan: numericString.min(1, "Desired loan is required"),
  agree: z.boolean().refine((val) => val === true, {
    message: "You must agree to fetch your credit score",
  }),
});

export type EligibilityFormData = z.infer<typeof eligibilitySchema>;

/* ----------------- Emirates ----------------- */

export const emiratesSchema = z.union([
  z.object({
    mode: z.enum(["Manual", "Upload"]),
    emiratesIdNumber: z
      .string()
      .min(15, "Emirates ID must be at least 15 characters")
      .max(15, "Emirates ID must be 15 characters"),
    name: z
      .string()
      .min(1, "Name is required")
      .regex(/^[A-Za-z\s]+$/, "Only alphabets are allowed"),
    expiry: z
      .string()
      .min(1, "Expiry date is required")
      .refine((val) => {
        const selectedDate = new Date(val);
        return selectedDate >= today;
      }, "Expiry date is not valid"),
    frontFile: z.any().optional(),
    backFile: z.any().optional(),
  }),

  z.object({
    emiratesIdNumber: z.string().optional(),
    name: z.string().optional(),
    expiry: z.string().optional(),
    frontFile: z
      .any()
      .refine((file) => file instanceof File, "Front file is required"),
    backFile: z
      .any()
      .refine((file) => file instanceof File, "Back file is required"),
  }),
]);
export type EmiratesFormInputs = z.infer<typeof emiratesSchema>;

/* ----------------- Customer Details ----------------- */

const permanentRequiredSchema = z.object({
  flatVillaNoPermanentAddress: z.string().min(1, "Flat/Villa No is required"),
  buildingNamePermanentAddress: z.string().min(1, "Building name is required"),
  streetNamePermanentAddress: z.string().min(1, "Street name is required"),
  areaLocalityPermanentAddress: z.string().min(1, "Area/Locality is required"),
  cityPermanentAddress: z.string().min(1, "City is required"),
  emiratePermanentAddress: z.string().min(1, "Emirate is required"),
  poBoxPermanentAddress: z.string().min(1, "PO Box must be in numbers"),
});

const emergencyRequiredSchema = z.object({
  salutationEmergencyDetails: z.string().min(1, "Salutation is required"),
  firstNameEmergencyDetails: z
    .string()
    .min(1, "First name is required")
    .regex(/^[A-Za-z\s]+$/, "Only alphabets are allowed"),
  middleNameEmergencyDetails: z
    .string()
    .min(1, "Middle name is required")
    .regex(/^[A-Za-z\s]+$/, "Only alphabets are allowed"),
  lastNameEmergencyDetails: z
    .string()
    .min(1, "Last name is required")
    .regex(/^[A-Za-z\s]+$/, "Only alphabets are allowed"),
  mobileEmergencyDetails: z
    .string()
    .regex(/^[0-9]{10}$/, "Mobile number must be 10 digits"),
  flatVillaNoEmergencyDetails: z.string().min(1, "Flat/Villa No is required"),
  buildingNameEmergencyDetails: z.string().min(1, "Building name is required"),
  streetNameEmergencyDetails: z.string().min(1, "Street name is required"),
  cityEmergencyDetails: z
    .string()
    .min(1, "City is required")
    .regex(/^[A-Za-z\s]+$/, "Only alphabets are allowed"),
  areaLocalityEmergencyDetails: z.string().min(1, "Area/Locality is required"),
  emirateEmergencyDetails: z
    .string()
    .min(1, "Emirate is required")
    .regex(/^[A-Za-z\s]+$/, "Only alphabets are allowed"),
  pOBoxEmergencyDetails: z.string().min(1, "PO Box must be in numbers"),
});

export const customerDetailsSchema = z
  .object({
    basic: z.object({
      firstName: z
        .string()
        .min(1, "First name is required")
        .regex(/^[A-Za-z\s]+$/, "Only alphabets are allowed"),
      lastName: z
        .string()
        .min(1, "Last name is required")
        .regex(/^[A-Za-z\s]+$/, "Only alphabets are allowed"),
      middleName: z
        .string()
        .min(1, "Middle name is required")
        .regex(/^[A-Za-z\s]+$/, "Only alphabets are allowed"),
      email: z.string().email("Invalid email address"),
      mobile: z
        .string()
        .regex(/^[0-9]{10}$/, "Mobile number must be 10 digits"),
      countryofBirth: z
        .string()
        .min(1, "Country of birth is required")
        .regex(/^[A-Za-z\s]+$/, "Only alphabets are allowed"),
      countryofResidence: z
        .string()
        .min(1, "Country of residence is required")
        .regex(/^[A-Za-z\s]+$/, "Only alphabets are allowed"),
      nationality: z
        .string()
        .min(1, "Nationality is required")
        .regex(/^[A-Za-z\s]+$/, "Only alphabets are allowed"),
      salutation: z.string().min(1, "Salutation is required"),
      gender: z.string().min(1, "Gender is required"),
      date: z
        .string()
        .min(1, "Date of birth is required")
        .refine((val) => {
          const selectedDate = new Date(val);
          const today = new Date();
          const minAllowedDate = new Date(
            today.getFullYear() - 18,
            today.getMonth(),
            today.getDate()
          );
          return selectedDate <= minAllowedDate;
        }, "You must be at least 18 years old"),

      emiratesIDCardNumber: z
        .string()
        .regex(/^[0-9]{10,16}$/, "Emirates ID must be 10–16 digits"),
      emiratesIDExpiryDate: z
        .string()
        .min(1, "Expiry date is required")
        .refine((val) => {
          const selectedDate = new Date(val);
          return selectedDate >= today;
        }, "Expiry date is not valid"),
      maritalStatus: z.string().min(1, "Marital status is required"),
      dependents: z.string().min(1, "Dependents is required"),
    }),

    address: z.object({
      flatVillaNo: z.string().min(1, "Flat/Villa No is required"),
      buildingName: z.string().min(1, "Building name is required"),
      streetName: z.string().min(1, "Street name is required"),
      areaLocality: z.string().min(1, "Area/Locality is required"),
      city: z
        .string()
        .min(1, "City is required")
        .regex(/^[A-Za-z\s]+$/, "Only alphabets are allowed"),
      emirate: z
        .string()
        .min(1, "Emirate is required")
        .regex(/^[A-Za-z\s]+$/, "Only alphabets are allowed"),
      pOBox: z.string().min(1, "PO Box must be in numbers"),
      relation: z.string().min(1, "Relations is required"),

      permanentDifferent: z.boolean(),
      emergencyDifferent: z.boolean(),

      permanent: permanentRequiredSchema.partial().optional(),
      emergency: emergencyRequiredSchema.partial().optional(),
    }),

    agreeCustomerDetailsFill: z.boolean().refine((val) => val === true, {
      message: "You must agree before submitting",
    }),
  })
  .superRefine((data, ctx) => {
    if (!data.address.permanentDifferent) {
      if (!data.address.permanent) {
        ctx.addIssue({
          code: "custom",
          path: ["address", "permanent"],
          message: "Permanent address required",
        });
      } else {
        const parsed = permanentRequiredSchema.safeParse(
          data.address.permanent
        );
        if (!parsed.success) {
          parsed.error.issues.forEach((e) =>
            ctx.addIssue({
              code: "custom",
              path: ["address", "permanent", ...(e.path ?? [])],
              message: e.message,
            })
          );
        }
      }
    }

    if (!data.address.emergencyDifferent) {
      if (!data.address.emergency) {
        ctx.addIssue({
          code: "custom",
          path: ["address", "emergency"],
          message: "Emergency contact required",
        });
      } else {
        const parsed = emergencyRequiredSchema.safeParse(
          data.address.emergency
        );
        if (!parsed.success) {
          parsed.error.issues.forEach((e) =>
            ctx.addIssue({
              code: "custom",
              path: ["address", "emergency", ...(e.path ?? [])],
              message: e.message,
            })
          );
        }
      }
    }
  });

export type CustomerDetailsFormValues = z.infer<typeof customerDetailsSchema>;

/* ----------------- Customer Employment Details ----------------- */

export const customerEmploymentDetailsSchema = z.object({
  employmentDetails: z.object({
    CompanyName: z
      .string()
      .min(1, "Company Name is required")
      .regex(/^[A-Za-z\s]+$/, "Only alphabets are allowed"),
    Designation: z.string().min(1, "Designation is required"),
    Department: z.string().min(1, "Department is required"),
    MonthlySalaryInAED: z
      .string()
      .regex(/^\d+$/, "Monthly Salary must be a number")
      .min(1, "Monthly Salary is required"),
    uploadDocuments: z
      .array(z.instanceof(File))
      .min(1, "Please upload 3 months salary slips or Salary Certificate"),
  }),

  companyAddress: z.object({
    flatVillaNoCompanyAddress: z.string().min(1, "Flat/Villa No is required"),
    BuildingNameCompanyAddress: z.string().min(1, "Building Name is required"),
    StreetnameCompanyAddress: z.string().min(1, "Street Name is required"),
    AreaLocalityCompanyAddress: z.string().min(1, "Area/Locality is required"),
    CityCompanyAddress: z
      .string()
      .min(1, "City is required")
      .regex(/^[A-Za-z\s]+$/, "Only alphabets are allowed"),
    EmirateCompanyAddress: z
      .string()
      .min(1, "Emirate is required")
      .regex(/^[A-Za-z\s]+$/, "Only alphabets are allowed"),
    PoBoxCompanyAddress: z.string().min(1, "P.O. Box must be in numbers"),
  }),
  agreeCustomerEmploymentDetailsFill: z
    .boolean()
    .refine((val) => val === true, {
      message: "You must agree before submitting",
    }),
});

export type CustomerEmploymentDetailsFormData = z.infer<
  typeof customerEmploymentDetailsSchema
>;

/* ----------------- Customer Vehicle Details ----------------- */

export const customerVehicleDetailsSchema = z
  .object({
    CustomerVehicleDealerName: z.string().min(1, "Dealer name is required"),
    CustomerVehicleBrand: z.string().min(1, "Brand is required"),
    CustomerVehicleModalYear: z
      .string()
      .regex(/^\d{4}$/, "Enter a valid year (YYYY)"),
    CustomerVehicleSalesPersonName: z
      .string()
      .min(1, "Sales person name is required")
      .regex(/^[A-Za-z\s]+$/, "Only alphabets are allowed"),
    CustomerVehicleExpiryDeliveryDate: z
      .string()
      .min(1, "Delivery date is required")
      .refine((val) => {
        const selectedDate = new Date(val);
        const currentDate = new Date(
          today.getFullYear(),
          today.getMonth(),
          today.getDate()
        );
        const limitDate = new Date(
          maxDate.getFullYear(),
          maxDate.getMonth(),
          maxDate.getDate()
        );
        return selectedDate >= currentDate && selectedDate <= limitDate;
      }, "Delivery date must be within 30 days from today"),
    CustomerVehiclePurchasePrice: numericString.min(
      1,
      "Purchase price is required"
    ),
    CustomerVehicleQuotationDocument: z
      .any()
      .refine((file) => file instanceof File || Array.isArray(file), {
        message: "Quotation document is required",
      }),
    CustomerExistingVehicleTradePlanning: z
      .string()
      .min(1, "Please select an option"),
    agreeCustomerVehicleComprehensiveInsurance: z
      .boolean()
      .refine((val) => val === true, {
        message: "You must agree before submitting",
      }),
    agreeCustomerVehicleOneTimeCharge: z.boolean(),
    agreeCustomerVehicleCheckBankStatement: z.boolean(),
  })
  .refine(
    (data) =>
      data.agreeCustomerVehicleCheckBankStatement &&
      data.agreeCustomerVehicleOneTimeCharge,
    {
      message: "You must agree before submitting",
      path: ["agreeCustomerVehicleOneTimeCharge"],
    }
  );

export type CustomerVehicleDetailsFormData = z.infer<
  typeof customerVehicleDetailsSchema
>;

/* ----------------- Customer Create EMendate Details ----------------- */

export const customerCreateEMandateDetails = z
  .object({
    CreateEMandatePayerName: z
      .string()
      .min(1, "Payer name is required")
      .regex(/^[A-Za-z\s]+$/, "Only alphabets are allowed"),
    CreateEMandateIdType: z.string().min(1, "ID Type is required"),
    CreateEMandateIDNumber: z.string().min(1, "ID Number is required"),
    CreateEMandateBankName: z.string().min(1, "Bank name is required"),
    CreateEMandatePayerAccountNumber: numericString,
    CreateEMandateBeneficiaryAccount: z
      .string()
      .min(1, "Select beneficiary account is required"),
    CreateEMandateRequiredAmountNumber: numericString,
    CreateEMandateFrequency: z.string().min(1, "Frequency is required"),
    CreateEMandateStartDate: z.string().min(1, "Start date is required"),
    CreateEMandateEndDate: z.string().min(1, "End date is required"),
    CreateEMandateDueDate: z.string().min(1, "Due date is required"),
    CreateEMandatePurposeOfMandate: z.string().min(1, "Purpose is required"),

    CreateEMandateUploadSignatureDocument: z
      .any()
      .optional()
      .refine((file) => file instanceof File || Array.isArray(file), {
        message: " document is required",
      }),
    CreateEMandateDrawSignatureOnDigitalNote: z.any().optional(),

    agreeToTermsAndCondition: z.boolean(),
    agreeForTermsAndConditionOfEMandate: z.boolean(),
  })
  .refine(
    (data) =>
      data.agreeToTermsAndCondition && data.agreeForTermsAndConditionOfEMandate,
    {
      message: "You must agree before submitting",
      path: ["agreeForTermsAndConditionOfEMandate"],
    }
  );
export type CustomerCreateEMandateFormData = z.infer<
  typeof customerCreateEMandateDetails
>;

/* ----------------- Customer Review and Confirmation Details ----------------- */

export const customerReviewAndConfirmationSchema = z.object({
  agreeForAcknowledgementOfYourDetails: z
    .boolean()
    .refine((val) => val === true, {
      message: "You must agree before submit",
    }),
});

export type customerReviewAndConfirmationFormData = z.infer<
  typeof customerReviewAndConfirmationSchema
>;

/* ----------------- Dealer --> Addstaff popup validations. ----------------- */

export const addStaffPopupSchema = z.object({
  fullName: z
    .string()
    .trim()
    .max(50, { message: "Full name must be less than 50 characters" })
    .regex(/^[\p{L}]+(?:['-][\p{L}]+)*(\s+[\p{L}]+(?:['-][\p{L}]+)*)+$/u, {
      message: "Enter a valid full name (first and last, letters only)",
    }),
  email: z.string().email("Invalid email address"),
  mobile: z.string().regex(/^[0-9]{10}$/, "Mobile number must be 10 digits"),
  role: z.string().min(1, "Role is required"),
  department: z.string().min(1, "Department is required"),
  status: z.string().min(1, "Status is required"),
  salary: z
    .string()
    .trim()
    .regex(/^\d+(\.\d{1,2})?$/, {
      message: "Enter a valid salary (only numbers, up to 2 decimals)",
    }),
  date: z.string().min(1, { message: "Date is required" }),
  address: z
    .string()
    .min(5, { message: "Address must be at least 5 characters" }),
  emergencyContact: z
    .string()
    .regex(/^[0-9]{10}$/, { message: "Emergency contact must be 10 digits" }),
});

export type addStaffInputs = z.infer<typeof addStaffPopupSchema>;

/* ----------------- Dealer --> Addbranch popup validations ----------------- */

export const addBranchPopupSchema = z.object({
  branchName: z
    .string()
    .trim()
    .max(50, { message: "Branch name must be less than 50 characters" })
    .regex(/^[\s\S]+$/, {
      message: "Enter a valid Branch name",
    }),

  branchCode: z.string().min(1, "Branch code is required"),
  address: z
    .string()
    .min(5, { message: "Address must be at least 5 characters" }),
  mobile: z.string().regex(/^[0-9]{10}$/, "Mobile number must be 10 digits"),
  email: z.string().email("Invalid email address"),
  branchManager: z
    .string()
    .trim()
    .max(50, { message: "Branch name must be less than 50 characters" })
    .regex(/^[\p{L}\s]+$/u, {
      message: "Enter valid branch manager name",
    }),

  staffCount: z
    .string()
    .regex(/^[0-9]{0,3}$/, "Staff count must be less than 3 digits"),
  status: z.string().min(1, "Status is required"),
  date: z.string().min(1, { message: "Date is required" }),
  timings: z
    .string()
    .trim()
    .regex(
      /^(0?[1-9]|1[0-2]):[0-5][0-9]\s?(AM|PM)\s*-\s*(0?[1-9]|1[0-2]):[0-5][0-9]\s?(AM|PM)$/i,
      "Time must be in format hh:mm AM - hh:mm PM"
    ),
});

export type addBranchInputs = z.infer<typeof addBranchPopupSchema>;

/* ----------------- Customer EMI Calculator ----------------- */
export const EmiFormSchema = z
  .object({
    vehiclePrice: z
      .number()
      .min(0, "Value must not be negative")
      .max(1000000, "Value can not be greater than 1000000 "),
    downPaymentAED: z.number().min(0, "Down payment cannot be negative"),
    loanAmount: z.number(),
    tenure: z.number().max(60, "Maximum tenure is 60 months"),
    interestRate: z.number().min(0, "Interest rate must not be negative"),
  })
  .superRefine((data, ctx) => {
    if (data.downPaymentAED > data.vehiclePrice) {
      ctx.addIssue({
        path: ["downPaymentAED"],
        code: "custom",
        message: "Down payment cannot exceed vehicle price",
      });
    }
    if (data.loanAmount > data.vehiclePrice) {
      ctx.addIssue({
        path: ["loanAmount"],
        code: "custom",
        message: "Loan amount cannot exceed vehicle price",
      });
    }
  });

export type EmiFormData = z.infer<typeof EmiFormSchema>;

/* ----------------- Customer LoanEstimate ----------------- */
export const LoanEstimateFormSchema = z
  .object({
    vehiclePrice: z
      .number()
      .min(1, "Value must be greater than 0")
      .max(1000000, "Value can not be greater than 1000000 "),
    downPaymentAED: z.number().min(0, "Down payment cannot be negative"),
    loanAmount: z.number().min(1, "Please provide loan amount "),
    tenure: z.number().max(60, "Maximum tenure is 60 months"),
    interestRate: z.number().min(0, "Interest rate must not be negative"),
  })
  .superRefine((data, ctx) => {
    if (data.downPaymentAED > data.vehiclePrice) {
      ctx.addIssue({
        path: ["downPaymentAED"],
        code: "custom",
        message: "Down payment cannot exceed vehicle price",
      });
    }
    if (data.loanAmount > data.vehiclePrice) {
      ctx.addIssue({
        path: ["loanAmount"],
        code: "custom",
        message: "Loan amount cannot exceed vehicle price",
      });
    }
  });

export type LoanEstimateFormData = z.infer<typeof LoanEstimateFormSchema>;

/* ----------------- Payments ----------------- */
export const paymentsSchema = z
  .object({
    CustomerVehicleLoanType: z.string().min(1, "Please select loan type"),
    paymentType: z.string().min(1, "Please select Payment option"),
    paymentAmount: z.string().optional(),
    paymentMethod: z.string().min(1, "Please select Payment Method"),
  })
  .superRefine((data, ctx) => {
    if (data.paymentType === "PartPayment") {
      if (!data.paymentAmount || data.paymentAmount.trim() === "") {
        ctx.addIssue({
          path: ["paymentAmount"],
          code: "custom",
          message: "Payment amount is required for part payment",
        });
      } else if (!/^\d+(\.\d+)?$/.test(data.paymentAmount)) {
        ctx.addIssue({
          path: ["paymentAmount"],
          code: "custom",
          message: "Payment amount must be a valid number",
        });
      }
    }
  });

export type PaymentFormData = z.infer<typeof paymentsSchema>;
