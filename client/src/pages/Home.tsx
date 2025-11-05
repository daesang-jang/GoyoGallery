import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "wouter";

export default function Home() {
  const exhibitions = [
    {
      id: "1",
      title: "침묵과 물질 사이",
      titleEn: "Between Silence and Matter",
      artists: "Glenn Ligon, Jack Whitten, Jeff Elrod, 이건용, 이우환",
      date: "2024.11.01 - 2024.12.15",
      image: "http://313artproject.com/wp-content/uploads/2021/10/1-7.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />
      
      <main className="pt-32 pb-16 flex-1">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-center">
            <div className="max-w-md w-full">
              {exhibitions.map((exhibition) => (
                <Link key={exhibition.id} href={`/exhibitions/detail/${exhibition.id}`}>
                  <div className="group cursor-pointer" data-testid={`card-exhibition-${exhibition.title}`}>
                    <div className="aspect-[3/4] bg-muted rounded-md mb-4 overflow-hidden hover-elevate active-elevate-2">
                      <img
                        src={exhibition.image}
                        alt={exhibition.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <h3 className="text-lg font-semibold mb-2 text-foreground">{exhibition.title}</h3>
                    <p className="text-sm text-muted-foreground mb-1">{exhibition.artists}</p>
                    <p className="text-sm text-muted-foreground">{exhibition.date}</p>
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
