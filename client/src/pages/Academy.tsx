import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { GraduationCap, Calendar, Users, Clock } from "lucide-react";

export default function Academy() {
  const programs = [
    {
      title: "현대미술 감상",
      duration: "8주 과정",
      level: "입문",
      description: "현대 미술의 기초부터 감상법까지",
    },
    {
      title: "큐레이팅 워크샵",
      duration: "12주 과정",
      level: "중급",
      description: "전시 기획과 작품 선정의 실제",
    },
    {
      title: "아트 컬렉팅",
      duration: "6주 과정",
      level: "초급",
      description: "미술품 수집과 투자의 이해",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16 text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-semibold mb-6 text-foreground" data-testid="text-page-title">아카데미</h1>
            <div className="h-px w-24 bg-border mb-8 mx-auto" />
            <p className="text-lg text-muted-foreground leading-relaxed">
              미술에 대한 이해를 깊이 있게 확장하고 싶으신가요? GOYO Academy에서 전문가와 함께 배워보세요
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {programs.map((program) => (
              <div
                key={program.title}
                className="p-6 bg-card border border-card-border rounded-lg hover-elevate"
                data-testid={`card-program-${program.title}`}
              >
                <div className="inline-block px-3 py-1 bg-accent text-accent-foreground text-xs font-medium rounded-full mb-4">
                  {program.level}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-card-foreground">{program.title}</h3>
                <p className="text-sm text-muted-foreground mb-4 flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  {program.duration}
                </p>
                <p className="text-muted-foreground leading-relaxed">{program.description}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center p-6">
              <GraduationCap className="h-12 w-12 mx-auto mb-4 text-foreground" />
              <h3 className="text-lg font-semibold mb-2 text-foreground">전문 강사진</h3>
              <p className="text-sm text-muted-foreground">현직 큐레이터와 작가들의 실무 경험</p>
            </div>
            <div className="text-center p-6">
              <Users className="h-12 w-12 mx-auto mb-4 text-foreground" />
              <h3 className="text-lg font-semibold mb-2 text-foreground">소규모 클래스</h3>
              <p className="text-sm text-muted-foreground">최대 8명의 밀도 있는 수업</p>
            </div>
            <div className="text-center p-6">
              <Calendar className="h-12 w-12 mx-auto mb-4 text-foreground" />
              <h3 className="text-lg font-semibold mb-2 text-foreground">유연한 스케줄</h3>
              <p className="text-sm text-muted-foreground">주중/주말 다양한 시간대 운영</p>
            </div>
          </div>

          <div className="bg-card rounded-lg p-8 md:p-12 border border-card-border text-center">
            <h2 className="text-2xl font-semibold mb-4 text-card-foreground">2026년 새롭게 시작됩니다 </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed max-w-2xl mx-auto">
              고요 아카데미 에서 예술과 조금 더 친해져 보세요
            </p>
            <button className="px-8 py-3 bg-primary text-primary-foreground rounded-md hover-elevate active-elevate-2 font-medium" data-testid="button-apply-academy">
              Upcoming 
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
