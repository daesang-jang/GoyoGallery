import { useLocation } from "wouter";
import { useState } from "react";

export default function Splash() {
  const [, setLocation] = useLocation();
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleClick = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setLocation("/home");
    }, 2000);
  };

  return (
    <div
      onClick={handleClick}
      className="fixed inset-0 flex flex-col items-center justify-center cursor-pointer transition-all duration-[2000ms]"
      style={{ 
        backgroundColor: isTransitioning ? '#ffffff' : '#2e5faf'
      }}
      data-testid="splash-container"
    >
      <h1 
        className="text-6xl md:text-8xl lg:text-9xl font-semibold tracking-wider transition-all duration-[2000ms]"
        style={{
          color: isTransitioning ? '#2e5faf' : '#ffffff'
        }}
      >
        GOYO Gallery
      </h1>
    </div>
  );
}
