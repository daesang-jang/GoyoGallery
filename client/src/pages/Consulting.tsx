import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "wouter";

export default function Consulting() {
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
            <h1 className="text-4xl md:text-5xl font-semibold mb-4 text-foreground" data-testid="text-page-title">아트컨설팅</h1>
            <div className="h-px w-24 bg-border mb-6" />
            <p className="text-muted-foreground max-w-2xl leading-relaxed">
              GOYO Gallery는 공공 예술 프로젝트를 통해 더 많은 사람들이 예술을 접할 수 있는 기회를 만들어갑니다
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6 md:gap-8">
            {projects.map((project) => (
              project.image ? (
                <Link key={project.id} href={`/consulting/${project.id}`}>
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
