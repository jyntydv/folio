import {
  Briefcase,
  MapPin,
  Phone,
  Mail,
  GitBranch,
  Briefcase as LinkedinIcon, // Use Briefcase as LinkedIn icon fallback
  Code2,
  ArrowUpRight,
} from "lucide-react";

function Summary() {
  const contactLinks = [
    {
      title: "Phone",
      subtitle: "+91 753 084 5252",
      icon: Phone,
      href: "tel:+917530845252",
    },
    {
      title: "Email",
      subtitle: "jayantyadav008@gmail.com",
      icon: Mail,
      href: "mailto:jayantyadav008@gmail.com",
    },
    {
      title: "GitHub",
      subtitle: "github.com/jyntydv",
      icon: GitBranch,
      href: "https://github.com/jyntydv",
    },
    {
      title: "LinkedIn",
      subtitle: "linkedin.com/in/jayantyadav",
      icon: Briefcase,
      href: "https://www.linkedin.com/in/jayantyadav/",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto border border-gray-300 text-gray-900">
      <div className="border-b border-gray-300 px-6 py-2">
        <p className="font-mono text-sm text-gray-500">_summary</p>
      </div>

      <div className="border-b border-gray-300 px-4 py-3">
        <p className="font-mono text-sm text-gray-500 mb-1">bio</p>
        <p className="leading-6 text-gray-700 text-sm">
          Passionate software engineer with experience in full-stack
          development, building scalable web applications, and solving complex
          problems.
        </p>
      </div>

      <div className="border-b border-gray-300 px-4 py-4 space-y-3">
        <InfoRow icon={Briefcase} text="Technical Lead @ HCLTech" />
        <InfoRow icon={MapPin} text="Noida, IN" />
        <InfoRow icon={Code2} text="React, Angular, .NET, C#, SQL Server" />
      </div>

      <div className="grid lg:grid-cols-2">
        {contactLinks.map((item, index) => (
          <SummaryCard key={index} {...item} />
        ))}
      </div>
    </div>
  );
}

function InfoRow({ icon: Icon, text }) {
  return (
    <div className="flex items-center gap-3 text-gray-700">
      <Icon className="w-5 h-5 text-gray-600 shrink-0" strokeWidth={1.8} />
      <span className="font-mono text-sm">{text}</span>
    </div>
  );
}

function SummaryCard({ title, subtitle, icon: Icon, href }) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
      className="group border-b border-r border-gray-300 p-4 hover:bg-gray-50 transition-colors"
    >
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-4 min-w-0">
          <Icon
            className="w-10 h-10 text-gray-600 shrink-0"
            strokeWidth={1.6}
          />

          <div className="min-w-0">
            <h3 className="font-mono text-xl text-gray-800 leading-none">
              {title}
            </h3>
            <p className="font-mono text-sm text-gray-500 mt-1 break-all">
              {subtitle}
            </p>
          </div>
        </div>

        <ArrowUpRight className="w-5 h-5 text-gray-500 group-hover:text-black transition-colors shrink-0" />
      </div>
    </a>
  );
}

export default Summary;

// import CodeArrow from "../assets/code-arrow.png";
// import Location from "../assets/pin.png";
// import Mobile from "../assets/mobile.png";
// import GMail from "../assets/gmail.png";
// import Github from "../assets/github.png";

// function Summary() {
//   return (
//     <div className="ml-7 mt-3">
//       <div>bio</div>

//       <div className="mb-2">
//         <img src={CodeArrow} className="h-7 w-6 inline mr-3" />
//         Software Engineer @hclTech
//       </div>
//       <div className="mb-2">
//         <img src={Location} className="h-6 w-6 inline mr-3 -ml-0.5" />
//         Noida, IN
//       </div>
//       <div className="mb-2">
//         <img src={Mobile} className="h-6 w-6 inline mr-3" />
//         +91 753 084 5252
//       </div>
//       <div className="mb-2">
//         <img src={GMail} className="h-6 w-6 inline mr-3" />
//         jayantyadav008@gmail.com
//       </div>
//       <div className="mb-2">
//         <img src={Github} className="h-6 w-6 inline mr-3" />
//         github url
//       </div>
//     </div>
//   );
// }

// export default Summary;
