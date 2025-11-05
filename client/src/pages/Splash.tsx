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
        className="w-auto h-auto max-w-[35%] max-h-[35%] transition-all duration-300"
        style={{
          filter: 'none',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.filter = 'invert(1) brightness(2)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.filter = 'none';
        }}
        data-testid="splash-image"
      />
    </div>
  );
}
