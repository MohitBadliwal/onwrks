import React from "react";

const AllReadCheckMarkIcon = ({ size = 16, color = "black" , className = ""}) => {
  return (
    
<svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
<path d="M12.0002 4L4.66683 11.3333L1.3335 8M14.6668 6.66667L9.66683 11.6667L8.66683 10.6667" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
  );
};

export default AllReadCheckMarkIcon;
