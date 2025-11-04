import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import img1 from '@assets/generated_images/Installation_art_exhibition_718ac98a.png';

export default function PublicArt() {
  const projects = [
    {
      title: "도심 속 예술",
      location: "서울시청 광장",
      year: "2024",
      description: "공공 공간에서 만나는 현대 미술 작품",
    },
    {
      title: "커뮤니티 벽화",
      location: "종로구 삼청동",
      year: "2023",
      description: "지역 주민과 함께 만든 협업 프로젝트",
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

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {projects.map((project) => (
              <div key={project.title} className="group" data-testid={`card-project-${project.title}`}>
                <div className="aspect-video bg-muted rounded-md mb-4 overflow-hidden">
                  <img
                    src={img1}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">{project.title}</h3>
                <p className="text-sm text-muted-foreground mb-1">{project.location} · {project.year}</p>
                <p className="text-muted-foreground">{project.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-card rounded-lg p-8 md:p-12 border border-card-border">
            <h2 className="text-2xl font-semibold mb-4 text-card-foreground">프로젝트 제안</h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              공공 예술 프로젝트에 관심이 있으신가요? GOYO Gallery와 함께 지역 사회에 예술적 가치를 더해보세요
            </p>
            <button className="px-6 py-3 bg-primary text-primary-foreground rounded-md hover-elevate active-elevate-2 font-medium" data-testid="button-contact-project">
              문의하기
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
