// components/features/AnimatedGrid.jsx
export default function AnimatedGrid() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
      {/* Vertical lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#6b7280_1px,transparent_1px)] bg-size-[40px_40px] animate-grid-pan" />

      {/* Horizontal lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,#6b7280_1px,transparent_1px)] bg-size-[40px_40px] animate-grid-pan" />

      {/* Soft glow overlay */}
      <div className="absolute inset-0 bg-linear-to-br from-transparent via-white/10 to-transparent" />
    </div>
  );
}
