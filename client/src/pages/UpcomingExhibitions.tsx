import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ExhibitionCard from "@/components/ExhibitionCard";
import { Link } from "wouter";
import { getExhibitionsByStatus } from "@shared/exhibitions";

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

export default function UpcomingExhibitions() {
  const exhibitions = getExhibitionsByStatus('upcoming').map(ex => ({
    id: ex.id,
    title: ex.title,
    artist: ex.artists,
    date: ex.date,
    image: imageMap[ex.image] || img1,
  }));

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />
      
      <main className="pt-32 pb-16 flex-1">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <h1 className="text-4xl md:text-4xl font-semibold mb-4 text-foreground" data-testid="text-page-title">EXHIBITION</h1>
            <div className="h-px w-44 bg-border mb-6" />
            <p className="text-muted-foreground max-w-2xl">
            </p>
          </div>

          <div className="mb-8 flex gap-4 flex-wrap">
            <Link href="/exhibitions/current">
              <button className="px-4 py-2 text-sm font-medium hover-elevate active-elevate-2 rounded-md" data-testid="button-filter-current">
                Current
              </button>
            </Link>
            <Link href="/exhibitions/upcoming">
              <button className="px-4 py-2 text-sm font-medium bg-accent text-accent-foreground rounded-md" data-testid="button-filter-upcoming">
                Upcoming
              </button>
            </Link>
            <Link href="/exhibitions/past">
              <button className="px-4 py-2 text-sm font-medium hover-elevate active-elevate-2 rounded-md" data-testid="button-filter-past">
                Past
              </button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {exhibitions.map((exhibition) => (
              <ExhibitionCard key={exhibition.id} {...exhibition} />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
