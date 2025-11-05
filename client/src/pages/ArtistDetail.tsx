import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function ArtistDetail() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-semibold mb-6 text-foreground" data-testid="text-artist-name">
              하정우
            </h1>
            <h2 className="text-2xl md:text-3xl font-light mb-8 text-foreground/80">
              Ha Jung-woo
            </h2>
            
            <div className="mb-8">
              <img
                src="http://313artproject.com/wp-content/uploads/2022/03/Ha-Jungwoo-Untitled-800x1024.png"
                alt="Ha Jung-woo - Untitled"
                className="w-full max-w-md mx-auto rounded-md mb-4"
              />
            </div>

            <div className="space-y-2 mb-8 text-sm text-muted-foreground">
              <p>Born 1978 in Seoul, South Korea</p>
              <p>Lives and works in Seoul, South Korea</p>
            </div>

            <div className="h-px w-full bg-border mb-8" />

            <div className="prose prose-lg max-w-none mb-8 space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                Ha Jung-woo, who has passionately built a career as the best actor in Korea for a long time, sits in front of the canvas whenever he has a break between films. For him, painting was a comfort, encouragement, and a pat on the back that he gives himself for acting to become someone completely different, erasing his own identity. He self-taught and understood art and continued to work on canvas, with Picasso and Basquiat as role models. It is for this reason that the colors of these painters feel prominent in his early paintings. He started drawing to relieve his vague anxiety about the future and reality in his youth, and now he is known not only as an actor, but also as a serious artist with his own distinctive style of painting.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                With the influence of German Abstract Expressionism, the artist began to ponder to incorporate his own colors on the surface, and in recent years, he has been drawing simplified figures. Sometimes these are unknown people he met during his travels, sometimes they are recognizable celebrities, and sometimes they are characters from the movies that he plays. These anonymous figures stare at one point with nonchalant expressions, seeming to have lost consciousness, but do not reveal any distinct physical state or emotion. The artist's profound interest in and exploration of human psychology is reflected in the ambiguity of these characters.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                In his essay, the artist once mentioned, "If acting is like cooking rice, I can compare painting as making rice wine with the leftovers. They are made with the same material, but the result is completely different depending on the method… Something inside me that cannot be released with acting is settled when I paint. The result is a painting that is like rice wine. Painting restores me and inspires me to devote myself back to acting again." The artist, also known as a walker because he likes to walk so much, continues to go down his own path as an artist, just as he devotes himself every day into tomorrow.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                He has held solo exhibitions at Horim Art Center (2016), Cartier Cheongdam Maison (2014), Walter Wickiser Gallery, New York (2013), etc. In addition to group exhibitions at Seoul Museum of Art and Hongik University Museum of Contemporary Art, he is actively participating in numerous group exhibitions.
              </p>
            </div>

            <div className="h-px w-full bg-border mb-8" />

            <div className="prose prose-lg max-w-none mb-12 space-y-6">
              <p className="text-foreground leading-relaxed">
                오랜 시간 대한민국 최고의 배우로서 열정적으로 커리어를 쌓아온 하정우 작가는 작품 간 휴식기가 있을 때마다 캔버스 앞에 앉았다. 그에게 그림이란 나 자신을 지우고 다른 자아가 되어야 하는 연기자에서 잠시 벗어나 스스로에게 주는 위안, 격려, 그리고 다독임이었다. 그는 독학으로 예술을 이해하고 피카소와 바스키아를 롤 모델 삼아 캔버스 위에 작업을 이어갔다. 초기 그림들에서 이러한 화가들의 색채가 짙게 느껴지는 것은 그러한 이유 때문이다. 젊은 시절 미래와 현실에 대한 막연한 불안감을 해소하기 위해 그리기 시작했다는 그는 이제 배우로뿐만 아니라 자신만의 화풍을 가진 진지하고 개성있는 작가로 우리에게 다가오고 있다.
              </p>
              <p className="text-foreground leading-relaxed">
                이후, 독일 추상 표현주의의 영향을 받아 자신만의 색을 화면에 녹이기 위해 고민하기 시작한 작가는 최근 몇년간 단순화된 인물화를 즐겨 그리고 있다. 이 인물들은 그가 여행 중에 만난 무명의 사람들일 때도 있고, 누구나 알아볼 수 있는 유명인일 때도 있으며, 작가가 연기한 영화 속 인물일 때도 있다. 이 익명의 인물들은 무심한 표정으로 자기 자신을 응시하며 무언가에 의식을 빼앗긴 듯 하지만, 뚜렷한 물리적 상태나 감정을 드러내지 않는다. 작가의 인간 내면 심리에 대한 관심과 탐구 과정이 이 인물들의 모호함에 고스란히 반영되어 있다고 볼 수 있다.
              </p>
              <p className="text-foreground leading-relaxed">
                그는 자신의 에세이에서 "배우가 쌀로 밥을 짓는 일이라면 화가는 그 찌꺼기로 술을 담그는 일 같다고 설명하면 어떨까. 같은 재료로 만드는 것이지만 그 방법에 따라 결과물은 전혀 다르게 나온다… 연기로는 해소되지 않는 무언가. 그것을 끄집어내어 그림을 그린다. 그러면 술과 같은 그림이 만들어진다. 그림이 나를 회복시키고 다시 연기에 정진하도록 고무하는 것이다"라고 말한 바 있다. 걷기를 즐기는, 우리에게 걷는 사람으로도 알려진 그는 매일매일 그가 앞으로 정진하듯이 오늘도 작가로서 그만의 길을 묵묵히 걸어가고 있다.
              </p>
              <p className="text-foreground leading-relaxed">
                그는 호림 아트 센터 (2016), 까르띠에 청담 메종 (2014), Walter Wickiser Gallery, 뉴욕 (2013) 등에서 개인전을 가졌고, 이외 서울시립미술관, 홍익대학교 현대미술관 등 다수의 그룹전에 참가하며 활발히 활동을 이어가고 있다.
              </p>
            </div>
          </div>

          <div className="space-y-12">
            <div>
              <img
                src="http://313artproject.com/wp-content/uploads/2022/03/65A4895-1024x683.jpg"
                alt="Installation view of Deux Peintres, 2022"
                className="w-full rounded-md mb-4"
              />
              <p className="text-sm text-muted-foreground">
                Installation view of <em>Deux Peintres</em>, 2022
              </p>
            </div>

            <div>
              <img
                src="http://313artproject.com/wp-content/uploads/2022/03/65A4745-1024x683.jpg"
                alt="Installation view of Deux Peintres, 2022"
                className="w-full rounded-md mb-4"
              />
              <p className="text-sm text-muted-foreground">
                Installation view of <em>Deux Peintres</em>, 2022
              </p>
            </div>

            <div>
              <img
                src="http://313artproject.com/wp-content/uploads/2022/03/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA-2022-03-04-%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB-11.58.13-825x1024.png"
                alt="Untitled, 2021"
                className="w-full rounded-md mb-4"
              />
              <p className="text-sm text-muted-foreground">
                Untitled, 2021, Acrylic on canvas, 130.3 x 162.2 cm
              </p>
            </div>

            <div>
              <img
                src="http://313artproject.com/wp-content/uploads/2022/03/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA-2022-03-03-%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB-11.42.59-816x1024.png"
                alt="Untitled, 2021"
                className="w-full rounded-md mb-4"
              />
              <p className="text-sm text-muted-foreground">
                Untitled, 2021, Acrylic on canvas, 72.5 x 90.5 cm
              </p>
            </div>

            <div>
              <img
                src="http://313artproject.com/wp-content/uploads/2021/09/UntitledKevin-Durant-2021-Acrylic-on-canvas-72.5-x-90.5-cm-e1649931648108-819x1024.jpg"
                alt="Untitled, 2021"
                className="w-full rounded-md mb-4"
              />
              <p className="text-sm text-muted-foreground">
                Untitled, 2021, Acrylic on canvas, 72.5 x 90.5 cm
              </p>
            </div>

            <div>
              <img
                src="http://313artproject.com/wp-content/uploads/2021/09/UntitledMichael-Jordan-2021-Acrylic-on-canvas-72.5-x-90.5-cm-e1649931667293-817x1024.jpg"
                alt="Untitled, 2021"
                className="w-full rounded-md mb-4"
              />
              <p className="text-sm text-muted-foreground">
                Untitled, 2021, Acrylic on canvas, 72.5 x 90.5 cm
              </p>
            </div>

            <div>
              <img
                src="http://313artproject.com/wp-content/uploads/2021/09/GF18630-855x1024.jpg"
                alt="Untitled, 2021"
                className="w-full rounded-md mb-4"
              />
              <p className="text-sm text-muted-foreground">
                Untitled, 2021, Acrylic on canvas, 60.6 x 72.6 cm
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
