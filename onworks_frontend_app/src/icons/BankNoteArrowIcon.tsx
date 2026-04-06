import React from "react";

const BankNoteArrowIcon = ({size =25,className=""}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M15 22.5H5C4.33696 22.5 3.70107 22.2366 3.23223 21.7678C2.76339 21.2989 2.5 20.663 2.5 20V10C2.5 9.33696 2.76339 8.70107 3.23223 8.23223C3.70107 7.76339 4.33696 7.5 5 7.5H25C25.663 7.5 26.2989 7.76339 26.7678 8.23223C27.2366 8.70107 27.5 9.33696 27.5 10V16.25M22.5 15H22.5125M23.75 27.5V20M23.75 20L27.5 23.75M23.75 20L20 23.75M7.5 15H7.5125M17.5 15C17.5 16.3807 16.3807 17.5 15 17.5C13.6193 17.5 12.5 16.3807 12.5 15C12.5 13.6193 13.6193 12.5 15 12.5C16.3807 12.5 17.5 13.6193 17.5 15Z"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default BankNoteArrowIcon;
