import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function ArtistDetail() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />
      
      <main className="pt-32 pb-16 flex-1">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-semibold mb-6 text-foreground" data-testid="text-artist-name">
              고요
            </h1>
            <h2 className="text-2xl md:text-3xl font-light mb-8 text-foreground/80">
              Go yo
            </h2>
            
            <div className="mb-8">
              <img src="/images/Artist/Upcoming/uc01.png" alt="ARTIST" className="w-full md:w-3/4 lg:w-2/4 mx-auto rounded-md mb-12" />
             
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
                src="http://313artproject.com/wp-content/uploads/2022/03/65A4895-1024x683.jpg"
                alt="Installation view of Deux Peintres, 2022"
                className="w-full rounded-md mb-4"
              />
              <p className="text-sm text-mutedoreground">
                Installation view of <em>Deux Peintres</em>, 2022
              </p>
            </div>

            <div>
              <img
                src="http://313artproject.com/wp-content/uploads/2022/03/65A4745-1024x683.jpg"
                alt="Installation view of Deux Peintres, 2022"
                className="w-full rounded-md mb-4"
              />
              <p className="text-sm text-muted-foreground">
                Installation view of <em>Deux Peintres</em>, 2022
              </p>
            </div>

            <div>
              <img
                src="http://313artproject.com/wp-content/uploads/2022/03/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA-2022-03-04-%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB-11.58.13-825x1024.png"
                alt="Untitled, 2021"
                className="w-full rounded-md mb-4"
              />
              <p className="text-sm text-muted-foreground">
                Untitled, 2021, Acrylic on canvas, 130.3 x 162.2 cm
              </p>
            </div>

            <div>
              <img
                src="http://313artproject.com/wp-content/uploads/2022/03/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA-2022-03-03-%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB-11.42.59-816x1024.png"
                alt="Untitled, 2021"
                className="w-full rounded-md mb-4"
              />
              <p className="text-sm text-muted-foreground">
                Untitled, 2021, Acrylic on canvas, 72.5 x 90.5 cm
              </p>
            </div>

            <div>
              <img
                src="http://313artproject.com/wp-content/uploads/2021/09/UntitledKevin-Durant-2021-Acrylic-on-canvas-72.5-x-90.5-cm-e1649931648108-819x1024.jpg"
                alt="Untitled, 2021"
                className="w-full rounded-md mb-4"
              />
              <p className="text-sm text-muted-foreground">
                Untitled, 2021, Acrylic on canvas, 72.5 x 90.5 cm
              </p>
            </div>

            <div>
              <img
                src="http://313artproject.com/wp-content/uploads/2021/09/UntitledMichael-Jordan-2021-Acrylic-on-canvas-72.5-x-90.5-cm-e1649931667293-817x1024.jpg"
                alt="Untitled, 2021"
                className="w-full rounded-md mb-4"
              />
              <p className="text-sm text-muted-foreground">
                Untitled, 2021, Acrylic on canvas, 72.5 x 90.5 cm
              </p>
            </div>

            <div>
              <img
                src="http://313artproject.com/wp-content/uploads/2021/09/GF18630-855x1024.jpg"
                alt="Untitled, 2021"
                className="w-full rounded-md mb-4"
              />
              <p className="text-sm text-muted-foreground">
                Untitled, 2021, Acrylic on canvas, 60.6 x 72.6 cm
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
