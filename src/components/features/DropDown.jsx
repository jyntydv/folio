import React from "react";
import { NavLink, Link } from "react-router-dom";
import FolderIcon from "../../assets/FolderIcon";

function DropDown({ data = [], page = "about" }) {
  return (
    <div className="mb-2">
      <ul className="ml-2 space-y-1">
        {data &&
          data.map((item) => (
            <li
              key={item}
              className="block border-l border-l-gray-400 pl-2 hover:font-bold"
            >
              {page == "about" && (
                <NavLink
                  to={`/about/${item}`}
                  className={({ isActive }) =>
                    `flex items-center gap-2 px-4 ${isActive ? "bg-[#eeeae5] font-bold" : ""}`
                  }
                >
                  <FolderIcon className="w-4 h-4" />
                  <div>{item}</div>
                </NavLink>
              )}
              {page == "works" && (
                <NavLink
                  to={`/works#${item.replace(/[^a-z]/gi, "")}`}
                  className={() => {
                    const hash = `#${item.replace(/[^a-z]/gi, "")}`;
                    const isActive =
                      location.pathname === "/works" && location.hash === hash;

                    return `block px-4 ${
                      isActive ? "bg-[#eeeae5] font-bold" : ""
                    }`;
                  }}
                >
                  {item}
                </NavLink>
              )}
            </li>
          ))}
      </ul>
    </div>
  );
}

export default DropDown;
