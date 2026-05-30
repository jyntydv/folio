// components/features/FloatingTechKeywords.jsx
import { useMemo } from "react";

export default function FloatingKeys() {
  const words = [
    "React",
    "Angular",
    ".NET",
    "C#",
    "SQL",
    "Tailwind",
    "REST API",
    "Azure",
    "TypeScript",
    "Git",
  ];

  const items = useMemo(
    () =>
      words.map((word, index) => ({
        id: index,
        text: word,
        left: `${10 + Math.random() * 75}%`,
        top: `${Math.random() * 85}%`,
        delay: `${-Math.random() * 15}s`,
        duration: `${12 + Math.random() * 10}s`,
        size: `${0.75 + Math.random() * 0.5}rem`,
        rotate: `${-12 + Math.random() * 24}deg`,
      })),
    [],
  );

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {items.map((item) => (
        <span
          key={item.id}
          className="absolute font-mono font-medium text-gray-500/10 animate-float-keyword select-none whitespace-nowrap"
          style={{
            left: item.left,
            top: item.top,
            animationDelay: item.delay,
            animationDuration: item.duration,
            fontSize: item.size,
            transform: `rotate(${item.rotate})`,
          }}
        >
          {item.text}
        </span>
      ))}
    </div>
  );
}
