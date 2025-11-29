import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { getCurrentExhibition } from "@shared/exhibitions";

export default function Home() {
  const currentExhibition = getCurrentExhibition();

  if (!currentExhibition) {
    return (
      <div className="min-h-screen bg-background flex flex-col">
        <Navigation />
        <main className="pt-24 md:pt-32 pb-16 flex-1">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <p className="text-muted-foreground">현재 진행 중인 전시가 없습니다.</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const exhibition = {
    id: currentExhibition.id,
    title: currentExhibition.title,
    artists: currentExhibition.artists,
    date: currentExhibition.date,
    image: currentExhibition.image,
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />

      <main className="pt-24 md:pt-32 pb-16 flex-1">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-center items-center">
            <div className="w-full max-w-xs sm:max-w-sm md:max-w-md">
              <Link href={`/exhibitions/detail/${exhibition.id}`}>
                <div
                  className="group cursor-pointer"
                  data-testid={`card-exhibition-${exhibition.title}`}
                >
                  <div className="bg-muted rounded-md mb-3 overflow-hidden">
                    <img
                      src={exhibition.image}
                      alt={exhibition.title}
                      className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold mb-1 text-foreground">
                    {exhibition.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground mb-0.5 whitespace-pre-wrap">
                    {exhibition.artists}
                  </p>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    {exhibition.date}
                  </p>
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
