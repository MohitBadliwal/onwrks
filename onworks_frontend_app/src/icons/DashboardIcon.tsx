import React from "react";

const DashboardIcon = ({size=24,color= "black", className=""}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M9.33333 4H4.88889C4.39797 4 4 4.39797 4 4.88889V11.1111C4 11.602 4.39797 12 4.88889 12H9.33333C9.82425 12 10.2222 11.602 10.2222 11.1111V4.88889C10.2222 4.39797 9.82425 4 9.33333 4Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19.1111 4H14.6667C14.1757 4 13.7778 4.39797 13.7778 4.88889V7.55556C13.7778 8.04648 14.1757 8.44444 14.6667 8.44444H19.1111C19.602 8.44444 20 8.04648 20 7.55556V4.88889C20 4.39797 19.602 4 19.1111 4Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19.1111 12H14.6667C14.1757 12 13.7778 12.398 13.7778 12.8889V19.1111C13.7778 19.602 14.1757 20 14.6667 20H19.1111C19.602 20 20 19.602 20 19.1111V12.8889C20 12.398 19.602 12 19.1111 12Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.33333 15.5556H4.88889C4.39797 15.5556 4 15.9535 4 16.4444V19.1111C4 19.602 4.39797 20 4.88889 20H9.33333C9.82425 20 10.2222 19.602 10.2222 19.1111V16.4444C10.2222 15.9535 9.82425 15.5556 9.33333 15.5556Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default DashboardIcon;
