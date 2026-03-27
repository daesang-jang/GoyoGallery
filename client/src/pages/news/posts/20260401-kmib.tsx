export const meta = {
  slug: "20260401-kmib",
  title: "고요갤러리, 그룹전 ‘OUR LANDSCAPES’ 개최",
  date: "2026-03-25",
  pressKey: "kbib",
  pressName: "국민일보",
  thumbnail: "images/News/20260401-kmib.png",
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
          href="https://www.kmib.co.kr/article/view.asp?arcid=0029578186&code=61171611&sid1=all"
          target="_blank"
          rel="noreferrer"
          style={{ color: "#2563eb" }}
        >
          https://www.kmib.co.kr/article/view.asp?arcid=0029578186&code=61171611&sid1=all
        </a>
      </p>
    </article>
  );
}
