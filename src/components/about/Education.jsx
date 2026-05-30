import React from "react";
import { GraduationCap, School, BookOpen, Calendar } from "lucide-react";

function Education() {
  const educationData = [
    {
      degree: "Bachelor of Technology (B.Tech)",
      college: "Delhi Technological University",
      year: "2019 - 2023",
      details: "Computer Science. Web Development & Software Engineering.",
      icon: GraduationCap,
    },
    {
      degree: "Higher Secondary (12th)",
      college: "CM SHREE, Paschim Vihar",
      year: "2016 - 2018",
      details: "",
      icon: BookOpen,
    },
    {
      degree: "High School",
      college: "CM SHREE, Paschim Vihar",
      year: "2014 - 2016",
      details: "",
      icon: School,
    },
  ];

  return (
    <div className="max-w-6xl mx-auto border border-gray-300 text-gray-900 font-mono">
      <div className="border-b border-gray-300 px-6 py-2">
        <p className="text-sm text-gray-500">_education</p>
      </div>

      <div className="divide-y divide-gray-200">
        {educationData.map((edu, index) => {
          const Icon = edu.icon;

          return (
            <div key={index} className="p-4 space-y-2">
              <div className="flex items-center gap-3 text-gray-800">
                <Icon className="w-5 h-5 text-gray-600" />
                <span className="text-sm font-semibold">{edu.degree}</span>
              </div>

              <div className="flex items-center gap-3 text-gray-600">
                <School className="w-4 h-4" />
                <span className="text-sm">{edu.college}</span>
              </div>

              <div className="flex items-center gap-3 text-gray-500">
                <Calendar className="w-4 h-4" />
                <span className="text-sm">{edu.year}</span>
              </div>

              {edu.details && (
                <p className="text-sm text-gray-600 pl-7">{edu.details}</p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Education;

// import React from "react";

// function Education() {
//   const educationData = [
//     {
//       degree: "Bachelor of Technology (B.Tech)",
//       college: "Delhi Technological University",
//       year: "2019 - 2023",
//       details:
//         "Specialized in Computer Science. Worked on web development projects.",
//     },
//     {
//       degree: "Higher Secondary (12th)",
//       college: "CM SHREE, Paschim Vihar",
//       year: "2016 - 2018",
//       details: "",
//     },
//     {
//       degree: "High School (12th)",
//       college: "CM SHREE, Paschim Vihar",
//       year: "2014 - 2016",
//       details: "",
//     },
//   ];

//   return (
//     <div className="p-6">
//       <h2 className="text-xl font-semibold mb-4">_education</h2>

//       <div className="space-y-4">
//         {educationData.map((edu, index) => (
//           <div key={index} className="border border-gray-600 p-4 rounded-lg">
//             <h3 className="font-semibold">{edu.degree}</h3>
//             <p className="text-sm text-gray-400">{edu.college}</p>
//             <p className="text-sm">{edu.year}</p>
//             {edu.details && <p className="text-sm mt-2">{edu.details}</p>}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Education;
