import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ExhibitionCard from "@/components/ExhibitionCard";
import { Link } from "wouter";

import img1 from '@assets/generated_images/Abstract_geometric_exhibition_artwork_c83490f6.png';
import img2 from '@assets/generated_images/Monochrome_architectural_photography_e843186b.png';
import img3 from '@assets/generated_images/Korean_ceramic_sculpture_b99d58e8.png';
import img4 from '@assets/generated_images/Contemporary_Korean_landscape_657013ad.png';
import img5 from '@assets/generated_images/Abstract_expressionist_painting_1825f2af.png';

export default function CurrentExhibitions() {
  const exhibitions = [
    {
      title: "Geometric Abstractions",
      artist: "김현우",
      date: "2024.11.01 - 2024.12.15",
      image: img1,
    },
    {
      title: "Light and Shadow",
      artist: "이지연",
      date: "2024.11.10 - 2024.12.20",
      image: img2,
    },
    {
      title: "Ceramic Forms",
      artist: "박소연",
      date: "2024.11.15 - 2025.01.10",
      image: img3,
    },
    {
      title: "Mountain Mist",
      artist: "정민호",
      date: "2024.11.20 - 2025.01.15",
      image: img4,
    },
    {
      title: "Expressive Gestures",
      artist: "최은정",
      date: "2024.11.25 - 2025.01.20",
      image: img5,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-semibold mb-4 text-foreground" data-testid="text-page-title">현재 전시</h1>
            <div className="h-px w-24 bg-border mb-6" />
            <p className="text-muted-foreground max-w-2xl">
              현재 진행 중인 전시를 만나보세요
            </p>
          </div>

          <div className="mb-8 flex gap-4 flex-wrap">
            <Link href="/exhibitions/current">
              <button className="px-4 py-2 text-sm font-medium bg-accent text-accent-foreground rounded-md" data-testid="button-filter-current">
                현재 전시
              </button>
            </Link>
            <Link href="/exhibitions/upcoming">
              <button className="px-4 py-2 text-sm font-medium hover-elevate active-elevate-2 rounded-md" data-testid="button-filter-upcoming">
                예정 전시
              </button>
            </Link>
            <Link href="/exhibitions/past">
              <button className="px-4 py-2 text-sm font-medium hover-elevate active-elevate-2 rounded-md" data-testid="button-filter-past">
                지난 전시
              </button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {exhibitions.map((exhibition) => (
              <ExhibitionCard key={exhibition.title} {...exhibition} />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
