import { useEffect, useState } from "react";

import { FaReact, FaAngular, FaDatabase, FaMicrosoft } from "react-icons/fa";

/* =========================================================
   1. Catch The Bug Mini Game
========================================================= */
export function CatchTheBug() {
  const [position, setPosition] = useState({ top: 20, left: 20 });
  const [caught, setCaught] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!caught) {
        setPosition({
          top: Math.random() * 80,
          left: Math.random() * 80,
        });
      }
    }, 1500);

    return () => clearInterval(interval);
  }, [caught]);

  return (
    <div className="relative h-60 overflow-hidden text-gray-900 mt-8">
      {!caught ? (
        <button
          onClick={() => setCaught(true)}
          className="absolute text-3xl transition-all duration-500 hover:scale-125"
          style={{ top: `${position.top}%`, left: `${position.left}%` }}
        >
          🐞
        </button>
      ) : (
        <div className="flex items-center justify-center h-full text-green-400 font-bold text-lg">
          Bug caught!
        </div>
      )}
    </div>
  );
}

/* =========================================================
   2. Skill Progress Bars
========================================================= */
export function SkillBars() {
  const skills = [
    { name: "React", level: 90 },
    { name: "Angular", level: 85 },
    { name: ".NET", level: 92 },
    { name: "SQL Server", level: 80 },
  ];

  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="space-y-4 mt-8">
      {skills.map((skill) => (
        <div key={skill.name}>
          <div className="flex justify-between text-sm mb-1">
            <span>{skill.name}</span>
            <span>{skill.level}%</span>
          </div>

          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
            <div
              className="bg-blue-600 h-3 rounded-full transition-all duration-1000"
              style={{ width: animate ? `${skill.level}%` : "0%" }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

/* =========================================================
   3. Floating Tech Icons
========================================================= */
export function FloatingIcons() {
  const icons = [
    {
      Icon: FaReact,
      className: "top-0 left-1/2 -translate-x-1/2 text-cyan-400",
      delay: "0s",
    },
    {
      Icon: FaAngular,
      className: "top-1/2 right-0 -translate-y-1/2 text-red-500",
      delay: "0.5s",
    },
    {
      Icon: FaDatabase,
      className: "bottom-0 left-1/2 -translate-x-1/2 text-green-500",
      delay: "1s",
    },
    {
      Icon: FaMicrosoft,
      className: "top-1/2 left-0 -translate-y-1/2 text-blue-500",
      delay: "1.5s",
    },
  ];

  return (
    <div className="relative w-72 h-72 mx-auto mt-8">
      <div className="absolute inset-0 rounded-full border border-gray-300 dark:border-gray-700" />

      {icons.map(({ Icon, className, delay }, index) => (
        <div
          key={index}
          className={`absolute text-4xl animate-bounce ${className}`}
          style={{ animationDelay: delay }}
        >
          <Icon />
        </div>
      ))}

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-24 h-24 rounded-full bg-linear-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-xl shadow-xl">
          JY
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   4. Terminal Typing Intro
========================================================= */
export function TerminalTyping() {
  const lines = [
    "$ whoami",
    "Jayant Yadav",
    "$ role",
    "Full Stack Developer",
    "$ status",
    "Available for opportunities",
  ];

  const [visibleLines, setVisibleLines] = useState([]);

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      setVisibleLines((prev) => [...prev, lines[index]]);
      index++;

      if (index >= lines.length) {
        clearInterval(interval);
      }
    }, 700);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-black text-green-400 font-mono p-4 rounded-xl shadow-xl mt-8 w-full max-w-md">
      {visibleLines.map((line, index) => (
        <div key={index}>{line}</div>
      ))}

      {visibleLines.length < lines.length && (
        <span className="inline-block w-2 h-5 bg-green-400 ml-1 animate-pulse" />
      )}
    </div>
  );
}

export default function AddOns() {
  return (
    <div className="">
      {/* <TerminalTyping /> */}
      {/* <SkillBars /> */}
      {/* <FloatingIcons /> */}
      <CatchTheBug />
    </div>
  );
}
