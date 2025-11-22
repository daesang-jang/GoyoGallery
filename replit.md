# GOYO Gallery

## Overview

GOYO Gallery is a contemporary art gallery website showcasing Korean and international artists through curated exhibitions. The application is a full-stack React + Express platform featuring exhibition management, artist profiles, public art projects, art consulting services, and educational programs. The design emphasizes minimalist aesthetics inspired by contemporary art galleries (MoMA, Tate Modern, Gagosian) combined with Korean design sensibilities, where the artwork remains the hero and the interface serves as an elegant, unobtrusive frame.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Technology Stack:**
- React 18 with TypeScript
- Vite as the build tool and development server
- Wouter for client-side routing (lightweight alternative to React Router)
- TanStack Query (React Query) for server state management
- Tailwind CSS for styling with shadcn/ui component library

**Design System:**
- Typography: Noto Sans KR (Korean) + Inter (Latin) font pairing
- Component library: shadcn/ui configured in "new-york" style with Radix UI primitives
- Color system: HSL-based with CSS custom properties for light/dark mode support
- Spacing: Tailwind's spacing scale (4, 6, 8, 12, 16, 24 units)
- Container widths: max-w-7xl (1280px) for full sections, max-w-4xl (896px) for text content

**Routing Structure:**
- Splash page entry point at root (`/`)
- Main navigation includes: Home, Exhibitions (Current/Upcoming/Past), Artists, Public Art, Art Consulting, Academy, About, Visit
- Dynamic routes for exhibition and artist details using URL parameters

**State Management:**
- React Query for API data fetching and caching
- Local component state with React hooks
- No global state management library (Redux, Zustand) currently implemented

**Component Architecture:**
- Shared UI components in `client/src/components/ui/` (shadcn/ui)
- Feature components in `client/src/components/` (Navigation, Footer, ExhibitionCard, ScrollToTop)
- Page components in `client/src/pages/`
- Example components for development/testing in `client/src/components/examples/`

### Backend Architecture

**Technology Stack:**
- Node.js with Express framework
- TypeScript for type safety
- Drizzle ORM for database operations
- Session-based authentication (connect-pg-simple for session storage)

**Database Layer:**
- PostgreSQL database (configured via Drizzle)
- Neon serverless PostgreSQL driver (`@neondatabase/serverless`)
- Schema defined in `shared/schema.ts` with Drizzle ORM
- Current schema includes users table with username/password authentication
- Migrations stored in `./migrations` directory

**API Structure:**
- RESTful API endpoints prefixed with `/api`
- Routes registered in `server/routes.ts`
- Storage interface abstraction in `server/storage.ts` (currently in-memory implementation with `MemStorage`)
- Shared types between client and server in `shared/` directory

**Development Server:**
- Vite middleware integration for HMR during development
- Separate Express server for API endpoints
- Request logging middleware for API calls
- Production build outputs to `dist/` directory

### Data Models

**Current Schema:**
- Users: id (UUID), username (unique), password
- Schema validation using Zod via drizzle-zod

**Static Data:**
- Exhibitions data in `shared/exhibitions.ts` (typed TypeScript objects)
- Exhibition status: 'current' | 'upcoming' | 'past'
- Image assets stored in `attached_assets/` directory

### Build & Deployment

**Development:**
- Command: `npm run dev`
- Runs Express server with Vite middleware
- Hot module replacement enabled
- TypeScript type checking via `npm run check`

**Production:**
- Build command: `npm run build`
- Frontend: Vite builds to `dist/public`
- Backend: esbuild bundles server code to `dist/index.js`
- Start command: `npm start`

**Database Migrations:**
- Command: `npm run db:push`
- Drizzle Kit manages schema synchronization

### Authentication & Authorization

**Current Implementation:**
- User authentication schema defined (username/password)
- Session management configured with connect-pg-simple
- Authentication logic not yet fully implemented in routes

### Design Philosophy

**Content-First Approach:**
- Artwork images are the primary visual focus
- Minimal chrome and UI elements
- Generous whitespace and breathing room
- Typography hierarchy emphasizes gallery name and exhibition titles

**Responsive Design:**
- Mobile-first Tailwind breakpoints (sm, md, lg)
- Collapsible mobile navigation
- Adaptive grid layouts (1-column mobile, 2-3 columns desktop)
- Touch-friendly interactive elements

**Interaction Patterns:**
- Hover effects with subtle elevation changes (`hover-elevate`, `active-elevate-2`)
- Smooth transitions and animations
- Fixed navigation with backdrop blur
- Scroll-to-top button for long pages

## External Dependencies

### UI Component Library
- **shadcn/ui**: Component system built on Radix UI primitives with Tailwind styling
- **Radix UI**: Headless accessible UI primitives for React (accordions, dialogs, dropdowns, navigation, etc.)
- **Lucide React**: Icon library for UI elements

### Data Management
- **TanStack Query**: Server state synchronization and caching
- **React Hook Form**: Form state management with Zod validation
- **Drizzle ORM**: TypeScript-first ORM for PostgreSQL
- **Zod**: Schema validation library

### Styling
- **Tailwind CSS**: Utility-first CSS framework
- **PostCSS**: CSS processing with Autoprefixer
- **class-variance-authority**: Type-safe variant management for components
- **tailwind-merge**: Utility for merging Tailwind classes

### Database
- **Neon Serverless PostgreSQL**: Cloud PostgreSQL database
- **connect-pg-simple**: PostgreSQL session store for Express

### Development Tools
- **Vite**: Frontend build tool and dev server
- **esbuild**: JavaScript bundler for production backend
- **tsx**: TypeScript execution for development server
- **Replit plugins**: Development banner, runtime error overlay, cartographer (for Replit environment)

### Fonts
- **Google Fonts**: Noto Sans KR (Korean), Inter (Latin)

### Date Utilities
- **date-fns**: Date manipulation and formatting library

### Routing
- **Wouter**: Minimalist routing library for React (2KB alternative to React Router)