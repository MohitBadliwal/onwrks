import React from "react";

const ChevronLeftIcon = ({size=30,color= "#1D1B20", className=""}) => {
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
        d="M15.8653 21.3126L26.4766 31.9238L28.9526 29.4479L20.8172 21.3126L28.9526 13.1772L26.4766 10.7013L15.8653 21.3126Z"
        fill={color}
      />
    </svg>
  );
};

export default ChevronLeftIcon;
