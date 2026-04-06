const FourthIcon = ({ size = 20, color = "#060808", className = "" }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M17.2767 2.2015L2.11007 17.3682M6.4434 3.8265C6.4434 5.32227 5.23084 6.53483 3.73507 6.53483C2.2393 6.53483 1.02673 5.32227 1.02673 3.8265C1.02673 2.33073 2.2393 1.11816 3.73507 1.11816C5.23084 1.11816 6.4434 2.33073 6.4434 3.8265ZM18.3601 15.7432C18.3601 17.2389 17.1475 18.4515 15.6517 18.4515C14.156 18.4515 12.9434 17.2389 12.9434 15.7432C12.9434 14.2474 14.156 13.0348 15.6517 13.0348C17.1475 13.0348 18.3601 14.2474 18.3601 15.7432Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none" // if you want transparent inside, otherwise use {color}
      />
    </svg>
  );
};

export default FourthIcon;

