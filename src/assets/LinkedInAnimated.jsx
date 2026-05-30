export default function LinkedInAnimated({ className = "h-10 w-10" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={`${className} fill-current`}
    >
      <circle cx="4" cy="4" r="2" fill="currentColor" fillOpacity="0">
        <animate
          attributeName="fill-opacity"
          dur="2s"
          values="0;10;0"
          repeatCount="indefinite"
          fill="freeze"
        />
      </circle>

      <g
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M4 10v10" strokeDasharray="12" strokeDashoffset="12">
          <animate
            attributeName="stroke-dashoffset"
            begin="0.15s"
            dur="0.2s"
            values="12;0"
            fill="freeze"
          />
        </path>

        <path d="M10 10v10" strokeDasharray="12" strokeDashoffset="12">
          <animate
            attributeName="stroke-dashoffset"
            begin="0.45s"
            dur="0.2s"
            values="12;0"
            fill="freeze"
          />
        </path>

        <path
          d="M10 15c0 -2.76 2.24 -5 5 -5c2.76 0 5 2.24 5 5v5"
          strokeDasharray="24"
          strokeDashoffset="24"
        >
          <animate
            attributeName="stroke-dashoffset"
            begin="0.65s"
            dur="0.2s"
            values="24;0"
            fill="freeze"
          />
        </path>
      </g>
    </svg>
  );
}
