function WaveText({ text }) {
  return (
    <span className="wave-text">
      {text.split("").map((char, i) => (
        <span key={i} style={{ animationDelay: `${i * 0.05}s` }}>
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </span>
  );
}

export default WaveText;
