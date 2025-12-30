# T-SPAN University Website

## Overview
T-SPAN University is a full-stack web application serving as a global cybersecurity education platform. Its primary purpose is to attract cybersecurity professionals and students to advanced training programs. The platform emphasizes live infrastructure training over theoretical approaches and aims to drive registrations for cybersecurity cohorts. Key capabilities include course browsing, user authentication, KYC verification, enrollment management, and a student dashboard. The project seeks to establish credibility through partnerships with institutions like BITS Pilani, IIT Kanpur, DSCI, and TCPWave, and to provide clear program information and enrollment workflows.

## User Preferences
Preferred communication style: Simple, everyday language.

## System Architecture
The application is a full-stack web application.

### Frontend
-   **Framework**: React 18 with TypeScript
-   **Routing**: Wouter
-   **State Management**: TanStack React Query
-   **Styling**: Tailwind CSS with shadcn/ui (New York style)
-   **Animations**: Framer Motion
-   **Form Handling**: React Hook Form with Zod validation
-   **Build Tool**: Vite
-   **Architecture**: Component-based, with core pages in `client/src/pages/` (e.g., Home, Courses, Dashboard, Login, KYCVerification) and reusable components in `client/src/components/`.

### Backend
-   **Runtime**: Node.js with Express.js
-   **Language**: TypeScript with ESM modules
-   **API Design**: RESTful JSON API endpoints (`/api/*`)
-   **Session Management**: Express sessions with PostgreSQL store
-   **Authentication**: Replit OpenID Connect (OIDC) via Passport.js
-   **Structure**: `server/index.ts` for app setup, `server/routes.ts` for API definitions, `server/storage.ts` for DB abstraction, `server/db.ts` for Drizzle ORM.

### Data Storage
-   **Database**: PostgreSQL
-   **ORM**: Drizzle ORM
-   **Schema**: Defined in `shared/schema.ts`
-   **Migrations**: Drizzle Kit
-   **Key Tables**: `users`, `sessions`, `user_profiles` (with KYC status), `courses`, `enrollments`, `applications`.

### Authentication Flow
Users authenticate via Replit OIDC. Sessions are stored in PostgreSQL, and user profiles are created on first login with pending KYC.

### Payment Integration
Stripe is used for secure course purchases. The backend handles Stripe customer creation, checkout sessions, and webhook processing for payment events, ensuring enrollments are created only via verified webhooks.

### Build and Deployment
-   **Development**: `npm run dev` (Express with Vite for HMR)
-   **Production**: `npm run build` (esbuild for server, Vite for client)

### UI/UX Decisions
-   **Color Schemes**: Modern, professional aesthetic implied by shadcn/ui's "New York style".
-   **Templates**: Extensive use of `PageLayout` component for consistent page structure (hero, breadcrumbs, styling).
-   **Design Approaches**: Focus on clear program information, intuitive enrollment workflows, and establishing institutional credibility. Professional photography/illustrations are required, along with mobile-responsive layouts and accessibility compliance (WCAG 2.1 AA).

## Course Catalog

### TCPWave Core Network Engineering Track
- `/courses/tcpwave-essentials` - TCPWave Essentials (12 weeks, ₹45,000) - Installation, configuration, and getting started with TCPWave DDI
- `/courses/dns-fundamentals` - DNS Fundamentals & Security (8 weeks, ₹55,000)
- `/courses/dhcp-management` - DHCP Architecture & Management (8 weeks, ₹50,000)
- `/courses/ipam-enterprise` - IPAM Enterprise Solutions (8 weeks, ₹65,000)
- `/courses/ddi-integration` - DDI Integration & Automation (8 weeks, ₹85,000)
- `/courses/tcpwave-admin` - TCPWave Certified Administrator (6 weeks, ₹75,000)
- `/courses/tcpwave-architect` - TCPWave Certified Architect (8 weeks, ₹1,25,000)

### AI & Emerging Technology Track
- `/courses/agentic-ai-networking` - Agentic AI in Network Engineering (12 weeks, ₹1,50,000) - Covers Texas Tech's NetMoniAI framework
- `/courses/ai-agent-protocols` - AI Agent Protocols: MCP, A2A & Beyond (14 weeks, ₹1,75,000) - Covers Model Context Protocol, Agent2Agent, Elasticsearch integration

### Observability & DevOps Track
- `/courses/custom-dashboards` - Custom Dashboard Development (14 weeks, ₹1,25,000) - Build observability dashboards with TCPWave APIs, Grafana, Prometheus, and ELK Stack

### Security Testing Track
- `/courses/web-app-security-testing` - Web Application Security Testing (14 weeks, ₹85,000) - OWASP methodology, penetration testing, Burp Suite mastery

## External Dependencies

### Database
-   **PostgreSQL**: Primary database.
-   **Drizzle ORM**: Type-safe SQL query builder.

### Authentication
-   **Replit Auth**: OpenID Connect for user authentication.

### Third-Party Services
-   **Stripe**: Payment processing for course purchases.
-   **Google Fonts**: Orbitron, Rajdhani, JetBrains Mono, Cinzel, Exo 2.

### Key NPM Packages
-   `@tanstack/react-query`: Server state management.
-   `framer-motion`: Animations.
-   `@radix-ui/*`: Accessible UI primitives (via shadcn/ui).
-   `passport` + `openid-client`: OIDC authentication.
-   `drizzle-orm` + `drizzle-zod`: Database ORM and schema validation.
-   `wouter`: Client-side routing.
-   `stripe` + `stripe-replit-sync`: Payment processing and webhook synchronization.

### Development Tools
-   `tsx`: TypeScript execution.
-   `esbuild`: Production server bundling.
-   `vite`: Frontend development and build.
-   `drizzle-kit`: Database migrations.