import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ExhibitionCard from "@/components/ExhibitionCard";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";

import img1 from '@assets/generated_images/Abstract_geometric_exhibition_artwork_c83490f6.png';
import img2 from '@assets/generated_images/Monochrome_architectural_photography_e843186b.png';
import img3 from '@assets/generated_images/Korean_ceramic_sculpture_b99d58e8.png';
import heroImg from '@assets/generated_images/Installation_art_exhibition_718ac98a.png';

export default function Home() {
  const currentExhibitions = [
    {
      id: "1",
      title: "침묵과 물질 사이",
      artist: "Glenn Ligon, Jack Whitten, Jeff Elrod, 이건용, 이우환",
      date: "2024.11.01 - 2024.12.15",
      image: img1,
    },
    {
      id: "2",
      title: "Light and Shadow",
      artist: "이지연",
      date: "2024.11.10 - 2024.12.20",
      image: img2,
    },
    {
      id: "3",
      title: "Ceramic Forms",
      artist: "박소연",
      date: "2024.11.15 - 2025.01.10",
      image: img3,
    },
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />
      
      <main className="pt-16 flex-1">
        <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={heroImg}
              alt="Gallery hero"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
          </div>
          
          <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-semibold mb-6 tracking-wide" data-testid="text-hero-title">
              현대 미술 고요 갤러리
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
              GOYO Gallery는 새로운 시각 예술의 경험을 제공합니다
            </p>
            <Link href="/exhibitions/current">
              <button className="px-8 py-3 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-md hover-elevate active-elevate-2 font-medium inline-flex items-center gap-2" data-testid="button-view-exhibitions">
                전시 보기
                <ArrowRight className="h-4 w-4" />
              </button>
            </Link>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-6 py-24">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-semibold mb-3 text-foreground">현재 전시</h2>
              <div className="h-px w-24 bg-border" />
            </div>
            <Link href="/exhibitions/current">
              <button className="text-sm font-medium hover:text-primary transition-colors inline-flex items-center gap-1" data-testid="link-all-exhibitions">
                모든 전시
                <ArrowRight className="h-4 w-4" />
              </button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {currentExhibitions.map((exhibition) => (
              <ExhibitionCard key={exhibition.title} {...exhibition} />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
