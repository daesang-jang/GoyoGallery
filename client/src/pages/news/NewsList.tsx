import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link, useSearch } from "wouter";
import { toPublicUrl } from "./utils";

interface PostMeta {
  slug: string;
  title: string;
  date: string;
  pressName?: string;
  thumbnail?: string;
  excerpt?: string;
}

interface PostModule {
  meta: PostMeta;
}

const postModules = import.meta.glob<PostModule>("./posts/*.tsx", { eager: true });

function getAllPosts(): PostMeta[] {
  const posts: PostMeta[] = [];

  for (const path in postModules) {
    const mod = postModules[path];
    if (mod.meta) {
      const filename = path.replace("./posts/", "").replace(".tsx", "");
      posts.push({
        ...mod.meta,
        slug: mod.meta.slug || filename,
        pressName: mod.meta.pressName || "",
      });
    }
  }

  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

const PAGE_SIZE = 10;

export default function NewsList() {
  const searchString = useSearch();
  const params = new URLSearchParams(searchString);
  const currentPage = parseInt(params.get("page") || "1", 10);

  const allPosts = getAllPosts();
  const totalPages = Math.ceil(allPosts.length / PAGE_SIZE);
  const startIndex = (currentPage - 1) * PAGE_SIZE;
  const paginatedPosts = allPosts.slice(startIndex, startIndex + PAGE_SIZE);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />

      <main className="pt-32 pb-16 flex-1">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-semibold mb-4 text-foreground" data-testid="text-page-title">
              NEWS
            </h1>
            <div className="h-px w-24 bg-border mb-6" />
          </div>

          {paginatedPosts.length === 0 ? (
            <p className="text-muted-foreground">등록된 소식이 없습니다.</p>
          ) : (
            <div className="space-y-8">
              {paginatedPosts.map((post) => (
                <Link key={post.slug} href={`/news/${post.slug}`}>
                  <article
                    className="group flex gap-6 cursor-pointer hover-elevate active-elevate-2 p-4 -mx-4 rounded-lg"
                    data-testid={`card-news-${post.slug}`}
                  >
                    {post.thumbnail && (
                      <div className="flex-shrink-0 w-28 h-20 md:w-32 md:h-24 bg-muted rounded-md overflow-hidden">
                        <img
                          src={toPublicUrl(post.thumbnail)}
                          alt={post.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}

                    <div className="flex-1 min-w-0">
                      {/* 1) 날짜 */}
                      <time className="text-xs md:text-sm text-muted-foreground">{post.date}</time>

                      {/* 2) 타이틀 (모바일: 화면 크기에 따라 자동 축소 / PC: 기존 유지) */}
                      <h2
                        className="
                          mt-1
                          font-medium
                          text-foreground
                          group-hover:text-primary
                          transition-colors
                          break-keep
                          leading-snug
                          text-[clamp(15px,4vw,20px)]
                          md:text-xl
                          line-clamp-3
                        "
                      >
                        {post.title}
                      </h2>

                      {/* 3) 신문사 */}
                      {post.pressName && (
                        <p className="text-xs md:text-sm text-muted-foreground mt-2">{post.pressName}</p>
                      )}

                      {/* (선택) 요약 */}
                      {post.excerpt && (
                        <p className="text-muted-foreground line-clamp-2 mt-2">{post.excerpt}</p>
                      )}
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          )}

          {totalPages > 1 && (
            <div className="flex justify-center gap-2 mt-12">
              {currentPage > 1 && (
                <Link href={`/news?page=${currentPage - 1}`}>
                  <button
                    className="px-4 py-2 text-sm rounded-md hover-elevate active-elevate-2 text-foreground"
                    data-testid="button-prev-page"
                  >
                    이전
                  </button>
                </Link>
              )}

              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <Link key={page} href={`/news?page=${page}`}>
                  <button
                    className={`px-4 py-2 text-sm rounded-md hover-elevate active-elevate-2 ${
                      page === currentPage ? "bg-accent text-accent-foreground" : "text-foreground"
                    }`}
                    data-testid={`button-page-${page}`}
                  >
                    {page}
                  </button>
                </Link>
              ))}

              {currentPage < totalPages && (
                <Link href={`/news?page=${currentPage + 1}`}>
                  <button
                    className="px-4 py-2 text-sm rounded-md hover-elevate active-elevate-2 text-foreground"
                    data-testid="button-next-page"
                  >
                    다음
                  </button>
                </Link>
              )}
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
