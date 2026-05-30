import React from "react";
import { NavLink } from "react-router-dom";
import DownloadIcon from "../assets/DownloadIcon";
import LinkedInAnimated from "../assets/LinkedInAnimated";
import GithubIcon from "../assets/GithubIcon";

function Footer() {
  return (
    <footer className="w-full h-18 border border-gray-700 font-mono">
      <div className="flex items-stretch justify-between h-full">
        <ul className="flex items-stretch">
          <li className="sm:w-45 flex items-center justify-end px-6 border-r border-gray-500 md:w-75 md:px-6 md:py-4 md:flex md:items-center md:border-r md:border-gray-700">
            _quick-links
          </li>

          <NavLink
            to="/"
            className="relative group sm:px-5 md:px-6 flex items-center border-r border-gray-500"
          >
            <div
              className="absolute -top-9 left-1/2 -translate-x-1/2
               opacity-0 group-hover:opacity-100
               transition-all duration-200
               bg-gray-900 text-white text-xs px-2 py-1 rounded-md
               whitespace-nowrap pointer-events-none"
            >
              _dwnldCV
              <div
                className="absolute left-1/2 -bottom-1 -translate-x-1/2
                 w-2 h-2 bg-gray-900 rotate-45"
              />
            </div>

            <DownloadIcon />
          </NavLink>

          <NavLink
            to="https://www.linkedin.com/in/jayantyadav/"
            target="_blank"
            rel="noopener noreferrer"
            className="relative group sm:px-4 md:px-6 flex items-center border-r border-gray-500"
          >
            <div
              className="absolute -top-9 left-1/2 -translate-x-1/2
               opacity-0 group-hover:opacity-100
               transition-all duration-200
               bg-gray-900 text-white text-xs px-2 py-1 rounded-md
               whitespace-nowrap pointer-events-none"
            >
              _lkdn
              <div
                className="absolute left-1/2 -bottom-1 -translate-x-1/2
                 w-2 h-2 bg-gray-900 rotate-45"
              />
            </div>

            <LinkedInAnimated />
          </NavLink>
        </ul>

        <ul className="relative group flex items-center sm:px-4 md:px-6 gap-2 md:border-l border-gray-500">
          <a
            href="https://github.com/jyntydv"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 w-full"
          >
            <div
              className="absolute -top-9 left-1/2 -translate-x-1/2
                 opacity-0 group-hover:opacity-100
                 transition-all duration-200
                 bg-gray-900 text-white text-xs px-2 py-1 rounded-md
                 whitespace-nowrap pointer-events-none"
            >
              _gthb
              <div
                className="absolute left-1/2 -bottom-1 -translate-x-1/2
                   w-2 h-2 bg-gray-900 rotate-45"
              />
            </div>

            <span className="hidden md:block whitespace-nowrap">@jayant</span>

            <GithubIcon className="w-8 h-8 sm:w-10 sm:h-10" />
          </a>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
// import React from "react";
// import { NavLink } from "react-router-dom";
// import DownloadIcon from "../assets/DownloadIcon";
// import LinkedInAnimated from "../assets/LinkedInAnimated";
// import GithubIcon from "../assets/GithubIcon";

// function Footer() {
//   return (
//     <footer className="w-full flex justify-between border border-gray-700 font-mono">
//       <ul className="flex items-center">
//         <li className="h-full flex items-center justify-end px-6 py-4 w-75 border-r border-gray-500 text-right hover:cursor-pointer">
//           _quick-links
//         </li>

//         <NavLink
//           to="/"
//           className="px-6 py-4 border-r border-gray-500 hover:font-semibold"
//         >
//           <DownloadIcon />
//         </NavLink>

//         <li className="px-6 py-4 border-r border-gray-500 hover:font-semibold">
//           <NavLink to="/projects">
//             <LinkedInAnimated />
//           </NavLink>
//         </li>
//       </ul>

//       <ul className="px-6 py-4 border-l border-gray-500 flex items-center gap-2 hover:font-semibold">
//         <span>@jayant</span>
//         <GithubIcon className="w-10 h-10" />
//       </ul>
//     </footer>
//   );
// }

// export default Footer;
