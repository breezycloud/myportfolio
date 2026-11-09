"use client";

import React, { useId, useRef, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Briefcase,
  CheckCircle2,
  Code2,
  Download,
  ExternalLink,
  FileText,
  Lightbulb,
  Mail,
  MapPin,
  Menu,
  MoreHorizontal,
  PenTool,
  Phone,
  Rocket,
  Search,
  Sparkles,
  Target,
  TrendingUp,
  UserCheck,
  Users,
  X,
} from "lucide-react";
import { RESUME_DATA, type ProjectItem } from "@/data/resumeData";
import {
  AboutDeveloperIllustration,
  GitHubIcon,
  HeroDeveloperIllustration,
  LinkedInIcon,
  ProjectCardIllustration,
  SectionUnderline,
  SkillBadgeIcon,
} from "@/components/Illustrations";

export default function PortfolioPage() {
  const [activeNav, setActiveNav] = useState<string>("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showAllSkills, setShowAllSkills] = useState(false);
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const dialogRef = useRef<HTMLDialogElement>(null);
  const dialogTitleId = useId();

  const coreSkills = RESUME_DATA.skills.filter((s) => s.category === "core");
  const extendedSkills = RESUME_DATA.skills.filter((s) => s.category === "extended");

  const visibleProjects = showAllProjects
    ? RESUME_DATA.projects
    : RESUME_DATA.projects.slice(0, 3);

  const openProjectModal = (project: ProjectItem) => {
    setSelectedProject(project);
    requestAnimationFrame(() => {
      dialogRef.current?.showModal();
    });
  };

  const closeProjectModal = () => {
    dialogRef.current?.close();
  };

  const renderTraitIcon = (icon: string) => {
    switch (icon) {
      case "lightbulb":
        return <Lightbulb aria-hidden="true" className="w-5 h-5 text-[#E86C2C]" />;
      case "target":
        return <Target aria-hidden="true" className="w-5 h-5 text-[#E86C2C]" />;
      case "code":
        return <Code2 aria-hidden="true" className="w-5 h-5 text-[#E86C2C]" />;
      case "book":
        return <BookOpen aria-hidden="true" className="w-5 h-5 text-[#E86C2C]" />;
      case "users":
        return <Users aria-hidden="true" className="w-5 h-5 text-[#E86C2C]" />;
      default:
        return <Sparkles aria-hidden="true" className="w-5 h-5 text-[#E86C2C]" />;
    }
  };

  const renderProcessIcon = (icon: string) => {
    switch (icon) {
      case "search":
        return <Search aria-hidden="true" className="w-5 h-5 text-[#141413]" />;
      case "pen":
        return <PenTool aria-hidden="true" className="w-5 h-5 text-[#141413]" />;
      case "code":
        return <Code2 aria-hidden="true" className="w-5 h-5 text-[#141413]" />;
      case "rocket":
        return <Rocket aria-hidden="true" className="w-5 h-5 text-[#141413]" />;
      default:
        return <TrendingUp aria-hidden="true" className="w-5 h-5 text-[#141413]" />;
    }
  };

  const renderExperienceIcon = (iconType: "briefcase" | "code" | "user") => {
    switch (iconType) {
      case "briefcase":
        return <Briefcase aria-hidden="true" className="w-5 h-5 text-[#141413]" />;
      case "code":
        return <Code2 aria-hidden="true" className="w-5 h-5 text-[#141413]" />;
      default:
        return <UserCheck aria-hidden="true" className="w-5 h-5 text-[#141413]" />;
    }
  };

  const navItems = [
    { id: "home", label: "Home", href: "#home" },
    { id: "about", label: "About", href: "#about" },
    { id: "skills", label: "Skills", href: "#skills" },
    { id: "work", label: "Work", href: "#work" },
    { id: "experience", label: "Experience", href: "#experience" },
    { id: "contact", label: "Contact", href: "#contact" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#FDFCFB] text-[#141413]">
      {/* Accessible Skip Link */}
      <a
        href="#main-heading"
        className="visually-hidden fixed top-4 left-4 z-50 rounded-full bg-[#141413] px-5 py-2.5 text-sm font-semibold text-white shadow-lg"
      >
        Skip to main content
      </a>

      {/* Sticky Editorial Header */}
      <header className="sticky top-0 z-40 bg-[#FDFCFB]/90 backdrop-blur-md border-b border-stone-200/60">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 h-20 flex items-center justify-between">
          {/* Brand Monogram: AA. */}
          <a
            href="#home"
            onClick={() => setActiveNav("home")}
            aria-label="Aminu Aliyu — Home"
            className="inline-flex items-baseline text-2xl sm:text-[28px] font-extrabold tracking-tighter text-[#141413]"
          >
            <span>A</span>
            <span className="relative">
              A
              <span
                aria-hidden="true"
                className="absolute left-1 right-1 top-[54%] h-[3px] bg-[#E86C2C] rounded-full"
              />
            </span>
            <span className="text-[#E86C2C]">.</span>
          </a>

          {/* Primary Navigation */}
          <nav aria-label="Primary" className="hidden md:flex items-center gap-7">
            <ul className="flex items-center gap-7">
              {navItems.map((item) => {
                const isActive = activeNav === item.id;
                return (
                  <li key={item.id}>
                    <a
                      href={item.href}
                      onClick={() => setActiveNav(item.id)}
                      className={`relative py-1 text-sm font-semibold transition-colors ${
                        isActive
                          ? "text-[#E86C2C]"
                          : "text-[#141413]/80 hover:text-[#141413]"
                      }`}
                    >
                      {item.label}
                      {isActive && (
                        <span
                          aria-hidden="true"
                          className="absolute left-0 right-0 -bottom-1 h-[2.5px] rounded-full bg-[#E86C2C]"
                        />
                      )}
                    </a>
                  </li>
                );
              })}
            </ul>

            <div className="flex items-center gap-1.5 pl-2">
              <a
                href="#contact"
                onClick={() => setActiveNav("contact")}
                className="inline-flex items-center justify-center rounded-full bg-[#141413] px-5 py-2.5 text-xs font-semibold text-white hover:bg-[#292524] transition-colors min-h-[38px]"
              >
                Let&apos;s Talk
              </a>
              <span aria-hidden="true" className="text-[#E86C2C] font-bold text-sm">
                →
              </span>
            </div>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-nav-menu"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="md:hidden inline-flex items-center justify-center rounded-xl p-2.5 text-[#141413] hover:bg-stone-100 min-w-[44px] min-h-[44px]"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <nav
            id="mobile-nav-menu"
            aria-label="Mobile"
            className="md:hidden border-t border-stone-200/80 bg-[#FDFCFB] px-6 py-5 shadow-lg"
          >
            <ul className="flex flex-col gap-3">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.href}
                    onClick={() => {
                      setActiveNav(item.id);
                      setMobileMenuOpen(false);
                    }}
                    className={`block py-2 text-base font-semibold ${
                      activeNav === item.id ? "text-[#E86C2C]" : "text-[#141413]"
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <a
                  href="#contact"
                  onClick={() => {
                    setActiveNav("contact");
                    setMobileMenuOpen(false);
                  }}
                  className="inline-flex items-center gap-2 rounded-full bg-[#141413] px-6 py-3 text-sm font-semibold text-white"
                >
                  Let&apos;s Talk <ArrowRight aria-hidden="true" className="w-4 h-4 text-[#E86C2C]" />
                </a>
              </li>
            </ul>
          </nav>
        )}
      </header>

      <main className="flex-1">
        {/* ================= HERO SECTION ================= */}
        <section id="home" className="mx-auto max-w-6xl px-5 sm:px-8 pt-10 pb-16 md:pt-16 md:pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-5">
              <div className="inline-block">
                <p className="text-base sm:text-lg font-bold text-[#141413]">Hi, I&apos;m</p>
                <SectionUnderline className="w-12" />
              </div>

              <h1
                id="main-heading"
                tabIndex={-1}
                className="text-5xl sm:text-6xl lg:text-[64px] font-extrabold tracking-tight leading-[1.06]"
              >
                <span className="text-[#141413]">{RESUME_DATA.firstName} </span>
                <span className="text-[#E86C2C]">{RESUME_DATA.lastName}</span>
              </h1>

              <p className="text-lg sm:text-xl font-semibold text-[#57534E]">
                {RESUME_DATA.title} &amp; Systems Architect
              </p>

              <p className="text-sm sm:text-base text-[#57534E] leading-relaxed max-w-xl">
                {RESUME_DATA.heroPitch}
              </p>

              {/* Hero CTAs */}
              <div className="pt-3 flex flex-wrap items-center gap-4">
                <a
                  href="#work"
                  onClick={() => setActiveNav("work")}
                  className="hover-lift inline-flex items-center gap-2.5 rounded-full bg-[#E86C2C] hover:bg-[#D35A1B] px-6 py-3.5 text-sm font-bold text-white shadow-sm"
                >
                  <span>View My Work</span>
                  <ArrowRight aria-hidden="true" className="w-4 h-4" />
                </a>

                <Link
                  href="/resume"
                  className="hover-lift inline-flex items-center gap-2.5 rounded-full border-[1.8px] border-[#141413] bg-transparent hover:bg-stone-100/80 px-6 py-3.5 text-sm font-bold text-[#141413]"
                >
                  <span>Download CV</span>
                  <Download aria-hidden="true" className="w-4 h-4 text-[#E86C2C]" />
                </Link>
              </div>
            </div>

            {/* Right Illustration */}
            <div className="lg:col-span-6 flex justify-center lg:justify-end">
              <HeroDeveloperIllustration />
            </div>
          </div>
        </section>

        {/* ================= ABOUT ME SECTION ================= */}
        <section id="about" className="mx-auto max-w-6xl px-5 sm:px-8 py-14 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Window + Coffee Mug Illustration */}
            <div className="lg:col-span-5 flex justify-center">
              <AboutDeveloperIllustration />
            </div>

            {/* Right Bio & 6 Core Competency Traits */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#141413]">
                  About Me
                </h2>
                <SectionUnderline className="w-14" />
              </div>

              <p className="text-sm sm:text-base text-[#57534E] leading-relaxed">
                {RESUME_DATA.aboutNarrative}
              </p>

              {/* 2x3 Trait Badges Grid */}
              <ul
                role="list"
                className="pt-2 grid grid-cols-1 sm:grid-cols-3 gap-x-6 gap-y-5"
              >
                {RESUME_DATA.coreCompetencies.map((trait) => (
                  <li
                    key={trait.title}
                    className="group flex items-start gap-3 rounded-xl p-2 -m-2 transition-colors hover:bg-[#FAF5F0]"
                  >
                    <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#FDF2EA] border border-[#E86C2C]/20">
                      {renderTraitIcon(trait.icon)}
                    </span>
                    <div>
                      <h3 className="text-xs sm:text-sm font-bold text-[#141413]">
                        {trait.title}
                      </h3>
                      <p className="mt-0.5 text-[11px] leading-snug text-[#78716C]">
                        {trait.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ================= SKILLS & TECHNOLOGIES SECTION ================= */}
        <section id="skills" className="mx-auto max-w-6xl px-5 sm:px-8 py-14 md:py-20">
          <div className="mb-8">
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#141413]">
              Skills &amp; Technologies
            </h2>
            <SectionUnderline className="w-16" />
          </div>

          {/* Primary 9-Card Row (8 Core Skills + "More" Toggle Card matching the reference) */}
          <ul
            role="list"
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-3.5"
          >
            {coreSkills.map((skill) => (
              <li
                key={skill.name}
                title={skill.detail}
                className="hover-lift flex flex-col items-center justify-center rounded-2xl bg-[#FAF4EE] border border-[#F2E7DC] px-3 py-6 text-center"
              >
                <div className="mb-3.5 flex h-12 w-12 items-center justify-center rounded-xl bg-white/80 shadow-2xs">
                  <SkillBadgeIcon iconKey={skill.iconKey} />
                </div>
                <span className="text-xs font-bold text-[#141413]">{skill.name}</span>
              </li>
            ))}

            {/* 9th Card: Interactive "More" Button */}
            <li>
              <button
                type="button"
                aria-expanded={showAllSkills}
                onClick={() => setShowAllSkills((prev) => !prev)}
                className="hover-lift w-full h-full flex flex-col items-center justify-center rounded-2xl bg-[#FAF4EE] hover:bg-[#F5E8DC] border border-[#E86C2C]/30 px-3 py-6 text-center cursor-pointer"
              >
                <div className="mb-3.5 flex h-12 w-12 items-center justify-center rounded-xl bg-white/90 shadow-2xs">
                  <MoreHorizontal aria-hidden="true" className="w-7 h-7 text-[#141413]" />
                </div>
                <span className="text-xs font-bold text-[#141413]">
                  {showAllSkills ? "Show Less" : "More"}
                </span>
              </button>
            </li>
          </ul>

          {/* Expanded Specialist Skills from Resume */}
          {showAllSkills && (
            <div className="mt-5 rounded-2xl bg-[#FAF4EE]/70 border border-[#F2E7DC] p-5">
              <p className="mb-4 text-xs font-bold uppercase tracking-wider text-[#E86C2C]">
                Architecture, Data, Real-Time &amp; DevOps Stack
              </p>
              <ul
                role="list"
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3.5"
              >
                {extendedSkills.map((skill) => (
                  <li
                    key={skill.name}
                    className="flex items-start gap-3 rounded-xl bg-white p-3.5 border border-stone-200/70"
                  >
                    <div className="mt-0.5 shrink-0">
                      <SkillBadgeIcon iconKey={skill.iconKey} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-[#141413]">{skill.name}</p>
                      <p className="mt-0.5 text-[11px] text-[#57534E] leading-snug">
                        {skill.detail}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </section>

        {/* ================= SELECTED WORK SECTION ================= */}
        <section id="work" className="mx-auto max-w-6xl px-5 sm:px-8 py-14 md:py-20">
          <div className="mb-9 flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#141413]">
                Selected Work
              </h2>
              <SectionUnderline className="w-16" />
            </div>

            <button
              type="button"
              aria-expanded={showAllProjects}
              onClick={() => setShowAllProjects((prev) => !prev)}
              className="group inline-flex flex-col items-end text-xs sm:text-sm font-bold text-[#141413] hover:text-[#E86C2C] transition-colors cursor-pointer"
            >
              <span className="inline-flex items-center gap-1.5">
                {showAllProjects
                  ? "Show Top 3 Featured"
                  : `View All Projects (${RESUME_DATA.projects.length})`}
                <ArrowRight
                  aria-hidden="true"
                  className="w-4 h-4 text-[#E86C2C] transition-transform group-hover:translate-x-0.5"
                />
              </span>
              <span
                aria-hidden="true"
                className="mt-1 h-[2.5px] w-7 rounded-full bg-[#E86C2C]"
              />
            </button>
          </div>

          {/* Project Cards Grid */}
          <ul role="list" className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {visibleProjects.map((project) => (
              <li
                key={project.id}
                className="hover-lift flex flex-col rounded-2xl bg-white border border-stone-200/80 overflow-hidden shadow-2xs"
              >
                {/* Illustrated Mockup Header */}
                <div
                  style={{ backgroundColor: project.cardBg }}
                  className="px-4 pt-5 pb-3 flex items-center justify-center border-b border-stone-100"
                >
                  <ProjectCardIllustration type={project.illustrationType} />
                </div>

                {/* Card Body */}
                <div className="flex flex-1 flex-col justify-between p-5 space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="text-base font-extrabold text-[#141413]">
                        <button
                          type="button"
                          onClick={() => openProjectModal(project)}
                          className="inline-flex items-center gap-1.5 text-left hover:text-[#E86C2C] transition-colors cursor-pointer"
                        >
                          <span>{project.title}</span>
                          <ExternalLink
                            aria-hidden="true"
                            className="w-3.5 h-3.5 text-[#E86C2C] shrink-0"
                          />
                        </button>
                      </h3>
                      <span className="rounded-full bg-[#FAF4EE] px-2.5 py-0.5 text-[11px] font-semibold text-[#E86C2C]">
                        {project.period}
                      </span>
                    </div>

                    <p className="text-xs font-semibold text-[#57534E]">
                      {project.subtitle}
                    </p>

                    <p className="text-xs text-[#78716C] leading-relaxed">
                      {project.shortDescription}
                    </p>
                  </div>

                  {/* Dot-separated Tech Tags + Architecture Spec Button */}
                  <div className="pt-2 border-t border-stone-100 flex items-center justify-between gap-2">
                    <div className="flex flex-wrap items-center gap-1.5 text-[11px] font-semibold text-[#57534E]">
                      {project.tags.map((tag, idx) => (
                        <React.Fragment key={tag}>
                          <span>{tag}</span>
                          {idx < project.tags.length - 1 && (
                            <span aria-hidden="true" className="text-[#E86C2C]">
                              •
                            </span>
                          )}
                        </React.Fragment>
                      ))}
                    </div>

                    <button
                      type="button"
                      onClick={() => openProjectModal(project)}
                      aria-label={`Read architecture case study for ${project.title}`}
                      className="shrink-0 text-[11px] font-bold text-[#E86C2C] hover:underline cursor-pointer"
                    >
                      Details →
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* ================= EXPERIENCE SECTION ================= */}
        <section id="experience" className="mx-auto max-w-6xl px-5 sm:px-8 py-14 md:py-20">
          <div className="mb-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#141413]">
              Experience
            </h2>
            <SectionUnderline className="w-16" />
          </div>

          <ol role="list" className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {RESUME_DATA.experience.map((exp, index) => (
              <li key={exp.id} className="relative flex items-start gap-4">
                {/* Left Circular Icon Badge */}
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#FAF2EA] border border-[#F2E2D2]">
                  {renderExperienceIcon(exp.iconType)}
                </div>

                {/* Experience Details */}
                <div className="flex-1 space-y-1.5">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-extrabold text-[#E86C2C]">
                      {exp.period}
                    </span>
                    {/* Dashed Connector Line on Desktop */}
                    {index < RESUME_DATA.experience.length - 1 && (
                      <span
                        aria-hidden="true"
                        className="hidden md:inline-flex flex-1 items-center ml-2"
                      >
                        <span className="w-full border-t border-dashed border-stone-300" />
                        <span className="ml-1 h-2 w-2 rounded-full bg-[#E86C2C]" />
                      </span>
                    )}
                  </div>

                  <h3 className="text-base font-extrabold text-[#141413]">
                    {exp.role}
                  </h3>

                  <p className="text-xs font-bold text-[#E86C2C]">{exp.company}</p>

                  <p className="pt-1 text-xs text-[#57534E] leading-relaxed">
                    {exp.summary}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* ================= MY PROCESS SECTION ================= */}
        <section aria-labelledby="process-heading" className="mx-auto max-w-6xl px-5 sm:px-8 py-14 md:py-20">
          <div className="mb-12">
            <h2
              id="process-heading"
              className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#141413]"
            >
              My Process
            </h2>
            <SectionUnderline className="w-16" />
          </div>

          <ol
            role="list"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 relative"
          >
            {RESUME_DATA.process.map((item, idx) => (
              <li
                key={item.step}
                className="relative flex flex-col items-center text-center"
              >
                {/* Dashed Horizontal Connector between steps on large screens */}
                {idx < RESUME_DATA.process.length - 1 && (
                  <div
                    aria-hidden="true"
                    className="hidden lg:block absolute top-8 left-[62%] w-[76%] border-t-[1.5px] border-dashed border-[#E86C2C]/35"
                  />
                )}

                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#FAF2EA] border border-[#F2E2D2] shadow-2xs">
                  {renderProcessIcon(item.icon)}
                </div>

                <span className="text-xs font-extrabold text-[#E86C2C]">
                  {item.step}
                </span>
                <h3 className="mt-0.5 text-sm font-extrabold text-[#141413]">
                  {item.title}
                </h3>
                <p className="mt-1 text-xs text-[#78716C] max-w-[180px] leading-relaxed">
                  {item.description}
                </p>
              </li>
            ))}
          </ol>
        </section>
      </main>

      {/* ================= FOOTER / CONTACT SECTION ================= */}
      <footer id="contact" className="mt-8 bg-[#FAF5F0] border-t border-[#EFE6DC]">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 py-14">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
            {/* Left Callout */}
            <div className="md:col-span-5 space-y-3">
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight leading-snug text-[#141413]">
                Let&apos;s build something
                <br />
                meaningful <span className="text-[#E86C2C]">together.</span>
              </h2>
              <p className="text-xs sm:text-sm text-[#57534E] max-w-sm">
                Available for Senior Full-Stack Engineering, Systems Architecture, and technical leadership roles.
              </p>
            </div>

            {/* Middle Contact Details */}
            <div className="md:col-span-4 space-y-3.5">
              <a
                href={`mailto:${RESUME_DATA.email}`}
                className="flex items-center gap-3 text-xs sm:text-sm font-semibold text-[#141413] hover:text-[#E86C2C] transition-colors"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white border border-stone-200">
                  <Mail aria-hidden="true" className="w-4 h-4 text-[#141413]" />
                </span>
                <span>{RESUME_DATA.email}</span>
              </a>

              <a
                href={`tel:${RESUME_DATA.phoneRaw}`}
                className="flex items-center gap-3 text-xs sm:text-sm font-semibold text-[#141413] hover:text-[#E86C2C] transition-colors"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white border border-stone-200">
                  <Phone aria-hidden="true" className="w-4 h-4 text-[#141413]" />
                </span>
                <span>{RESUME_DATA.phone}</span>
              </a>

              <div className="flex items-center gap-3 text-xs sm:text-sm font-semibold text-[#141413]">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white border border-stone-200">
                  <MapPin aria-hidden="true" className="w-4 h-4 text-[#141413]" />
                </span>
                <span>{RESUME_DATA.location}</span>
              </div>
            </div>

            {/* Right Social Connect Icons */}
            <div className="md:col-span-3 space-y-3">
              <p className="text-xs font-extrabold text-[#141413]">Let&apos;s Connect</p>
              <div className="flex items-center gap-2.5">
                <a
                  href={RESUME_DATA.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Aminu Aliyu on GitHub"
                  className="hover-lift flex h-10 w-10 items-center justify-center rounded-xl bg-white border border-stone-200/90 text-[#141413] hover:border-[#E86C2C] hover:text-[#E86C2C]"
                >
                  <GitHubIcon className="w-4 h-4" />
                </a>

                <a
                  href={RESUME_DATA.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Aminu Aliyu on LinkedIn"
                  className="hover-lift flex h-10 w-10 items-center justify-center rounded-xl bg-white border border-stone-200/90 text-[#141413] hover:border-[#E86C2C] hover:text-[#E86C2C]"
                >
                  <LinkedInIcon className="w-4 h-4" />
                </a>

                <Link
                  href="/resume"
                  aria-label="View Printable Resume and CV"
                  className="hover-lift flex h-10 w-10 items-center justify-center rounded-xl bg-white border border-stone-200/90 text-[#141413] hover:border-[#E86C2C] hover:text-[#E86C2C]"
                >
                  <FileText aria-hidden="true" className="w-4 h-4" />
                </Link>

                <a
                  href={`mailto:${RESUME_DATA.email}`}
                  aria-label="Email Aminu Aliyu"
                  className="hover-lift flex h-10 w-10 items-center justify-center rounded-xl bg-white border border-stone-200/90 text-[#141413] hover:border-[#E86C2C] hover:text-[#E86C2C]"
                >
                  <Mail aria-hidden="true" className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-6 border-t border-stone-200/70 text-center">
            <p className="text-xs text-[#78716C]">
              © {new Date().getFullYear()} {RESUME_DATA.name}. All rights reserved.{" "}
              <span aria-hidden="true" className="text-[#E86C2C]">
                🧡
              </span>
            </p>
          </div>
        </div>
      </footer>

      {/* ================= NATIVE <DIALOG> CASE STUDY MODAL ================= */}
      <dialog
        ref={dialogRef}
        aria-labelledby={dialogTitleId}
        onClick={(e) => {
          if (e.target === dialogRef.current) closeProjectModal();
        }}
        className="case-study-dialog m-auto w-full max-w-2xl rounded-3xl bg-[#FDFCFB] p-0 text-[#141413] shadow-2xl border border-stone-200"
      >
        {selectedProject && (
          <div className="p-6 sm:p-8 space-y-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <span className="inline-block rounded-full bg-[#FDF2EA] px-3 py-1 text-xs font-bold text-[#E86C2C]">
                  {selectedProject.period}
                </span>
                <h2
                  id={dialogTitleId}
                  className="mt-2 text-2xl font-extrabold text-[#141413]"
                >
                  {selectedProject.title}
                </h2>
                <p className="text-sm font-semibold text-[#57534E]">
                  {selectedProject.subtitle}
                </p>
              </div>

              <button
                type="button"
                onClick={closeProjectModal}
                aria-label="Close project details dialog"
                className="rounded-full p-2 text-[#57534E] hover:bg-stone-100 hover:text-[#141413] min-w-[40px] min-h-[40px] inline-flex items-center justify-center cursor-pointer"
              >
                <X aria-hidden="true" className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-3">
              <h3 className="text-xs font-extrabold uppercase tracking-wider text-[#E86C2C]">
                Architecture &amp; Engineering Highlights
              </h3>
              <ul role="list" className="space-y-2.5">
                {selectedProject.highlights.map((bullet, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-sm text-[#57534E] leading-relaxed">
                    <CheckCircle2
                      aria-hidden="true"
                      className="w-4 h-4 text-[#E86C2C] shrink-0 mt-1"
                    />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-2.5">
              <h3 className="text-xs font-extrabold uppercase tracking-wider text-[#E86C2C]">
                Full Technology Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {selectedProject.fullTechStack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-lg bg-[#FAF4EE] border border-[#F2E7DC] px-3 py-1 text-xs font-semibold text-[#141413]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-stone-200 flex flex-wrap items-center justify-between gap-3">
              {selectedProject.githubUrl && (
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-[#141413] px-5 py-2.5 text-xs font-bold text-white hover:bg-[#292524]"
                >
                  <GitHubIcon className="w-4 h-4" />
                  <span>View on GitHub</span>
                  <ArrowUpRight aria-hidden="true" className="w-3.5 h-3.5 text-[#E86C2C]" />
                </a>
              )}

              <button
                type="button"
                onClick={closeProjectModal}
                className="rounded-full border border-stone-300 px-5 py-2.5 text-xs font-bold text-[#141413] hover:bg-stone-100 cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </dialog>
    </div>
  );
}
