export const meta = {
  slug: "example",
  title: "GOYO Gallery 새 시즌 전시 안내",
  date: "2025-01-04",
  thumbnail: "/images/Goyo/1.png",
  excerpt: "2025년 새해를 맞이하여 GOYO Gallery에서 준비한 특별 전시 소식을 전합니다."
};

export default function Post() {
  return (
    <article className="prose prose-neutral max-w-none">
      <p className="text-lg text-muted-foreground mb-8">
        2025년 새해를 맞이하여 GOYO Gallery에서 준비한 특별 전시 소식을 전합니다.
      </p>
      
      <h2 className="text-2xl font-semibold mt-8 mb-4">새로운 시작</h2>
      <p>
        GOYO Gallery는 2025년 새 시즌을 맞아 국내외 현대미술 작가들의 다양한 작품을 선보일 예정입니다. 
        이번 시즌에는 특히 한국 현대미술의 정체성을 탐구하는 기획전과 함께, 
        신진 작가들의 실험적인 작품들을 만나보실 수 있습니다.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">전시 일정</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>2025년 1월: 김산 개인전 "고요한 풍경"</li>
        <li>2025년 3월: 그룹전 "한국 현대미술의 오늘"</li>
        <li>2025년 5월: 노현우 개인전</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4">관람 안내</h2>
      <p>
        전시 관람은 무료이며, 매주 월요일 휴관입니다. 
        자세한 일정과 프로그램은 추후 공지해 드리겠습니다.
      </p>

      <p className="mt-8 text-muted-foreground">
        GOYO Gallery는 항상 여러분의 방문을 환영합니다.
      </p>
    </article>
  );
}
