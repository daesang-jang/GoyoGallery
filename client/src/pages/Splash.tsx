import { useLocation } from "wouter";
import splashImage from "@assets/Splash_1762350455042.png";

export default function Splash() {
  const [, setLocation] = useLocation();

  const handleClick = () => {
    setLocation("/home");
  };

  return (
    <div
      onClick={handleClick}
      className="fixed inset-0 flex items-center justify-center bg-white cursor-pointer"
      data-testid="splash-container"
    >
      <img
        src={splashImage}
        alt="GOYO Gallery"
        className="w-auto h-auto max-w-[80%] max-h-[80%] transition-all duration-300 hover:invert"
        data-testid="splash-image"
      />
    </div>
  );
}
