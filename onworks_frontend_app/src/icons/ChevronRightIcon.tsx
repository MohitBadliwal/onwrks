import React from "react";

const ChevronRightIcon = ({size = 30 , color= "#1D1B20", className=""}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 44 43"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M27.8231 21.3126L17.2119 31.9238L14.7359 29.4479L22.8712 21.3126L14.7359 13.1772L17.2119 10.7013L27.8231 21.3126Z"
        fill={color}
      />
    </svg>
  );
};

export default ChevronRightIcon;
