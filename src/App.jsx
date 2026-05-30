import "./App.css";
import { Footer, Header } from "./components/index";
import { Outlet } from "react-router-dom";
import ShootingStars from "./components/features/ShootingStars";
import BinaryRain from "./components/features/BinaryRain";
import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <div
      className="p-6 min-h-screen bg-[#ffffff]"
      style={{
        backgroundImage:
          "repeating-linear-gradient(45deg, transparent, transparent 6px, #ddcbb9 6px, #ddcbb9 7px)",
      }}
    >
      <div className="flex h-[calc(100vh-3rem)] flex-col font-mono bg-[#f7f5f3]">
        <Header />
        <main className="border-l border-r border-gray-500 flex-1 overflow-auto relative min-h-90">
          {/* <ShootingStars /> */}
          <Outlet />
        </main>
        <Footer />
      </div>

      {/* vercel analytics */}
      <Analytics />
    </div>
  );
}

export default App;
