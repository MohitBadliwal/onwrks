"use client";
import React from "react";
import type { Toast } from "../../context/ToastContext";

interface ToastContainerProps {
  toasts: Toast[];
  removeToast: (id: string) => void;
}

const variantStyles: Record<string, string> = {
  success: "bg-green-50 border-green-300 text-green-800",
  error: "bg-red-50 border-red-300 text-red-800",
  warning: "bg-yellow-50 border-yellow-300 text-yellow-800",
};

export const ToastContainer: React.FC<ToastContainerProps> = ({
  toasts,
  removeToast,
}) => {
  return (
    <div
      id="toast-container"
      className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-[9999] flex flex-col items-center gap-3 w-full max-w-[400px] pointer-events-none"
    >
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className="pointer-events-auto w-full flex justify-center"
        >
          <ToastItem toast={toast} removeToast={removeToast} />
        </div>
      ))}
    </div>
  );
};

interface ToastItemProps {
  toast: Toast;
  removeToast: (id: string) => void;
}

const ToastItem: React.FC<ToastItemProps> = ({ toast, removeToast }) => {
  const variantClasses =
    variantStyles[toast.variant || "success"] || variantStyles.success;

  return (
    <div
      className={`w-80 p-4 border rounded-lg shadow-md flex justify-between items-start transition-all duration-300 hover:scale-[1.02] ${variantClasses}`}
    >
      <div className="flex-1 text-center">
        <p className="font-semibold">{toast.title}</p>
        {toast.description && (
          <p className="text-sm mt-1 opacity-80">{toast.description}</p>
        )}
      </div>
      {!(toast.title==="Session expired!") && <button
        onClick={() => removeToast(toast.id)}
        className="ml-3 text-gray-500 hover:text-gray-800 text-lg leading-none"
      >
        ×
      </button>}
    </div>
  );
};
