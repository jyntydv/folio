import { useState, useEffect } from "react";
import { DropDown } from "../index.js";
import { DropDownIcon } from "../../assets/icons.jsx";
import terminal from "../../assets/terminal.png";
import linkedin from "../../assets/linkedin.png";
import github from "../../assets/github.png";
import folder from "../../assets/open-file.png";
import { NavLink, Outlet } from "react-router-dom";
import SideBarCode from "./SideBarCode.jsx";
import Adobe from "../../assets/Adobe.jsx";
import ShootingStars from "../features/ShootingStars.jsx";
import { MessageCircle, Mail } from "lucide-react";

export default function About() {
  const infoData = ["summary", "experience", "education", "interests"];
  const [expInfo, setExpInfo] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setExpInfo(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-full lg:h-full overflow-y-auto lg:overflow-hidden">
      <div className="relative z-10 min-h-full lg:h-full w-full flex flex-col md:flex-row">
        <div className="w-full md:w-75 md:shrink-0 flex border-b md:border-b-0 md:border-r border-gray-700">
          <div className="w-16 shrink-0 border-r border-gray-700 flex justify-center">
            <ul className="flex flex-col items-center py-2 md:py-3 gap-4">
              <li className="flex items-center justify-center">
                <a>
                  <img
                    className="h-7 w-8 transition-transform duration-300 hover:scale-110 hover:-translate-y-0.5"
                    src={terminal}
                    alt="github"
                  />
                </a>
              </li>

              <li className="flex items-center justify-center">
                <a
                  href="https://www.linkedin.com/in/jayantyadav/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="h-6 w-7 transition-transform duration-300 hover:scale-110 hover:-translate-y-0.5"
                    src={linkedin}
                    alt="linkedin"
                  />
                </a>
              </li>

              <li className="flex items-center justify-center">
                <a
                  href="https://github.com/jyntydv"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="h-6 w-7 transition-transform duration-300 hover:scale-110 hover:-translate-y-0.5"
                    src={github}
                    alt="github"
                  />
                </a>
              </li>
            </ul>
          </div>

          <div className="flex-1 min-w-0 border-r-0 border-gray-700 select-none">
            <ul className="mr-3 ml-2 mt-3 text-sm pb-3">
              <li
                className="cursor-pointer hover:font-semibold flex justify-between"
                onClick={() => setExpInfo((prev) => !prev)}
              >
                <div className="flex items-center space-x-2">
                  <img
                    className="w-5 h-5 transition-transform duration-300 hover:scale-110"
                    src={folder}
                    alt="info icon"
                  />
                  <span>info</span>
                </div>
                <DropDownIcon open={expInfo} />
              </li>

              <li className="ml-5 mt-1">
                {expInfo && <DropDown data={infoData} />}
              </li>

              <li className="mt-3">
                <NavLink
                  to="/resume"
                  className={({ isActive }) =>
                    isActive
                      ? "font-bold"
                      : "cursor-pointer hover:font-semibold"
                  }
                >
                  <div className="flex items-center gap-2">
                    <Adobe className="w-5 h-5" />
                    <span>resume.pdf</span>
                  </div>
                </NavLink>
              </li>

              <li className="mt-3">
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    isActive
                      ? "font-bold flex items-center gap-2"
                      : "cursor-pointer hover:font-semibold flex items-center gap-2"
                  }
                >
                  <MessageCircle className="w-5 h-5" />
                  contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex-1 flex flex-col lg:flex-row min-h-0">
          <div className="w-full lg:w-[60%] border-r-0 lg:border-r border-gray-700 overflow-auto">
            <Outlet />
          </div>

          <div className="w-full lg:w-[40%] border-t lg:border-t-0 border-gray-700 overflow-auto">
            <div className="relative w-full max-w-md lg:max-w-none h-full mx-auto overflow-hidden">
              <ShootingStars />

              <div className="relative z-10 h-full flex items-center justify-center transition duration-300 hover:brightness-95">
                <SideBarCode />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// import { useState, useEffect } from "react";
// import { DropDown } from "../index.js";
// import { DropDownIcon } from "../../assets/icons.jsx";
// import terminal from "../../assets/terminal.png";
// import linkedin from "../../assets/linkedin.png";
// import github from "../../assets/github.png";
// import folder from "../../assets/open-file.png";
// import { NavLink, Outlet } from "react-router-dom";
// import SideBarCode from "./SideBarCode.jsx";
// import Adobe from "../../assets/Adobe.jsx";

// export default function About() {
//   const infoData = ["summary", "experience", "education", "interests"];

//   const [expInfo, setExpInfo] = useState(false);
//   useEffect(() => {
//     const timer = setTimeout(() => setExpInfo(true), 1000);
//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <div className="flex h-full">
//       <div className="w-75 flex">
//         <div className="w-[16%] border-r border-gray-700 flex justify-center">
//           <ul>
//             <li className="flex items-center justify-center">
//               <img
//                 className="h-7 w-8 mt-2 transition-transform duration-300 transform hover:scale-110 hover:-translate-y-0.5 hover:shadow-lg"
//                 src={terminal}
//                 alt="terminal"
//               />
//             </li>
//             <li className="flex items-center justify-center">
//               <img
//                 className="h-6 w-7 mt-4 transition-transform duration-300 transform hover:scale-110 hover:-translate-y-0.5 hover:shadow-lg"
//                 src={linkedin}
//                 alt="linkedin"
//               />
//             </li>
//             <li className="flex items-center justify-center">
//               <img
//                 className="h-6 w-7 mt-4 transition-transform duration-300 transform hover:scale-110 hover:-translate-y-0.5 hover:shadow-lg"
//                 src={github}
//                 alt="github"
//               />
//             </li>
//           </ul>
//         </div>
//         <div className="w-[84%] border-r border-gray-700 select-none">
//           <ul className="mr-3 ml-2 mt-3">
//             <li
//               className="cursor-pointer hover:font-semibold flex justify-between"
//               onClick={() => setExpInfo((prev) => !prev)}
//             >
//               <div className="flex items-center space-x-2">
//                 <img
//                   className="w-5 h-5 transition-transform duration-300 transform hover:scale-110 hover:-translate-y-0.5 hover:shadow-lg"
//                   src={folder}
//                   alt="info icon"
//                 />
//                 <span>info</span>
//               </div>
//               <DropDownIcon open={expInfo} />
//             </li>
//             <li className="ml-5">{expInfo && <DropDown data={infoData} />}</li>
//             <NavLink
//               className={({ isActive }) =>
//                 `${isActive ? "font-bold" : "cursor-pointer hover:font-semibold"}`
//               }
//               to="/resume"
//             >
//               <div className="flex items-center gap-2">
//                 <Adobe className="w-5 h-5" />
//                 <span>resume.pdf</span>
//               </div>
//             </NavLink>
//             <NavLink
//               className={({ isActive }) =>
//                 `${isActive ? "font-bold" : "cursor-pointer hover:font-semibold"}`
//               }
//               to="/contact"
//             >
//               contact
//             </NavLink>
//           </ul>
//         </div>
//       </div>

//       <div className="flex-1 flex">
//         <div className="w-[60%] border-r border-gray-700">
//           <Outlet />
//         </div>
//         <div className="w-[40%] flex mt-20 justify-center hover:brightness-50 hover:scale-100">
//           {/* <div className="shadow-2xl bg-gray-400 w-[80%]">jayant-yadav</div> */}
//           <SideBarCode />
//         </div>
//       </div>
//     </div>
//   );
// }
