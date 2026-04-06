"use client";
import React, { useEffect, useRef, useState } from "react";
import ChevronUpIcon from "@/icons/ChevronUpIcon";
import VerifiedBadge from "@/icons/VerifiedBadge";
import CircularGraph from "@/icons/CircularGraph";
import EditIcon from "@/icons/EditIcon";
import ArrowTiltRightIcon from "@/icons/ArrowTiltRightIcon";
import IndicativeAmortisationSchedule from "../../app/indicativeAmortisationSchedule/page";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  LoanEstimateFormSchema,
  LoanEstimateFormData,
} from "../../components/Validation";
import { useCustomerStore } from "@/store/useCustomerStore";
interface StepProps {
  setStep: React.Dispatch<React.SetStateAction<number>>;
}
export default function LoanEstimate({ setStep }: StepProps) {
  const [View, setView] = useState<boolean>(false);
  const { setLoanEstimateFormDetails, loanEstimateFormDetails } =
    useCustomerStore();

  const [isLocked, setIsLocked] = useState(
    (loanEstimateFormDetails?.vehiclePrice ?? 0) > 0
  );

  const {
    register,
    watch,
    setValue,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<LoanEstimateFormData>({
    resolver: zodResolver(LoanEstimateFormSchema),
    defaultValues: loanEstimateFormDetails || {
      vehiclePrice: 0,
      downPaymentAED: 0,
      loanAmount: 0,
      tenure: 0,
      interestRate: 0,
    },
    mode: "onChange",
  });

  useEffect(() => {
    if (loanEstimateFormDetails) reset(loanEstimateFormDetails);
    setIsLocked(vehiclePrice > 0 ? true : false);
  }, [loanEstimateFormDetails, reset]);

  const vehiclePrice = watch("vehiclePrice");
  const downPaymentAED = watch("downPaymentAED");
  const loanAmount = watch("loanAmount");
  const tenure = watch("tenure");

  const lastChanged = useRef<"down" | "loan" | null>(null);

  const calculateInterestRate = (tenure: number) => {
    if (tenure <= 0) return 0;
    if (tenure <= 6) return 5;
    if (tenure <= 12) return 6;
    if (tenure <= 24) return 6.5;
    if (tenure <= 36) return 7;
    if (tenure <= 48) return 7.5;
    if (tenure <= 60) return 8;
    return 0;
  };

  const isFieldsDisabled = vehiclePrice === 0 || !isLocked;

  const interestRate = React.useMemo(
    () => calculateInterestRate(tenure),
    [tenure]
  );
  const processingFees = vehiclePrice > 0 ? 1000 : 0;

  const onSubmit = (data: LoanEstimateFormData) => {
    setLoanEstimateFormDetails(data);
    console.log("✅ EMI Data:", data);
    if (loanAmount > 0) {
      setStep(5);
    }
  };

  React.useEffect(() => {
    setValue("interestRate", calculateInterestRate(tenure), {
      shouldValidate: true,
    });
  }, [tenure, setValue]);

  useEffect(() => {
    if (vehiclePrice > 0) {
      if (lastChanged.current === "down") {
        setValue("loanAmount", Math.max(vehiclePrice - downPaymentAED, 0), {
          shouldValidate: true,
        });
      } else if (lastChanged.current === "loan") {
        setValue("downPaymentAED", Math.max(vehiclePrice - loanAmount, 0), {
          shouldValidate: true,
        });
      }
    } else {
      setValue("loanAmount", 0, { shouldValidate: false });
      setValue("downPaymentAED", 0, { shouldValidate: false });
      setValue("tenure", 0, { shouldValidate: false });
    }

    lastChanged.current = null;
  }, [vehiclePrice, downPaymentAED, loanAmount, setValue]);

  const interestAmount = loanAmount * (interestRate / 100) * (tenure / 12);
  const totalRepayable = loanAmount + interestAmount + processingFees;
  const monthlyPayment = tenure > 0 ? totalRepayable / tenure : 0;

  const segments =
    downPaymentAED === 0 && interestAmount === 0 && loanAmount === 0
      ? [{ color: "#eef0f5ff", percent: 100 }]
      : [
          { color: "#1382D9", percent: downPaymentAED },
          { color: "#F76B1C", percent: interestAmount },
          { color: "#FFC233", percent: loanAmount },
        ];

  return (
    <>
      {View ? (
        <IndicativeAmortisationSchedule setStep={setStep} />
      ) : (
        <div className="flex flex-col h-screen pt-[96px]">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex-1 overflow-y-auto px-6 py-2">
              <p className="font-bold mb-2">Estimate Your Loan Amount</p>
              <p className="mb-4 text-xs">
                Get an idea of how much you can borrow based on basic info.
              </p>
              <div className=" ">
                <details open className="mb-2 bg-white">
                  <summary className="cursor-pointer px-4 py-2 font-medium flex justify-between items-center bg-[#F8D8C6] rounded-t-md text-sm">
                    Indicative Vehicle Loan Calculator <ChevronUpIcon />
                  </summary>
                  <div className="flex w-full items-stretch">
                    <div className="w-3/5 border-gray-100 bg-white flex flex-col pt-5 py-6 px-3">
                      <div className="flex flex-col flex-grow border border-gray-200 rounded-lg p-6 justify-between">
                        <div className="space-y-4">
                          <div>
                            <label className="block text-xs font-medium text-gray-700 mb-1">
                              Estimated vehicle price{" "}
                              <span className="text-xs text-gray-400">
                                (lock price to continue)
                              </span>
                            </label>
                            <div
                              className={`flex items-center border border-gray-300 ${
                                isLocked && "bg-gray-200"
                              } rounded-md overflow-hidden justify-between`}
                            >
                              <input
                                type="number"
                                {...register("vehiclePrice", {
                                  valueAsNumber: true,
                                })}
                                className="px-4 py-1 flex-1 text-sm font-semibold text-black focus:outline-none"
                                readOnly={isLocked}
                              />
                              <button
                                type="button"
                                onClick={() => setIsLocked(!isLocked)}
                                className="flex items-center gap-1 rounded-md bg-orange-50 hover:bg-orange-100 text-orange-600 font-medium text-xs px-3 py-2 cursor-pointer"
                              >
                                {isLocked ? (
                                  <>
                                    <EditIcon color="#F76B1C" /> Edit Price
                                  </>
                                ) : (
                                  "Lock Price"
                                )}
                              </button>
                            </div>
                            {errors.vehiclePrice && (
                              <p className="text-red-500 text-xs mt-1">
                                {errors.vehiclePrice.message}
                              </p>
                            )}
                          </div>
                          <div className="flex space-x-4">
                            <div className="flex-grow">
                              <label className="block text-xs font-medium text-gray-700">
                                Down payment amount
                              </label>
                              <input
                                type="range"
                                min={0}
                                max={vehiclePrice || 0}
                                {...register("downPaymentAED", {
                                  valueAsNumber: true,
                                })}
                                onChange={(e) => {
                                  lastChanged.current = "down";
                                  const val = Number(e.target.value);
                                  setValue("downPaymentAED", val);
                                  setValue("loanAmount", vehiclePrice - val, {
                                    shouldValidate: true,
                                  });
                                }}
                                disabled={isFieldsDisabled}
                                className="w-full accent-[#28912E] cursor-pointer"
                              />
                              <div className="flex justify-between text-xs text-gray-500 mt-1">
                                <span>Minimum</span>
                                <span>Maximum</span>
                              </div>
                            </div>
                            <div className="flex gap-2 w-44">
                              <div className="flex flex-col items-start w-[60%]">
                                <span className="text-gray-500 text-xs">
                                  AED
                                </span>
                                <input
                                  type="number"
                                  {...register("downPaymentAED", {
                                    valueAsNumber: true,
                                  })}
                                  onFocus={() => (lastChanged.current = "down")}
                                  onChange={(e) => {
                                    lastChanged.current = "down";
                                    const val = Number(e.target.value);
                                    setValue("downPaymentAED", val);
                                    setValue("loanAmount", vehiclePrice - val, {
                                      shouldValidate: true,
                                    });
                                  }}
                                  disabled={isFieldsDisabled}
                                  className="w-full px-2 py-1 border border-gray-200 rounded-md bg-gray-100 text-sm "
                                />
                                {errors.downPaymentAED && (
                                  <p className="text-red-500 text-xs mt-1">
                                    {errors.downPaymentAED.message}
                                  </p>
                                )}
                              </div>
                              <div className="flex flex-col items-start w-[40%]">
                                <span className="text-gray-500 text-xs">
                                  Percent
                                </span>
                                <input
                                  type="text"
                                  value={
                                    vehiclePrice > 0
                                      ? `${Math.round(
                                          (downPaymentAED / vehiclePrice) * 100
                                        )}%`
                                      : "0%"
                                  }
                                  onChange={(e) => {
                                    lastChanged.current = "down";
                                    const input = e.target.value.replace(
                                      "%",
                                      ""
                                    );
                                    const percent = Math.min(
                                      Math.max(Number(input), 0),
                                      100
                                    );
                                    const val = Math.round(
                                      (percent / 100) * vehiclePrice
                                    );
                                    setValue("downPaymentAED", val, {
                                      shouldValidate: true,
                                    });
                                    setValue("loanAmount", vehiclePrice - val, {
                                      shouldValidate: true,
                                    });
                                  }}
                                  disabled={isFieldsDisabled}
                                  className="w-full px-2 py-1 border border-gray-200 rounded-md bg-gray-100 text-sm"
                                />
                              </div>
                            </div>
                          </div>

                          <div className="flex items-center space-x-4">
                            <div className="flex-grow">
                              <label className="block text-xs font-medium text-gray-700 mb-2">
                                Loan Amount
                              </label>
                              <input
                                type="range"
                                min={0}
                                max={vehiclePrice || 0}
                                {...register("loanAmount", {
                                  valueAsNumber: true,
                                })}
                                onChange={(e) => {
                                  lastChanged.current = "loan";
                                  const val = Number(e.target.value);
                                  setValue("loanAmount", val);
                                  setValue(
                                    "downPaymentAED",
                                    vehiclePrice - val,
                                    {
                                      shouldValidate: true,
                                    }
                                  );
                                }}
                                disabled={isFieldsDisabled}
                                className="w-full accent-[#28912E] cursor-pointer"
                              />
                            </div>
                            <div className="grid grid-cols-2 gap-4 w-44">
                              <div className="flex flex-col items-start col-span-2">
                                <span className="text-gray-500 text-xs">
                                  AED
                                </span>
                                <input
                                  type="number"
                                  {...register("loanAmount", {
                                    valueAsNumber: true,
                                  })}
                                  onFocus={() => (lastChanged.current = "loan")}
                                  onChange={(e) => {
                                    lastChanged.current = "loan";
                                    const val = Number(e.target.value);
                                    setValue("loanAmount", val);
                                    setValue(
                                      "downPaymentAED",
                                      vehiclePrice - val,
                                      {
                                        shouldValidate: true,
                                      }
                                    );
                                  }}
                                  disabled={isFieldsDisabled}
                                  className="w-full px-2 py-1 border border-gray-200 rounded-md bg-gray-100 text-sm"
                                />
                                {errors.loanAmount && (
                                  <p className="text-red-500 text-xs mt-1">
                                    {errors.loanAmount.message}
                                  </p>
                                )}
                              </div>
                            </div>
                          </div>

                          <div className="flex items-center space-x-4 mt-8">
                            <div className="flex-grow">
                              <label className="block text-xs font-medium text-gray-700 mb-2">
                                Loan Tenure
                              </label>
                              <input
                                type="range"
                                min={0}
                                max={60}
                                step={1}
                                {...register("tenure", {
                                  valueAsNumber: true,
                                })}
                                value={tenure}
                                onChange={(e) =>
                                  setValue("tenure", Number(e.target.value))
                                }
                                disabled={isFieldsDisabled}
                                className="w-full accent-[#28912E] cursor-pointer"
                              />
                            </div>
                            <div className="grid grid-cols-2 gap-4 w-44">
                              <div className="flex flex-col items-start col-span-2">
                                <span className="text-gray-500 text-xs">
                                  Months
                                </span>
                                <input
                                  type="number"
                                  {...register("tenure", {
                                    valueAsNumber: true,
                                    min: 0,
                                    max: 60,
                                  })}
                                  value={tenure}
                                  onChange={(e) =>
                                    setValue("tenure", Number(e.target.value))
                                  }
                                  disabled={isFieldsDisabled}
                                  className="w-full px-2 py-1 border border-gray-200 rounded-md bg-gray-100 text-sm"
                                />
                                {errors.tenure && (
                                  <p className="text-red-500 text-xs mt-1">
                                    {errors.tenure.message}
                                  </p>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                        <input
                          type="hidden"
                          {...register("interestRate", {
                            valueAsNumber: true,
                          })}
                          disabled={isFieldsDisabled}
                        />

                        <button
                          type="button"
                          className={`w-full py-2 rounded-full text-black text-center text-xs font-semibold  ${
                            !isLocked
                              ? " bg-gray-200  text-gray-400"
                              : "bg-white "
                          }  border border-gray-400 cursor-pointer  mt-6`}
                        >
                          Proceed
                        </button>
                      </div>
                    </div>
                    <div className="w-2/5 border-gray-100 bg-white flex flex-col pt-5 py-6 px-3">
                      <div className="flex flex-col flex-grow border border-gray-200 rounded-lg p-6 space-y-3">
                        <div className="flex justify-around items-center">
                          <CircularGraph
                            size={150}
                            strokeWidth={25}
                            segments={segments}
                          />
                          <div className="space-y-3">
                            <div className="flex items-center space-x-1 text-xs">
                              <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                              <span>Down Payment</span>
                            </div>
                            <div className="flex items-center space-x-1 text-xs">
                              <span className="w-2 h-2 bg-orange-400 rounded-full"></span>
                              <span>Interest (Estimated)</span>
                            </div>
                            <div className="flex items-center space-x-1 text-xs">
                              <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
                              <span>Loan Principal</span>
                            </div>
                          </div>
                        </div>

                        <hr className="mb-2 text-gray-200" />

                        <div className="text-sm text-gray-600 mb-2">
                          Annual interest rate Interest Rate:{" "}
                          <span className="font-semibold text-black">
                            {interestRate}% p.a.
                          </span>
                        </div>
                        <hr className="text-gray-200" />

                        <div className="space-y-3 text-sm text-gray-700 mb-6">
                          <div className="flex ">
                            <span>Loan Amount:</span>
                            <span>AED {loanAmount.toLocaleString()}</span>
                          </div>
                          <div className="flex ">
                            <span>Monthly Amount:</span>
                            <span>AED {monthlyPayment.toFixed(2)}</span>
                          </div>
                          <div className="flex ">
                            <span>Loan Tenure:</span>
                            <span>{tenure} months</span>
                          </div>
                          <div className="flex ">
                            <span>Processing fees:</span>
                            <span>AED 1,000</span>
                          </div>
                        </div>

                        <div className="bg-[#FAF1EC] text-gray-700 flex justify-between items-center px-2 py-1 rounded mb-4">
                          <span className="font-medium text-sm">
                            Total Repayable
                          </span>
                          <span className="font-semibold text-sm">
                            AED {totalRepayable.toFixed(2)}
                          </span>
                        </div>

                        <button
                          type="button"
                          className={`w-full cursor-pointer ${
                            !isLocked || vehiclePrice === 0
                              ? "bg-gray-200  text-gray-400"
                              : "bg-white "
                          } font-bold text-black border-black py-2 rounded-full text-xs  flex items-center border border-gray-400 justify-center mt-auto`}
                          onClick={() =>
                            vehiclePrice > 0 && isLocked && setView(true)
                          }
                        >
                          Show Indicative Amortisation Schedule
                          <ArrowTiltRightIcon
                            color={`${!isLocked ? "gray" : "black"}`}
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                </details>
              </div>
            </div>
            <div className="bg-white flex justify-between items-center py-2 px-4 border-t border-gray-200">
              <div className="hidden md:flex items-center text-xs text-gray-500 gap-2">
                <VerifiedBadge /> Your data is 100% safe
              </div>
              <div className="flex gap-4">
                <button
                  onClick={() => setStep(3)}
                  className="rounded-full font-semibold text-xs shadow-md w-[120px] border border-gray-400 py-2 cursor-pointer"
                >
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
      )}
    </>
  );
}
