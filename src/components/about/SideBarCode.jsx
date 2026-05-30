import codingProfie from "../../assets/coding.png";
import { useEffect, useState } from "react";

const devCode = `
> Initializing system...
> Loading modules: auth, api, ui, utils ✔
> Connecting to server...
> Status: 200 OK

const engineer = {
  name: "Jayant Yadav",
  mindset: "Build. Break. Fix. Repeat.",
};
`;

export default function SideBarCode() {
  return (
    <div className="w-[90%]">
      <div className="grid grid-cols-5 items-center gap-3 p-3  w-fit">
        <img
          src={codingProfie}
          alt="profile"
          className="col-span-1 rounded-full h-12 w-12 object-cover border border-slate-700"
        />

        <div className="col-span-4 text-left">
          <p className="font-semibold">Jayant Yadav</p>
          <TimeAgo />
        </div>
      </div>

      <pre className="" style={{ padding: "10px", fontSize: "14px" }}>
        {devCode}
      </pre>
    </div>
  );
}

function TimeAgo() {
  const [text, setText] = useState("Posted just now");

  const postedDate = new Date("2026-02-12");

  useEffect(() => {
    const update = () => {
      const now = new Date();

      let months =
        (now.getFullYear() - postedDate.getFullYear()) * 12 +
        (now.getMonth() - postedDate.getMonth());

      if (now.getDate() < postedDate.getDate()) {
        months -= 1;
      }

      if (months <= 0) {
        setText("Posted just now");
      } else {
        setText(`${months} month${months > 1 ? "s" : ""} ago`);
      }
    };

    update();
    const interval = setInterval(update, 1000 * 60 * 60);

    return () => clearInterval(interval);
  }, []);

  return <p className="text-sm text-slate-400">{text}</p>;
}
