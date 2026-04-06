/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { InputHTMLAttributes, ReactNode, forwardRef } from "react";
import { UseFormRegister } from "react-hook-form";

interface CustomInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  placeholder?: string;
  type?: string;
  name: string;
  className?: string;
  labelClassName?: string;
  children?: React.ReactNode;
  register?: UseFormRegister<any>;
  rules?: object;
  registerOptions?: any;
  error?: string;
  icon?: ReactNode;
  notImportant?: boolean;
}

const CustomInput = forwardRef<HTMLInputElement, CustomInputProps>(
  (
    {
      label,
      placeholder = "Enter",
      type = "text",
      notImportant = false,
      name,
      className,
      labelClassName,
      children,
      register,
      registerOptions,
      rules,
      error,
      icon,
      ...rest
    },
    ref
  ) => {
    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter") {
        e.preventDefault();
        e.stopPropagation();
      }
    };
    const { ref: registerRef, ...registerProps } = register
      ? register(name, { ...rules, ...registerOptions })
      : { ref: undefined };

    const mergeRefs = (el: HTMLInputElement | null) => {
      if (typeof ref === "function") {
        ref(el);
      } else if (ref) {
        (ref as React.MutableRefObject<HTMLInputElement | null>).current = el;
      }
      if (registerRef) registerRef(el);
    };

    if (type === "checkbox" || type === "radio") {
      return (
        <div>
          <div className="flex items-center space-x-2">
            <input
              type={type}
              className={`${
                type === "checkbox" || type === "radio"
                  ? className
                  : "border rounded-lg"
              } ${error && (error ? "border-red-500" : "border-gray-300")} `}
              checked={rest.checked}
              {...registerProps}
              {...rest}
              onKeyDown={handleKeyDown}
              ref={mergeRefs}
            />
            {label && (
              <label className={labelClassName || "text-sm text-gray-700"}>
                {label}
              </label>
            )}
          </div>
          {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
        </div>
      );
    }

    return (
      <div className="relative">
        {label && (
          <label className="block text-sm text-gray-700 mb-1">
            {label}
            {!notImportant && <span className="text-red-500">*</span>}
          </label>
        )}
        <input
          type={type}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            if (
              registerProps &&
              typeof (registerProps as any).onChange === "function"
            ) {
              (registerProps as any).onChange(e);
            }
            if (rest.onChange) {
              (rest.onChange as React.ChangeEventHandler<HTMLInputElement>)(e);
            }
          }}
          placeholder={placeholder}
          className={`${className || "w-full py-2 px-3 border rounded-lg"} ${
            icon ? "pr-10" : ""
          } ${error ? "border-red-500" : "border-gray-300"}`}
          {...registerProps}
          {...rest}
          onKeyDown={handleKeyDown}
          ref={mergeRefs}
        />
        {icon && (
          <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center cursor-pointer z-10">
            {icon}
          </div>
        )}
        {children}
        {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
      </div>
    );
  }
);

CustomInput.displayName = "CustomInput";

export default CustomInput;
