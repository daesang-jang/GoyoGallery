import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { getCurrentExhibition } from "@shared/exhibitions";

import img1 from '@assets/generated_images/Abstract_geometric_exhibition_artwork_c83490f6.png';
import img2 from '@assets/generated_images/Monochrome_architectural_photography_e843186b.png';
import img3 from '@assets/generated_images/Korean_ceramic_sculpture_b99d58e8.png';
import img4 from '@assets/generated_images/Contemporary_Korean_landscape_657013ad.png';
import img5 from '@assets/generated_images/Abstract_expressionist_painting_1825f2af.png';

const imageMap: Record<string, string> = {
  "Abstract_geometric_exhibition_artwork_c83490f6.png": img1,
  "Contemporary_Korean_landscape_657013ad.png": img4,
  "Monochrome_architectural_photography_e843186b.png": img2,
  "Korean_ceramic_sculpture_b99d58e8.png": img3,
  "Abstract_expressionist_painting_1825f2af.png": img5,
};

export default function Home() {
  const currentExhibition = getCurrentExhibition();

  if (!currentExhibition) {
    return (
      <div className="min-h-screen bg-background flex flex-col">
        <Navigation />
        <main className="pt-32 pb-16 flex-1">
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
    image: imageMap[currentExhibition.image] || img1,
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />
      
      <main className="pt-32 pb-16 flex-1">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-center items-center">
            <div className="w-full max-w-sm sm:max-w-md">
              <Link href={`/exhibitions/detail/${exhibition.id}`}>
                <div className="group cursor-pointer" data-testid={`card-exhibition-${exhibition.title}`}>
                  <div className="aspect-[3/4] bg-muted rounded-md mb-4 overflow-hidden hover-elevate active-elevate-2">
                    <img
                      src={exhibition.image}
                      alt={exhibition.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-foreground">{exhibition.title}</h3>
                  <p className="text-sm text-muted-foreground mb-1">{exhibition.artists}</p>
                  <p className="text-sm text-muted-foreground">{exhibition.date}</p>
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
