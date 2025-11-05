import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { MapPin, Clock, Phone, Mail, Train, Car } from "lucide-react";
import splashImage from "@assets/Splash_1762350455042.png";

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

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
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

            <div className="flex items-center justify-center">
              <div className="aspect-square w-full max-w-md bg-white rounded-lg flex items-center justify-center p-8">
                <img
                  src={splashImage}
                  alt="GOYO GALLERY"
                  className="w-auto h-auto max-w-full max-h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
