// components/features/BinaryRain.jsx
import { useMemo } from "react";

export default function BinaryRain() {
  const columns = useMemo(
    () =>
      Array.from({ length: 30 }, (_, i) => ({
        id: i,
        left: `${(i / 30) * 100}%`,
        delay: `${-Math.random() * 20}s`, // larger negative delay
        duration: `${15 + Math.random() * 10}s`, // slower: 15s to 25s
        drift: `${-8 + Math.random() * 16}px`, // slight horizontal drift (-8px to +8px)
        text: Array.from({ length: 30 }, () =>
          Math.random() > 0.5 ? "1" : "0",
        ).join(" "),
      })),
    [],
  );

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 opacity-10">
      {columns.map((column) => (
        <div
          key={column.id}
          className="absolute top-0 font-mono text-xs text-green-700 whitespace-nowrap animate-binary-rain"
          style={{
            left: column.left,
            animationDelay: column.delay,
            animationDuration: column.duration,
            writingMode: "vertical-rl",
            textOrientation: "upright",
            "--drift": column.drift,
          }}
        >
          {column.text}
        </div>
      ))}
    </div>
  );
}
