import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function ArtistDetail_jangseil() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />

      <main className="pt-32 pb-16 flex-1">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-semibold mb-2 text-foreground" data-testid="text-artist-name">
            <span>장세일</span>
            <span className="text-2xl md:text-3xl font-light ml-2">JANG SeIl</span>
            </h1>
            <h3 className="text-l md:text-xl font-light mb-2 text-foreground/80">
              B.1981 Based in Gyeonggi, KR
            </h3>
            <div className=" mb-12 text-sm text-muted-foreground ">
            </div>
            <div className="mb-20">
              <img src="/images/Artist/jangseil/01_jsi.jpg" alt="장세일" className="w-full md:w-3/4 lg:w-2/4  rounded-md mb-2" />
              <p className="text-xs text-muted-foreground ">
                 JANG SeIl &lt;Standard animal(2025)&gt; Resin Urethane Coating 210x50x170cm 
              </p>
            </div>


            <div class="prose prose-m max-w-none mb-12 space-y-6 text-foreground leading-relaxed">
              <p>Not everyone may be this way, but I believe that most people gradually refine their personalities, appearances, and much of what they own to fit the standards required for life in the city. Thinking along these lines, it feels as though those who pass through the rectangular gate to enter the glittering, dazzling city end up living in shapes that resemble the city itself—rectangular and standardized.</p>
              <p>My works, too, have passed through this rectangular gate of the city. The animal forms, neatly polished here and there and dressed in bright, vivid colors, embody the kind of adaptation I wish to speak about. As I create these pieces, I find myself wondering what color and shape I am taking on within the city, and just how neatly and rigidly I am being smoothed into place.</p>


            </div>
            <div className="h-px w-full bg-border mb-8" />


            <div class="prose prose-m max-w-none mb-12 space-y-6 text-foreground leading-relaxed">
              <p>모두가 그렇지는 않겠지만 대부분의 사람들은 도시에 적응하기 위해서 성격, 외모, 소유하고 있는 대부분의 것들을 규격에 맞게 다듬어가고 있다고 생각한다. 그런 생각을 하다 보니 반짝이고 화려한 도시에 들어오기 위해서 사각형 문을 통과한 사람들은 대부분 도시와 같은 사각형 모양으로 살고 있는 것처럼 느껴진다.</p>
              <p>그리고 나의 작품들 역시 도시의 사각형 문을 지나왔다. 반짝이고 화려한 색을 띠며 여기저기 반듯하게 다듬어져 있는 동물의 형태는 내가 말하고 싶은 적응의 모습을 설명하고 있다. 이러한 작업을 하며 도시 속을 살아가는 나는 어떤 색과 형태로 얼마나 반듯하게 다듬어져 가고 있을지 추측해본다.</p>


            </div>

          </div>
          <div className="h-px w-full bg-border mb-16" />

          <div className="space-y-12">
            <div>
              <img
                src="/images/Artist/jangseil/01_jsi.jpg"
                alt="장세일"
                className="w-full rounded-md mb-2"
              />
                <p className="text-xs text-muted-foreground">
                  JANG SeIl &lt;Standard animal(2025)&gt; Resin Urethane Coating 210x50x170cm 
              </p>
            </div>
            <div>
              <img
                src="/images/Artist/jangseil/02_jsi.jpg"
                alt="장세일"
                className="w-full rounded-md mb-2"
              />
                  <p className="text-xs text-muted-foreground">
                    JANG SeIl &lt;Standard animal(2025)&gt; Resin Urethane Coating 48x12x29cm 
              </p>
            </div>
            <div>
              <img
                src="/images/Artist/jangseil/03_jsi.jpg"
                alt="장세일"
                className="w-full rounded-md mb-2"
              />
                  <p className="text-xs text-muted-foreground">
                    JANG SeIl &lt;Standard animal(2025)&gt; Resin Urethane Coating 45x12x40cm
              </p>
            </div>
            <div>
              <img
                src="/images/Artist/jangseil/04_jsi.jpg"
                alt="장세일"
                className="w-full rounded-md mb-2"
              />
                  <p className="text-xs text-muted-foreground">
                    JANG SeIl &lt;Standard animal(2025)&gt; Resin Urethane Coating 43x12x40cm
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
                  장세일 JANG SeIl
                </span>
                <span className="text-m text-muted-foreground">
                  B.1981 Based in Gyeonggi, KR
                </span>
              </div>
            </div>


            {/* 학력 */}
            <section>
              <h3 className="text-m font-semibold text-foreground mt-14">학력</h3>
              <p className="text-m text-muted-foreground leading-snug">
                2007–2011 수원대학교 조소과 졸업 및 동대학원 졸업<br />
                2025 충남대학교 조소과 대학원 박사과정 재학
              </p>
            </section>

            {/* 수상 */}
            <section>
              <h3 className="text-m font-semibold text-foreground mb-1">수상</h3>
              <p className="text-m text-muted-foreground leading-snug">
                2008 제27회 대한민국 미술대전 비구상부문 최우수상
              </p>
            </section>

            {/* 개인전 */}
            <section>
              <h3 className="text-m font-semibold text-foreground mb-1">개인전</h3>
              <p className="text-m text-muted-foreground leading-snug">
                2024 I am still fitting in. 아직도 적응 중, 페이토 갤러리, 서울<br />
                2021 HUMANIMAL 전, 본갤러리, 서울<br />
                2020 바디프랜드 x 장세일 전, 바디프랜드 도산점, 서울<br />
                2019 홍콩 하버 아트페어 특별전, 하버시티, 홍콩<br />
                2018 standard animal 전, 노블레스 컬렉션, 서울<br />
                2016 국회문화공간조성기획 standard animal 12지 전, 국회의원회관, 서울<br />
                2013 standard animal 전, 갤러리 포월스, 서울<br />
                2010 standard animal 전, 코사 스페이스, 서울
              </p>
            </section>

            {/* 단체전 / 아트페어 */}
            <section>
              <h3 className="text-m font-semibold text-foreground mb-1">단체전 · 아트페어</h3>
              <p className="text-m text-muted-foreground leading-snug">
                2025 인천아트쇼, 송도컨벤시아·갤러리미즈, 인천<br />
                  2025 Diaf-대구 국제아트페어, 갤러리미즈·EXCO, 대구<br />
                  2025 경남국제아트페어, 갤러리미즈·창원컨벤션센터, 창원<br />
                  2025 KIAF SEOUL, 갤러리미즈·코엑스, 서울<br />
                  2025 대만 한국작가 단체전 한월 전, Mioka Art, 대만<br />
                  2025 화랑미술제 in 수원, 갤러리미즈·수원컨벤션센터, 수원<br />
                  2025 조형아트서울, 갤러리미즈·코엑스, 서울<br />
                  2025 아트페어 대구, 갤러리미즈·엑스코, 대구<br />
                  2025 아트부산, 갤러리미즈·벡스코, 부산<br />
                  2025 화랑미술제, 갤러리미즈·코엑스, 서울<br />
                  2025 BAMA, 갤러리미즈·벡스코, 부산<br />
                  2025 Art X SEOUL, 갤러리미즈·신라호텔, 서울<br />
                  2025 조각도시 서울, 의정부지, 서울<br />
                  2025 G-ART SHOW, 갤러리미즈·코엑스, 서울<br />
                  2024 핑크아트페어, 갤러리미즈·메리어트호텔, 서울<br />
                  2024 YOUNG KOREA 전, YK갤러리, 경기도<br />
                  2024 인천아트쇼, 갤러리미즈·송도컨벤시아, 인천<br />
                  2024 Diaf-대구국제아트페어, 갤러리미즈·EXCO, 대구<br />
                  2024 노아의 방주 전, 아트파크·세브란스 아트스페이스·신촌세브란스, 서울<br />
                  2024 타이중 아트페어, 타이중호텔, 대만<br />
                  2023 내 마음에 한 조각 전, 춘천문화재단, 춘천<br />
                  2023 MY FAVORITE 전, 매스갤러리, 서울<br />
                  2023 반복과 공존 전, 필갤러리, 서울<br />
                  2023 기획초대 3인전, 베누스갤러리, 경기도<br />
                  2022 플라시보 바이러스 전, 충무로갤러리, 서울<br />
                  2022 부산 국제 화랑 아트페어, 벡스코, 부산<br />
                  2022 블루아트페어, 조선호텔, 부산<br />
                  2021 LOVE FEEDS LOVE, 갤러리MASS, 서울<br />
                  2021 조형아트서울 K-Pop Sculpture, 코엑스, 서울<br />
                  2021 A Piece of Animal : 동물 한 조각 전, 동탄 아트스페이스, 화성<br />
                  2020 부산 국제 화랑 아트페어, 벡스코, 부산<br />
                  2020 핑크아트페어, 인터컨티넨탈호텔, 서울<br />
                  2020 조형아트서울, 코엑스, 서울<br />
                  2019 홍콩 하버 아트페어, 마르코폴로 호텔, 홍콩<br />
                  2019 화랑미술제, 코엑스, 서울<br />
                  2018 서울아트쇼, 코엑스, 서울<br />
                  2018 아트아시아, 킨텍스, 일산<br />
                  2018 평택 소사벌 야외조각전, 경기도·평택<br />
                  2018 아트경기, 경기도<br />
                  2018 ACAF 전, 예술의전당, 서울<br />
                  2018 장흥아트밸리 BH갤러리 & 카페 야외조각초대전, KFA아트밸리, 양주<br />
                  2017 옆집예술 오픈 스튜디오, 경기문화재단<br />
                  2017 선물 전, 카라스갤러리, 서울<br />
                  2016 쏠비치 개관기념전, THE GALLERY D_SolBeach, 강원도<br />
                  2016 come out 전, 카라스갤러리, 서울<br />
                  2015 수원시립 아이파크 미술관 개관기념전, 수원시립 아이파크 미술관, 수원<br />
                  2015 Snoopy In Love, 에비뉴엘 월드타워점 아트홀<br />
                  2015 부산 국제화랑아트페어, 벡스코, 부산<br />
                  2013 가든아트 사파리 전, 공아트 스페이스, 서울<br />
                  2013 홍콩 컨템포러리 아트페어, 엑셀시어호텔, 홍콩<br />
                  2013 탄생 전, 양평군립미술관, 양평<br />
                  2013 전통의 울림 전, 이랜드문화재단, 서울<br />
                  2012 도어즈아트페어, 임피리얼 팰리스호텔, 서울<br />
                  2012 한국현대미술제, 예술의전당, 서울<br />
                  2011 불시착, 낯선 풍경 전, 시립미술관, 서울<br />
                  2010 경기도의 힘 전, 경기도미술관, 안산<br />
                  2008 제27회 대한민국 미술대전, 서울시립미술관 경희궁별관, 서울
              </p>
            </section>
            {/* 작품소장 */}
            <section>
              <h3 className="text-m font-semibold text-foreground mb-1">작품소장</h3>
              <p className="text-m text-muted-foreground leading-snug">
                한국미술협회, 경기도미술관, 임피리얼 팰리스호텔 서울, 이랜드문화재단, 영종대교기념관, 영무파라드호텔
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
