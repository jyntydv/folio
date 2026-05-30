import { NavLink, useLocation } from "react-router-dom";

function WorkCard({ project }) {
  const { hash } = useLocation();
  const activeId = hash.replace("#", "");
  const projectId = project.title.replace(/[^a-z]/gi, "");

  return (
    <NavLink
      id={projectId}
      className={`bg-[#ffffff] rounded-xl shadow-md
        overflow-hidden sm:w-90 md:w-114 2xl:w-full self-start hover:brightness-90
        ${activeId === projectId ? "ring-2 ring-[#ddcbb9] scale-105 brightness-75" : ""}`}
      to={`/works#${projectId}`}
    >
      <div className="h-52 w-full 2xl:h-full">
        <img src={project.image} className="h-full w-full object-cover" />
      </div>

      <div className="px-8 py-4 space-y-2 border border-[#ddcbb9] rounded-b-xl border-t-0 hover:brightness-70">
        <div className="text-lg font-semibold border-0 border-[#ddcbb9]">
          {project.title}
        </div>

        {project.descriptionPoints.map((point, i) => (
          <div
            key={i}
            className="text-sm text-[#827f7b] font-semibold border-b border-[#e7e3df]"
          >
            {point}
          </div>
        ))}

        <div className="text-sm text-[#827f7b] font-semibold border-b border-[#e7e3df]">
          {project.techStack.join(", ")}
        </div>

        <div className="text-sm text-[#827f7b] font-semibold border-b border-[#e7e3df]">
          {project.codeUrl}
        </div>

        <div className="text-sm text-[#827f7b] font-semibold">
          {project.liveUrl}
        </div>
      </div>
    </NavLink>
  );
}

export default WorkCard;
