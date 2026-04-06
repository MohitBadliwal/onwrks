import React, { SelectHTMLAttributes, ReactNode } from "react";
import { UseFormRegister } from "react-hook-form";

interface CustomSelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  name: string;
  className?: string;
  labelClassName?: string;
  register?: UseFormRegister<any>;
  rules?: object;
  error?: string;
  children: ReactNode;
  
}

export default function CustomSelect({
  label,
  name,
  className,
  labelClassName,
  register,
  rules,
  error,
  children,
  ...rest
}: CustomSelectProps) {
  return (
    <div className="relative">
      {label && (
        <label className={`${labelClassName || "block text-sm text-gray-700 mb-1"}`}>
          {label} <span className="text-red-500">*</span>
        </label>
      )}

      <select
        className={`${
          className || "w-full py-2 border rounded-lg px-3 text-gray-700"
        } ${error && (error ? "border-red-500" : "border-gray-300")}`}
        {...(register ? register(name, rules) : {})}
        {...rest}
      >
        {children}
      </select>

      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
}
