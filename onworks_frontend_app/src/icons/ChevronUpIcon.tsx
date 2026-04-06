import React from "react";

const ChevronUpIcon = ({size = 24 , color = "#292A2A", className=""}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M12 8.81094L6 14.8109L7.4 16.2109L12 11.6109L16.6 16.2109L18 14.8109L12 8.81094Z"
        fill={color}
      />
    </svg>
  );
};

export default ChevronUpIcon;
