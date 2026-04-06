const ReUseIcon = ({ size= 24,color= "#F76B1C", className = "" }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M4.05859 13.7297L7.54887 10.2394M7.54887 10.2394L11.0392 13.7297M7.54887 10.2394V21.8737C7.54887 22.4908 7.79402 23.0826 8.23039 23.519C8.66676 23.9554 9.25861 24.2005 9.87573 24.2005H16.8563M27.3271 20.7103L23.8368 24.2005M23.8368 24.2005L20.3466 20.7103M23.8368 24.2005V12.5663C23.8368 11.9491 23.5917 11.3573 23.1553 10.9209C22.719 10.4846 22.1271 10.2394 21.51 10.2394H14.5294"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ReUseIcon;
