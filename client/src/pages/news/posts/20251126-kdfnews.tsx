export const meta = {
  slug: "20251126-kdfnews",
  title: "고요갤러리, 여섯 작가와 개관전 'ON VIEW' 개최...“지금 여기의 한국 동시대 미술\"",
  date: "2025-11-26",
  pressKey: "kdfnews",
  pressName: "kdfnews",
  thumbnail: "images/News/20251126-kdfnews.png",
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
          href="https://www.kdfnews.com/news/articleView.html?idxno=171774"
          target="_blank"
          rel="noreferrer"
          style={{ color: "#2563eb" }}
        >
          https://www.kdfnews.com/news/articleView.html?idxno=171774
        </a>
      </p>
    </article>
  );
}
