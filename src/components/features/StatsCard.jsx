import { useEffect, useRef, useState } from "react";

function StatsCard() {
  const experienceValue = (() => {
    const startDate = new Date("2023-07-20");
    const today = new Date();

    let years = today.getFullYear() - startDate.getFullYear();
    let months = today.getMonth() - startDate.getMonth();

    if (today.getDate() < startDate.getDate()) months--;

    if (months < 0) {
      years--;
      months += 12;
    }

    if (years > 0 && months > 0) return `${years}+ Yrs ${months} Mos`;
    if (years > 0) return `${years}+ Yrs`;
    return `${months}+ Mos`;
  })();

  const data = [
    { label: "Experience", value: experienceValue, percent: 85 },
    { label: "Projects", value: "8+", percent: 70 },
    { label: "Focus", value: "Full Stack", percent: 90 },
  ];

  const [index, setIndex] = useState(0);
  const intervalRef = useRef(null);

  const startRotation = () => {
    if (intervalRef.current) return;

    intervalRef.current = setInterval(() => {
      setIndex((prev) => (prev + 1) % data.length);
    }, 2500);
  };

  const stopRotation = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };

  useEffect(() => {
    startRotation();
    return () => stopRotation();
  }, []);

  const current = data[index];

  return (
    <div className="mt-8 max-w-xl">
      <div
        className="h-28 overflow-hidden relative border border-gray-200 bg-white/70 backdrop-blur-sm rounded-xl px-6 py-4"
        onMouseEnter={stopRotation}
        onMouseLeave={startRotation}
      >
        {/* CURRENT */}
        <div className="transition-all duration-500 ease-in-out">
          <div className="text-2xl font-bold text-gray-900">
            {current.value}
          </div>

          <div className="text-xs uppercase tracking-wide text-gray-500 mt-1">
            {current.label}
          </div>

          {/* METER */}
          <div className="mt-3 h-2 w-full bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-gray-900 rounded-full transition-all duration-700 ease-out"
              style={{ width: `${current.percent}%` }}
            />
          </div>

          <div className="text-right text-[10px] text-gray-500 mt-1">
            {current.percent}%
          </div>
        </div>
      </div>
    </div>
  );
}

export default StatsCard;
