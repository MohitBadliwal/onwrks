import React from "react";
import { Toast, useToastStore } from "../../store/useToastStore";

interface ToastItemProps {
  toast: Toast;
}

const ToastItem: React.FC<ToastItemProps> = ({ toast }) => {
  const { removeToast } = useToastStore();

  const variantStyles: Record<string, string> = {
    success: "bg-green-50 border-green-300 text-green-800",
    error: "bg-red-50 border-red-300 text-red-800",
    warning: "bg-yellow-50 border-yellow-300 text-yellow-800",
  };

  return (
    <div
      className={`w-80 p-4 border rounded-lg shadow-md flex justify-between items-start transition-transform duration-300 transform 
        translate-x-0 opacity-100 hover:scale-[1.02]
        ${variantStyles[toast.variant || "success"]}`}
    >
      <div>
        <p className="font-semibold">{toast.title}</p>
        {toast.description && (
          <p className="text-sm mt-1 opacity-80">{toast.description}</p>
        )}
      </div>
      <button
        onClick={() => removeToast(toast.id)}
        className="ml-3 text-gray-500 hover:text-gray-800 text-lg leading-none"
      >
        ×
      </button>
    </div>
  );
};

export default ToastItem;
