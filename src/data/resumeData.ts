export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  period: string;
  featured: boolean;
  illustrationType: "desktop-analytics" | "map-dashboard" | "mobile-app" | "fleet-pwa" | "operations-hub" | "lineage-graph";
  cardBg: string;
  shortDescription: string;
  highlights: string[];
  tags: string[];
  fullTechStack: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export interface ExperienceItem {
  id: string;
  period: string;
  role: string;
  company: string;
  location?: string;
  iconType: "briefcase" | "code" | "user";
  summary: string;
  highlights: string[];
}

export interface SkillItem {
  name: string;
  category: "core" | "extended";
  iconKey: string;
  detail: string;
}

export const RESUME_DATA = {
  name: "Aminu Aliyu",
  firstName: "Aminu",
  lastName: "Aliyu",
  initials: "AA",
  title: "Senior Full-Stack Software Engineer",
  location: "Abuja, Nigeria",
  phone: "+234 706 871 6813",
  phoneRaw: "+2347068716813",
  email: "aminuali13@gmail.com",
  github: "https://github.com/breezycloud",
  githubHandle: "breezycloud",
  linkedin: "https://linkedin.com/in/nerdyamin",
  linkedinHandle: "nerdyamin",
  heroPitch:
    "I architect and ship production web platforms, multi-tenant SaaS products, and enterprise operational systems. From idea to deployment, I turn complex domain challenges into simple, scalable, and resilient software.",
  aboutNarrative:
    "Passionate about creating clean, efficient, and high-isolation architectures with great user experiences. With 7+ years of experience across fintech, fleet & logistics, civic-tech, and healthcare, I specialize in pairing robust .NET Core & PostgreSQL backends with modern Next.js, React, Vue 3, Blazor, and Flutter interfaces.",
  coreCompetencies: [
    {
      title: "Problem Solver",
      icon: "lightbulb",
      description: "Translating complex manual operations into automated, audit-compliant digital systems.",
    },
    {
      title: "System Architect",
      icon: "target",
      description: "High-isolation multi-tenant SaaS using PostgreSQL RLS, transactional outbox & Redis.",
    },
    {
      title: "Clean Code Advocate",
      icon: "code",
      description: "Strict modular boundaries enforced with NetArchTest, xUnit, Testcontainers & Playwright.",
    },
    {
      title: "Always Learning",
      icon: "book",
      description: "Staying ahead with .NET 10, Next.js 16, React 19, PostgreSQL 18, and AI-assisted workflows.",
    },
    {
      title: "Technical Leader",
      icon: "users",
      description: "Mentoring engineering teams and partnering with executives to ship business-critical KPIs.",
    },
    {
      title: "Offline-First & Real-Time",
      icon: "spark",
      description: "Resilient PWAs and live telemetry via SignalR, WebSockets, SSE, IndexedDB & Serwist.",
    },
  ],
  skills: [
    { name: "C# & .NET 10", category: "core", iconKey: "dotnet", detail: "ASP.NET Core Minimal APIs, Blazor, WPF" },
    { name: "TypeScript", category: "core", iconKey: "ts", detail: "Strict type-safe frontend & Node services" },
    { name: "React 19", category: "core", iconKey: "react", detail: "Hooks, Server Components, TanStack Query" },
    { name: "Next.js 16", category: "core", iconKey: "nextjs", detail: "App Router, SSR, Static Export, PWA" },
    { name: "Vue 3", category: "core", iconKey: "vue", detail: "Composition API, Pinia, Vite ecosystems" },
    { name: "PostgreSQL", category: "core", iconKey: "postgres", detail: "RLS, PostGIS, pgvector, Advisory Locks" },
    { name: "Tailwind CSS", category: "core", iconKey: "tailwind", detail: "Tailwind CSS v4, Design Systems, A11y" },
    { name: "Flutter & Dart", category: "core", iconKey: "flutter", detail: "Multi-target iOS, Android, Web & Desktop" },
    // Extended skills revealed on clicking "More"
    { name: "Blazor WASM", category: "extended", iconKey: "blazor", detail: "Blazor Hybrid, MudBlazor, Offline PWA" },
    { name: "SignalR & SSE", category: "extended", iconKey: "realtime", detail: "WebSockets, Redis Backplane, Live Hubs" },
    { name: "Dapper & EF Core", category: "extended", iconKey: "database", detail: "Drizzle ORM, SQL Server, SQLite, DbUp" },
    { name: "Redis & RabbitMQ", category: "extended", iconKey: "queue", detail: "Distributed caching & transactional outbox" },
    { name: "Offline-First PWA", category: "extended", iconKey: "pwa", detail: "Dexie.js (IndexedDB), Serwist, WebUSB" },
    { name: "Testing & QA", category: "extended", iconKey: "testing", detail: "xUnit, Testcontainers, Vitest, Playwright" },
    { name: "Security & Auth", category: "extended", iconKey: "security", detail: "JWT, Better Auth, RBAC, AES-256-GCM" },
    { name: "Docker & Cloud", category: "extended", iconKey: "cloud", detail: "GitHub Actions CI/CD, Azure, AWS S3" },
  ] satisfies SkillItem[],
  projects: [
    {
      id: "healthmarket-kora",
      title: "HealthMarket (Kora)",
      subtitle: "Healthcare, Pharmacy & Telemedicine Marketplace",
      period: "2026 – Present",
      featured: true,
      illustrationType: "mobile-app",
      cardBg: "#FDF2EA",
      shortDescription:
        "13-module healthcare marketplace with PostGIS 5km cold-chain rider matching, Claude AI triage, and a double-entry kobo ledger.",
      highlights: [
        "Architected a 13-module healthcare marketplace on .NET 10 Minimal APIs, Dapper, and PostgreSQL 18 (PostGIS + pgvector) with strict schema-per-module boundaries enforced via NetArchTest, transactional outbox messaging, and a double-entry kobo ledger.",
        "Built a multi-target Flutter workspace compiling role-specific applications (Patient, Pharmacy Partner, Dispatch Rider, Doctor Consultations, Lab Diagnostics, Admin) with real-time SignalR (Redis backplane) order queues and Paystack recurring refill mandates.",
        "Engineered PostGIS 5km cold-chain rider matching with background GPS telemetry, telemedicine e-prescriptions, encrypted lab diagnostics, and a pgvector / Claude AI clinical triage assistant with English/Pidgin red-flag detection.",
      ],
      tags: [".NET 10", "PostgreSQL 18", "Flutter", "SignalR"],
      fullTechStack: [
        "ASP.NET Core 10",
        "Dapper",
        "PostgreSQL 18 (PostGIS, pgvector)",
        "DbUp",
        "Flutter",
        "Dart",
        "SignalR + Redis",
        "Anthropic SDK",
        "OpenTelemetry",
        "Paystack",
        "AWS S3",
        "xUnit v3",
        "NetArchTest",
      ],
      githubUrl: "https://github.com/breezycloud",
    },
    {
      id: "pollguard-ng",
      title: "PollGuardNG",
      subtitle: "Multi-Tenant Election Operations & Call Center SaaS",
      period: "2026",
      featured: true,
      illustrationType: "map-dashboard",
      cardBg: "#F1F5F8",
      shortDescription:
        "Real-time situation room supporting 129,000+ geospatial polling units across 37 states with PostgreSQL RLS and Twilio VoIP.",
      highlights: [
        "Architected a multi-tenant SaaS situation room and election monitoring platform supporting 129,000+ geospatial polling units across 37 states with PostgreSQL Row-Level Security (RLS) and strict tenant isolation.",
        "Built real-time situation room dashboards with interactive geospatial mapping (MapLibre GL / Leaflet), live incident reporting, offline-capable field vote batching, and SignalR notifications.",
        "Integrated browser VoIP calling and USSD/SMS reporting workflows (Twilio Voice SDK) with live supervisor call controls (listen, whisper, barge) and in-call voter survey tools.",
      ],
      tags: ["ASP.NET Core 10", "Vue 3", "PostgreSQL RLS", "MapLibre GL"],
      fullTechStack: [
        "ASP.NET Core 10",
        "PostgreSQL (RLS)",
        "Dapper",
        "Redis",
        "Vue 3",
        "TypeScript",
        "Pinia",
        "Tailwind CSS",
        "SignalR",
        "Twilio Voice SDK",
        "MapLibre GL",
        "Docker",
      ],
      githubUrl: "https://github.com/breezycloud",
    },
    {
      id: "cedora",
      title: "Cedora",
      subtitle: "Payroll & Salary Movement Infrastructure Platform",
      period: "2026",
      featured: true,
      illustrationType: "desktop-analytics",
      cardBg: "#FDF2EA",
      shortDescription:
        "Automated statutory payroll & salary disbursement engine with transactional outbox workers and AES-256-GCM identity encryption.",
      highlights: [
        "Architected a clean-architecture payroll and salary disbursement platform featuring an automated Nigerian statutory deduction engine (PAYE, Pension, NHF, NSITF, ITF), multi-currency support, and subscription-tiered employer limits.",
        "Engineered an asynchronous background worker for transactional outbox payment processing and payroll anomaly detection, integrating payment and KYC verification providers (Lenco, Dojah) with AES-256-GCM field-level identity encryption (NIN/TIN).",
        "Built dual employer and employee self-service dashboards using Next.js 16 (App Router) and React 19 with real-time SignalR notifications, comprehensive audit logging, and E2E test coverage.",
      ],
      tags: ["Next.js 16", "React 19", ".NET 10", "Tailwind v4"],
      fullTechStack: [
        "ASP.NET Core 10",
        "Dapper",
        "PostgreSQL",
        "Next.js 16",
        "React 19",
        "TypeScript",
        "TanStack Query",
        "Zustand",
        "Tailwind CSS 4",
        "SignalR",
        "xUnit & Playwright",
      ],
      githubUrl: "https://github.com/breezycloud",
    },
    {
      id: "drivegrid",
      title: "DriveGrid",
      subtitle: "Multi-Tenant Car Rental & Yard Operations SaaS",
      period: "2026",
      featured: false,
      illustrationType: "fleet-pwa",
      cardBg: "#F1F5F8",
      shortDescription:
        "Offline-first vehicle inspection PWA with 3-way conflict sync, PostgreSQL advisory locks, and Paystack escrow state machines.",
      highlights: [
        "Architected a multi-tenant fleet rental and yard operations platform with dual-gated authorization combining deny-by-default RBAC and data-driven plan feature entitlements with atomic metered quotas.",
        "Built an offline-first inspection PWA using Dexie.js (IndexedDB) and Serwist service workers, supporting local photo blob capture and 3-way conflict-resolving state synchronization.",
        "Implemented double-booking prevention via PostgreSQL transactional advisory locks (pg_advisory_xact_lock), Paystack deposit escrow state machines, AI damage detection workflows, and real-time SSE yard telemetry.",
      ],
      tags: ["Next.js 15", "React 19", "Drizzle ORM", "Dexie PWA"],
      fullTechStack: [
        "Next.js 15",
        "React 19",
        "TypeScript",
        "PostgreSQL",
        "Drizzle ORM",
        "Better Auth",
        "Dexie.js",
        "Serwist (PWA)",
        "TanStack Query/Table",
        "Tailwind CSS 4",
        "AWS S3",
        "Paystack",
      ],
      githubUrl: "https://github.com/breezycloud",
    },
    {
      id: "mcg-fleet",
      title: "MCG Operations",
      subtitle: "Fleet Dispatch, Fuel Management & Operations Platform",
      period: "2026",
      featured: false,
      illustrationType: "operations-hub",
      cardBg: "#FDF2EA",
      shortDescription:
        "End-to-end fleet dispatch, trip checkpoints, and refueling telemetry with SignalR live hubs, RabbitMQ, and QuestPDF reporting.",
      highlights: [
        "Built an end-to-end fleet operations and dispatch tracking platform managing trucks, drivers, trip checkpoints, refueling stations, discharges, maintenance service requests, and incident reporting.",
        "Implemented real-time operational dashboards and live notifications via SignalR (DashboardHub / AppHub), interactive analytics with Blazor-ApexCharts, and automated Entity Framework audit logging.",
        "Engineered asynchronous event and notification processing using RabbitMQ alongside automated daily operational and PDF report generation (QuestPDF / PuppeteerSharp).",
      ],
      tags: ["ASP.NET Core 9", "Blazor WASM", "RabbitMQ", "SignalR"],
      fullTechStack: [
        "ASP.NET Core 9",
        "Blazor WASM (PWA)",
        "Entity Framework Core",
        "PostgreSQL",
        "RabbitMQ",
        "SignalR",
        "QuestPDF",
        "ApexCharts",
        "Docker",
      ],
      githubUrl: "https://github.com/breezycloud",
    },
    {
      id: "kinkeeper",
      title: "KinKeeper",
      subtitle: "Cross-Platform Family Lineage & Heritage Archive",
      period: "2026",
      featured: false,
      illustrationType: "lineage-graph",
      cardBg: "#F1F5F8",
      shortDescription:
        "Collaborative genealogy app across Web, iOS, Android & Desktop with interactive pan/zoom tree canvas and GEDCOM export.",
      highlights: [
        "Built a cross-platform (Web, iOS, Android, Desktop) collaborative family archive and genealogy application featuring an interactive pan/zoom family tree canvas, kinship path calculator, and GEDCOM data export.",
        "Implemented multi-space cultural family circles with oral history story feeds, media vault, migration timeline tracking, community fund pledging, and archive-powered educational games (KinPlay).",
        "Designed an adaptive Material Design 3 shell with dynamic clan-themed color palettes, declarative deep-link routing (go_router), and offline-first local state persistence.",
      ],
      tags: ["Flutter", "Dart", "Material 3", "Custom Graph"],
      fullTechStack: [
        "Flutter",
        "Dart",
        "Material Design 3",
        "GoRouter",
        "SharedPreferences",
        "Custom Graph Layout Engine",
      ],
      githubUrl: "https://github.com/breezycloud",
    },
  ] satisfies ProjectItem[],
  experience: [
    {
      id: "atlantic-co",
      period: "04/2026 – Present",
      role: "Software Engineer",
      company: "Atlantic Co. Ltd.",
      iconType: "briefcase",
      summary:
        "Architecting full-stack web & mobile platforms powering company-wide fleet, dispatch, fuel management, and real-time telematics workflows.",
      highlights: [
        "Architect, develop, and maintain full-stack web and mobile platforms powering company-wide fleet, dispatch, fuel management, and operational reporting workflows.",
        "Integrate third-party telematics, fleet monitoring, mapping, and payment APIs with real-time dashboards to provide live visibility into vehicle movements, refueling, and trip checkpoints.",
        "Engineer scalable backend services and relational database schemas with strict data integrity, automated audit trails, and role-based access control (RBAC).",
        "Partner with the Head of IT & Innovation on technical scoping, sprint planning, and digital transformation initiatives replacing manual field reporting.",
      ],
    },
    {
      id: "al-aam",
      period: "2019 – 03/2026",
      role: ".NET Full-Stack Engineer",
      company: "Al-aam Engineering Services",
      iconType: "code",
      summary:
        "Led end-to-end architecture and delivery of 8+ production web and offline-first applications across logistics, healthcare, and enterprise ops.",
      highlights: [
        "Led the end-to-end architecture and delivery of 8+ production web and offline-first applications across logistics, healthcare, inventory, and enterprise operations.",
        "Built TEOLIP Logistics Management System using ASP.NET Core 9, PostgreSQL, Dapper, and Vue 3 with JWT authentication and 30+ granular RBAC permissions.",
        "Delivered a Pharmacy & Lab Management System and Nadyar Inventory System using Blazor WASM (PWA), PostgreSQL, SignalR, WebUSB, and IndexedDB for seamless offline sync.",
        "Developed Tropicana General Concept CMS (ASP.NET Core 10, EF Core, Vue 3) and Survaise / RecyclingPro analytics platforms with real-time SignalR visualizations.",
      ],
    },
    {
      id: "his-it-hk",
      period: "04/2024 – 06/2024",
      role: "WPF & Blazor Hybrid Dev",
      company: "HIS IT Solution Ltd (Hong Kong)",
      iconType: "user",
      summary:
        "Engineered high-throughput cross-platform desktop interfaces using .NET 8, WPF, Blazor Hybrid, and low-latency WebSocket channels.",
      highlights: [
        "Engineered interactive cross-platform desktop interfaces using .NET 8, WPF, and Blazor Hybrid for high-throughput enterprise workflows.",
        "Implemented low-latency WebSocket communication channels for real-time, bidirectional state synchronization and live UI updates.",
        "Optimized client-side rendering performance and local caching to support resilient offline desktop operations.",
      ],
    },
  ] satisfies ExperienceItem[],
  process: [
    {
      step: "01",
      title: "Discover",
      description: "Understand domain rules & operational KPIs deeply.",
      icon: "search",
    },
    {
      step: "02",
      title: "Design",
      description: "Architect multi-tenant schemas & clean boundaries.",
      icon: "pen",
    },
    {
      step: "03",
      title: "Develop",
      description: "Write type-safe code & resilient real-time UIs.",
      icon: "code",
    },
    {
      step: "04",
      title: "Deploy",
      description: "Verify with automated E2E tests & CI/CD pipelines.",
      icon: "rocket",
    },
    {
      step: "05",
      title: "Improve",
      description: "Monitor telemetry, iterate, and scale performance.",
      icon: "chart",
    },
  ],
  education: [
    {
      degree: "BSc (Hons) in Applied Business Computing",
      institution: "University of Sunderland",
      year: "2018 – 2019",
    },
    {
      degree: "Advanced Diploma in Network & Computer Security",
      institution: "Informatics Academy",
      year: "2015",
    },
    {
      degree: "Diploma in IT & Communication",
      institution: "Informatics Academy",
      year: "2014",
    },
  ],
};

