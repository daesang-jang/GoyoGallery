import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "wouter";

export default function PublicArt() {
  const projects = [
    {
      id: "1",
      title: "The Great Mobiles",
      artist: "Xavier Veilhan",
      location: "Incheon International Airport Terminal 2",
      year: "2018",
      image: "http://313artproject.com/wp-content/uploads/2018/06/%EC%88%98%EC%A0%95%EB%90%A8_XavierVeilhan-GreatMobileEAST-%EC%B4%AC%EC%98%81%EC%A1%B0%EC%98%81%ED%95%98-%EC%82%AC%EC%A7%84%EC%A0%9C%EA%B3%B5-%EC%9E%90%EB%B9%84%EC%97%90%EB%B2%A0%EC%9D%B4%EC%95%99313%EC%95%84%ED%8A%B8%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-5.jpg",
    },
    {
      id: "2",
      title: "Upcoming",
      artist: "",
      location: "",
      year: "",
      image: null,
    },
    {
      id: "3",
      title: "Upcoming",
      artist: "",
      location: "",
      year: "",
      image: null,
    },
    {
      id: "4",
      title: "Upcoming",
      artist: "",
      location: "",
      year: "",
      image: null,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-semibold mb-4 text-foreground" data-testid="text-page-title">퍼블릭아트</h1>
            <div className="h-px w-24 bg-border mb-6" />
            <p className="text-muted-foreground max-w-2xl leading-relaxed">
              GOYO Gallery는 공공 예술 프로젝트를 통해 더 많은 사람들이 예술을 접할 수 있는 기회를 만들어갑니다
            </p>
          </div>

          <div className="mb-12 space-y-4 text-foreground leading-relaxed">
            <p>퍼블릭아트는 불특정 다수가 이용하는 공공 공간을 무대로, 공공성·장소성·접근성을 핵심 원칙으로 실현되는 예술입니다. 도심의 역사·환경·이용 행태를 고려하여 설계되며, 단순한 미적 장식이 아니라 공간의 의미와 사용 경험을 개선하는 것을 목표로 합니다.</p>
            
            <p>퍼블릭아트의 핵심 원칙은 공공의 삶을 위한 접근성과 포용성에서 출발합니다. 누구나 이용할 수 있도록 물리적·인지적 장벽을 낮추고, 다양한 배경의 시민을 전제로 설계합니다. 작품은 장소의 역사, 지형, 동선, 소리와 빛 등 맥락에 반응하며, 이동 가능한 오브젝트가 아니라 공간의 의미와 사용 경험을 증폭하는 환경적 장치가 됩니다. 설계 단계에서는 구조 안전·내구·방재·유지관리와 운영비, 에너지 소비와 재료 순환 가능성을 함께 고려하여 지속가능성을 확보합니다. 기획부터 설치·운영까지 주민·전문가·행정·민간이 협업하며, 공모·선정·계약·제작·검수 전 과정을 투명하게 기록합니다. 저작권·안전·초상권·데이터 등 윤리 이슈는 사전에 규정하여 분쟁을 예방하며, 완공 이후에도 관리 체계와 평가 지표를 통해 작품과 장소의 관계를 지속적으로 갱신합니다.</p>
          </div>

          <div className="h-px w-full bg-border mb-12" />

          <div className="grid grid-cols-2 gap-6 md:gap-8">
            {projects.map((project) => (
              project.image ? (
                <Link key={project.id} href={`/public-art/${project.id}`}>
                  <div className="group cursor-pointer" data-testid={`card-project-${project.title}`}>
                    <div className="aspect-[16/10] bg-muted rounded-md mb-4 overflow-hidden hover-elevate active-elevate-2">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <h3 className="text-lg font-semibold mb-2 text-foreground">{project.title}</h3>
                    {project.artist && <p className="text-sm text-muted-foreground mb-1">{project.artist}</p>}
                    {project.location && project.year && (
                      <p className="text-sm text-muted-foreground">{project.location} · {project.year}</p>
                    )}
                  </div>
                </Link>
              ) : (
                <div key={project.id} className="group" data-testid={`card-project-${project.title}`}>
                  <div className="aspect-[16/10] bg-muted/30 rounded-md mb-4">
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-muted-foreground">{project.title}</h3>
                </div>
              )
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
