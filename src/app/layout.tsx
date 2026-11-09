import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-jakarta",
});

export const metadata: Metadata = {
  title: "Aminu Aliyu | Senior Full-Stack Software Engineer",
  description:
    "Portfolio of Aminu Aliyu — Senior Full-Stack Software Engineer with 7+ years of experience in ASP.NET Core, Next.js, React, Vue 3, Blazor, Flutter, TypeScript, and PostgreSQL.",
  keywords: [
    "Aminu Aliyu",
    "Senior Full-Stack Software Engineer",
    "ASP.NET Core",
    "Next.js",
    "React",
    "Vue 3",
    "Flutter",
    "Blazor",
    "PostgreSQL",
    "Software Architect",
    "Abuja Nigeria",
  ],
  authors: [{ name: "Aminu Aliyu", url: "https://github.com/breezycloud" }],
  openGraph: {
    title: "Aminu Aliyu | Senior Full-Stack Software Engineer",
    description:
      "Architecting and shipping production web platforms, multi-tenant SaaS products, and enterprise operational systems.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={jakarta.variable}>
      <body className="min-h-screen bg-[#FDFCFB] text-[#141413] antialiased font-sans selection:bg-[#E86C2C]/20 selection:text-[#141413]">
        {children}
      </body>
    </html>
  );
}

