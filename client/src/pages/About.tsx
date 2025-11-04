import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Target, Heart, Eye } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-16">
            <h1 className="text-4xl md:text-5xl font-semibold mb-6 text-foreground" data-testid="text-page-title">소개</h1>
            <div className="h-px w-24 bg-border mb-8" />
            <p className="text-xl text-muted-foreground leading-relaxed mb-6">
              GOYO Gallery는 2015년 서울 삼청동에 문을 연 이래, 한국과 세계의 현대 미술을 소개하는 공간으로 자리매김해왔습니다
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              우리는 예술가들에게는 창작의 기회를, 관람객들에게는 새로운 시각적 경험을 제공하며, 예술과 일상의 경계를 허무는 다양한 프로그램을 운영하고 있습니다
            </p>
          </div>

          <div className="space-y-12 mb-16">
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <Target className="h-8 w-8 text-foreground" />
              </div>
              <div>
                <h2 className="text-2xl font-semibold mb-3 text-foreground">미션</h2>
                <p className="text-muted-foreground leading-relaxed">
                  현대 미술의 가치를 발견하고 공유함으로써, 예술이 삶을 풍요롭게 만드는 경험을 제공합니다
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <Eye className="h-8 w-8 text-foreground" />
              </div>
              <div>
                <h2 className="text-2xl font-semibold mb-3 text-foreground">비전</h2>
                <p className="text-muted-foreground leading-relaxed">
                  한국을 대표하는 현대 미술 갤러리로서, 국내외 예술가들의 창작 활동을 지원하고 대중과의 소통을 확장해나갑니다
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <Heart className="h-8 w-8 text-foreground" />
              </div>
              <div>
                <h2 className="text-2xl font-semibold mb-3 text-foreground">가치</h2>
                <p className="text-muted-foreground leading-relaxed">
                  진정성 있는 예술, 열린 소통, 지속 가능한 성장
                </p>
              </div>
            </div>
          </div>

          <div className="bg-card rounded-lg p-8 md:p-12 border border-card-border">
            <h2 className="text-2xl font-semibold mb-6 text-card-foreground">디렉터 인사말</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              GOYO Gallery를 찾아주신 모든 분들께 감사드립니다. 우리는 예술이 단순히 벽에 걸린 작품이 아니라, 삶을 변화시키고 사회를 움직이는 힘이라고 믿습니다
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              이곳에서 여러분이 새로운 시각과 영감을 발견하시길 바라며, 앞으로도 더욱 의미 있는 전시와 프로그램으로 찾아뵙겠습니다
            </p>
            <p className="text-sm text-muted-foreground mt-6">
              김미정, 디렉터
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
