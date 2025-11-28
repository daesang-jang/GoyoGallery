import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function About() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />
      
      <main className="pt-32 pb-16 flex-1">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-semibold mb-4 text-foreground" data-testid="text-page-title">ABOUT</h1>
            <div className="h-px w-24 bg-border mb-6" />
          <br />
            <img
              src="/images/Goyo/about.png"
              alt="GOYO GALLERY"
              className="w-full max-w-2xl"
              data-testid="img-about"
            />
          </div>

            <div className="max-w-3xl text-left text-foreground text-base md:text-lg leading-relaxed space-y-4">
            {/* EN */}
            <p>For artists, we offer the courage to create,<br />
            For collectors, the joy of new discoveries,<br />
            And for the public, warm moments where art gently enters everyday life.</p>

            <p>
              Goyo Gallery is founded on this philosophy, striving for a healthy and sustainable circulation
              within the Korean art ecosystem. We discover and support experimental and innovative artists,
              expanding the diversity and potential of Korean contemporary art through their unique perspectives.
              Beyond the domestic scene, we actively foster international connections to share the value of
              Korean art with the world.
            </p>

            <p>
              We envision a space where art, people, and society come together naturally&mdash;where the artist’s
              vision meets the viewer’s emotion, creating an invisible resonance. Goyo Gallery aims to become a
              place where that resonance deepens, grows, and carries forward with sincerity.
            </p>

            <p>
              Goyo Gallery values the enduring power of art. Rather than following fleeting trends, we pursue
              exhibitions that remain meaningful over time. We seek to create a space where experimentation,
              emotion, and the language of our era coexist harmoniously. We believe in moments where the
              authenticity of the artist flows through the work, and the viewer discovers their own quiet
              resonance within it.
            </p>

            <div className="pt-8" />

            {/* KR */}
            <p>작가에게는 창작의 용기를,<br />
            컬렉터에게는 새로운 발견의 기쁨을,<br />
            그리고 대중에게는 예술이 스며드는 따뜻한 순간을.</p>

            <p>
              고요갤러리는 이러한 철학을 바탕으로 한국 미술문화의 건강한 순환과 지속 가능한 발전을 지향합니다.
              실험적이고 창의적인 작가를 발굴·지원하며, 그들의 독창적인 시선을 통해 한국 미술의 다양성과 가능성을
              확장해 나가고 있습니다. 국내를 넘어 국제 무대와의 적극적인 교류를 통해 우리 예술의 가치를 세계에 알리고자
              합니다. 예술과 사람, 그리고 세상이 자연스럽게 연결되는 공간. 그 안에서 작가의 시선과 관람객의 마음이
              맞닿는 순간, 보이지 않는 울림이 피어난다고 믿습니다. 고요갤러리는 그 울림이 더 깊고 멀리 전해지는 진심이
              머무는 갤러리로 성장하고자 합니다.
            </p>

            <p>
              고요갤러리는 예술이 오래 머무는 힘에 가치를 둡니다.
              잠시 스쳐가는 유행보다, 시간이 지나도 의미가 남는 전시를 만들어가고자 합니다.
              우리는 실험과 감성, 그리고 시대의 언어가 자연스럽게 공존하는 공간을 지향합니다.
              작가의 진정성이 스며들고, 관람자가 그 안에서 자신만의 울림을 발견하는 순간을 믿습니다.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
