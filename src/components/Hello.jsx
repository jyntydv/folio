import { FaGithub, FaLinkedinIn, FaArrowRight, FaCode } from "react-icons/fa";
import { FallingWords } from "./index";
import BinaryRain from "./features/BinaryRain";
import StatsCard from "./features/StatsCard";
import WaveText from "./features/WaveText";

function Hello() {
  return (
    <section className="min-h-90 overflow-hidden grid lg:grid-cols-2 gap-8 items-center px-8 md:px-20 py-8 md:mt-9">
      <div>
        <div className="text-lg text-gray-600 ">
          <WaveText text="Hi all, I'm" />
        </div>

        <h1 className="text-5xl md:text-6xl font-black tracking-tight text-gray-900 leading-tight">
          <div className="flex flex-wrap items-center gap-0">
            J<FallingWords txt="ayant" resetTimer={800} /> Yadav
          </div>
        </h1>

        <div className="mt-4 text-2xl md:text-3xl font-semibold text-gray-700">
          &gt; Full Stack Developer
        </div>

        <p className="max-w-xl text-gray-600 leading-7 text-base md:text-lg mt-6">
          <div className="flex flex-wrap items-center gap-0">
            <FallingWords txt="I build" resetTimer={5000} />
            <span>&nbsp;fast, scalable&nbsp;</span>
            <FallingWords txt="and clean" resetTimer={3000} />
            <span>&nbsp;web applications.</span>
          </div>
        </p>

        <div className="flex flex-wrap gap-3 mt-6">
          {["React", "Angular", ".NET", "C#", "SQL", "Tailwind"].map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 border border-gray-300 rounded-full text-sm text-gray-700 hover:bg-gray-100 transition"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* <StatsCard /> */}

        <div className="mt-8 max-w-xl rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 font-mono text-sm">
          <span className="text-green-500">$</span>{" "}
          <span className="text-gray-700">
            <FallingWords txt="Building products that are simple on the surface and powerful underneath." />
          </span>
        </div>
      </div>

      <div className="relative">
        <BinaryRain />
        {/* Terminal Card */}
        <div className="bg-[#f7f5f3] border border-gray-300 rounded-2xl shadow-2xl p-6 font-mono text-sm leading-7">
          {/* Terminal Header */}
          <div className="flex items-center gap-2 mb-6">
            <span className="w-3 h-3 rounded-full bg-red-400"></span>
            <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
            <span className="w-3 h-3 rounded-full bg-green-400"></span>
          </div>

          <div>
            <span className="text-green-500">$</span> whoami
          </div>
          <div className="text-gray-700 mb-4">
            <FallingWords txt="Jayant Yadav" />
          </div>

          <div>
            <span className="text-green-500">$</span> stack
          </div>
          <div className="text-gray-700 mb-4">
            <FallingWords txt="React · Angular · .NET · SQL Server" />
          </div>

          <div>
            <span className="text-green-500">$</span> status
          </div>
          <div className="text-green-600 mb-4 hover:text-green-700">
            ● Available for opportunities
          </div>

          <div>
            <span className="text-green-500">$</span> npm run build
          </div>
          <div className="text-blue-500">&gt; Build completed successfully</div>
        </div>

        <div className="absolute -bottom-5 -left-5 bg-white border border-gray-200 shadow-lg rounded-xl px-4 py-3 flex items-center gap-3">
          <div className="w-6 h-6 rounded-lg bg-gray-900 text-white flex items-center justify-center">
            <FaCode />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hello;

// import { useState } from "react";
// import { FallingWords } from "./index";

// function Hello() {
//   return (
//     <div className="md:grid md:grid-cols-4 justify-items-center gap-4 items-center min-h-90">
//       <div className="col-span-2 pr-10 pl-50">
//         <div className="mt-4 text-xl text-gray-900 leading-relaxed max-w-xl">
//           <FallingWords txt="Hi all, I'm" />
//         </div>
//         <div className="text-5xl font-black">Jayant Yadav</div>
//         <div className="text-3xl font-semibold mt-6">
//           &gt; Full Stack Developer
//         </div>
//       </div>

//       <div className="col-span-2 border w-80 sm:w-104 md:w-96 p-4 shadow-2xl rounded mt-20 hover:brightness-75 hover:scale-100 hover:-translate-y-0.5 hover:shadow-lg">
//         <div className="truncate overflow-hidden whitespace-nowrap md:truncate-none md:overflow-visible md:whitespace-normal w-60 md:w-auto ">
//           <span className="text-green-400">$</span> git clone
//           git@github.com:jyntydv.github.io.git .
//         </div>
//         <div>
//           <span className="text-blue-400">&gt;</span> cloning into '.'...
//         </div>
//         <div>
//           <span className="text-blue-400">&gt;</span> Resolving deltas 100%
//           (41/41), done
//         </div>
//         <div className="mt-2">
//           <span className="text-green-400">$</span> npm i && npm run dev
//         </div>
//         <div>
//           <span className="text-blue-400">&gt;</span> Starting...
//         </div>
//         <div>
//           <span className="text-blue-400">&gt;</span> Ready
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Hello;
