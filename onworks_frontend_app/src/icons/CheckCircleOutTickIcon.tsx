import React from "react";

const CheckCircleOutTickIcon = ({
  size = 30,
  color = "#5CB96F",
  className = "",
}) => {
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
        d="M24.7987 13.0034C25.2554 15.2447 24.9299 17.5748 23.8765 19.6052C22.8231 21.6356 21.1056 23.2435 19.0102 24.1607C16.9148 25.078 14.5683 25.2492 12.362 24.6458C10.1556 24.0424 8.22285 22.7008 6.88593 20.8448C5.54902 18.9889 4.88878 16.7306 5.01532 14.4468C5.14186 12.1629 6.04754 9.9915 7.58131 8.29458C9.11508 6.59766 11.1842 5.47784 13.4437 5.12186C15.7032 4.76588 18.0164 5.19527 19.9977 6.33841M11.9977 14.0034L14.9977 17.0034L24.9977 7.00341"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default CheckCircleOutTickIcon;
