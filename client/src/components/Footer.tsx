import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-card border-t border-card-border mt-24">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <h3 className="text-lg font-semibold mb-4">GOYO GALLERY</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              현대 미술의 가치를 발견하고 공유하는 공간
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4 text-foreground">방문 정보</h4>
            <div className="space-y-3 text-sm text-muted-foreground">
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>서울시 종로구 삼청로 123</span>
              </div>
              <div className="flex items-start gap-2">
                <Clock className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <div>
                  <p>화-일 10:00-19:00</p>
                  <p className="text-xs mt-1">월요일 휴관</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4 text-foreground">문의</h4>
            <div className="space-y-3 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <span>02-1234-5678</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <span>info@goyogallery.kr</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4 text-foreground">뉴스레터</h4>
            <p className="text-sm text-muted-foreground mb-4">
              전시 소식을 받아보세요
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="이메일"
                className="flex-1 px-3 py-2 text-sm bg-background border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
                data-testid="input-newsletter-email"
              />
              <button
                className="px-4 py-2 text-sm font-medium bg-primary text-primary-foreground rounded-md hover-elevate active-elevate-2"
                data-testid="button-newsletter-submit"
              >
                구독
              </button>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2024 GOYO Gallery. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <button className="hover:text-foreground transition-colors" data-testid="button-lang-ko">한국어</button>
            <button className="hover:text-foreground transition-colors" data-testid="button-lang-en">English</button>
          </div>
        </div>
      </div>
    </footer>
  );
}
