// components/features/ShootingStars.jsx
import { useMemo } from "react";

export default function ShootingStars() {
  // Generate stars only once when component mounts
  const stars = useMemo(
    () =>
      Array.from({ length: 20 }, (_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        delay: `${-Math.random() * 6}s`, // negative delay starts animation mid-cycle
        duration: `${2 + Math.random() * 3}s`,
      })),
    [],
  );

  return (
    <div className="absolute inset-0 h-full w-full overflow-hidden pointer-events-none z-0">
      {stars.map((star) => (
        <span
          key={star.id}
          className="absolute w-0.5 h-24 bg-linear-to-b from-transparent via-slate-300 to-slate-600 animate-shooting-star opacity-80"
          style={{
            left: star.left,
            top: star.top,
            animationDelay: star.delay,
            animationDuration: star.duration,
          }}
        />
      ))}
    </div>
  );
}
