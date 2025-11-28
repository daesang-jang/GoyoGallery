import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ExhibitionCard from "@/components/ExhibitionCard";
import { Link } from "wouter";
import { getExhibitionsByStatus } from "@shared/exhibitions";


export default function PastExhibitions() {
  const exhibitions = getExhibitionsByStatus('past').map(ex => ({
    id: ex.id,
    title: ex.title,
    artist: ex.artists,
    date: ex.date,
    image: ex.image
  }));

// 요기부터는 네비게이션 영역 
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />
      
      <main className="pt-32 pb-16 flex-1">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-6">
            <h1 className="text-4xl md:text-5xl font-semibold mb-4 text-foreground" data-testid="text-page-title">EXHIBITION</h1>
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


{/* 전시 리스트 / 비어있을 때 문구 */}
    <div className="mt-12">
      {exhibitions.length === 0 ? (
        <div className="flex justify-center items-center py-24">
          <p className="text-center text-base md:text-lg lg:text-xl text-gray-400">
            Upcoming Exhibition
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {exhibitions.map((exhibition) => (
            <ExhibitionCard key={exhibition.id} {...exhibition} />
          ))}
        </div>
      )}
    </div>

        </div>
      </main>
      <Footer />
    </div>
  );
}