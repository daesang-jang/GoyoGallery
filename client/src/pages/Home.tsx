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

      {/* 상단 여백: 모바일 줄이고 PC는 기존 유지 */}
      <main className="pt-24 md:pt-32 pb-16 flex-1">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-center items-center">
            <div className="w-full max-w-sm sm:max-w-md">
              <Link href={`/exhibitions/detail/${exhibition.id}`}>
                <div className="group cursor-pointer" data-testid={`card-exhibition-${exhibition.title}`}>

                  {/* 포스터: 모바일에서 화면 높이 60%로 제한 + 전체가 보이게 */}
                  <div className="bg-muted rounded-md mb-3 overflow-hidden">
                    <img
                      src={exhibition.image}
                      alt={exhibition.title}
                      className="w-full max-h-[60vh] md:max-h-none object-contain md:object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  {/* 텍스트: 모바일 폰트/여백 축소 */}
                  <h3 className="text-base sm:text-lg font-semibold mb-1 text-foreground">
                    {exhibition.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground mb-0.5">
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
