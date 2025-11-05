import { ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-card border-t border-card-border mt-24">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © 2025 GOYO GALLERY
          </p>
          <button 
            onClick={scrollToTop}
            className="px-4 py-2 text-sm font-medium bg-primary text-primary-foreground rounded-md hover-elevate active-elevate-2 flex items-center gap-2"
            data-testid="button-go-to-top"
          >
            <ArrowUp className="h-4 w-4" />
            Go to Top
          </button>
        </div>
      </div>
    </footer>
  );
}
