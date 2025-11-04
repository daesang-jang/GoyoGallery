import { useLocation } from "wouter";
import { useEffect, useState } from "react";

export default function Splash() {
  const [, setLocation] = useLocation();
  const [isVisible, setIsVisible] = useState(true);

  const handleClick = () => {
    setIsVisible(false);
    setTimeout(() => {
      setLocation("/home");
    }, 300);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      handleClick();
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      onClick={handleClick}
      className={`fixed inset-0 bg-background flex flex-col items-center justify-center cursor-pointer transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      data-testid="splash-container"
    >
      <h1 className="text-6xl md:text-8xl font-semibold tracking-wider mb-8 text-foreground">
        GOYO
      </h1>
      <h2 className="text-2xl md:text-3xl font-light tracking-widest text-muted-foreground mb-12">
        GALLERY
      </h2>
      <p className="text-sm text-muted-foreground tracking-wide animate-pulse">
        클릭하여 입장
      </p>
    </div>
  );
}
