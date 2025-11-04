import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ExhibitionCard from "@/components/ExhibitionCard";
import { Link } from "wouter";

import img1 from '@assets/generated_images/Abstract_geometric_exhibition_artwork_c83490f6.png';
import img2 from '@assets/generated_images/Contemporary_Korean_landscape_657013ad.png';

export default function UpcomingExhibitions() {
  const exhibitions = [
    {
      title: "Digital Dreams",
      artist: "한지수",
      date: "2025.01.05 - 2025.02.20",
      image: img1,
    },
    {
      title: "Nature's Voice",
      artist: "송민아",
      date: "2025.01.15 - 2025.03.01",
      image: img2,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-semibold mb-4 text-foreground" data-testid="text-page-title">예정 전시</h1>
            <div className="h-px w-24 bg-border mb-6" />
            <p className="text-muted-foreground max-w-2xl">
              다가오는 전시를 미리 만나보세요
            </p>
          </div>

          <div className="mb-8 flex gap-4 flex-wrap">
            <Link href="/exhibitions/current">
              <button className="px-4 py-2 text-sm font-medium hover-elevate active-elevate-2 rounded-md" data-testid="button-filter-current">
                현재 전시
              </button>
            </Link>
            <Link href="/exhibitions/upcoming">
              <button className="px-4 py-2 text-sm font-medium bg-accent text-accent-foreground rounded-md" data-testid="button-filter-upcoming">
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
