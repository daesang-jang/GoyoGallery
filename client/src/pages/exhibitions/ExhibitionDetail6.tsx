import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Calendar } from "lucide-react";
import img1 from '@assets/generated_images/Abstract_expressionist_painting_1825f2af.png';

export default function ExhibitionDetail6() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />
      
      <main className="pt-32 pb-16 flex-1">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-semibold mb-6 text-foreground" data-testid="text-exhibition-title">
              Color Theory
            </h1>
            
            <div className="space-y-2 mb-8">
              <p className="text-lg text-muted-foreground">
                장민석
              </p>
              <p className="text-sm text-muted-foreground flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                2024.07.15 - 2024.08.31
              </p>
            </div>

            <div className="h-px w-full bg-border mb-8" />

            <div className="prose prose-lg max-w-none mb-8">
              <p className="text-foreground leading-relaxed mb-6">
                전시 소개 내용을 이곳에 작성해주세요.
              </p>
            </div>
          </div>

          <div className="space-y-12">
            <div>
              <img
                src={img1}
                alt="Color Theory Exhibition"
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
