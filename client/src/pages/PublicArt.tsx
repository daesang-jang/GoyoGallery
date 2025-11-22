import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "wouter";

export default function PublicArt() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />
      
      <main className="pt-32 pb-16 flex-1">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-semibold mb-4 text-foreground" data-testid="text-page-title">PUBLIC ART</h1>
            <div className="h-px w-24 bg-border mb-6" />
            <p className="text-muted-foreground max-w-2xl leading-relaxed">
            </p>
          </div>

          <div className="mb-24 space-y-8 text-foreground leading-relaxed">
            <p className="text-gray-500 font-bold">
               | We create opportunities for more people to experience art through public art projects.
            </p>
             <div className="space-y-4 text-gray-500">
            <p>
              PUBLIC ART is an open form of art shared by everyone, seamlessly woven into the fabric of cities and everyday life.<br />
              Through sculptures, installations, media art, and community-based projects, public art brings new meaning to public spaces.<br />
              It enriches the daily lives of citizens.
            </p>

            <p>
              We view public art as a cultural value that connects space, people, and local communities.<br />
              We focus on creating urban environments where art naturally becomes part of everyday experience.<br />
              For over two decades, we have collaborated with major developers and construction companies on public art projects.<br />
              We professionally manage the entire process from concept and planning to design, fabrication, and installation.
            </p>

            <p>
              As a cultural art company committed to the sustainable value of art,<br />
              we continue to expand public art projects that bring new sensibility and meaning to a wide range of public spaces.
            </p>
             </div>
          </div>


          
          <div className="mb-24 space-y-8 text-foreground leading-relaxed">
             <p className="text-gray-600 font-bold">
               |    공공 예술 프로젝트를 통해 더 많은 사람들이 예술을 접할 수 있는 기회를 만들어갑니다.
               </p>
                  <div className="space-y-4 text-gray-500">
            <p>
              PUBLIC ART(공공예술)는 모두가 함께 누리는 열린 예술로, 도시와 사람의 일상 속에 자연스럽게 스며드는 문화 경험입니다.<br />
              퍼블릭아트는 조형물, 설치미술, 미디어아트, 커뮤니티 프로젝트 등 다양한 형식을 통해 공공 공간에 새로운 의미를 부여하며,<br />
              시민의 삶을 더욱 풍요롭게 만드는 예술적 실천입니다.
            </p>

            <p>
              우리는 퍼블릭아트를 공간·사람·지역을 연결하는 문화적 가치로 바라보고,<br />
              예술이 일상 속에 자연스럽게 스며드는 도시 환경을 만들어가는 데 집중하고 있습니다.<br />
              지난 20여 년간 주요 건설사 및 시행사와 협력하며 공공미술 프로젝트를 수행해왔으며,<br />
              기획부터 디자인·제작·설치까지 전 과정을 전문적으로 운영해 왔습니다.
            </p>

            <p>
              예술의 지속 가능한 가치를 실천하는 문화예술 기업으로서,<br />
              다양한 공공 공간에 새로운 감성과 의미를 더하는 퍼블릭아트 프로젝트를 지속적으로 확장하고 있습니다.
            </p>
                 </div>
          </div>
          
          <div className="h-px w-full bg-border mb-24" />

       
          <p className="text-gray-500 mt-6 mb-4 text-xl font-bold">
            | Sculpture
          </p>          
          <img src="/images/PublicArt/PA01.png" alt="Public Art" className="w-full md:w-3/4 lg:w-5/6 rounded-md mb-12" />
          <img src="/images/PublicArt/pa02.png" alt="Public Art" className="w-full md:w-3/4 lg:w-5/6 rounded-md mb-12" />
          <img src="/images/PublicArt/pa03.png" alt="Public Art" className="w-full md:w-3/4 lg:w-5/6  rounded-md mb-12" />
          <img src="/images/PublicArt/pa04.png" alt="Public Art" className="w-full md:w-3/4 lg:w-5/6  rounded-md mb-12" />
          <img src="/images/PublicArt/pa05.png" alt="Public Art" className="w-full md:w-3/4 lg:w-5/6  rounded-md mb-12" />
          <img src="/images/PublicArt/pa06.png" alt="Public Art" className="w-full md:w-3/4 lg:w-5/6  rounded-md mb-12" />
          <img src="/images/PublicArt/pa07.png" alt="Public Art" className="w-full md:w-3/4 lg:w-5/6  rounded-md mb-12" />
          <img src="/images/PublicArt/pa08.png" alt="Public Art" className="w-full md:w-3/4 lg:w-5/6  rounded-md mb-12" />
          <img src="/images/PublicArt/pa09.png" alt="Public Art" className="w-full md:w-3/4 lg:w-5/6  rounded-md mb-12" />
          <img src="/images/PublicArt/pa10.png" alt="Public Art" className="w-full md:w-3/4 lg:w-5/6  rounded-md mb-12" />
          <img src="/images/PublicArt/pa11.png" alt="Public Art" className="w-full md:w-3/4 lg:w-5/6  rounded-md mb-12" />
          <div className="h-px w-full bg-border mb-24" />

          <p className="text-gray-500 mt-6 mb-4 text-xl font-bold">
            | Media Art
          </p>       
          <img src="/images/PublicArt/pa12.png" alt="Public Art" className="w-full md:w-3/4 lg:w-5/6  rounded-md mb-0" />
          <img src="/images/PublicArt/pa13.png" alt="Public Art" className="w-full md:w-3/4 lg:w-5/6  rounded-md mb-0" />
          <img src="/images/PublicArt/pa14.png" alt="Public Art" className="w-full md:w-3/4 lg:w-5/6  rounded-md mb-0" />
          <img src="/images/PublicArt/pa15.png" alt="Public Art" className="w-full md:w-3/4 lg:w-5/6  rounded-md mb-0" />
          <img src="/images/PublicArt/pa16.png" alt="Public Art" className="w-full md:w-3/4 lg:w-5/6  rounded-md mb-12" />
          <div className="h-px w-full bg-border mb-24" />
          
          <p className="text-gray-500 mt-6 mb-4 text-xl font-bold">
            | paiting / hanging
          </p>
          <img src="/images/PublicArt/pa17.png" alt="Public Art" className="w-full md:w-3/4 lg:w-5/6  rounded-md mb-12" />
          <img src="/images/PublicArt/pa18.png" alt="Public Art" className="w-full md:w-3/4 lg:w-5/6  rounded-md mb-12" />
          <img src="/images/PublicArt/pa19.png" alt="Public Art" className="w-full md:w-3/4 lg:w-5/6  rounded-md mb-12" />


          <div className="h-px w-full bg-border mb-12" />

       
        </div>
      </main>

      <Footer />
    </div>
  );
}
