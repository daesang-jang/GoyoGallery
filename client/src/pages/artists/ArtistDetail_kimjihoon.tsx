import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function ArtistDetail_kimjihoon() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />

      <main className="pt-32 pb-16 flex-1">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-semibold mb-2 text-foreground" data-testid="text-artist-name">
            <span>김지훈</span>
            <span className="text-2xl md:text-3xl font-light ml-2">KIM JiHoon</span>
            </h1>
            <h3 className="text-l md:text-xl font-light mb-2 text-foreground/80">
              B.1995 Based in Jeju, KR
            </h3>
            <div className=" mb-12 text-sm text-muted-foreground ">
            </div>
            <div className="mb-20">
              <img src="/images/Artist/kimjihoon/01_kjh.jpg" alt="김지훈" className="w-full md:w-3/4 lg:w-3/4  rounded-md mb-2" />
              <p className="text-xs text-muted-foreground ">
              KIM Jihoon &lt;From Emotion(2026)&gt; Acrylic on Canvas 145.5x97.0cm
              </p>
            </div>


            <div class="prose prose-m max-w-none mb-12 space-y-6 text-foreground leading-relaxed">
              <p>Emotion becomes color, and color becomes memory.</p>

              <p>As a child, I spent time in the mountains because of illness, and there, beyond the deep forest, I found friends in the sound of birds. The sound had no visible form, yet it was unmistakably present, sharing both my pain and my laughter. Now, I translate that birdsong into abstraction and place it on the canvas.</p>

              <p>In my work, the stones and stone walls of Jeju symbolize people and society. Like beings that endure by leaning against and relying on one another, I place on the surface the warmth and color expressed through those relationships. What remains are traces of situations and emotions, reconfigured into color and form as a kind of record.</p>

              <p>How can one write birdsong? As a child, I was ill for a long time with nephrotic syndrome, and as a last resort my mother took me to seek alternative medicine in the mountains. Ten-year-old me climbed the mountain every day carrying a lunchbox. It was because eating breakfast after climbing the mountain behind us had become a rule. On a road I did not want to take, I walked along among elderly people whose memories had faded, and after two months, I began climbing the mountain alone.</p>

              <p>That was when I first heard it. From the deep mountain beyond the ridge came the sound of birds. The birds must always have been there, chattering in that place, but they likely had not been heard over the sound of my own restlessness. I shouted back in a loud voice to the birds in the deep mountain beyond. “Who are you?” Then even the small birds on the ridge where I stood began to speak.</p>

              <p>Once I had friends, climbing the mountain became enjoyable. Seeing the reason for the brightness in my face, the director told me to try writing the sound of birds. “How can I write birdsong?” To my hesitation, he said to write it exactly as I felt it. The birdsong I wrote that day was not text but drawing. It was a drawing written in Korean letters.</p>

              <p>I paint birdsong. To me, who desperately needed a friend, the invisible chirping of birds suddenly arriving one day from beyond the deep forest was the laughter of friends rising in my classroom. It had no form, yet it was clearly my friend, my world, my universe. I render in abstraction the birdsong that shares both my suffering and my laughter.</p>

              <p>And I reconstruct in simple forms and colors the stone walls, plants, and other things I constantly saw growing up in Jeju. The picture plane is composed of stones, plants, and color. At times, depending on the event that responds to the work and on the emotions I feel while working, one element emerges more strongly and becomes emphasized.</p>

              <p>The many stones here and there signify people. Though separated and different in form, they are bound together by events and relationships to form a society; at times, the stones become a large rock that brings balance to the composition.</p>

              <p>Various plants—grass, branches, stems, and leaf veins—represent the surrounding environment. The plants around the stone walls may appear externally as though they are entangled, hindering one another’s growth and making each other precarious. Yet as fragile beings, they become one another’s strength against the harsh winds of Jeju, bind the stone walls more firmly together, and endure even typhoons.</p>

              <p>In my work, birdsong has no visible form, yet it signifies precious things that certainly exist for us. And like stones and grass, even things that do have form are not depicted to describe that form itself, but to express the influence they have on one another. I seek to convey the situation, the feeling, and the emotions of that day.</p>
            </div>
            <div className="h-px w-full bg-border mb-8" />


            <div class="prose prose-m max-w-none mb-12 space-y-6 text-foreground leading-relaxed">
              <p>감정은 색이 되고, 색은 기억이 된다.</p>

              <p>어릴 적 병으로 숲에서 지내던 나는, 깊은 숲 너머 새소리에 답하며 친구를 얻었다. 그 소리는 형태는 없지만 분명히 존재했고, 나의 고통과 웃음을 함께했다. 이제 나는 그 새소리를 추상적으로 표현해 화폭에 담는다.</p>

              <p>제주의 돌과 돌담은 나의 작업에서 사람과 사회를 상징한다. 서로 부딪히고 기대며 버티는 모습처럼, 그 관계들로 표출되는 온도와 색을 화면에 담는다. 상황과 감정이 남긴 흔적을 색과 형태로 재구성한 기록이다.</p>

              <p>새소리를 어떻게 쓸 수 있을까? 어릴 적 희귀난치병으로 오래 아파야 했고, 어머니는 마지막 선택으로 아들을 데리고 대체의학을 찾아 산으로 들어갔다. 10살짜리 사내는 매일 돌부리를 차며 산에 올랐다. 뒷산을 오르고 와서 아침을 먹는 것이 규칙이었기 때문이다. 가기 싫은 길, 벗도 없이 기억 없는 어르신들 틈새에 끼어 걷다가 두어달이 지나니 혼자 산을 오르기 시작했다.</p>

              <p>그때 즈음이었다. 뒷산 너머 깊은 산에서 새소리가 들려왔다. 새는 늘 그곳에서 지저귀고 있었겠으나 아마도 나의 투덜거리는 소리에 묻혀 들리지 않았을 것이다. 저 너머 깊은 산에 있는 새들 소리에 큰 목소리로 대답을 했다. “넌 누구냐?” 그러자 내가 서 있는 뒷산의 작은 새들도 말을 걸어왔다.</p>

              <p>친구들이 생기자 산을 오르는 것이 신이 났다. 밝아진 나의 표정의 이유를 들으신 원장님이 새소리를 써보라고 하셨다. ‘새소리를 어떻게 쓸 수 있을까?’ 망설이는 나에게 느낀 그대로 적어보라고 하셨다. 그날 내가 쓴 새소리는 글이 아니라 그림이었다. 한글로 쓴 그림이었다.</p>

              <p>나는 새소리를 그린다. 친구가 절대적으로 필요하던 나에게 어느 날 문득, 갑작스레 찾아온 친구, 깊은 숲 너머 들려오는 보이지 않는 새들의 지저귀는 소리는 나의 교실에서 떠드는 친구들의 웃음소리였다. 그 형태는 없지만 나에게 분명히 친구였던, 나의 친구, 나의 세상, 나의 우주. 나의 고통과 웃음을 함께해주는 새소리를 나는 추상적으로 표현하여 그려낸다.</p>

              <p>그리고 제주에서 나고 자라며 늘 보아왔던 돌담, 식물 등을 단순한 형태와 색상으로 재구성한다. 화면은 돌, 식물, 색감으로 구성되고, 때로는 작품으로 대변하는 사건, 작업을 할 때의 감정에 따라 한가지 요소가 튀어나와 부각되기도 한다.</p>

              <p>여기저기 많은 돌은 ‘사람’을 의미한다. 서로 다른 모습으로 떨어져 있으면서도 사건과 관계로 엉켜져 한 사회를 구성해내듯, 돌들은 때로는 큰 바위가 되어 화면의 균형을 이룬다.</p>

              <p>돌풀, 나뭇가지, 줄거리 잎사귀 등 다양한 식물들은 ‘주변 환경’을 나타낸다. 돌담 주변 식물들은 서로 얽혀 있어 서로의 성장을 방해하고 위태롭게 하는 것으로 외관상 보여지기도 하지만, 가냘픈 자신들이 제주의 거친 바람에 버텨낼 수 있게 서로의 힘이 되어주고, 돌담을 더욱 단단하게 붙들어 태풍에도 견디어 낸다.</p>

              <p>나의 작품에서 새소리는 형태는 없지만, 우리에게 분명히 있는 소중한 것들을 의미한다. 그리고 돌과 돌풀처럼 그 형태가 있는 것마저도, 그 형태를 나타내려 하지 않고, 그들이 서로에게 주는 영향을 그려내고자 한다. 그 상황과 그 느낌과 그날의 감정을 표현하고자 한다.</p>
            </div>

          </div>
          <div className="h-px w-full bg-border mb-16" />

            <div className="space-y-12">
              <div>
                <img
                  src="/images/Artist/kimjihoon/01_kjh.jpg"
                  alt="김지훈"
                  className="w-full rounded-md mb-2"
                />
                <p className="text-xs text-muted-foreground">
                  KIM Jihoon &lt;From Emotion(2026)&gt; Acrylic on Canvas 145.5x97.0cm
                </p>
              </div>

              <div>
                <img
                  src="/images/Artist/kimjihoon/02_kjh.jpg"
                  alt="김지훈"
                  className="w-full rounded-md mb-2"
                />
                <p className="text-xs text-muted-foreground">
                  KIM Jihoon &lt;From Emotion(2025)&gt; Acrylic on Canvas 91.0x91.0cm
                </p>
              </div>

              <div>
                <img
                  src="/images/Artist/kimjihoon/03_kjh.jpg"
                  alt="김지훈"
                  className="w-full rounded-md mb-2"
                />
                <p className="text-xs text-muted-foreground">
                  KIM Jihoon &lt;From Emotion(2026)&gt; Acrylic on Canvas 31.8x31.8cm / 45.0x100.0cm
                </p>
              </div>

              <div>
                <img
                  src="/images/Artist/kimjihoon/04_kjh.jpg"
                  alt="김지훈"
                  className="w-full rounded-md mb-2"
                />
                <p className="text-xs text-muted-foreground">
                  KIM Jihoon &lt;From Emotion(2026)&gt; Acrylic on Canvas 72.7x72.7cm
                </p>
              </div>

              <div>
                <img
                  src="/images/Artist/kimjihoon/05_kjh.jpg"
                  alt="김지훈"
                  className="w-full rounded-md mb-2"
                />
                <p className="text-xs text-muted-foreground">
                  KIM Jihoon &lt;From Emotion(2025)&gt; Acrylic on Canvas 72.7x72.7cm
                </p>
              </div>

              <div>
                <img
                  src="/images/Artist/kimjihoon/06_kjh.jpg"
                  alt="김지훈"
                  className="w-full rounded-md mb-2"
                />
                <p className="text-xs text-muted-foreground">
                  KIM Jihoon &lt;From Emotion(2026)&gt; Acrylic on Canvas 53.0x45.5cm
                </p>
              </div>

              <div>
                <img
                  src="/images/Artist/kimjihoon/07_kjh.jpg"
                  alt="김지훈"
                  className="w-full rounded-md mb-2"
                />
                <p className="text-xs text-muted-foreground">
                  KIM Jihoon &lt;From Emotion(2026)&gt; Acrylic on Canvas 53.0x40.9cm
                </p>
              </div>

              <div>
                <img
                  src="/images/Artist/kimjihoon/08_kjh.jpg"
                  alt="김지훈"
                  className="w-full rounded-md mb-2"
                />
                <p className="text-xs text-muted-foreground">
                  KIM Jihoon &lt;From Emotion(2026)&gt; Acrylic on Canvas 53.0x40.9cm
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
                  김지훈 KIM JiHoon
                </span>
                <span className="text-m text-muted-foreground">
                  B.1995 Based in Jeju, KR
                </span>
              </div>
            </div>


            {/* 학력 */}
            <section>
              <h3 className="text-m font-semibold text-foreground mt-14">학력</h3>
              <p className="text-m text-muted-foreground leading-snug">
                제주대학교 미술학부 서양화전공
              </p>
            </section>

            {/* 개인전 */}
            <section>
              <h3 className="text-m font-semibold text-foreground mb-1">개인전</h3>
              <p className="text-m text-muted-foreground leading-snug">
                2025 Slow boat (갤러리41, 서울)<br />
                2024 From Emotion: mama (갤러리 엠, 서울)<br />
                2023 색채의 온도 (KBS제주방송총국 갤러리, 제주)
              </p>
            </section>

            {/* 단체전 */}
            <section>
              <h3 className="text-m font-semibold text-foreground mb-1">단체전</h3>
              <p className="text-m text-muted-foreground leading-snug">
                2026 The Geometry (써포먼트 갤러리, 서울)<br />
                2026 빛의 틈, 머무는 사이 (m.collect.19, 서울)<br />
                2026 올해의 첫 소장 (스페이스 하이, 부산)<br />
                2025 HEARTS &amp; HOLIDAY (갤러리디바인, 서울)<br />
                2025 GOOD BYE 2025 (포브갤러리, 서울)<br />
                2025 이이인전을할수있을까우리가 (팜하우스, 제주)<br />
                2025 2025 MOMA K 선정작가전 (MOMA K 갤러리, 서울)<br />
                2025 21세기 제주소년 (갤러리 지앤, 울산)<br />
                2025 WHERE WE LAND: 압도삼색 (지지트갤러리, 서울)<br />
                2025 빈공간에서 빈공간으로 (아트스페이스 빈공간, 제주)<br />
                2025 제주4.3미술제 '타오른 바람, 이어든 빛' (산지천갤러리, 제주)<br />
                2025 nature 2025 (CICA 미술관, 경기)<br />
                2025 ELEMENTAL EMOTIONS (라움아트센터, 서울)<br />
                2025 동물의 화원 (아트인명도암, 제주)<br />
                2024 천경자 탄생 100주년 특별전 '천재화가, 천경자를 기리고 그리다.' (고흥아트센터, 고흥)<br />
                2024 광화문국제아트페스티벌 (세종문화회관 미술관, 서울)<br />
                2024 제주4.3미술제 '봄은 불꽃처럼' (산지천갤러리, 제주)<br />
                2023 체현된 풍경 (부미갤러리, 제주)<br />
                2022 경험적 풍경 (제주드림타워복합리조트 갤러리라운지, 제주)<br />
                2022 클라인의 병 (비오토피아 갤러리, 제주)
              </p>
            </section>

            {/* 아트페어 */}
            <section>
              <h3 className="text-m font-semibold text-foreground mb-1">아트페어</h3>
              <p className="text-m text-muted-foreground leading-snug">
                2026 OHHO 빈공간 아트페어 2026 (아트스페이스 빈공간, 제주)<br />
                2025 서울아트쇼 (코엑스, 서울)<br />
                2025 인천아트쇼 (송도컨벤시아, 인천)<br />
                2025 HERALD x INSPIRED (SETEC, 서울)<br />
                2025 뱅크아트페어 (SETEC, 서울)<br />
                2025 아트페어 대구 (EXCO, 대구)<br />
                2025 Art X SEOUL (신라호텔, 서울)<br />
                2024 서울아트쇼 (코엑스, 서울)<br />
                2024 아트페스타 제주 (ICC, 제주)<br />
                2024 뱅크아트페어 (SETEC, 서울)<br />
                2024 Art X SEOUL (인터컨티넨탈 코엑스, 서울)<br />
                2023 울산국제아트페어 (UECO, 울산)<br />
                2023 뱅크아트페어 (SETEC, 서울)
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
