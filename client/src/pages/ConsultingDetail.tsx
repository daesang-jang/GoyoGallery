import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function ConsultingDetail() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />
      
      <main className="pt-32 pb-16 flex-1">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-semibold mb-6 text-foreground" data-testid="text-project-title">
              The Great Mobiles
            </h1>
            <h2 className="text-2xl md:text-3xl font-light mb-4 text-foreground/80">
              Xavier Veilhan
            </h2>
            
            <div className="space-y-2 mb-8 text-sm text-muted-foreground">
              <p><strong>Installation at Terminal 2 of Incheon International Airport</strong></p>
              <p>January 2018</p>
            </div>

            <div className="mb-8">
              <img
                src=""
                alt="The Great Mobiles - East"
                className="w-full rounded-md"
              />
            </div>

            <div className="h-px w-full bg-border mb-8" />

            <div className="prose prose-lg max-w-none mb-8 space-y-6">
              <p className="text-muted-foreground leading-relaxed">
              영어본문              </p>
              <p className="text-muted-foreground leading-relaxed">
              영어본문              </p>
              <p className="text-muted-foreground leading-relaxed">
              영어본문              </p>
              <p className="text-muted-foreground leading-relaxed">
영어본문              </p>
            </div>

            <div className="h-px w-full bg-border mb-8" />

            <div className="prose prose-lg max-w-none mb-12 space-y-6">
              <p className="text-foreground leading-relaxed">
              본문              </p>
              <p className="text-foreground leading-relaxed">
              본문              </p>
              <p className="text-foreground leading-relaxed">
              본문              </p>
              <p className="text-foreground leading-relaxed">
               본문
              </p>
            </div>
          </div>

          <div className="space-y-12">
            <div>
              <img
                src=""
                alt="The Great Mobiles - West"
                className="w-full rounded-md mb-4"
              />
            </div>

            <div>
              <img
                src=""
                alt="The Great Mobiles - Installation view"
                className="w-full rounded-md mb-4"
              />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
