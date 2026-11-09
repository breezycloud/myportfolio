"use client";

import React from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Download,
  Mail,
  MapPin,
  Phone,
  Printer,
} from "lucide-react";
import { RESUME_DATA } from "@/data/resumeData";
import { GitHubIcon, LinkedInIcon } from "@/components/Illustrations";

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-[#FAF5F0] py-8 px-4 sm:px-8 print:bg-white print:p-0">
      {/* Top Action Bar (Hidden when printing to PDF) */}
      <header className="no-print mx-auto max-w-4xl mb-6 flex flex-wrap items-center justify-between gap-4">
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-full bg-white border border-stone-200 px-4 py-2 text-xs sm:text-sm font-bold text-[#141413] hover:border-[#E86C2C]"
        >
          <ArrowLeft aria-hidden="true" className="w-4 h-4 text-[#E86C2C]" />
          <span>Back to Portfolio</span>
        </Link>

        <div className="flex flex-wrap items-center gap-3">
          <a
            href={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/Aminu_Aliyu_Resume.md`}
            download="Aminu_Aliyu_Resume.md"
            className="inline-flex items-center gap-2 rounded-full bg-white border border-stone-300 px-4 py-2 text-xs sm:text-sm font-bold text-[#141413] hover:bg-stone-100"
          >
            <Download aria-hidden="true" className="w-4 h-4 text-[#E86C2C]" />
            <span>Download .MD</span>
          </a>

          <button
            type="button"
            onClick={() => window.print()}
            className="inline-flex items-center gap-2 rounded-full bg-[#E86C2C] hover:bg-[#D35A1B] px-5 py-2.5 text-xs sm:text-sm font-bold text-white shadow-sm cursor-pointer"
          >
            <Printer aria-hidden="true" className="w-4 h-4" />
            <span>Print / Save as PDF</span>
          </button>
        </div>
      </header>

      {/* Printable Resume Sheet */}
      <main className="mx-auto max-w-4xl rounded-3xl bg-white p-8 sm:p-12 shadow-sm border border-stone-200/80 print:shadow-none print:border-none print:p-0">
        {/* Header */}
        <div className="border-b-2 border-[#141413] pb-6">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#141413]">
            AMINU <span className="text-[#E86C2C]">ALIYU</span>
          </h1>
          <p className="mt-1 text-base sm:text-lg font-bold text-[#57534E]">
            {RESUME_DATA.title}
          </p>

          <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs font-semibold text-[#57534E]">
            <span className="inline-flex items-center gap-1.5">
              <MapPin aria-hidden="true" className="w-3.5 h-3.5 text-[#E86C2C]" />
              {RESUME_DATA.location}
            </span>
            <a
              href={`tel:${RESUME_DATA.phoneRaw}`}
              className="inline-flex items-center gap-1.5 hover:text-[#E86C2C]"
            >
              <Phone aria-hidden="true" className="w-3.5 h-3.5 text-[#E86C2C]" />
              {RESUME_DATA.phone}
            </a>
            <a
              href={`mailto:${RESUME_DATA.email}`}
              className="inline-flex items-center gap-1.5 hover:text-[#E86C2C]"
            >
              <Mail aria-hidden="true" className="w-3.5 h-3.5 text-[#E86C2C]" />
              {RESUME_DATA.email}
            </a>
            <a
              href={RESUME_DATA.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-[#E86C2C]"
            >
              <GitHubIcon className="w-3.5 h-3.5 text-[#E86C2C]" />
              github.com/{RESUME_DATA.githubHandle}
            </a>
            <a
              href={RESUME_DATA.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-[#E86C2C]"
            >
              <LinkedInIcon className="w-3.5 h-3.5 text-[#E86C2C]" />
              linkedin.com/in/{RESUME_DATA.linkedinHandle}
            </a>
          </div>
        </div>

        {/* Professional Summary */}
        <section className="mt-6">
          <h2 className="text-xs font-extrabold uppercase tracking-wider text-[#E86C2C]">
            Professional Summary
          </h2>
          <p className="mt-2 text-sm text-[#141413]/90 leading-relaxed">
            Senior Full-Stack Software Engineer with <strong>7+ years of experience</strong>{" "}
            architecting and shipping production web platforms, multi-tenant SaaS products, and
            enterprise operational systems. Specialized in{" "}
            <strong>
              ASP.NET Core, Next.js, React, Vue 3, Blazor, Flutter, TypeScript, and PostgreSQL
            </strong>
            , with deep expertise in scalable APIs, real-time telemetry/dashboards, event-driven
            workers, and offline-first PWAs. Proven track record of delivering business-critical
            software across <strong>fintech, fleet &amp; logistics, civic-tech, and healthcare</strong>{" "}
            in remote and hybrid environments.
          </p>
        </section>

        {/* Core Competencies */}
        <section className="mt-6">
          <h2 className="text-xs font-extrabold uppercase tracking-wider text-[#E86C2C]">
            Core Competencies (Leadership &amp; Strategy)
          </h2>
          <ul className="mt-2 space-y-1.5 text-xs sm:text-sm text-[#141413]/90 list-disc pl-5">
            <li>
              <strong>Technical Leadership:</strong> Architected and led the delivery of 10+
              production platforms, driving digital transformation from manual operations to
              automated, audit-compliant systems.
            </li>
            <li>
              <strong>System Architecture &amp; Multi-Tenancy:</strong> Designed high-isolation
              multi-tenant architectures using PostgreSQL Row-Level Security (RLS), transactional
              outbox workers, and distributed caching/messaging.
            </li>
            <li>
              <strong>Stakeholder &amp; Product Alignment:</strong> Partnered with executive and IT
              leadership to scope, design, and deliver roadmaps aligned with operational KPIs and
              regulatory standards.
            </li>
            <li>
              <strong>Mentorship &amp; Enablement:</strong> Provided technical mentorship to
              engineering teams and led training/onboarding programs to drive high end-user adoption
              across diverse organizations.
            </li>
            <li>
              <strong>Agile &amp; Quality Engineering:</strong> Championed iterative delivery backed
              by automated unit, integration, and E2E testing (
              <strong>xUnit, Testcontainers, Vitest, Playwright</strong>) and CI/CD pipelines.
            </li>
          </ul>
        </section>

        {/* Technical Skills */}
        <section className="mt-6">
          <h2 className="text-xs font-extrabold uppercase tracking-wider text-[#E86C2C]">
            Technical Skills
          </h2>
          <div className="mt-2 space-y-1.5 text-xs sm:text-sm text-[#141413]/90">
            <p>
              <strong>Languages &amp; Frameworks:</strong> C#, TypeScript, JavaScript, Dart, SQL,
              ASP.NET Core (.NET 7–10), Next.js (15/16), React 19, Vue 3, Blazor WASM/Hybrid,
              Flutter, Node.js, Angular.
            </p>
            <p>
              <strong>Data, ORM &amp; Messaging:</strong> PostgreSQL (RLS, PostGIS, pgvector,
              Advisory Locks), MS SQL Server, SQLite, Dapper, Entity Framework Core, Drizzle ORM,
              Redis, RabbitMQ, IndexedDB (Dexie.js).
            </p>
            <p>
              <strong>Frontend, Real-Time &amp; Mobile:</strong> Tailwind CSS, Pinia, Zustand,
              TanStack Query/Table, SignalR, WebSockets, Server-Sent Events (SSE), MudBlazor,
              MapLibre GL / Leaflet, ApexCharts, Chart.js.
            </p>
            <p>
              <strong>Security, Testing &amp; DevOps:</strong> JWT, Better Auth, RBAC &amp;
              Entitlement Engines, AES-256-GCM Encryption, Docker, GitHub Actions CI/CD, Service
              Workers (Serwist / PWA), xUnit, Testcontainers, Playwright, Vitest, Azure, AWS.
            </p>
          </div>
        </section>

        {/* Professional Experience */}
        <section className="mt-6">
          <h2 className="text-xs font-extrabold uppercase tracking-wider text-[#E86C2C]">
            Professional Experience
          </h2>
          <div className="mt-3 space-y-5">
            {RESUME_DATA.experience.map((exp) => (
              <div key={exp.id}>
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-sm font-extrabold text-[#141413]">
                    {exp.company} <span className="text-[#E86C2C]">|</span> {exp.role}
                  </h3>
                  <span className="text-xs font-bold text-[#57534E]">{exp.period}</span>
                </div>
                <ul className="mt-1.5 space-y-1 text-xs sm:text-sm text-[#141413]/85 list-disc pl-5">
                  {exp.highlights.map((bullet, i) => (
                    <li key={i}>{bullet}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Key Projects */}
        <section className="mt-6">
          <h2 className="text-xs font-extrabold uppercase tracking-wider text-[#E86C2C]">
            Key Projects
          </h2>
          <div className="mt-3 space-y-5">
            {RESUME_DATA.projects.map((proj) => (
              <div key={proj.id}>
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-sm font-extrabold text-[#141413]">
                    {proj.title} — <span className="font-semibold text-[#57534E]">{proj.subtitle}</span>
                  </h3>
                  <span className="text-xs font-bold text-[#57534E]">{proj.period}</span>
                </div>
                <ul className="mt-1.5 space-y-1 text-xs sm:text-sm text-[#141413]/85 list-disc pl-5">
                  {proj.highlights.map((bullet, i) => (
                    <li key={i}>{bullet}</li>
                  ))}
                  <li>
                    <strong>Tech Stack:</strong> {proj.fullTechStack.join(", ")}.
                  </li>
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="mt-6">
          <h2 className="text-xs font-extrabold uppercase tracking-wider text-[#E86C2C]">
            Education
          </h2>
          <ul className="mt-2 space-y-1 text-xs sm:text-sm text-[#141413]/90 list-disc pl-5">
            {RESUME_DATA.education.map((edu) => (
              <li key={edu.degree}>
                <strong>{edu.degree}</strong> | {edu.institution} ({edu.year})
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
}
