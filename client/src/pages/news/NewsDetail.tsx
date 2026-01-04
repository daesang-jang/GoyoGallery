import { useParams, Link } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import NotFound from "../not-found";
import { ArrowLeft } from "lucide-react";
import { toPublicUrl } from "./utils";

interface PostMeta {
  slug: string;
  title: string;
  date: string;
  thumbnail?: string;
  excerpt?: string;
}

interface PostModule {
  meta: PostMeta;
  default: () => JSX.Element;
}

const postModules = import.meta.glob<PostModule>("./posts/*.tsx", { eager: true });

function getPostBySlug(slug: string): PostModule | null {
  for (const path in postModules) {
    const mod = postModules[path];
    const filename = path.replace("./posts/", "").replace(".tsx", "");
    const postSlug = mod.meta?.slug || filename;
    
    if (postSlug === slug) {
      return mod;
    }
  }
  return null;
}

export default function NewsDetail() {
  const params = useParams<{ slug: string }>();
  const slug = params.slug;

  if (!slug) {
    return <NotFound />;
  }

  const postModule = getPostBySlug(slug);

  if (!postModule) {
    return <NotFound />;
  }

  const { meta, default: PostContent } = postModule;

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />
      
      <main className="pt-32 pb-16 flex-1">
        <div className="max-w-4xl mx-auto px-6">
          <Link href="/news">
            <button
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
              data-testid="button-back-to-list"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>목록으로</span>
            </button>
          </Link>

          <article>
            <header className="mb-8">
              <time className="text-sm text-muted-foreground" data-testid="text-post-date">
                {meta.date}
              </time>
              <h1
                className="text-3xl md:text-4xl font-semibold text-foreground mt-2"
                data-testid="text-post-title"
              >
                {meta.title}
              </h1>
            </header>

            {meta.thumbnail && !meta.hideThumbnailInPost && (
              <img
                src={toPublicUrl(meta.thumbnail)}
                alt={meta.title || "news thumbnail"}
                data-testid="img-post-thumbnail"
              />
            )}


            <div className="text-foreground" data-testid="div-post-content">
              <PostContent />
            </div>
          </article>

          <div className="mt-16 pt-8 border-t border-border">
            <Link href="/news">
              <button
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                data-testid="button-back-to-list-bottom"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>목록으로 돌아가기</span>
              </button>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
