import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "wouter";

export default function Home() {
  // 메인에서 무엇을 보낼지 여기서만 결정
  const mainTile = {
    image: "/images/Home/onveiw.png", // 메인에 쓸 썸네일
    title: "One view",
    subtitle: "김산, 노현우, 이준영, 이영지, 장세일, 최우",
    description: "2025.12.04 - 2026.01.07",
    href: "/exhibitions/detail/one-view",      // 나중에 /academy 로 바꾸면 아카데미 메인으로 전환
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />

      <main className="pt-32 pb-16 flex-1">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-center items-center">
            <div className="w-full max-w-sm sm:max-w-md">
              <Link href={mainTile.href}>
                <div className="group cursor-pointer">
                  <div className="aspect-[3/4] bg-muted rounded-md mb-4 overflow-hidden hover-elevate active-elevate-2">
                    <img
                      src={mainTile.image}
                      alt={mainTile.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-foreground">
                    {mainTile.title}
                  </h3>
                  {mainTile.subtitle && (
                    <p className="text-sm text-muted-foreground mb-1">
                      {mainTile.subtitle}
                    </p>
                  )}
                  {mainTile.description && (
                    <p className="text-sm text-muted-foreground">
                      {mainTile.description}
                    </p>
                  )}
                </div>
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
