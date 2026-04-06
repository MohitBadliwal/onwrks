import React from "react";

const PlusIcon = ({ size = 26, color = "#F76B1C", className = "" }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 26 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M25.5382 14.7788H15.2577V25.2042H11.1551V14.7788H0.922852V11.0624H11.1551V0.588791H15.2577V11.0624H25.5382V14.7788Z"
        fill={color}
      />
    </svg>
  );
};

export default PlusIcon;
