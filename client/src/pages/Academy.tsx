import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { GraduationCap, Calendar, Users, Clock } from "lucide-react";

export default function Academy() {

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />
      
      <main className="pt-32 pb-16 flex-1">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-semibold mb-4 text-foreground" data-testid="text-page-title">ACADEMY</h1>
            <div className="h-px w-24 bg-border mb-6" />
            <p className="text-muted-foreground max-w-2xl leading-relaxed">
            </p>
          </div>

        

          

          <div className="bg-card rounded-lg p-8 md:p-12 border border-card-border text-center">
            <h2 className="text-2xl font-semibold mb-4 text-card-foreground">Coming soon 2026 </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed max-w-2xl mx-auto">
              Experience art more closely with GOYO Gallery Academy.
            </p>
            <button
              className="px-8 py-3 rounded-md font-medium 
                         bg-muted text-muted-foreground 
                         opacity-90 cursor-not-allowed"
              data-testid="button-apply-academy">
              Upcoming 
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
