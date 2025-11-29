import { Instagram, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-card border-t border-card-border mt-auto">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex items-center justify-between">
          {/* 왼쪽: 텍스트 */}
          <p className="text-sm text-muted-foreground">
            © 2025 GOYO GALLERY
          </p>

          {/* 오른쪽: 인스타그램 + 전화 버튼 */}
          <div className="flex items-center gap-3">
            {/* 인스타그램 아이콘 버튼 */}
            <a
              href="https://www.instagram.com/goyo_artgallery/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GOYO Gallery Instagram"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border hover:bg-accent transition-colors"
            >
              <Instagram className="w-4 h-4" />
            </a>

            {/* 전화 아이콘 버튼 */}
            <a
              href="tel:+82221550525"
              aria-label="Call GOYO Gallery"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border hover:bg-accent transition-colors"
            >
              <Phone className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
