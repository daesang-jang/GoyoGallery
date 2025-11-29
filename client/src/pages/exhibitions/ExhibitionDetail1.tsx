import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Calendar } from "lucide-react";


export default function ExhibitionDetail1() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />
      
      <main className="pt-32 pb-16 flex-1">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-semibold mb-6 text-foreground" data-testid="text-exhibition-title">
              ON VIEW
            </h1>
            <h2 className="text-2xl md:text-3xl font-light mb-4 text-foreground/80">
              First Exhibition
            </h2>
            
            <div className="space-y-1 mb-8">
              <p className="text-m text-muted-foreground">
                <span className="mr-3">KIM SAN</span>
                <span className="mr-3">ROH HYUNWOO</span>
                <span className="mr-3">LEE YOUNGJI</span>
                <span className="mr-3">LEE JUNGYONG</span>
                <span className="mr-3">JANG SEIL</span>
                <span>CHOI WOO</span>
              </p>
              <p className="text-m text-muted-foreground">
                <span className="mr-3">김산</span>
                <span className="mr-3">노현우</span>
                <span className="mr-3">이영지</span>
                <span className="mr-3">이정용</span>
                <span className="mr-3">장세일</span>
                <span>최우</span>
              </p>
              <p className="text-sm text-muted-foreground flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                2025.12.04 - 2026.01.07
              </p>
            </div>

            <div className="h-px w-full bg-border mb-8" />

            <div className="prose prose-lg max-w-none mb-8">
              <p className="text-foreground leading-relaxed mb-6">
                In the heart of the city, the opening walls of Goyo Gallery are lined with works by six artists who have steadfastly endured this moment in time: Kim San, Roh Hyunwoo, Lee Youngji, Lee Jungyong, Jang Seil, and Choi Woo. They belong to a generation that has resisted the pull of short-lived trends in an ever-changing art market, choosing instead to push their own artistic languages with unwavering conviction. They are already central figures within Korean contemporary art, and they stand poised to carry this field forward with even greater depth and clarity.
              </p>
              <p className="text-foreground leading-relaxed mb-6">
              "ON VIEW" is a simple yet powerful present-tense expression commonly used by museums to signify “now on display.” Goyo Gallery has chosen this phrase as the title of its inaugural exhibition. Rather than adding grand concepts or elaborate descriptions, the gallery aims to reveal a straightforward truth: the works hung on these walls are the very language of this space. From the moment the doors open, this title becomes the first sentence that asks—and answers—what Goyo Gallery chooses to present “here and now.”
              </p>
              <p className="text-foreground leading-relaxed mb-6">
                True to its title, the six artists—each working across different media and forms—capture time, memory, daily life, and emotion through their own distinct approaches, creating images that resonate quietly yet linger long. When their works stand together in a single space, individual practices weave into a larger landscape, inviting viewers to walk among them and encounter the voices that speak most clearly to their own sensibilities.
              </p>
              <p className="text-foreground leading-relaxed mb-6">
                With this opening exhibition, Goyo Gallery hopes to offer artists the courage to continue moving forward; to collectors, a rare moment to observe the present and future of Korean contemporary art at a glance; and to visitors, a gentle resonance where art naturally enters everyday life. As the first scene to be remembered for years to come, we hope "ON VIEW" becomes the starting point for many scenes that will unfold within this space.
              </p>
            </div>

            <div className="h-px w-full bg-border mb-8" />

            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-muted-foreground leading-relaxed mb-6">
                도시의 한가운데, 처음 문을 여는 고요갤러리의 벽에는 지금 이 시간을 묵묵히 버텨온 여섯 명의 작가가 서 있습니다. 김산, 노현우, 이영지, 이정용, 장세일, 최우. 이들은 빠르게 변하는 미술시장에서 일시적인 유행이 아니라 자신의 언어를 끝까지 밀어붙이며 작업을 이어온 세대이자, 이미 한국 동시대 미술의 중요한 축을 형성하고 있으며 앞으로도 이 장을 더욱 단단하게 이끌어갈 작가들입니다
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
              "ON VIEW"는 미술관에서 ‘지금 전시 중’이라는 뜻으로 쓰이는, 가장 단순하지만 강한 현재형의 표현입니다. 세계 여러 미술관이 전시 섹션의 이름으로 사용하는 이 말을, 고요갤러리는 첫 페이지를 여는 전시 제목으로 가져왔습니다. 거창한 수식이나 개념을 덧붙이기보다, 지금 이 벽에 걸려 있는 작업들이 곧 이 공간의 언어라는 사실을 그대로 드러내기 위함입니다. 문이 열리는 순간부터, 이 이름은 고요갤러리가 “지금, 여기에서 무엇을 보여줄 것인가”를 묻고 또 대답하는 첫 문장이 됩니다.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                그 제목처럼, 서로 다른 매체와 형식을 다루는 여섯 작가는 각자의 방식으로 시간과 기억, 일상과 감정을 포착하며 조용하지만 오래 남는 이미지들을 만들어 왔습니다. 이들이 한 공간에 나란히 서는 순간, 개인의 작업은 하나의 풍경이 되고, 관람자는 그 사이를 걸으며 자신에게 가장 또렷이 다가오는 목소리를 발견하게 됩니다. 
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                고요갤러리는 이 개관전을 통해 작가에게는 계속해서 앞으로 나아갈 용기를, 컬렉터에게는 한국 동시대 미술의 현재와 미래를 한눈에 조망할 수 있는 발견의 순간을, 관람객에게는 예술이 삶에 스며드는 조용한 울림을 건네고자 합니다. 오래도록 기억될 첫 장면으로서의 "ON VIEW"가, 앞으로 이 공간에서 이어질 많은 장면들의 출발선이 되기를 바랍니다.
              </p>
            </div>
          </div>

          <div className="space-y-12">
            <div>
              <img
                src="/images/Artist/kimsan/01_ks.jpg"
                alt="김산"
                className="w-full rounded-md mb-4"
              />
              <p className="text-sm text-muted-foreground">
                KIM San &lt;본향(本鄕)_ 빛의 숲(2025)&gt; Mixed media on Canvas 116.8x91.0cm 

              </p>
            </div>

            <div>
              <img
                src="/images/Artist/rohhyunwoo/01_rhw.jpg"
                alt="노현우"
                className="w-full rounded-md mb-4"
              />
              <p className="text-sm text-muted-foreground">
                ROH HyeunWoo &lt;No.184_AM05:45 08° 30.JUL.2019(2025)&gt; Oil on Canvas 93.0x163.0cm
              </p>
            </div>
            <div>
              <img
                src="/images/Artist/leeyoungji/01_lyj.jpg"
                alt="이영지"
                className="w-full rounded-md mb-4"
              />
              <p className="text-sm text-muted-foreground">
                LEE YoungJi &lt;바람 속의 멜로디(2025)&gt; Bunchae on Jangji 91.0x91.0cm
                  <em></em>
              </p>
            </div>
            <div>
              <img
                src="/images/Artist/leejungyong/01_ljy.jpg"
                alt="이정용"
                className="w-full rounded-md mb-4"
              />
              <p className="text-sm text-muted-foreground">
                LEE JungYong &lt;Surface-2526(2024)&gt; Acrylic on Canvas 116.8x91.0cm
              </p>
            </div>

            <div>
              <img
                src="/images/Artist/jangseil/01_jsi.jpg"
                alt="장세일"
                className="w-full rounded-md mb-4"
              />
              <p className="text-sm text-muted-foreground">
                JANG SeIl &lt;Standard animal(2025)&gt; Resin Urethane Coating
              </p>
            </div>
            
            <div>
              <img
                src="/images/Artist/choiwoo/01_cw.jpg"
                alt="최우"
                className="w-full rounded-md mb-4"
              />
              <p className="text-sm text-muted-foreground">
                CHOI Woo &lt;바다사나이(2025)&gt; Oil and Acrylic on Linen 72.7x72.7cm
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
