import { useLocation } from "wouter";
import { useEffect, useState } from "react";

export default function Splash() {
  const [, setLocation] = useLocation();
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [cursorText, setCursorText] = useState("GO");
  const [isVisible, setIsVisible] = useState(true);

  const handleClick = () => {
    if (cursorText === "GO") {
      setCursorText("YO");
    } else {
      setIsVisible(false);
      setTimeout(() => {
        setLocation("/home");
      }, 300);
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  return (
    <div
      onClick={handleClick}
      onMouseMove={handleMouseMove}
      className={`fixed inset-0 flex flex-col items-center justify-center cursor-none transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      style={{ backgroundColor: '#2e5faf' }}
      data-testid="splash-container"
    >
      <h1 className="text-6xl md:text-8xl lg:text-9xl font-semibold tracking-wider text-white">
        GOYO Gallery
      </h1>

      <div
        className="fixed pointer-events-none text-white font-semibold text-2xl md:text-3xl"
        style={{
          left: `${mousePos.x + 20}px`,
          top: `${mousePos.y + 20}px`,
          transform: 'translate(-50%, -50%)',
        }}
      >
        {cursorText}
      </div>
    </div>
  );
}
