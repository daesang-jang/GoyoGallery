import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ExhibitionCard from "@/components/ExhibitionCard";
import { Link } from "wouter";

export default function CurrentExhibitions() {
  const exhibitions = [
    {
      id: "1",
      title: "ON VIEW",
      artist: "김산, 노현우, 이준영, 이영지, 장세일, 최우",
      date: "2025.12.04 - 2026.01.07",
      // 🔽 public/images 기준 경로 (파일 위치에 맞게 이름만 맞춰주면 됨)
      image: "/images/Home/onveiw.png",
    },
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />

      <main className="pt-32 pb-16 flex-1">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <h1
              className="text-4xl md:text-4xl font-semibold mb-4 text-foreground"
              data-testid="text-page-title"
            >
              EXHIBITION
            </h1>
            <div className="h-px w-44 bg-border mb-6" />
            <p className="text-muted-foreground max-w-2xl">
              {/* 필요하면 소개 문구 추가 */}
            </p>
          </div>

          <div className="mb-8 flex gap-4 flex-wrap">
            <Link href="/exhibitions/current">
              <button
                className="px-4 py-2 text-sm font-medium bg-accent text-accent-foreground rounded-md"
                data-testid="button-filter-current"
              >
                Current
              </button>
            </Link>
            <Link href="/exhibitions/upcoming">
              <button
                className="px-4 py-2 text-sm font-medium hover-elevate active-elevate-2 rounded-md"
                data-testid="button-filter-upcoming"
              >
                Upcoming
              </button>
            </Link>
            <Link href="/exhibitions/past">
              <button
                className="px-4 py-2 text-sm font-medium hover-elevate active-elevate-2 rounded-md"
                data-testid="button-filter-past"
              >
                Past
              </button>
            </Link>
          </div>

          <div className="flex justify-center">
            <div className="w-full max-w-md">
              {exhibitions.map((exhibition) => (
                <ExhibitionCard key={exhibition.title} {...exhibition} />
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
