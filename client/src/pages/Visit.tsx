import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { MapPin, Clock, Phone, Mail, Train, Car } from "lucide-react";

export default function Visit() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-semibold mb-4 text-foreground" data-testid="text-page-title">방문안내</h1>
            <div className="h-px w-24 bg-border mb-6" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-semibold mb-6 text-foreground">관람 정보</h2>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <Clock className="h-6 w-6 text-foreground flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-2 text-foreground">운영 시간</h3>
                      <p className="text-muted-foreground">화요일 - 일요일: 10:00 - 19:00</p>
                      <p className="text-sm text-muted-foreground mt-1">월요일 및 공휴일 휴관</p>
                      <p className="text-sm text-muted-foreground">마지막 입장: 18:30</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <MapPin className="h-6 w-6 text-foreground flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-2 text-foreground">주소</h3>
                      <p className="text-muted-foreground">서울시 종로구 삼청로 123</p>
                      <p className="text-sm text-muted-foreground mt-1">GOYO Building 2F</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Phone className="h-6 w-6 text-foreground flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-2 text-foreground">연락처</h3>
                      <p className="text-muted-foreground">전화: 02-1234-5678</p>
                      <p className="text-muted-foreground">팩스: 02-1234-5679</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Mail className="h-6 w-6 text-foreground flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-2 text-foreground">이메일</h3>
                      <p className="text-muted-foreground">info@goyogallery.kr</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-6 text-foreground">오시는 길</h2>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <Train className="h-6 w-6 text-foreground flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-2 text-foreground">지하철</h3>
                      <p className="text-muted-foreground mb-1">3호선 안국역 1번 출구 도보 5분</p>
                      <p className="text-muted-foreground">5호선 광화문역 2번 출구 도보 12분</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Car className="h-6 w-6 text-foreground flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-2 text-foreground">주차</h3>
                      <p className="text-muted-foreground mb-1">건물 지하 주차장 이용 가능</p>
                      <p className="text-sm text-muted-foreground">2시간 무료 주차 (갤러리 방문 확인 시)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="aspect-square bg-muted rounded-lg flex items-center justify-center">
                <div className="text-center p-8">
                  <MapPin className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
                  <p className="text-muted-foreground">지도 영역</p>
                  <p className="text-sm text-muted-foreground mt-2">
                    서울시 종로구 삼청로 123
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-card rounded-lg p-8 md:p-12 border border-card-border">
            <h2 className="text-2xl font-semibold mb-6 text-card-foreground text-center">문의하기</h2>
            <div className="max-w-2xl mx-auto">
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-card-foreground">이름</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-background border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
                      placeholder="이름"
                      data-testid="input-contact-name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-card-foreground">이메일</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 bg-background border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
                      placeholder="email@example.com"
                      data-testid="input-contact-email"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-card-foreground">제목</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-background border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
                    placeholder="문의 제목"
                    data-testid="input-contact-subject"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-card-foreground">내용</label>
                  <textarea
                    rows={5}
                    className="w-full px-4 py-3 bg-background border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                    placeholder="문의 내용을 입력하세요"
                    data-testid="input-contact-message"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-md hover-elevate active-elevate-2 font-medium"
                  data-testid="button-submit-contact"
                >
                  보내기
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
