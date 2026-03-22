import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Calendar } from "lucide-react";
import img1 from '@assets/generated_images/Abstract_geometric_exhibition_artwork_c83490f6.png';

export default function ExhibitionDetail2() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />
      
      <main className="pt-32 pb-16 flex-1">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-12">
 <h1 className="text-4xl md:text-5xl font-semibold mb-6 text-foreground" data-testid="text-exhibition-title">
              OUR LAND SCAPES
            </h1>
            <h2 className="text-2xl md:text-3xl font-light mb-4 text-foreground/80">
              우리의 풍경
            </h2>
              <div className="space-y-1 mb-8">
                {/* 영문 이름 */}
                <p className="text-m text-muted-foreground">
                  <span className="mr-3">KO SUNGMIN</span>
                  <span className="mr-3">KWON SOOYEON</span>
                  <span className="mr-3">KIM JIHOON</span>
                  {/* 모바일에서만 줄바꿈 */}
                  <br className="block md:hidden" />
                  <span className="mr-3">OH HYUCKJIN</span>
                  <span className="mr-3">HWANG YOUNGROK</span>
                </p>

                {/* 한글 이름 */}
                <p className="text-m text-muted-foreground">
                  <span className="mr-3">고성민</span>
                  <span className="mr-3">권수연</span>
                  <span className="mr-3">김지훈</span>
                  {/* 모바일에서만 줄바꿈 */}
                  <br className="block md:hidden" />
                  <span className="mr-3">오혁진</span>
                  <span className="mr-3">황영록</span>
                </p>
              <p className="text-sm text-muted-foreground flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                2026.04.01 - 2026.04.31
              </p>
            </div>

            <div className="h-px w-full bg-border mb-8" />

            <div className="prose prose-lg max-w-none mb-8">
              <p className="text-foreground leading-relaxed mb-6">
                We all inhabit a certain landscape. That landscape may be the natural world spread before our eyes, or the trace of emotion that lingers deep within the mind. Some landscapes rise slowly from memory, while others quietly take shape within the invisible distances that lie between people. In this way, the world each of us beholds settles in the heart in a different form.
              </p>
              <p className="text-foreground leading-relaxed mb-6">
                The time in which we now live rests upon a landscape where we exist close to one another, yet cannot easily reach one another. Though we pass through the same city and the same night, we each keep a light on within our own window and endure the day in our own way. Yet even within that quiet distance, people continue to look toward something, to lean their hearts on somewhere, and to dream of the possibility of connection once more.
              </p>
              <p className="text-foreground leading-relaxed mb-6">
                〈Our Landscapes〉 is an exhibition in which five perspectives, each arising from this sensibility, come together in a single space. A space that imagines the possibility of community through the light that passes between walls and windows; a gaze that observes the distance between people and the structure of their relationships; pictorial surfaces that record memory through color and form, tracing the marks left by emotion; a mind that seeks to pass through absence and wounds in order to render hope once again; and landscapes that discover the flow of the inner self within the profound stillness of nature. Beginning from different points of departure, these perspectives reveal other scenes of the world in which we live.
              </p>
              <p className="text-foreground leading-relaxed mb-6">
                These works do not speak of grand events. Instead, they hold onto the small, quiet moments that pass by within the time we inhabit. Scenes that no one paid particular attention to, yet it is precisely those moments that gather together to form the landscapes of our lives.
              </p>
              <p className="text-foreground leading-relaxed mb-6">
                When landscapes seen through different perspectives are placed within a single space, we suddenly come to realize something. Though it seemed as though each of us stood within our own separate landscape, in truth, we had been passing through the same world all along.
              </p>
              <p className="text-foreground leading-relaxed mb-6">
                At the moment when those landscapes overlap, we are led to look again.
                To recognize that the world in which we live is not singular, but composed of countless landscapes.
              </p>
            </div>

            <div className="h-px w-full bg-border mb-8" />

            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-muted-foreground leading-relaxed mb-6">
                우리는 모두 어떤 풍경 속에서 살아간다. 그 풍경은 눈앞에 펼쳐진 자연일 수도 있고, 마음 깊은 곳에 남아 있는 감정의 흔적일 수도 있다. 어떤 풍경은 기억 속에서 천천히 떠오르고, 어떤 풍경은 사람과 사람 사이에 놓인 보이지 않는 거리 속에서 조용히 형성된다. 그렇게 우리가 바라보는 세계는 저마다 다른 모습으로 마음속에 자리 잡는다.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
              우리가 살아가는 지금의 시간은 서로 가까이 존재하면서도 쉽게 닿지 못하는 풍경 위에 놓여 있다. 같은 도시와 같은 밤을 지나면서도 우리는 각자의 창문 안에서 불빛을 밝히고, 각자의 방식으로 하루를 견디며 살아간다. 그러나 그 고요한 거리 속에서도 사람은 여전히 무언가를 바라보고, 어딘가에 마음을 기대며, 다시 연결될 가능성을 꿈꾼다.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
              〈Our Landscapes〉는 이러한 감각에서 출발한 다섯 개의 시선이 한 공간에 모이는 전시이다. 벽과 창 사이에서 이어지는 빛을 통해 공동체의 가능성을 상상하는 공간, 사람과 사람 사이에 놓인 거리와 관계의 구조를 바라보는 시선, 감정이 남긴 흔적을 따라 색과 형태로 기억을 기록하는 화면, 결핍과 상처를 지나 다시 희망을 그려내려는 마음, 그리고 자연의 깊은 고요 속에서 내면의 흐름을 발견하는 풍경까지. 서로 다른 출발점에서 시작된 이 시선들은 우리가 살아가는 세계의 또 다른 장면들을 드러낸다.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                이들의 작업은 거대한 사건을 이야기하지 않는다. 대신 우리가 살아가는 시간 속에서 스쳐 지나가는 작고 조용한 순간들을 붙잡는다. 아무도 눈여겨보지 않았던 장면들, 그러나 바로 그 순간들이 모여 우리의 삶을 이루는 풍경이 된다.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                서로 다른 시선으로 바라본 풍경들이 한 공간에 놓일 때 우리는 문득 깨닫게 된다. 우리가 각자의 풍경 속에 서 있는 것처럼 보였지만, 사실은 같은 세계를 지나고 있었다는 것을.
                </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                그 풍경들이 겹쳐지는 순간 우리는 다시 바라보게 된다. 우리가 살아가는 세계가 하나가 아니라, 수많은 풍경들로 이루어져 있다는 사실을.
                </p>
            </div>
          </div>

          <div className="space-y-12">
            <div>
              <img
                src="/images/Exhibition/2/01.jpg"
                alt="고성민"
                className="w-full rounded-md mb-4"
              />
              <p className="text-sm text-muted-foreground">
                KO SungMin &lt;Going home(2021)&gt; Oil on Canvas 116.5x58.0cm

              </p>
            </div>

            <div>
              <img
                src="/images/Exhibition/2/02.jpg"
                alt="권수연"
                className="w-full rounded-md mb-4"
              />
              <p className="text-sm text-muted-foreground">
                KWON SooYeon &lt;Untitled(2025)&gt; Oil on Canvas 116.0x90.0cm
              </p>
            </div>
            <div>
              <img
                src="/images/Exhibition/2/03.jpg"
                alt="김지훈"
                className="w-full rounded-md mb-4"
              />
              <p className="text-sm text-muted-foreground">
                KIM JiHoon &lt;From Emotion(2026)&gt; Acrylic on Canvas 145.5x97.0cm
                  <em></em>
              </p>
            </div>
            <div>
              <img
                src="/images/Exhibition/2/04.jpg"
                alt="오혁진"
                className="w-full rounded-md mb-4"
              />
              <p className="text-sm text-muted-foreground">
                OH HyuckJin &lt;Day Embraced by Nature(2025)&gt; Mixed media on Canvas 162.2x91.0cm
              </p>
            </div>
            <div>
              <img
                src="/images/Exhibition/2/05.jpg"
                alt="황영록"
                className="w-full rounded-md mb-4"
              />
              <p className="text-sm text-muted-foreground">
                HWANG YoungRok &lt;경계넘어(2024)&gt; 장지에 먹, 무소블랙 91.0x91.0cm
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

