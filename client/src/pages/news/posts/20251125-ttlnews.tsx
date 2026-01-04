export const meta = {
  slug: "20251125-ttlnews",
  title: "고요갤러리 12월 4일 개관전 'ON VIEW' 개최",
  date: "2025-11-25",
  pressKey: "ttlnews",
  pressName: "퍼블릭뉴스통신",
  thumbnail: "images/News/20251125-ttlnews.png",
  hideThumbnailInPost: true,
};

export default function Post() {
  const imageSrc = `${import.meta.env.BASE_URL}images/News/${meta.slug}.png`;
  const altText = meta.title && meta.title !== "(제목 미입력)" ? meta.title : "news image";

  return (
    <article>
      <header>
        <h1>{meta.title || "(제목 미입력)"}</h1>
        <p>
          {meta.date}
          <br />
          {meta.pressName}
        </p>
      </header>

      <img
        src={imageSrc}
        alt={altText}
        style={{ width: "100%", height: "auto", maxWidth: "100%", display: "block" }}
      />

      <p>
        출처:{" "}
        <a
          href="https://www.ttlnews.com/news/articleView.html?idxno=3053615"
          target="_blank"
          rel="noreferrer"
          style={{ color: "#2563eb" }}
        >
          https://www.ttlnews.com/news/articleView.html?idxno=3053615
        </a>
      </p>
    </article>
  );
}
