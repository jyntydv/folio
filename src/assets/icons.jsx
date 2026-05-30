import React from "react";

const DropDownIcon = ({ open }) => {
  return (
    <svg
      className={`inline w-3 h-3 ml-2 transition-transform duration-200 ${
        open ? "rotate-180" : "rotate-0"
      }`}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M19 9l-7 7-7-7"
      />
    </svg>
  );
};

const CodingWindowIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="128"
    height="96"
    viewBox="0 0 128 96"
    fill="none"
  >
    {/* Browser top bar */}
    <rect width="128" height="24" rx="6" fill="#5B7DC9" />

    {/* Window buttons */}
    <circle cx="14" cy="12" r="6" fill="#E55952" />
    <circle cx="36" cy="12" r="6" fill="#F5D76E" />
    <circle cx="58" cy="12" r="6" fill="#80E89B" />

    {/* Code window */}
    <rect y="24" width="128" height="72" rx="6" fill="#666666" />

    {/* Code symbols "<" */}
    <path
      d="M35 54 L28 64 L35 74"
      stroke="#D2E0F0"
      strokeWidth={5}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />

    {/* Code symbol "/" */}
    <path
      d="M52 54 L52 74"
      stroke="#D2E0F0"
      strokeWidth={5}
      strokeLinecap="round"
    />

    {/* Code symbol ">" */}
    <path
      d="M70 54 L77 64 L70 74"
      stroke="#D2E0F0"
      strokeWidth={5}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />

    {/* Colored code lines bottom */}
    {/* Pink lines */}
    <rect x="10" y="84" width="12" height="6" rx="3" fill="#F58DB2" />
    <rect x="44" y="84" width="18" height="6" rx="3" fill="#F58DB2" />

    {/* Blue lines */}
    <rect x="26" y="84" width="14" height="6" rx="3" fill="#B4D5F5" />
    <rect x="72" y="84" width="18" height="6" rx="3" fill="#B4D5F5" />

    {/* Yellow lines */}
    <rect x="64" y="84" width="32" height="6" rx="3" fill="#F5D76E" />

    {/* Pink small line */}
    <rect x="102" y="84" width="12" height="6" rx="3" fill="#F58DB2" />
  </svg>
);

export { DropDownIcon, CodingWindowIcon };
