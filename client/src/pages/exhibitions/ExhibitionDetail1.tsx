import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Calendar } from "lucide-react";


export default function ExhibitionDetail1() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />
      
      <main className="pt-32 pb-16 flex-1">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-semibold mb-6 text-foreground" data-testid="text-exhibition-title">
              ON VIEW
            </h1>
            <h2 className="text-2xl md:text-3xl font-light mb-4 text-foreground/80">
              Opening exhibition
            </h2>
            
            <div className="space-y-2 mb-8">
              <p className="text-lg text-muted-foreground">
                KIM SAN(김산), ROH HYUNWOO(노현우), LEE JUNGYONG(이정용), LEE YOUNGJI(이영지), JANG SEIL(장세일), CHOI WOO(최우)
              </p>
              <p className="text-sm text-muted-foreground flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                2025.12.04 - 2026.01.07
              </p>
            </div>

            <div className="h-px w-full bg-border mb-8" />

            <div className="prose prose-lg max-w-none mb-8">
              <p className="text-foreground leading-relaxed mb-6">
                GoYo Gallery presents its inaugural exhibition 《ON VIEW》, featuring six contemporary artists: Kim San, Noh Hyunwoo, Lee Junyoung, Lee Youngji, Jang Seil, and Choi Woo. This exhibition introduces the gallery’s vision by bringing together diverse practices that explore nature, memory, emotion, ecological consciousness, and the structures of the inner self.
              </p>
              <p className="text-foreground leading-relaxed mb-6">
                Kim San reflects on Jeju’s landscape and the symbolic figure of the white deer to examine the origins of existence and the temporality of nature.
                Noh Hyunwoo reconstructs remembered landscapes through layers of light and atmosphere, presenting accumulated internal terrains.
                Lee Youngji builds an emotional and restorative space through recurring motifs of trees, birds, and imagined gardens.
                Lee Junyoung merges urban sensibilities with organic forms, revealing a contemporary emotional rhythm within the pictorial field.
                Jang Seil critically engages with the intersection of animals, cities, and environments, addressing the fragile boundary between civilization and ecology.
                Choi Woo visualizes the air, silence, and subtle tension surrounding the human figure, capturing pre-verbal emotional structures.
              </p>
              <p className="text-foreground leading-relaxed mb-6">
                《ON VIEW》 does not aim to converge into a single message.
                Instead, it presents a parallel landscape where six distinct artistic worlds coexist—sometimes colliding, sometimes connecting, and ultimately expanding into new forms of perception. The exhibition positions GoYo Gallery as a platform committed to showcasing the layered sensibilities and ongoing experimentation that define contemporary art today.
              </p>
              <p className="text-foreground leading-relaxed mb-6">
                As the goyo gallery’s opening statement, 《ON VIEW》 offers a clear proposition:
                to place the visual languages of this moment—as they are, now, on view—before the audience.
              </p>
            </div>

            <div className="h-px w-full bg-border mb-8" />

            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-muted-foreground leading-relaxed mb-6">
                GoYo Gallery는 개관전 **《ON VIEW》**를 통해 김산, 노현우, 이준영, 이영지, 장세일, 최우 여섯 명의 작가를 소개합니다. 이 전시는 동시대 회화가 다루는 자연성, 기억, 감정, 생명성, 그리고 내면의 구조를 하나의 공간에서 집약적으로 보여주는 출발점입니다.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                김산은 제주 본향의 풍경과 ‘백록’의 상징성을 통해 존재의 근원과 자연의 시간성을 탐구합니다.
                노현우는 기억 속 풍경을 빛과 공기의 층위로 재구성하며 내면 풍경의 축적을 그립니다.
                이영지는 나무·새·정원의 모티브로 일상의 감정과 위로의 공간을 구축합니다.
                이준영은 화면 속에서 도시적 감각과 유기적 흐름을 조형화해 현대적 질감과 정서를 교차시킵니다.
                장세일은 동물·환경·도시를 결합시키며 문명과 생태의 경계를 비판적 시각으로 다룹니다.
                최우는 인물 주변의 공기와 침묵을 회화화하여 언어 이전의 감정 구조를 드러냅니다.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                《ON VIEW》는 특정한 하나의 메시지로 수렴되지 않습니다.
                여섯 작가가 구축한 서로 다른 세계들이 병렬적으로 드러나며, 충돌과 연결, 확장이라는 감각적 경험을 제공합니다. 이는 GoYo Gallery가 앞으로 지향하는 방향, 즉 “동시대 감각의 다층적 제시와 지속적 실험의 플랫폼”이라는 정체성을 명확히 보여줍니다.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                본 개관전은 고요갤러리가 관람객에게 던지는 첫 번째 제안입니다.
                지금 이 순간, 이 시점에 존재하는 시각 예술의 다양한 결들을 그대로 ‘ON VIEW’ 합니다..
              </p>
            </div>
          </div>

          <div className="space-y-12">
            <div>
              <img
                src="/images/Exhibition/1/01.png"
                alt="김산"
                className="w-full rounded-md mb-4"
              />
              <p className="text-sm text-muted-foreground">
                Kim San | Deer My Dear 본향-낙원, 2025 <br />
                  <em></em>
              </p>
            </div>

            <div>
              <img
                src="/images/Exhibition/1/02.png"
                alt="노현우"
                className="w-full rounded-md mb-4"
              />
              <p className="text-sm text-muted-foreground">
                Roh Hyun-Woo | No.029_Unititle, 2018 <br />
                  <em>Oil on canvas 145.5x227.3cm</em>
              </p>
            </div>

            <div>
              <img
                src="/images/Exhibition/1/03.png"
                alt="이정용"
                className="w-full rounded-md mb-4"
              />
              <p className="text-sm text-muted-foreground">
                Lee Jung-young | surface-24xx, 2024 <br />
                  <em>Acrylic on canvas_2024</em>
              </p>
            </div>

            <div>
              <img
                src="/images/Exhibition/1/04.png"
                alt="이영지"
                className="w-full rounded-md mb-4"
              />
              <p className="text-sm text-muted-foreground">
                Lee Young-Ji | 행복한 순간, 지금, 2022 <br />
                  <em></em>
              </p>
            </div>

            <div>
              <img
                src="/images/Exhibition/1/05.png"
                alt="장세일"
                className="w-full rounded-md mb-4"
              />
              <p className="text-sm text-muted-foreground">
                Jang Seil | Standard Animal - 아직도 적응중, 2024 <br />
                <em>Resin, Acrylic Paint, 46 x 24 x 68 cm</em>
              </p>
            </div>
            
            <div>
              <img
                src="/images/Exhibition/1/06.png"
                alt="최우"
                className="w-full rounded-md mb-4"
              />
              <p className="text-sm text-muted-foreground">
                choi woo | Cosmos-Anchor 닻, 2022 <br />
                <em></em>
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
