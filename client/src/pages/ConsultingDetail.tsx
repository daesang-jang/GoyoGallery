import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function ConsultingDetail() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-semibold mb-6 text-foreground" data-testid="text-project-title">
              The Great Mobiles
            </h1>
            <h2 className="text-2xl md:text-3xl font-light mb-4 text-foreground/80">
              Xavier Veilhan
            </h2>
            
            <div className="space-y-2 mb-8 text-sm text-muted-foreground">
              <p><strong>Installation at Terminal 2 of Incheon International Airport</strong></p>
              <p>January 2018</p>
            </div>

            <div className="mb-8">
              <img
                src="http://313artproject.com/wp-content/uploads/2018/06/%EC%88%98%EC%A0%95%EB%90%A8_XavierVeilhan-GreatMobileEAST-%EC%B4%AC%EC%98%81%EC%A1%B0%EC%98%81%ED%95%98-%EC%82%AC%EC%A7%84%EC%A0%9C%EA%B3%B5-%EC%9E%90%EB%B9%84%EC%97%90%EB%B2%A0%EC%9D%B4%EC%95%99313%EC%95%84%ED%8A%B8%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-5.jpg"
                alt="The Great Mobiles - East"
                className="w-full rounded-md"
              />
            </div>

            <div className="h-px w-full bg-border mb-8" />

            <div className="prose prose-lg max-w-none mb-8 space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                313 Art Project participated in the installation project of a representative French artist Xavier Veilhan's 'Great Mobiles' in the Incheon International Airport Terminal 2, which opened early 2018.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                The large-scale mobiles, which signal the embarkation of a new journey seen through the windows from the exterior of the airport, capture the travelers' attention the moment they step in with their luminescent bright blue lights. Although the mobiles take up considerable space with their volumes, they harmonizes with their surrounding environment and serve as a landmark to the travelers. Within Incheon International Airport's dynamic space which seeks to create an 'Art Airport', each interaction with travelers with diverse backgrounds adds on another layer of significance.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                The two mobiles glimmer in the light and sway to the flow of the air like natural landscape that seems to be simultaneously unchanging and mutable. They also represent travelers who are always changing and growing while traveling to new places, all the while they are the same individuals at core. The artist, who finds excitement of coming across something new to be the best part about traveling, hopes 'Great Mobiles' and 'Art Airport' will be able to augment the novelty of traveling.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Xavier Veilhan will hold his first solo exhibition in five years at 313 Art Project in 2019. He showed "Studio Venezia" as a representative artist of French Pavilion in 2017 Venice Biennale, and he is planning to execute the project in Buenos Aires and Lisbon in 2018. Including <em>Bodies</em> held at 313 Art Project in 2014, he has held solo exhibition in Abbaye de Cluny, Paris (2016); Palais de Tokyo, Paris (2014); MAMO SYSTEMA OCCAM, Marseille (2013); CSH n°21, VDL Research House, Los Angeles (2012); and Chateau de Versailles, Versailles (2009). Veilhan has participated in group exhibitions in places including Fondation EDF, Paris (2017); Museo de Bellas Artes de Bilbao, Bilbao (2016); Mori Art Museum, Tokyo (2015); Centre de Pompidou, Paris (2015); and Museum of Modern Art, Seoul (2014).
              </p>
            </div>

            <div className="h-px w-full bg-border mb-8" />

            <div className="prose prose-lg max-w-none mb-12 space-y-6">
              <p className="text-foreground leading-relaxed">
                313아트프로젝트는 2018년 초에 새롭게 개장한 인천공항 제 2여객터미널 출국장에 프랑스의 대표적인 작가 자비에 베이앙의 작품 'Great Mobiles'를 설치하는 프로젝트에 참여하였다.
              </p>
              <p className="text-foreground leading-relaxed">
                공항 외부에서부터 창문을 통해 어렴풋이 보여지며 여행의 시작을 예고하는 대형 모빌은 출국장을 들어서는 순간 희망찬 푸른 빛의 향연으로 여행객들의 시선을 사로잡는다. 작품은 거대한 부피로 공간을 차지하는 대신 주변 공간 요소를 투영하며, 공간에 자연스럽게 녹아들어 여행객들에게 하나의 이정표로 자리한다. 또한 '아트 공항 (Art Airport)'을 추구하는 인천공항의 역동적인 공간 속에서 각기 다른 배경을 가진 수많은 여행객과 소통하며 의미를 더해나간다.
              </p>
              <p className="text-foreground leading-relaxed">
                두 모빌은 빛을 받아 반짝이기도 하고 공기의 흐름에 따라 흔들리며 움직인다. 이는 마치 자연 풍경처럼 언제나 그대로인듯 하나 끊임없이 변화하는 상태이며, 동일한 사람이면서도 새로운 장소를 여행하며 계속해서 변화하고 성장해가는 여행객 모두를 의미하기도 한다. 여행의 가장 큰 묘미가 새로운 것을 발견해낸다는 설레는 감정이라고 이야기하는 작가는, 모빌과 '아트 공항'의 공간이 여행 속 새로움을 되살릴 수 있기를 기대한다.
              </p>
              <p className="text-foreground leading-relaxed">
                자비에 베이앙은 2019년 313아트프로젝트에서 5년만에 개인전을 열 예정이다. 그는 2017년 베니스 비엔날레에 프랑스관의 대표 작가로 참여하여 Studio Venezia를 선보였으며, 이어 2018년 부에노스 아이레스와 리스본에서 동일한 프로젝트를 진행할 예정이다. 2014년 313아트프로젝트에서 열었던 개인전 <em>Bodies</em>를 비롯해, 프랑스 Abbaye de Cluny (2016), 프랑스 파리 Palais de Tokyo (2014), 프랑스 마르세이유 MAMO SYSTEMA OCCAM (2013), 로스엔젤레스 CSH n°21, VDL Research House (2012), 프랑스 베르사이유 Chateau de Versailles (2009) 등에서 개인전을 가졌다. 또한 파리 Fondation EDF (2017), Museo de Bellas Artes de Bilbao (2016), 도쿄 Mori Art Museum (2015), 파리 퐁피두 센터 (2015), 서울 국립현대미술관 (2014) 등 유수의 기관에서 열린 그룹 전시에 참가하였다.
              </p>
            </div>
          </div>

          <div className="space-y-12">
            <div>
              <img
                src="http://313artproject.com/wp-content/uploads/2018/06/%EC%88%98%EC%A0%95%EB%90%A8_XavierVeilhan-GreatMobileWEST-%EC%B4%AC%EC%98%81%EC%A1%B0%EC%98%81%ED%95%98-%EC%82%AC%EC%A7%84%EC%A0%9C%EA%B3%B5-%EC%9E%90%EB%B9%84%EC%97%90%EB%B2%A0%EC%9D%B4%EC%95%99313%EC%95%84%ED%8A%B8%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-4.jpg"
                alt="The Great Mobiles - West"
                className="w-full rounded-md mb-4"
              />
            </div>

            <div>
              <img
                src="http://313artproject.com/wp-content/uploads/2018/06/%EC%88%98%EC%A0%95%EB%90%A8_Great-Mobile-East-Xavier-Veilhan-%EC%B4%AC%EC%98%81-%EC%A1%B0%EC%98%81%ED%95%98-%EC%82%AC%EC%A7%84-%EC%A0%9C%EA%B3%B5-%EC%9E%90%EB%B9%84%EC%97%90-%EB%B2%A0%EC%9D%B4%EC%95%99-313%EC%95%84%ED%8A%B8%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-3.jpg"
                alt="The Great Mobiles - Installation view"
                className="w-full rounded-md mb-4"
              />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
