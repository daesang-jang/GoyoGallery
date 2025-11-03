# GOYO Gallery Design Guidelines

## Design Approach
**Reference-Based**: Drawing inspiration from contemporary art gallery websites (MoMA, Tate Modern, Gagosian) combined with minimalist Korean design aesthetics. The design prioritizes artwork visibility, elegant simplicity, and sophisticated restraint.

**Core Principle**: The gallery's artwork is the hero. Design serves as a refined, unobtrusive frame that elevates the content.

## Typography System

**Primary Font**: Noto Sans KR (Korean) + Inter (Latin)
- Headings: 500-600 weight, generous letter-spacing (0.02em)
- Body: 400 weight, optimal line-height (1.7)
- Navigation: 500 weight, uppercase Latin URLs

**Type Scale**:
- Hero/Page Titles: text-5xl to text-7xl (48-72px desktop)
- Section Headings: text-3xl to text-4xl (30-36px)
- Card Titles: text-xl to text-2xl
- Body Text: text-base to text-lg
- Labels/Meta: text-sm

## Layout System

**Spacing Primitives**: Tailwind units of 4, 6, 8, 12, 16, 24
- Standard section padding: py-16 md:py-24
- Card spacing: gap-6 md:gap-8
- Content margins: mb-8 to mb-12
- Grid gutters: gap-8 md:gap-12

**Container Widths**:
- Full-width sections: max-w-7xl (1280px)
- Content sections: max-w-6xl (1152px)
- Text content: max-w-4xl (896px)

**Grid Systems**:
- Exhibition cards: grid-cols-1 md:grid-cols-2 lg:grid-cols-3
- Artist grid: grid-cols-2 md:grid-cols-3 lg:grid-cols-4
- Feature sections: 2-column splits on desktop

## Component Library

### Splash Page
- Full-viewport minimalist entry (100vh)
- Gallery name in large, elegant typography (centered)
- Subtle "클릭하여 입장" (Click to Enter) prompt
- Smooth fade transition to home page
- No background images - pure typography and whitespace

### Navigation (Fixed)
- Transparent background with subtle backdrop blur
- Korean labels with hover states showing English paths
- Horizontal layout: 홈 | 전시 | 작가 | 퍼블릭아트 | 컨설팅 | 아카데미 | 소개 | 방문안내
- Mobile: Hamburger menu with slide-out drawer
- Sticky positioning with subtle shadow on scroll

### Exhibition Cards (Minimal Layout)
- Image-first presentation with 3:4 aspect ratio
- Overlay on hover: exhibition title, dates, artist name
- No borders - rely on image contrast and spacing
- Subtle scale transform on hover (scale-105)
- Metadata in refined typography below image

### Section Headers
- Left-aligned with ample top spacing (pt-24 md:pt-32)
- Korean primary heading with English subtitle
- Thin horizontal rule or subtle divider (h-px, w-24)

### Image Presentation
- High-quality, edge-to-edge where appropriate
- Consistent aspect ratios within sections (3:4 for portraits, 16:9 for landscapes)
- Lazy loading with subtle fade-in
- No rounded corners for artwork images (preserve integrity)

### Footer
- Multi-column layout (3-4 columns on desktop)
- Gallery information, contact, social links, newsletter signup
- Opening hours and location prominently displayed
- Minimal design matching overall aesthetic
- Copyright and language toggle (한국어/English)

## Page-Specific Guidelines

### Home Page
- Hero: Large typographic statement about current exhibition OR featured artwork image (if current exhibition has strong visual)
- Current Exhibition section: 2-3 cards in grid
- Upcoming preview: 1-2 cards
- Featured artists: Horizontal scroll or 4-column grid
- Newsletter signup: Centered, elegant form

### Exhibition Pages (Current/Upcoming/Past)
- Grid layout with filters (category, year)
- Large exhibition images with overlay information
- Past exhibitions: Archive-style grid with chronological sorting

### Artists Page
- Grid of artist portraits (square crop, 1:1)
- Name and medium on hover/tap
- Click through to individual artist detail (future enhancement)

### About/Visit Pages
- Two-column layout: content + supporting images/info
- Map integration for visit page
- Contact form on visit page

## Images

**Hero/Featured Images**:
- Home page: Option to feature current exhibition key visual (2000x1200px minimum)
- Exhibition detail pages: High-res artwork images (1600x1200px)
- About page: Gallery interior shots showing space

**Supporting Images**:
- Artist portraits: Square format, professional photography
- Exhibition documentation: Various dimensions maintaining quality
- Public art: Environmental context shots

**Image Treatment**:
- Preserve aspect ratios, no distortion
- Subtle grayscale filter on archive/past content (optional)
- High contrast, professionally photographed works

## Interactions & Motion

**Minimal Animation Budget**:
- Smooth page transitions (300ms ease)
- Card hover states: subtle scale and shadow
- Navigation hover: underline slide-in effect
- Scroll-triggered fade-ins for content sections (intersection observer)
- NO parallax, NO complex scroll effects
- NO carousel auto-play - user-controlled only

## Mobile Considerations

**Breakpoints**:
- Mobile: < 768px (single column)
- Tablet: 768px - 1024px (2 columns)
- Desktop: > 1024px (3-4 columns)

**Mobile-Specific**:
- Stack all multi-column layouts to single column
- Larger touch targets (min 44x44px)
- Simplified navigation (hamburger menu)
- Reduced typography scale
- Maintained image quality with optimized loading

## Accessibility

- Semantic HTML throughout
- ARIA labels for Korean/English navigation
- Alt text for all artwork images (Korean + English)
- Keyboard navigation for all interactive elements
- Focus states matching hover states
- Minimum contrast ratio 4.5:1 for text

This design creates a sophisticated, content-first gallery experience that respects both the artwork and the visitor's attention while maintaining Korean cultural aesthetics and bilingual accessibility.