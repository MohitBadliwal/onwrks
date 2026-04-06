import React from "react";

const CircleCloseIcon = ({size = 18,color = "none" , className = ""}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 25"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M15 9.89648L9 15.8965M9 9.89648L15 15.8965M22 12.8965C22 18.4193 17.5228 22.8965 12 22.8965C6.47715 22.8965 2 18.4193 2 12.8965C2 7.37364 6.47715 2.89648 12 2.89648C17.5228 2.89648 22 7.37364 22 12.8965Z"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default CircleCloseIcon;
