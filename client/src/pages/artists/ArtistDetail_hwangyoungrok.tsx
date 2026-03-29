import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function ArtistDetail_hwangyoungrok() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />

      <main className="pt-32 pb-16 flex-1">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-semibold mb-2 text-foreground" data-testid="text-artist-name">
            <span>황영록</span>
            <span className="text-2xl md:text-3xl font-light ml-2">HWANG YoungRok</span>
            </h1>
            <h3 className="text-l md:text-xl font-light mb-2 text-foreground/80">
              B.2000 Based in Busan, KR
            </h3>
            <div className=" mb-12 text-sm text-muted-foreground ">
            </div>
            <div className="mb-20">
              <img src="/images/Artist/hwangyoungrok/01_hyr.jpg" alt="황영록" className="w-full md:w-3/4 lg:w-3/4  rounded-md mb-2" />
              <p className="text-xs text-muted-foreground ">
                HWANG YoungRok &lt;경계넘어(2024)&gt; 장지에 먹,무소블랙 91.0x91.0cm
              </p>
            </div>


            <div class="prose prose-m max-w-none mb-12 space-y-6 text-foreground leading-relaxed">
              <p>I seek to capture the stillness and resilience inherent in nature, as well as the subtle transformations that emerge within it. Even when painting 침엽수, I aim not merely to depict its outward form, but also to express the time, emotion, and invisible currents that flow through it.</p>
                <p>At the core of my work lies the contrast between black and white. Although black and white possess opposing qualities, it is precisely this opposition that makes each more distinct. Through this contrast, I seek to visualize the flow of emotion and the shifts of the inner self between background and object.</p>
                <p>The harmony of light and darkness goes beyond a simple visual effect; it becomes a means of revealing the balance of existence and the emotions that reside on the other side of the world. Light becomes clearer within darkness, and darkness gains a new depth through light. Through this relationship, I hope viewers may find comfort and peace in nature, and experience a moment of quiet reflection in which they can gently face their own inner selves.</p>
                <p>In some works, I also employ an abstract technique of splashing pigment. This method emerged from a sense of loneliness I felt while working. Spending long hours facing nature and painting, I often felt as though somewhere within my heart had become empty.</p>
                <p>Yet at the moment I splashed the pigment, the unexpected marks that filled the surface came to me with an unexpected warmth. Those traces, like comfort arriving without words, allowed the grain of emotion to permeate the still surface naturally, and it felt as though they were filling the emptiness in my heart that I had not fully recognized.</p>
                <p>Loneliness, peace, anxiety, consolation—all of these emotions became intermingled within the scattered pigment, and at some moment, they were joined by a small sense of joy and delight.</p>
                <p>Grounded in traditional Korean painting techniques while incorporating a contemporary visual language, I seek to explore new possibilities of form. Through diverse attempts that move beyond the boundaries of tradition and modernity, stillness and freedom, I will continue to create works that convey emotion through nature, and that offer empathy and consolation.</p>

            </div>
            <div className="h-px w-full bg-border mb-8" />


            <div class="prose prose-m max-w-none mb-12 space-y-6 text-foreground leading-relaxed">
              <p>저는 자연이 지닌 고요함과 강인함, 그리고 그 안에서 피어나는 미세한 변화를 포착하고자 합니다. 침엽수를 그릴
                때에도 단순히 외형을 묘사하는 것을 넘어, 그 안에 흐르는 시간과 감 정, 보이지 않는 흐름까지 함께 표현하려 합
                니다.</p>
                <p>작업에서 가장 중심이 되는 것은 흑백의 대 비입니다. 흑과 백은 서로 상반된 성질을 지니고 있지만, 오히려 그 상
                반됨이 서로를 더욱 뚜 렷하게 만들어 줍니다. 저는 이 대비를 통해 배경과 오브제 사이에 감정의 흐름과 내면의
                변 주를 시각화하고자 합니다.</p>
                <p>빛과 어둠의 조화는 단순한 시각적 효과를 넘어, 존재의 균형과 세상의 이면에 자리한 감정들을 드러내는 도구가
                됩니다. 밝음은 어둠 속에서 더욱 선명해지 고, 어둠은 빛에 의해 새로운 깊이를 갖게 됩니다. 저는 이러한 관계를
                통해 관람객이 자연을 통해 위로와 평온을 느끼고, 자신의 내면과 조용히 마주할 수 있는 사색의 경험을 선사하고
                자 합니다.</p>
                <p>이외에도 일부 작업에서는 물감을 흩뿌리는 추상적 기법을 사용하고 있습니다. 이 기 법은 작업 중 느꼈던 외로움
                에서 비롯되었습니다. 오랜 시간 자연을 마주하며 그림을 그리다 보면, 마음 어딘가가 비어 있는 듯한 기분이 들곤
                했습니다.</p>
                <p>그러다 물감을 흩뿌리는 순간, 의 도하지 않은 자국들이 화면을 채우는 그 우연성이 오히려 따뜻하게 다가왔습니
                다. 그 흔적들 은 마치 말 없이 다가오는 위로처럼, 고요한 화면 속에 감정의 결을 자연스럽게 스며들게 했 고, 제
                가 미처 닿지 못한 마음의 빈틈을 채워주는 느낌이었습니다.</p>
                <p>외로움, 평온, 불안, 위로 그 모든 감정들이 흩뿌려진 물감 안에서 뒤섞이고, 어느 순간엔 작은 기쁨과 재미로도 다
                가 왔습니다.</p>
                <p>저는 전통 한국화 기법을 바탕으로 하되, 현대적 시각 언어를 결합하여 새로운 조형 적 가능성을 모색하고자 합니
                  다. 전통과 현대, 정형과 자유의 경계를 넘나드는 다양한 시도를 통해 자연을 통해 감정을 전달하고, 공감과 위로
                  를 건네는 작업을 지속해 나갈 예정입니다.</p>
            </div>

          </div>
          <div className="h-px w-full bg-border mb-16" />

          <div className="space-y-12">
            <div>
              <img
                src="/images/Artist/hwangyoungrok/01_hyr.jpg"
                alt="황영"
                className="w-full rounded-md mb-2"
              />
                <p className="text-xs text-muted-foreground">
                  HWANG YoungRok &lt;경계넘어(2024)&gt; 장지에 먹,무소블랙 91.0x91.0cm
              </p>
            </div>
            <div>
              <img
                src="/images/Artist/hwangyoungrok/02_hyr.jpg"
                alt="황영록"
                className="w-full rounded-md mb-2"
              />
                  <p className="text-xs text-muted-foreground">
                  HWANG YoungRok &lt;시야(2024)&gt; 장지에 먹,무소블랙 65.0x91.0cm 
                  </p>
            </div>
            <div>
              <img
                src="/images/Artist/hwangyoungrok/03_hyr.jpg"
                alt="황영록"
                className="w-full rounded-md mb-2"
              />
                  <p className="text-xs text-muted-foreground">
                    HWANG YoungRok &lt;공허하게 느껴져도(2024)&gt; 장지에 채색 35.0x90.0cm
              </p>
            </div>
            <div>
              <img
                src="/images/Artist/hwangyoungrok/04_hyr.jpg"
                alt="황영록"
                className="w-full rounded-md mb-2"
              />
                  <p className="text-xs text-muted-foreground">
                  HWANG YoungRok &lt;눈처럼 흩어진(2025)&gt; 장지에 먹, 아크릴 27.3x110.0cm
              </p>
            </div>
            <div>
              <img
                src="/images/Artist/hwangyoungrok/05_hyr.jpg"
                alt="황영록"
                className="w-full rounded-md mb-2"
              />
                  <p className="text-xs text-muted-foreground">
                    HWANG YoungRok &lt;흰 침묵의 무게(2025)&gt; 빠데, 먹, 아크릴 65.0x50.0cm
              </p>
            </div>
            <div>
              <img
                src="/images/Artist/hwangyoungrok/06_hyr.jpg"
                alt="황영록"
                className="w-full rounded-md mb-2"
              />
                  <p className="text-xs text-muted-foreground">
                    HWANG YoungRok &lt;오늘은 다시 하얀 기억 속에 서 있었다(2025)&gt; 장지에 먹,아크릴 33.4x24.2cm
              </p>
            </div>
            <div>
              <img
                src="/images/Artist/hwangyoungrok/07_hyr.jpg"
                alt="황영록"
                className="w-full rounded-md mb-2"
              />
                  <p className="text-xs text-muted-foreground">
                    HWANG YoungRok &lt;바라보다 잊었다(2025)&gt; 장지에 먹,무소블랙 27.3x22.0cm
              </p>
            </div>
            <div>
              <img
                src="/images/Artist/hwangyoungrok/08_hyr.jpg"
                alt="황영록"
                className="w-full rounded-md mb-2"
              />
                  <p className="text-xs text-muted-foreground">
                    HWANG YoungRok &lt;잊으며 바라봤다(2025)&gt; 장지에 먹,무소블랙 27.3x22.0cm
              </p>
            </div>

            <div className="h-px w-full mb-16" />


          </div>
           <div className="h-px w-full bg-border mb-16" />



        <div className="prose prose-m max-w-none text-m text-muted-foreground leading-relaxed space-y-4">
          <div className="mt-10 max-w-4xl mx-auto text-m text-muted-foreground leading-relaxed space-y-4">
            <h2 className="text-2xl md:text-3xl font-light mb-12 text-foreground/80"> 
            </h2>
            <div className="mb-18">
              <div className="flex flex-col leading-none">
                <span className="text-2xl font-bold text-foreground mb-3">
                  황영록 HWANG YoungRok
                </span>
                <span className="text-m text-muted-foreground">
                  B.2000 Based in Busan, KR
                </span>
              </div>
            </div>


            {/* 학력 */}
            <section>
              <h3 className="text-m font-semibold text-foreground mt-14">학력</h3>
              <p className="text-m text-muted-foreground leading-snug">
                2025 경성대학교 미술학과 졸업
              </p>
            </section>

            {/* 개인전 */}
            <section>
              <h3 className="text-m font-semibold text-foreground mb-1">개인전</h3>
              <p className="text-m text-muted-foreground leading-snug">
                2025 작은 공간 속 미 초대개인전 (부산 산목&amp;휘갤러리)<br />
                2024 진함과 연함의 존재는 무한하다 초대개인전 (부산 프라다바코 아몬드)
              </p>
            </section>

            {/* 단체전 */}
            <section>
              <h3 className="text-m font-semibold text-foreground mb-1">단체전</h3>
              <p className="text-m text-muted-foreground leading-snug">
                2026 갤러리 이웰 - 각자의 처음 (Each, at the Beginning)<br />
                2025 Under Art : 기억의 향 대한민국 문화도시 수영 골목 예술 프로젝트<br />
                2025 부산 미술협회 청년작가전 제 13회 미술로 꿈을 꾸게 하다<br />
                2025 범향 갤러리 동상이몽 청년작가 특별전<br />
                2025 제5회 KT&amp;G 상상마당 신진작가 '아티스타트(Artistart)'<br />
                2025 정준호 갤러리 우수졸업 작품전<br />
                2024 제50회 부산미술대전<br />
                2024 갤러리 예가 청년작가 기획초대전<br />
                2024 갤러리 한스 특별기획 신진작가 4인전<br />
                2024 &lt;Nature, Breath&gt; 스페이스 별일 갤러리<br />
                2024 상상마당 X 인터파크 Y- 아티스트 전시<br />
                2024 부산 갤러리 림해 개관 2주년 기념 특별기획전<br />
                2023 디그리쇼 부산
              </p>
            </section>

            {/* 기타 */}
            <section>
              <h3 className="text-m font-semibold text-foreground mb-1">기타</h3>
              <p className="text-m text-muted-foreground leading-snug">
                2025 오사카 아트페어 STUDY X PLAS ASIA<br />
                2025 울산국제아트페어 UIAP<br />
                2025 조형아트 서울 PLAS ART SEOUL<br />
                2025 부산 BAMA 부산국제화랑아트페어 2030 포커스 온 특별전 (20s30s Focus On)<br />
                2025 ArtX Seoul 신라호텔 페어<br />
                2024 부산 홈테이블데코 벡스코<br />
                2024 부산 BAMA 부산국제화랑아트페어<br />
                "Young Frontier SpecialX: 영프론티어 특별전
              </p>
            </section>

            {/* 수상 */}
            <section>
              <h3 className="text-m font-semibold text-foreground mb-1">수상</h3>
              <p className="text-m text-muted-foreground leading-snug">
                2025 제5회 KT&amp;G 상상마당 아티스타트 장려상 수상<br />
                2024 제50회 부산미술대전 한국화부문 입선 수상
              </p>
            </section>
          </div>
          </div>
          </div>

      </main>

      <Footer />
    </div>
  );
}
