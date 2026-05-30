import engage from "../../assets/work/camparchive.jpg";
import portfolio_v2 from "../../assets/work/portfolio_v2.jpg";
import portfolio from "../../assets/work/portfolio.jpg";
import avalon from "../../assets/work/avalon.jpg";
import hirehub from "../../assets/work/hirehub.jpg";
import learnr from "../../assets/work/learnr.jpg";
import tuneology from "../../assets/work/tuneology.jpg";
import newswire from "../../assets/work/newswire.jpg";
import folder from "../../assets/open-file.png";
import { DropDownIcon } from "../../assets/icons";
import { DropDown } from "../index";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import WorkCard from "./WorkCard";
import BinaryRain from "../features/BinaryRain";
import ShootingStars from "../features/ShootingStars";

function Works() {
  const projectTitles = [
    "Portfolio",
    "Portfolio Legacy",
    "Avalon",
    "HireHub",
    "Engage </>",
    "LearnR",
    "Tuneology",
    "News Wire",
  ];
  const [expandProjectList, setExpandProjectList] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setExpandProjectList(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.substring(1));
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
        }, 0);
      }
    }
  }, [hash]);

  return (
    <div className="flex h-screen overflow-hidden">
      <div className="md:w-75 h-full border-r border-gray-700 hidden md:block">
        <div className="w-[84%] select-none ml-5 hidden md:block">
          <ul className="mr-3 ml-2 mt-3">
            <li
              className="cursor-pointer hover:font-semibold flex justify-between"
              onClick={() => setExpandProjectList((prev) => !prev)}
            >
              <div className="flex items-center space-x-2">
                <img
                  className="w-5 h-5 transition-transform duration-300 transform hover:scale-110 hover:-translate-y-0.5 hover:shadow-lg"
                  src={folder}
                  alt="info icon"
                />
                <span>projects</span>
              </div>
              <DropDownIcon open={expandProjectList} />
            </li>
            <li className="ml-5">
              {expandProjectList && (
                <DropDown data={projectTitles} page="works" />
              )}
            </li>
          </ul>
        </div>
      </div>

      <div className="relative flex-1 h-full overflow-y-auto [scrollbar-width:none] [scrollbar-color:#ffffff_transparent]">
        {" "}
        <BinaryRain />
        <div className="relative z-10 md:ml-6 grid sm:grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 justify-items-center gap-6 py-6 mx-2 md:mx-6">
          {projects.map((project, i) => (
            <WorkCard key={i} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Works;

class Project {
  constructor({
    title = "",
    image = "",
    descriptionPoints = [],
    techStack = [],
    codeUrl = "",
    liveUrl = "",
  } = {}) {
    this.title = title || "Untitled Project";
    this.image = image || "";
    this.descriptionPoints = Array.isArray(descriptionPoints)
      ? descriptionPoints
      : [];
    this.techStack = Array.isArray(techStack) ? techStack : [];
    this.codeUrl = codeUrl || "";
    this.liveUrl = liveUrl || "";
  }
}

const projects = [
  new Project({
    title: "Portfolio",
    image: portfolio_v2,
    descriptionPoints: ["The story of my life"],
    techStack: ["React", "JavaScript"],
    codeUrl: "https://github.com/jyntydv/",
    liveUrl: "https://github.com/jyntydv/",
  }),

  new Project({
    title: "Portfolio Legacy",
    image: portfolio,
    descriptionPoints: ["The story of my life - First Draft"],
    techStack: ["React", "JavaScript"],
    codeUrl: "https://github.com/jyntydv/",
    liveUrl: "https://github.com/jyntydv/",
  }),

  new Project({
    title: "Avalon",
    image: avalon,
    descriptionPoints: [
      "Track, discover, and get notified about movies",
      "Browse and track movies by genre, release date, rating, etc",
      "Instant notifications when a movie is released",
      "Personalized movie suggestions based on your taste",
    ],
    techStack: ["React", "JavaScript"],
    codeUrl: "https://github.com/jyntydv/",
    liveUrl: "https://github.com/jyntydv/",
  }),

  new Project({
    title: "HireHub",
    image: hirehub,
    descriptionPoints: [
      "Centralized platform built to streamline campus placements",
      "Personalized dashboards for students, companies, and admins",
      "Plan and publish placement events with real-time updates",
      "Monitor application status, test results, and selection progress",
    ],
    techStack: ["React", "JavaScript"],
    codeUrl: "https://github.com/jyntydv/",
    liveUrl: "https://github.com/jyntydv/",
  }),

  new Project({
    title: "Engage </>",
    image: engage,
    descriptionPoints: [
      "A place for students to share ideas, stay informed, and connect beyond the classroom",
      "Share experiences, tips, opinions, and creativity with the campus community",
      "Promote college fests, workshops, and announcements in one place",
      "Alerts for new blog posts, replies, and upcoming events",
    ],
    techStack: ["React", "JavaScript"],
    codeUrl: "https://github.com/jyntydv/",
    liveUrl: "https://github.com/jyntydv/",
  }),

  new Project({
    title: "LearnR",
    image: learnr,
    descriptionPoints: [
      "Brings learning to life through Augmented Reality",
      "Visualize complex topics in 3D, right in your space",
      "Covers various subjects and topics",
    ],
    techStack: ["React", "JavaScript"],
    codeUrl: "https://github.com/jyntydv/",
    liveUrl: "https://github.com/jyntydv/",
  }),

  new Project({
    title: "Tuneology",
    image: tuneology,
    descriptionPoints: [
      "See, hear, and isolate instruments from any song using Augmented Reality",
      "Visualize each beat, note, and layer around you",
      "Separate vocals, drums, bass, piano, and more from any track",
      "Watch instruments float and animate around you in 3D space",
    ],
    techStack: ["React", "JavaScript"],
    codeUrl: "https://github.com/jyntydv/",
    liveUrl: "https://github.com/jyntydv/",
  }),

  new Project({
    title: "News Wire",
    image: newswire,
    descriptionPoints: [
      "Latest headlines, breaking stories, and trending topics",
      "Seamless collaboration for reporters, editors, and guest writers",
    ],
    techStack: ["React", "JavaScript"],
    codeUrl: "https://github.com/jyntydv/",
    liveUrl: "https://github.com/jyntydv/",
  }),
];
