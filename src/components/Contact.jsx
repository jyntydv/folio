import {
  Mail,
  Phone,
  Briefcase,
  GitBranch,
  MessageCircle,
  ArrowUpRight,
} from "lucide-react";

function Contact() {
  const whatsappNumber = "917530845252";
  const whatsappMessage =
    "Hi Jayant, I came across your portfolio and would like to connect.";

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage,
  )}`;

  const links = [
    {
      title: "LinkedIn",
      subtitle: "linkedin.com/in/jayantyadav",
      href: "https://www.linkedin.com/in/jayantyadav/",
      icon: Briefcase,
    },
    {
      title: "GitHub",
      subtitle: "github.com/jyntydv",
      href: "https://github.com/jyntydv",
      icon: GitBranch,
    },
    {
      title: "WhatsApp",
      subtitle: "Chat instantly",
      href: whatsappUrl,
      icon: MessageCircle,
    },
    {
      title: "Email",
      subtitle: "jayantyadav008@gmail.com",
      href: "mailto:jayantyadav008@gmail.com",
      icon: Mail,
    },
  ];

  return (
    <section id="contact" className="px-6 py-8 text-gray-900">
      <div className="max-w-6xl mx-auto border border-gray-300">
        {/* Section Title */}
        <div className="border-b border-gray-300 px-6 py-2">
          <p className="font-mono text-sm text-gray-500">_contact</p>
        </div>

        {/* Bio Row */}
        <div className="grid md:grid-cols-3 border-b border-gray-300">
          <div className="hidden md:block border-r border-gray-300 min-h-20" />

          <div className="md:col-span-1 p-4 min-h-20 flex flex-col justify-center">
            <p className="font-mono text-sm text-gray-500 mb-1">bio</p>
            <p className="leading-6 text-gray-700 text-sm">
              I’m always open to discussing new opportunities, freelance work,
              and interesting product ideas.
            </p>
          </div>

          <div className="hidden md:block border-l border-gray-300 min-h-20" />
        </div>

        {/* Contact Details */}
        <div className="grid md:grid-cols-3 border-b border-gray-300">
          <div className="hidden md:block border-r border-gray-300 min-h-20" />

          <div className="p-4 space-y-4 min-h-20 flex flex-col justify-center">
            <ContactLine
              icon={Phone}
              text="+91 753 084 5252"
              href="tel:+917530845252"
            />
            <ContactLine
              icon={Mail}
              text="jayantyadav008@gmail.com"
              href="mailto:jayantyadav008@gmail.com"
            />
          </div>

          <div className="hidden md:block border-l border-gray-300 min-h-20" />
        </div>

        {/* Links Title */}
        <div className="border-b border-gray-300 px-6 py-2">
          <p className="font-mono text-sm text-gray-500">links</p>
        </div>

        {/* Links Grid */}
        <div className="grid md:grid-cols-2">
          {links.map((link, index) => (
            <LinkCard key={index} {...link} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactLine({ icon: Icon, text, href }) {
  return (
    <a href={href} className="flex items-center gap-3 group w-fit">
      <div className="w-9 h-9 border border-gray-300 rounded-md flex items-center justify-center">
        <Icon className="w-4 h-4 text-gray-600" strokeWidth={1.8} />
      </div>
      <span className="font-mono text-base text-gray-700 group-hover:text-black transition-colors">
        {text}
      </span>
    </a>
  );
}

function LinkCard({ title, subtitle, href, icon: Icon }) {
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
            <p className="font-mono text-sm text-gray-500 mt-1 truncate">
              {subtitle}
            </p>
          </div>
        </div>

        <ArrowUpRight className="w-5 h-5 text-gray-500 group-hover:text-black transition-colors" />
      </div>
    </a>
  );
}

export default Contact;
