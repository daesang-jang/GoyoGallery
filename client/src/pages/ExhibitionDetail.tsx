import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Calendar } from "lucide-react";

import img1 from '@assets/generated_images/Installation_art_exhibition_718ac98a.png';
import img2 from '@assets/generated_images/Abstract_geometric_exhibition_artwork_c83490f6.png';
import img3 from '@assets/generated_images/Monochrome_architectural_photography_e843186b.png';
import img4 from '@assets/generated_images/Contemporary_Korean_landscape_657013ad.png';

export default function ExhibitionDetail() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />
      
      <main className="pt-32 pb-16 flex-1">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-semibold mb-6 text-foreground" data-testid="text-exhibition-title">
              침묵과 물질 사이
            </h1>
            <h2 className="text-2xl md:text-3xl font-light mb-4 text-foreground/80">
              Between Silence and Matter
            </h2>
            
            <div className="space-y-2 mb-8">
              <p className="text-lg text-muted-foreground">
                Glenn Ligon, Jack Whitten, Jeff Elrod, 이건용, 이우환
              </p>
              <p className="text-sm text-muted-foreground flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                2024.11.01 - 2024.12.15
              </p>
            </div>

            <div className="h-px w-full bg-border mb-8" />

            <div className="prose prose-lg max-w-none mb-8">
              <p className="text-foreground leading-relaxed mb-6">
                313아트프로젝트에서 열리는 《침묵과 물질 사이 (Between Silence and Matter)》에서는 Glenn Ligon·Jack Whitten·Jeff Elrod·이건용·이우환이 색의 고조를 낮춘 채 몸·언어·도구·시간·재료·공간의 관계를 정제된 밀도로 드러낸다. 화려함 대신 정지·여백·중량감이 전시장 전체의 리듬을 이끌고, 관객은 작품을 '읽는' 대신 물질이 말하는 순간을 머무르며 감각적으로 청취한다.
              </p>
              <p className="text-foreground leading-relaxed mb-6">
                Ligon은 가독성과 삭제 사이에서 언어의 무게를 시험해 지워진 말의 잔향을 화면에 고정하고; Whitten은 절단·적층된 아크릴을 모자이크처럼 쌓아 제스처의 시간을 물질로 퇴적시키며 회화가 사물로 변모하는 경계를 더듬는다; Elrod는 디지털 드로잉을 블러·전사·스프레이로 전환해 아날로그 표면에 전자적 잔상을 남긴다; 이건용은 검정 톤의 회화로 몸의 궤적과 공간의 논리를 수행적으로 기록하고; 이우환은 돌·철·붓질의 최소 개입으로 사물과 공간이 만나는 사건을 성립시켜 침묵의 구조를 제시한다.
              </p>
              <p className="text-foreground leading-relaxed mb-6">
                여기서 침묵은 부재가 아니라 농도이며, 색은 물러나고 재료·간격·호흡이 전면으로 떠오른다. 표면은 두께를 얻어 시간이 되고, 보는 행위는 느린 청취로 변한다.
              </p>
            </div>

            <div className="h-px w-full bg-border mb-8" />

            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-muted-foreground leading-relaxed mb-6">
                At 313 Art Project, <em>Between Silence and Matter</em> gathers Glenn Ligon, Jack Whitten, Jeff Elrod, Lee Kun-Yong, and Lee Ufan to present a measured density of relations among body, language, tools, time, material, and space with chroma deliberately subdued. Instead of spectacle, stillness, interval, and weight set the gallery's rhythm, and viewers linger at the moment when material itself begins to speak.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Ligon tests the gravity of language between legibility and erasure, fixing the afterglow of speech to the surface; Whitten stacks sliced and layered acrylic like mosaic tesserae, depositing gestural time until painting edges toward objecthood; Elrod translates digital drawings through blur, transfer, and spray, leaving an electronic afterimage on an analog skin; Lee Kun-Yong records the logic of body and space through performative, black-toned paintings; Lee Ufan establishes events of encounter with minimal interventions of stone, steel, and brushwork, articulating a structure of silence.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Here, silence is not absence but density; color withdraws so that material, interval, and breath may surface. The picture plane thickens into time, and viewing turns into a slow act of listening.
              </p>
            </div>
          </div>

          <div className="space-y-12">
            <div>
              <img
                src={img1}
                alt="Jeff Elrod – Installation view of The Doppelganger"
                className="w-full rounded-md mb-4"
              />
              <p className="text-sm text-muted-foreground">
                Jeff Elrod – Installation view of <em>The Doppelganger</em>
              </p>
            </div>

            <div>
              <img
                src={img2}
                alt="Installation view of Between Silence and Matter"
                className="w-full rounded-md mb-4"
              />
              <p className="text-sm text-muted-foreground">
                Installation view of Between Silence and Matter. <em>From left</em>: Glenn Ligon, <em>Untitled</em>; Jack Whitten, <em>The Second Portal</em>
              </p>
            </div>

            <div>
              <img
                src={img3}
                alt="Lee Kun-Yong – Installation view"
                className="w-full rounded-md mb-4"
              />
              <p className="text-sm text-muted-foreground">
                Lee Kun-Yong – Installation view of (from left) <em>The Method of Drawing 76-1-2017; Bodyscape 76-1-2020</em>
              </p>
            </div>

            <div>
              <img
                src={img4}
                alt="Lee Ufan – Installation view of Dialogue"
                className="w-full rounded-md mb-4"
              />
              <p className="text-sm text-muted-foreground">
                Lee Ufan – Installation view of <em>Dialogue</em>
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
