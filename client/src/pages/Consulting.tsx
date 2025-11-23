import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "wouter";

export default function Consulting() {
return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />

      <main className="pt-32 pb-16 flex-1">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-semibold mb-4 text-foreground" data-testid="text-page-title">ART CONSULTING</h1>
            <div className="h-px w-24 bg-border mb-6" />
            <p className="text-muted-foreground max-w-2xl leading-relaxed">
            </p>
          </div>

          <div className="mb-24 space-y-8 text-foreground leading-relaxed">
            <p className="text-gray-500 font-bold">
               | Through art consulting, we create art experiences tailored to each space.
            </p>
             <div className="space-y-4 text-gray-500">
            <p>
              Our art consulting service is built on over 20 years of expertise in public art and architecture-based projects, providing integrated solutions that deliver art strategies optimized for each space’s purpose and context.
            </p>

            <p>
               Drawing on practical data and project know-how accumulated through collaborations with a wide range of buildings, developers, and public institutions, we manage the entire process—from initial planning and artwork selection to artist coordination, production oversight, installation, and final inspection.

            </p>

            <p>
              With an extensive portfolio in the public art sector, we ensure precise integration between artworks and architectural or interior elements, offering site-responsive solutions that consider budget, schedule, and safety requirements.
            </p>
              <p>
              We analyze the functional needs and brand identity of each space to establish sustainable art planning that maintains long-term value.
                 </p>
              <p>
              Through this approach, we support clear artistic decision-making and stable project execution across both public and private sectors.

            </p>
             </div>
          </div>



          <div className="mb-24 space-y-8 text-foreground leading-relaxed">
             <p className="text-gray-600 font-bold">
               |    아트컨설팅을 통해 공간의 목적과 환경에 맞는 예술 경험을 만들어 갑니다
               </p>
                  <div className="space-y-4 text-gray-500">
            <p>
              저희 아트컨설팅은 20여 년간 공공미술 및 건축 기반 프로젝트에서 축적한 전문성을 바탕으로, 공간의 목적과 환경에 최적화된 예술 전략을 제안하는 통합 컨설팅 서비스입니다.

            </p>

            <p>
              다양한 건축물, 개발사, 공공기관과의 협업 경험을 통해 구축된 실무 데이터와 프로젝트 노하우를 기반으로, 기획 단계부터 작품 선정, 작가 매칭, 제작 관리, 설치·검수까지 전 과정을 체계적으로 수행합니다.

            </p>

            <p>
              특히 공공미술 분야에서의 다수의 실적을 바탕으로, 건축·인테리어 요소와 작품이 기능적으로 연결되도록 정밀하게 조율하며, 예산·공정·안전 기준을 고려한 현장 친화적인 솔루션을 제공합니다.
            </p>
                    <p>
                    저희는 공간이 요구하는 기능성과 브랜드 정체성을 세밀하게 분석하여, 장기적으로 가치가 유지되는 지속 가능한 아트플래닝을 목표로 합니다.
                       </p>
                    <p>
                      이를 통해 공공 및 민간 프로젝트 전반에서 명확한 의사결정과 안정적인 프로젝트 수행을 지원합니다.

                    </p>
                 </div>
          </div>

          <div className="h-px w-full bg-border mb-24" />

{/* 여기부터는 이미지 삽입  */}
          
        </div>
      </main>

      <Footer />
    </div>
  );
}