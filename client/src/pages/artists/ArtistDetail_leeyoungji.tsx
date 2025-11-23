import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function ArtistDetail_leeyoungji() {
 return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />

      <main className="pt-32 pb-16 flex-1">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-semibold mb-6 text-foreground" data-testid="text-artist-name">
              이영지
            </h1>
            <h2 className="text-2xl md:text-3xl font-light mb-8 text-foreground/80">
              Lee Young-ji
            </h2>

            <div className="mb-8">
              <img src="/images/Exhibition/1/04.png" alt="이영지" className="w-full md:w-3/4 lg:w-2/4 mx-auto rounded-md mb-12" />
            </div>

            <div className="space-y-2 mb-8 text-sm text-muted-foreground">
              <p>Born 0000 in Seoul, South Korea</p>
              <p>Lives and works in Seoul, South Korea</p>
            </div>

            <div className="h-px w-full bg-border mb-8" />

            <div className="prose prose-lg max-w-none mb-8 space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                English main -1.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                 English main -2
              </p>
              <p className="text-muted-foreground leading-relaxed">
                 English main -3
              </p>
              <p className="text-muted-foreground leading-relaxed">
                 English main -4
              </p>
            </div>

            <div className="h-px w-full bg-border mb-8" />

            <div className="prose prose-lg max-w-none mb-12 space-y-6">
              <p className="text-foreground leading-relaxed">
                한글 메인 -1
              </p>
              <p className="text-foreground leading-relaxed">
                한글 메인 -2
              </p>
              <p className="text-foreground leading-relaxed">
                한글 메인 -3
              </p>
              <p className="text-foreground leading-relaxed">
                한글 메인 -4
              </p>
            </div>
          </div>

          <div className="space-y-12">
            <div>
              <img
                src="/images/Exhibition/1/04.png"
                alt="이영지"
                className="w-full rounded-md mb-4"
              />
              <p className="text-sm text-muted-foreground">
                Lee Young-Ji | 행복한 순간, 지금, 2022 <br />
                <em></em>
              </p>
            </div>


          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}