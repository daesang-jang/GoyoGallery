import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ExhibitionCard from "@/components/ExhibitionCard";
import { Link } from "wouter";
import { getExhibitionsByStatus } from "@shared/exhibitions";


export default function CurrentExhibitions() {
  const exhibitions = getExhibitionsByStatus('current').map(ex => ({
    id: ex.id,
    title: ex.title,
    artist: ex.artists,
    date: ex.date,
    image: ex.image
  }));

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />
      
      <main className="pt-32 pb-16lex-1">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-6"> {/* Exhibition 아래 <-> 메뉴 넓이 / mb-12에서 mb-6으로 변경 */}
            <h1 className="text-4xl md:text-5xl font-semibold mb-4 text-foreground" data-testid="text-page-title">EXHIBITION</h1>
            <div className="h-px w-44 bg-border mb-6" />
            <p className="text-muted-foreground max-w-2xl">
            
            </p>
          </div>

          <div className="mb-8 flex gap-4 flex-wrap">
            <Link href="/exhibitions/current">
              <button className="px-4 py-2 text-sm font-medium bg-accent text-accent-foreground rounded-md" data-testid="button-filter-current">
                Current
              </button>
            </Link>
            <Link href="/exhibitions/upcoming">
              <button className="px-4 py-2 text-sm font-medium hover-elevate active-elevate-2 rounded-md" data-testid="button-filter-upcoming">
                Upcoming
              </button>
            </Link>
            <Link href="/exhibitions/past">
              <button className="px-4 py-2 text-sm font-medium hover-elevate active-elevate-2 rounded-md" data-testid="button-filter-past">
                Past
              </button>
            </Link>
          </div>

          <div className="flex justify-center">
            <div className="w-full max-w-md">
              {exhibitions.map((exhibition) => (
                <ExhibitionCard key={exhibition.id} {...exhibition} />
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
