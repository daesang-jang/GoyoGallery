import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { User } from "lucide-react";
import { Link } from "wouter";

export default function Artists() {
  const artists = [
    { 
      id: "1",
      name: "하정우", 
      nameEn: "Ha Jung-woo",
      medium: "회화", 
      image: "http://313artproject.com/wp-content/uploads/2022/03/Ha-Jungwoo-Untitled-800x1024.png"
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-semibold mb-4 text-foreground" data-testid="text-page-title">작가</h1>
            <div className="h-px w-24 bg-border mb-6" />
            <p className="text-muted-foreground max-w-2xl">
              GOYO Gallery와 함께하는 작가들을 만나보세요
            </p>
          </div>

          <div className="flex justify-center">
            <div className="w-full max-w-sm">
              {artists.map((artist) => (
                <Link key={artist.name} href={`/artists/${artist.id}`}>
                  <div
                    className="group cursor-pointer"
                    data-testid={`card-artist-${artist.name}`}
                  >
                    <div className="aspect-square bg-muted rounded-md mb-3 overflow-hidden hover-elevate active-elevate-2">
                      {artist.image ? (
                        <img
                          src={artist.image}
                          alt={artist.name}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-muted to-accent/20">
                          <User className="h-12 w-12 text-muted-foreground" />
                        </div>
                      )}
                    </div>
                    <h3 className="font-medium text-foreground mb-1">{artist.name}</h3>
                    <p className="text-sm text-muted-foreground mb-1">{artist.nameEn}</p>
                    <p className="text-sm text-muted-foreground">{artist.medium}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
