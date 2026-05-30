import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function Header() {
  const [open, setOpen] = useState(false);

  const baseLink = "px-6 h-full flex items-center border-gray-700";

  const linkClass = ({ isActive }) =>
    `${baseLink} md:border-r ${
      isActive ? "bg-[#ece4dc] font-semibold" : "hover:font-semibold"
    }`;

  return (
    <header className="w-full border border-gray-700 font-mono">
      {/* Top Row */}
      <div className="flex items-stretch justify-between h-18">
        <NavLink
          to="/"
          className="w-75 px-6 py-4 flex items-center md:border-r border-gray-700"
        >
          Jayant-Yadav
        </NavLink>

        {/* Middle (Desktop) */}
        <ul className="hidden md:flex items-stretch flex-1">
          <NavLink to="/hello" className={linkClass}>
            _hello
          </NavLink>

          <NavLink to="/about" className={linkClass}>
            _about-me
          </NavLink>

          <NavLink to="/works" className={linkClass}>
            _works
          </NavLink>
        </ul>

        {/* Right */}
        <div className="flex items-stretch">
          <NavLink
            to="/contact"
            className="hidden md:flex px-6 items-center border-l border-gray-700 hover:font-semibold"
          >
            _contact-me
          </NavLink>

          {/* Mobile button */}
          <button
            className="md:hidden px-6 border-l border-gray-700"
            onClick={() => setOpen(!open)}
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden flex flex-col border-t border-gray-700">
          <NavLink
            to="/hello"
            className={linkClass}
            onClick={() => setOpen(false)}
          >
            _hello
          </NavLink>

          <NavLink
            to="/about"
            className={linkClass}
            onClick={() => setOpen(false)}
          >
            _about-me
          </NavLink>

          <NavLink
            to="/works"
            className={linkClass}
            onClick={() => setOpen(false)}
          >
            _works
          </NavLink>

          <NavLink
            to="/contact"
            className={linkClass}
            onClick={() => setOpen(false)}
          >
            _contact-me
          </NavLink>
        </div>
      )}
    </header>
  );
}

export default Header;

// import React from "react";
// import { NavLink } from "react-router-dom";

// function Header() {
//   return (
//     <header className="w-full flex justify-between border border-gray-700 font-mono">
//       <ul className="flex items-center">
//         <NavLink
//           className={({ isActive }) =>
//             isActive
//               ? "px-6 py-4 w-75 border-r border-gray-700 font-semibold"
//               : "px-6 py-4 w-75 border-r border-gray-700"
//           }
//           to="/"
//         >
//           Jayant-Yadav
//         </NavLink>

//         <NavLink
//           to="/hello"
//           className={({ isActive }) =>
//             isActive
//               ? "px-6 py-4 border-r border-gray-700 font-semibol bg-[#ece4dc]"
//               : "px-6 py-4 border-r border-gray-700 hover:font-semibold"
//           }
//         >
//           _hello
//         </NavLink>

//         <NavLink
//           to="/about"
//           className={({ isActive }) =>
//             isActive
//               ? "px-6 py-4 border-r border-gray-700 font-semibol bg-[#ece4dc]"
//               : "px-6 py-4 border-r border-gray-700 hover:font-semibold"
//           }
//         >
//           _about-me
//         </NavLink>

//         <NavLink
//           to="/works"
//           className={({ isActive }) =>
//             isActive
//               ? "px-6 py-4 border-r border-gray-700 font-semibol bg-[#ece4dc]"
//               : "px-6 py-4 border-r border-gray-700 hover:font-semibold"
//           }
//         >
//           _works
//         </NavLink>
//       </ul>

//       <NavLink
//         to="/contact"
//         className={({ isActive }) =>
//           isActive
//             ? "px-6 py-4 border-l border-gray-700 font-semibol bg-[#ece4dc]"
//             : "px-6 py-4 border-l border-gray-700 hover:font-semibold"
//         }
//       >
//         _contact-me
//       </NavLink>
//     </header>
//   );
// }

// export default Header;
