import React from "react";
import { useToastStore } from "../../store/useToastStore";
import ToastItem from "./ToastItem";

const ToastViewport: React.FC = () => {
  const { toasts } = useToastStore();

  return (
    <div
      className="
        fixed 
        top-5 
        left-1/2 
        transform 
        -translate-x-1/2 
        flex 
        flex-col 
        items-center 
        space-y-3 
        z-[9999]
      "
    >
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className="transform transition-all duration-300 translate-y-0 animate-[fadein_0.3s_ease-out]"
        >
          <ToastItem toast={toast} />
        </div>
      ))}
    </div>
  );
};

export default ToastViewport;
