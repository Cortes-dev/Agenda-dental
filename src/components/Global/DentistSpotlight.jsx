import { useEffect, useState } from "react";

const DentistSpotlight = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMouse = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", updateMouse);
    return () => window.removeEventListener("mousemove", updateMouse);
  }, []);

  return (
    <div className="pointer-events-none fixed top-0 left-0 w-full h-full z-10">
      <div
        className="w-40 h-40 md:w-52 md:h-52 rounded-full bg-blue-100/40 border border-blue-300/50 backdrop-blur-[3px] flex items-center justify-center"
        style={{
          position: "absolute",
          transform: `translate(${pos.x - 80}px, ${pos.y - 80}px)`,
        }}
      >
        <div className="text-3xl md:text-4xl animate-pulse">🦷</div>
      </div>
    </div>
  );
};

export default DentistSpotlight;
