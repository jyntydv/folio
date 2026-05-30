import { MapPin, Calendar, ArrowUpRight } from "lucide-react";

import placewit from "../../assets/placewit.svg";
import freelance from "../../assets/freelance.svg";
import hcltech from "../../assets/hcltech.svg";

function Experience() {
  const experiences = [
    {
      title: "HCLTech",
      subtitle: "Technical Lead • Noida, IN • Jul 2023 – Present",
      href: "https://www.hcltech.com/",
      logo: hcltech,
      active: true,
    },
    {
      title: "Placewit",
      subtitle: "Coding Instructor • Delhi, IN • Jan 2023 – Jul 2023",
      href: "https://placewit.com/", // use root domain with trailing slash
      logo: placewit,
      active: false,
    },
    {
      title: "Freelance",
      subtitle: "Independent Developer • Remote • Ongoing",
      href: "https://github.com/jyntydv",
      logo: freelance,
      active: true,
    },
  ];

  return (
    <div className="max-w-6xl mx-auto border border-gray-300 text-gray-900">
      <div className="border-b border-gray-300 px-6 py-2">
        <p className="font-mono text-sm text-gray-500">_experience</p>
      </div>

      <div className="border-b border-gray-300 px-4 py-3">
        <p className="font-mono text-sm text-gray-500 mb-1">career</p>
        <p className="leading-6 text-gray-700 text-sm">
          My professional journey includes technical leadership, teaching, and
          freelance development across web technologies and scalable systems.
        </p>
      </div>

      <div className="grid lg:grid-cols-1">
        {experiences.map((item, index) => (
          <ExperienceCard key={index} {...item} />
        ))}
      </div>
    </div>
  );
}

function ExperienceCard({ title, subtitle, href, logo, active }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group border-b border-r border-gray-300 p-4 hover:bg-gray-50 transition-colors"
    >
      {" "}
      <div className="flex items-center justify-between gap-4">
        {" "}
        <div className="flex items-center gap-4 min-w-0">
          {" "}
          <img
            src={logo}
            alt={title}
            className="w-10 h-10 object-contain shrink-0"
          />{" "}
          <div className="min-w-0">
            {" "}
            <div className="flex items-center gap-2">
              {" "}
              <h3 className="font-mono text-xl text-gray-800 leading-none">
                {" "}
                {title}{" "}
              </h3>{" "}
              {active && (
                <span className="relative flex h-2.5 w-2.5">
                  {" "}
                  <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping" />{" "}
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />{" "}
                </span>
              )}{" "}
            </div>{" "}
            <p className="font-mono text-sm text-gray-500 mt-1 break-all">
              {" "}
              {subtitle}{" "}
            </p>{" "}
          </div>{" "}
        </div>{" "}
        <ArrowUpRight className="w-5 h-5 text-gray-500 group-hover:text-black transition-colors shrink-0" />{" "}
      </div>{" "}
    </a>
  );
}
export default Experience;

// import placewit from "../../assets/placewit.svg";
// import freelance from "../../assets/freelance.svg";
// import hcltech from "../../assets/hcltech.svg";

// function Dot() {
//   return (
//     <div className="inline">
//       <div className="relative flex justify-center items-center w-12 h-12">
//         {/* Wave layer 1 */}
//         <span className="absolute inline-flex w-5 h-5 rounded-full bg-green-300 opacity-50 animate-ping" />

//         {/* Wave layer 2 (delayed) */}
//         <span
//           className="absolute inline-flex w-5 h-5 rounded-full bg-green-300 opacity-50 animate-ping"
//           style={{ animationDelay: "1000ms" }}
//         />

//         {/* Center green dot */}
//         <span className="relative inline-flex w-2 h-2 rounded-full bg-green-300" />
//       </div>
//     </div>
//   );
// }

// function Experience() {
//   return (
//     <div className="flex items-center">
//       <div className="w-80 sm:w-104 md:w-96 p-4 mt-0 space-y-3">
//         <h2 className="text-lg font-semibold">_experience</h2>

//         <div className="p-4 pt-0">
//           <div className="flex items-center space-x-2 font-bold text-lg">
//             {/* <img className="h-8" src={hcltech} alt="Placewit Logo" /> */}
//             <span className="font-bold text-lg text-[#0000ff]">HCLTech</span>
//             <Dot />
//           </div>
//           <div className="ml-2  -mt-2">Technical Lead</div>
//           <div className="ml-2 text-gray-700">
//             Noida, IN | 07.2023 - Present
//           </div>
//         </div>

//         <div className="p-4">
//           <div className="flex items-center space-x-2">
//             <img className="h-6 w-6" src={placewit} alt="Placewit Logo" />
//             <div className="font-bold text-lg">Placewit</div>
//           </div>
//           <div className="ml-2">Coding Instructor</div>
//           <div className="ml-2 text-gray-700">
//             Delhi, IN | 01.2023 - 07.2023
//           </div>
//         </div>

//         <div className="p-4">
//           <div className="flex items-center space-x-2">
//             <img className="h-6 w-6" src={freelance} alt="Freelance Logo" />
//             <div className="flex items-center space-x-2 font-bold text-lg">
//               <span>Freelance</span>
//               <Dot />
//             </div>
//           </div>
//           <div className="ml-2 -mt-2">Independent Developer</div>
//           <div className="ml-2 text-gray-700">Remote | Ongoing</div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Experience;
