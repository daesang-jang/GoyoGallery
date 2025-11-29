import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function ArtistDetail_leeyoungji() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />

      <main className="pt-32 pb-16 flex-1">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-semibold mb-2 text-foreground" data-testid="text-artist-name">
            <span>이영지</span>
            <span className="text-2xl md:text-3xl font-light ml-2">LEE YoungJi</span>
            </h1>
            <h3 className="text-l md:text-xl font-light mb-2 text-foreground/80">
              B.1975 Based in Seoul, KR
            </h3>
            <div className=" mb-12 text-sm text-muted-foreground ">
            </div>
            <div className="mb-20">
              <img src="/images/Artist/leeyoungji/01_lyj.jpg" alt="이영지" className="w-full md:w-3/4 lg:w-2/4  rounded-md mb-2" />
              <p className="text-xs text-muted-foreground ">
                LEE YoungJi &lt;바람 속의 멜로디(2025)&gt; Bunchae on Jangji 91.0x91.0cm 
              </p>
            </div>


            <div class="prose prose-m max-w-none mb-12 space-y-6 text-foreground leading-relaxed">
              <p>Amid the constant changes of life, as we pass through moments of joy, anger, sorrow, and delight, we come to recognize ourselves sometimes flowing onward and sometimes remaining still. In those moments of quiet awareness, when we pause and look back, we truly feel that we are alive and come to realize the preciousness of life itself.</p>
              <p>This sense of life is symbolized by a single point: one point indicates existence, two points become a line, and three points transform into a triangle. In the same way, everything begins from a small point. When I paint trees, I therefore render each leaf one by one, emphasizing its presence and the importance of its individual existence.</p>
              <p>I capture in my paintings the many forms and changing expressions that arise within our ordinary lives. The “birds” that appear in these works are, in fact, reflections of ourselves—embodiments of what we wish to express but fail to articulate, of things from the past that we have forgotten, and of the many aspects we hide and cannot reveal. Each bird may be another version of myself, or a figure I long for and admire.</p>


            </div>
            <div className="h-px w-full bg-border mb-8" />


            <div class="prose prose-m max-w-none mb-12 space-y-6 text-foreground leading-relaxed">
              <p>인생의 변화 속에서 희노애락을 지나치다 보면 흐르기도 하고 머물러 있기도 한 자신을 발견한다. 어느 순간 느끼며 뒤돌아볼 때 살아있음을 느끼고 생명의 소중함을 발견하게 된다.</p>
              <p>이런 생명은 점에서 상징되어, 한 점은 존재, 두 점은 선, 세 개의 점은 삼각형으로 변화하는 것과 같이 그 출발은 작은 점에서 시작한다. 그래서 나무를 그릴 때 잎사귀 역시 하나하나 표현함으로써 그 존재감을 중요하게 나타낸다.</p>
              <p>우리의 평범한 삶 속에서 일어나는 다양한 모습들, 표정들의 여러 변화하는 과정을 그림에 담아낸다. 여기에 나타나는 ‘새’ 또한 우리의 모습을 나타내는 것이다. 표현하고 싶지만 미처 표현하지 못하는 것, 과거 잊고 지낸 것, 드러내지 못하고 숨겨야 하는 여러 모습들을 ‘새’라는 매개체를 통해 나타내고 있다. 그 새는 내 자신일 수도 있고, 내가 부러워하는 대상일 수도 있다.</p>


            </div>

          </div>
          <div className="h-px w-full bg-border mb-16" />

          <div className="space-y-12">
            <div>
              <img
                src="/images/Artist/leeyoungji/01_lyj.jpg"
                alt="이영지"
                className="w-full rounded-md mb-2"
              />
                <p className="text-xs text-muted-foreground">
                  LEE YoungJi &lt;바람 속의 멜로디(2025)&gt; Bunchae on Jangji 91.0x91.0cm
              </p>
            </div>
            <div>
              <img
                src="/images/Artist/leeyoungji/02_lyj.jpg"
                alt="이영지"
                className="w-full rounded-md mb-2"
              />
                  <p className="text-xs text-muted-foreground">
                    LEE YoungJi &lt;한아름 안고(2025)&gt; Bunchae on Jangji 72.7x60.6cm
              </p>
            </div>
            <div>
              <img
                src="/images/Artist/leeyoungji/03_lyj.jpg"
                alt="이영지"
                className="w-full rounded-md mb-2"
              />
                  <p className="text-xs text-muted-foreground">
                    LEE YoungJi &lt;멈추지 않아 우리 함께(2025)&gt; Bunchae on Jangji 60.6x72.7cm
              </p>
            </div>
            <div>
              <img
                src="/images/Artist/leeyoungji/04_lyj.jpg"
                alt="이영지"
                className="w-full rounded-md mb-2"
              />
                  <p className="text-xs text-muted-foreground">
                    LEE YoungJi &lt;더 밝게 빛나줘(2025)&gt; Bunchae on Jangji 53.0x45.5cm
              </p>
            </div>
            <div>
              <img
                src="/images/Artist/leeyoungji/05_lyj.jpg"
                alt="이영지"
                className="w-full rounded-md mb-2"
              />
                  <p className="text-xs text-muted-foreground">
                    LEE YoungJi &lt;너는 나의 빛(2025)&gt; Bunchae on Jangji 53.0x45.5cm
              </p>
            </div>
            <div>
              <img
                src="/images/Artist/leeyoungji/06_lyj.jpg"
                alt="이영지"
                className="w-full rounded-md mb-2"
              />
                  <p className="text-xs text-muted-foreground">
                    LEE YoungJi &lt;이궁 내 사랑(2025)&gt; Bunchae on Jangji 27.3x27.3cm
              </p>
            </div>
            <div>
              <img
                src="/images/Artist/leeyoungji/07_lyj.jpg"
                alt="이영지"
                className="w-full rounded-md mb-2"
              />
                  <p className="text-xs text-muted-foreground">
                  LEE YoungJi &lt;뭐 이리 설레게 해(2025)&gt; Bunchae on Jangji 27.3x27.3cm             </p>
            </div>
            <div>
              <img
                src="/images/Artist/leeyoungji/08_lyj.jpg"
                alt="이영지"
                className="w-full rounded-md mb-2"
              />
                  <p className="text-xs text-muted-foreground">
                  LEE YoungJi &lt;앗싸 넌 나(2025)&gt; Bunchae on Jangji 27.3x27.3cm              </p>
            </div>
            <div>
              <img
                src="/images/Artist/leeyoungji/09_lyj.jpg"
                alt="이영지"
                className="w-full rounded-md mb-2"
              />
                  <p className="text-xs text-muted-foreground">
                  LEE YoungJi &lt;여엉차 너에게(2025)&gt; Bunchae on Jangji 27.3x27.3cm              </p>
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
                  이영지 LEE YoungJi
                </span>
                <span className="text-m text-muted-foreground">
                  B.1975 Based in Seoul, KR
                </span>
              </div>
            </div>


            {/* 학력 */}
            <section>
              <h3 className="text-m font-semibold text-foreground mt-14">학력</h3>
              <p className="text-m text-muted-foreground leading-snug">
                성신여자대학교 대학원 동양화과 졸업 및 동대학원 졸업
              </p>
            </section>

            {/* 개인전 */}
            <section>
              <h3 className="text-m font-semibold text-foreground mb-1">개인전</h3>
              <p className="text-m text-muted-foreground leading-snug">
                2025 제16회 In Your Silence, 선화랑, 서울<br />
                  2023 제15회 Stay with me, 선화랑, 서울<br />
                  2022 제14회 속닥속닥, 아트소향, 부산<br />
                  2021 제13회 BLOSSOM, 갤러리 아트리에, 판교<br />
                  2021 제12회 숲속숨쉼씀, 선화랑, 서울<br />
                  2019 제11회 봄, 너와 함께, 2448 문파인아츠, 서울<br />
                  2018 제10회 네가 행복하니 내가 행복해, 선화랑, 서울<br />
                  2017 제9회 느린 이야기, 공간시은, 전주<br />
                  2016 제8회 개인전, Art1, 전주<br />
                  2015 제7회 봄봄, 아트컴퍼니 긱, 서울<br />
                  2014 제6회 사랑, 그 아름다운 구속, 아트팩토리, 서울<br />
                  2013 제5회 쬐깐한 이야기, 갤러리진선, 서울<br />
                  2011 제4회 동행, 갤러리진선, 서울<br />
                  2006 제3회 개인전, 공평아트센터, 서울<br />
                  2002 제2회 개인전, 관훈갤러리, 서울<br />
                  1998 제1회 개인전, 삼정아트스페이스, 서울
              </p>
            </section>

            {/* 단체전 / 아트페어 */}
            <section>
              <h3 className="text-m font-semibold text-foreground mb-1">단체전</h3>
              <p className="text-m text-muted-foreground leading-snug">
                2025 圍繞的幸福 위요적 행복, 신주 쉐라톤, 대만<br />
                2024 흔적 3인전, 서예지·이나영·이영지, 아트소향, 부산<br />
                2024 Picturesque 3인전, 최영욱·윤병락·이영지, 갤러리일호, 서울<br />
                2024 스며,듦 — Seep in·Soak 2인전, 이애리·이영지, 갤러리나우, 서울<br />
                2023 Winter Masterpieces, 선화랑, 서울<br />
                2023 Under200, 아트소향, 부산<br />
                2022 한국 현대미술 45년의 궤적과 오늘의 얼굴, 선화랑, 서울<br />
                2022 Korean Artists, 신세계 센텀시티, 부산<br />
                2022 Quintet 5인전, 갤러리벨비, 서울<br />
                2021 Lilac : 젊은 날의 추억, 갤러리일호, 서울<br />
                2021 작은 그림전, 갤러리벨비, 서울<br />
                2020 특별한 선물전, 선화랑, 서울<br />
                2020 봄바람 휘휘호호, 신세계갤러리, 대구<br />
                2020 이영섭·이영지 2인전, 문파인아츠, 서울<br />
                2020 밤과 낮의 소리 3인전, 슈페리어갤러리, 서울<br />
                2020 Under200, 아트소향, 부산<br />
                2019 특별한 선물전, 선화랑, 서울<br />
                2019 The Forest, 조은갤러리, 서울<br />
                2019 올미씨의 행복여행전, 올미아트스페이스, 서울<br />
                2018 한 여름의 꿈, 2448 문파인아트, 서울<br />
                2018 Happy Together, 갤러리진선, 서울<br />
                2018 Peaceful Garden, 필갤러리, 서울<br />
                2018 봄, 숲으로 오다, 2448 문파인아트, 서울<br />
                2018 특별한 선물전, 선화랑, 서울<br />
                2017 9인9색 성탄선물전, 2448 문파인아트, 서울<br />
                2017 당신 옆에 그림 2인전, 갤러리 아트리에<br />
                2017 선물 — The Nature 2인전, 카라스갤러리, 서울<br />
                2017 아트심포지엄, 테네리페, 스페인<br />
                2016 다정다감전, 아산병원·메이준갤러리<br />
                2016 특별한 선물전, 선화랑, 서울<br />
                2016 커피, 공간으로의 초대, 강릉시립미술관<br />
                2016 Color-ing, 그림손 갤러리<br />
                2016 Come out, 카라스 갤러리<br />
                2016 예감전 – 일상에서 바라본 시선, 선화랑<br />
                2015 HOPE, 길리어드 갤러리<br />
                2015 특별한 선물전, 선화랑, 서울<br />
                2015 Repetition 2인전, fnart space<br />
                2015 자연과 도시, 그림손 갤러리<br />
                2015 Art in mind, 디자인 갤러리<br />
                2015 Bling! Bling!, 아트팩토리, 헤이리<br />
                2015 MAGPINE 개관전, MAGPINE 갤러리
              </p>
            </section>
            
            {/* 작품소장 */}
            <section>
              <h3 className="text-m font-semibold text-foreground mb-1">작품소장</h3>
              <p className="text-m text-muted-foreground leading-snug">
                국립현대미술관 미술은행, 현대상선, 저축은행, 삼성인력개발원 등
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
