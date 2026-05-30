import { useEffect, useState } from "react";

export default function FallingWords({ txt = "", resetTimer = 30000 }) {
  const words = txt.split(" ");

  const [fallenWords, setFallenWords] = useState(new Set());

  const handleMouseLeave = (index) => {
    setFallenWords((prev) => {
      const updated = new Set(prev);
      updated.add(index);
      return updated;
    });
  };

  useEffect(() => {
    if (fallenWords.size === words.length) {
      const timer = setTimeout(() => {
        setFallenWords(new Set());
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [fallenWords, words.length]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFallenWords(new Set());
    }, resetTimer);

    return () => clearTimeout(timer);
  }, [resetTimer, txt]);

  return (
    <p className="leading-relaxed">
      {words.map((word, index) => (
        <span
          key={index}
          onMouseLeave={() => handleMouseLeave(index)}
          className={`
            inline-block mx-1 cursor-pointer
            transition-all duration-1000 ease-in
            ${
              fallenWords.has(index) ? "translate-y-40 rotate-12 opacity-0" : ""
            }
          `}
        >
          {word}
        </span>
      ))}
    </p>
  );
}
