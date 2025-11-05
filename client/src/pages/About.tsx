import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import aboutImage from "@assets/Introduce_1762357190906.png";

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-12 flex justify-center">
            <img
              src={aboutImage}
              alt="GOYO GALLERY"
              className="w-full max-w-2xl"
              data-testid="img-about"
            />
          </div>

          <div className="text-foreground leading-relaxed">
            <p>고요갤러리는 동시대 미술의 사유와 감각을 탐색하는 전시 플랫폼입니다.</p>
            <p>신진부터 중견에 이르는 작가들과 협업해 명확한 큐레이션을 제안합니다.</p>
            <p>회화, 조각, 사진, 미디어 등 다양한 매체를 아우르며 실험적 태도를 지향합니다.</p>
            <p>토크, 리서치, 에디션 프로젝트를 통해 작품의 맥락과 담론을 확장합니다.</p>
            <p>관객이 작품과 도시의 시간을 조용히 연결하는 예술적 경험을 설계합니다.</p>

            <div className="pt-8" />

            <p>GOYO Gallery is a curatorial platform that explores the thought and sensibility of contemporary art.</p>
            <p>It collaborates with both emerging and established artists to present a distinct curatorial vision.</p>
            <p>Crossing the boundaries of painting, sculpture, photography, and media, it pursues experimentation.</p>
            <p>Through talks, research, and edition projects, it expands the context and discourse of art.</p>
            <p>It designs contemplative experiences that quietly connect viewers with art and the rhythm of the city.</p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
