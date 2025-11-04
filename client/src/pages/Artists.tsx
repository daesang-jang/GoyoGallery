import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { User } from "lucide-react";

export default function Artists() {
  const artists = [
    { name: "김현우", medium: "회화", initial: "김" },
    { name: "이지연", medium: "사진", initial: "이" },
    { name: "박소연", medium: "조각", initial: "박" },
    { name: "정민호", medium: "회화", initial: "정" },
    { name: "최은정", medium: "설치미술", initial: "최" },
    { name: "한지수", medium: "디지털아트", initial: "한" },
    { name: "송민아", medium: "회화", initial: "송" },
    { name: "윤서희", medium: "도예", initial: "윤" },
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

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
            {artists.map((artist) => (
              <div
                key={artist.name}
                className="group cursor-pointer"
                data-testid={`card-artist-${artist.name}`}
              >
                <div className="aspect-square bg-muted rounded-md mb-3 flex items-center justify-center overflow-hidden hover-elevate active-elevate-2">
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-muted to-accent/20">
                    <User className="h-12 w-12 text-muted-foreground" />
                  </div>
                </div>
                <h3 className="font-medium text-foreground mb-1">{artist.name}</h3>
                <p className="text-sm text-muted-foreground">{artist.medium}</p>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
