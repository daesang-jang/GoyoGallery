import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Palette, Building2, Users, Sparkles } from "lucide-react";

export default function Consulting() {
  const services = [
    {
      icon: Palette,
      title: "아트 컨설팅",
      description: "개인 및 기업 고객을 위한 맞춤형 미술품 컬렉션 구축",
    },
    {
      icon: Building2,
      title: "공간 큐레이팅",
      description: "오피스, 호텔, 레지던스 등 공간에 어울리는 작품 선정",
    },
    {
      icon: Users,
      title: "컬렉터 지원",
      description: "작품 구매부터 보관, 관리까지 전문적인 컬렉터 서비스",
    },
    {
      icon: Sparkles,
      title: "기획 전시",
      description: "기업 및 기관을 위한 맞춤형 전시 기획 및 운영",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16 text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-semibold mb-6 text-foreground" data-testid="text-page-title">아트 컨설팅</h1>
            <div className="h-px w-24 bg-border mb-8 mx-auto" />
            <p className="text-lg text-muted-foreground leading-relaxed">
              GOYO Gallery의 전문 큐레이터가 귀하의 공간과 목적에 맞는 최적의 미술 작품을 제안합니다
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {services.map((service) => (
              <div
                key={service.title}
                className="p-8 bg-card border border-card-border rounded-lg hover-elevate"
                data-testid={`card-service-${service.title}`}
              >
                <service.icon className="h-10 w-10 text-foreground mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-card-foreground">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-card rounded-lg p-8 md:p-12 border border-card-border">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-2xl font-semibold mb-6 text-card-foreground text-center">상담 신청</h2>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2 text-card-foreground">이름</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-background border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
                    placeholder="이름을 입력하세요"
                    data-testid="input-name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-card-foreground">이메일</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-background border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
                    placeholder="email@example.com"
                    data-testid="input-email"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-card-foreground">상담 내용</label>
                  <textarea
                    rows={5}
                    className="w-full px-4 py-3 bg-background border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                    placeholder="상담받고 싶은 내용을 자유롭게 작성해주세요"
                    data-testid="input-message"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-md hover-elevate active-elevate-2 font-medium"
                  data-testid="button-submit-consultation"
                >
                  상담 신청하기
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
