import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { User } from "lucide-react";
import { Link } from "wouter";

export default function Artists() {
  const artists = [
    { 
      id: "1",
      name: "고요", 
      nameEn: "Go yo",
      medium: "회화", 
      image: "/images/Artist/Upcoming/uc01.png"
    },
    { 
      id: "2",
      name: "Upcoming", 
      nameEn: "",
      medium: "", 
      image: null
    },
    { 
      id: "3",
      name: "Upcoming", 
      nameEn: "",
      medium: "", 
      image: null
    },
    { 
      id: "4",
      name: "Upcoming", 
      nameEn: "",
      medium: "", 
      image: null
    },
    { 
      id: "5",
      name: "Upcoming", 
      nameEn: "",
      medium: "", 
      image: null
    },
    { 
      id: "6",
      name: "Upcoming", 
      nameEn: "",
      medium: "", 
      image: null
    },
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />
      
      <main className="pt-32 pb-16 flex-1">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-semibold mb-4 text-foreground" data-testid="text-page-title">ARTISTS</h1>
            <div className="h-px w-24 bg-border mb-6" />
            <p className="text-muted-foreground max-w-2xl">
            </p>
          </div>

          <div className="grid grid-cols-3 gap-6 md:gap-8">
            {artists.map((artist) => (
              artist.image ? (
                <Link key={artist.id} href={`/artists/${artist.id}`}>
                  <div
                    className="group cursor-pointer"
                    data-testid={`card-artist-${artist.name}`}
                  >
                    <div className="aspect-square bg-muted rounded-md mb-3 overflow-hidden hover-elevate active-elevate-2">
                      <img
                        src={artist.image}
                        alt={artist.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="font-medium text-foreground mb-1">{artist.name}</h3>
                    {artist.nameEn && <p className="text-sm text-muted-foreground mb-1">{artist.nameEn}</p>}
                    {artist.medium && <p className="text-sm text-muted-foreground">{artist.medium}</p>}
                  </div>
                </Link>
              ) : (
                <div
                  key={artist.id}
                  className="group"
                  data-testid={`card-artist-${artist.name}`}
                >
                  <div className="aspect-square bg-muted/30 rounded-md mb-3">
                  </div>
                  <h3 className="font-medium text-muted-foreground mb-1">{artist.name}</h3>
                </div>
              )
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
