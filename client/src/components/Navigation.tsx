import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function Navigation() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "HOME", path: "/home" },
    { label: "EXHIBITION", path: "/exhibitions/current" },
    { label: "ARTISTS", path: "/artists" },
    { label: "PUBLIC ART", path: "/public-art" },
    { label: "ART CONSULTING", path: "/consulting" },
    { label: "ACADEMY", path: "/academy" },
    { label: "ABOUT", path: "/about" },
    { label: "VISIT", path: "/visit" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/home" data-testid="link-home-logo">
            <h1 className="text-xl font-semibold tracking-wide hover-elevate active-elevate-2 px-3 py-2 rounded-md transition-colors">
              GOYO GALLERY
            </h1>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link key={item.path} href={item.path} data-testid={`link-nav-${item.path.replace(/\//g, '-')}`}>
                <button
                  className={`px-4 py-2 text-sm font-medium rounded-md transition-all hover-elevate active-elevate-2 ${
                    location.startsWith(item.path)
                      ? "bg-accent text-accent-foreground"
                      : "text-foreground"
                  }`}
                >
                  {item.label}
                </button>
              </Link>
            ))}
          </div>

          <Button
            size="icon"
            variant="ghost"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-1">
            {navItems.map((item) => (
              <Link key={item.path} href={item.path} data-testid={`link-mobile-${item.path.replace(/\//g, '-')}`}>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className={`w-full text-left px-4 py-3 text-sm font-medium rounded-md hover-elevate active-elevate-2 ${
                    location.startsWith(item.path)
                      ? "bg-accent text-accent-foreground"
                      : "text-foreground"
                  }`}
                >
                  {item.label}
                </button>
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
