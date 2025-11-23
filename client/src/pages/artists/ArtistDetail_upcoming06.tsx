import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function ArtistDetail_upcoming06() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />
      
      <main className="pt-32 pb-16 flex-1">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-semibold mb-6 text-foreground" data-testid="text-artist-name">
              Upcoming Artist 06
            </h1>
            
            <div className="prose prose-lg max-w-none mb-12 space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                Artist information coming soon.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
