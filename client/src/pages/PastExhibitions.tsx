import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ExhibitionCard from "@/components/ExhibitionCard";
import { Link } from "wouter";

import img1 from '@assets/generated_images/Monochrome_architectural_photography_e843186b.png';
import img2 from '@assets/generated_images/Korean_ceramic_sculpture_b99d58e8.png';
import img3 from '@assets/generated_images/Abstract_expressionist_painting_1825f2af.png';

export default function PastExhibitions() {
  const exhibitions = [
    {
      title: "Urban Perspectives",
      artist: "김태영",
      date: "2024.09.01 - 2024.10.15",
      image: img1,
    },
    {
      title: "Traditional Modern",
      artist: "윤서희",
      date: "2024.08.10 - 2024.09.30",
      image: img2,
    },
    {
      title: "Color Theory",
      artist: "장민석",
      date: "2024.07.15 - 2024.08.31",
      image: img3,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <h1 className="text-4xl md:text-4xl font-semibold mb-4 text-foreground" data-testid="text-page-title">Exhibition</h1>
            <div className="h-px w-44 bg-border mb-12" />
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
              <button className="px-4 py-2 text-sm font-medium hover-elevate active-elevate-2 rounded-md" data-testid="button-filter-upcoming">
                Upcoming
              </button>
            </Link>
            <Link href="/exhibitions/past">
              <button className="px-4 py-2 text-sm font-medium bg-accent text-accent-foreground rounded-md" data-testid="button-filter-past">
                Past
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
