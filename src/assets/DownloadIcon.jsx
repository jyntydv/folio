export default function DownloadIcon({ className = "h-10 w-10" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={`${className} fill-current`}
    >
      <g
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path
          d="M12 4h2v6h2.5l-4.5 4.5M12 4h-2v6h-2.5l4.5 4.5"
          strokeDasharray="20"
          strokeDashoffset="20"
        >
          <animate
            attributeName="d"
            begin="0.5s"
            dur="1.5s"
            repeatCount="indefinite"
            values="M12 4h2v6h2.5l-4.5 4.5M12 4h-2v6h-2.5l4.5 4.5;
                    M12 4h2v3h2.5l-4.5 4.5M12 4h-2v3h-2.5l4.5 4.5;
                    M12 4h2v6h2.5l-4.5 4.5M12 4h-2v6h-2.5l4.5 4.5"
          />
          <animate
            attributeName="stroke-dashoffset"
            dur="0.4s"
            values="20;0"
            fill="freeze"
          />
        </path>

        <path d="M6 19h12" strokeDasharray="14" strokeDashoffset="14">
          <animate
            attributeName="stroke-dashoffset"
            begin="0.5s"
            dur="0.2s"
            values="14;0"
            fill="freeze"
          />
        </path>
      </g>
    </svg>
  );
}
