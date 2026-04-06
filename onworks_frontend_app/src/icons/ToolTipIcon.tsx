import React from "react";

interface ToolTipIconProps {
  color?: string; 
  label?: string;
  width?: number;
  height?: number;
  className?: string;
}

const ToolTipIcon: React.FC<ToolTipIconProps> = ({
  color = "#F8F8F8",
  label,
  width = 55,
  height = 48,
  className = "",
}) => {
  return (
    <div
      style={{ position: "relative", width, height}}
      className={className}
    >
      
<svg width="55" height="48" viewBox="0 0 55 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d_707_13693)">
<path d="M26.9075 37.9204C26.7237 37.9204 26.5562 37.8434 26.4359 37.7037L23.9835 34.8525L23.7977 34.6363H23.5126H11.969C9.57156 34.6363 7.62109 32.6859 7.62109 30.2884V9.96803C7.62109 7.57058 9.57156 5.62012 11.969 5.62012H43.0294C45.4274 5.62012 47.3784 7.57058 47.3784 9.96803V30.2884C47.3784 32.6859 45.4274 34.6363 43.0294 34.6363H30.3026H30.0176L29.8317 34.8524L27.3783 37.7037C27.2582 37.8436 27.0911 37.9204 26.9075 37.9204Z" fill={color}/>
<path d="M26.9076 37.2993L29.7327 34.0152H43.0295C45.085 34.0152 46.7573 32.3434 46.7573 30.2885V9.96814C46.7573 7.91322 45.085 6.24143 43.0295 6.24143H11.9691C9.9142 6.24143 8.2424 7.91322 8.2424 9.96814V30.2885C8.2424 32.3434 9.9142 34.0152 11.9691 34.0152H24.0828L26.9059 37.2991C26.9061 37.2992 26.9067 37.2993 26.9076 37.2993ZM26.9076 38.5417C26.5606 38.5417 26.2134 38.3974 25.9652 38.109L23.5127 35.2576H11.9691C9.22515 35.2576 7 33.0325 7 30.2885V9.96814C7 7.22305 9.22515 4.99902 11.9691 4.99902H43.0295C45.7746 4.99902 47.9997 7.22305 47.9997 9.96814V30.2885C47.9997 33.0325 45.7746 35.2576 43.0295 35.2576H30.3027L27.8493 38.109C27.6016 38.3974 27.2547 38.5417 26.9076 38.5417Z" fill="#F8F8F8"/>
</g>
<defs>
<filter id="filter0_d_707_13693" x="0" y="-0.000976562" width="55" height="47.5425" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="2"/>
<feGaussianBlur stdDeviation="3.5"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.161 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_707_13693"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_707_13693" result="shape"/>
</filter>
</defs>
</svg>


      {label && (
        <span
          style={{
            position: "absolute",
            top: "40%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            fontSize: "12px",
            fontWeight: "bold",
            color: "white",
            whiteSpace: "nowrap",
          }}
        >
          {label}
        </span>
      )}
    </div>
  );
};

export default ToolTipIcon;
