"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Navbar from "@/components/navbar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ArrowRight,
  Github,
  Linkedin,
  ExternalLink,
  Flame,
} from "lucide-react";

const projects = [
  {
    title: "Dil Öyrənmə Oyunu",
    description:
      "İngilis dili sözlərini əzbərləmək üçün 4 fərqli oyun rejimi olan interaktiv tətbiqi.",
    tech: ["Next.js", "TypeScript", "Tailwind"],
    link: "#",
  },
  {
    title: "E-Ticarət Səbət Sistemi",
    description:
      "React Context API ilə idarə olunan, performanslı və dinamik alış-veriş səbəti.",
    tech: ["React", "Context API", "CSS"],
    link: "#",
  },
  {
    title: "Brendinq Agentliyi Portfolio",
    description: "Yaradıcı agentliklər üçün modern və minimalist dizayn.",
    tech: ["Next.js", "Framer Motion", "UI/UX"],
    link: "#",
  },
];

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Terminaldakı xətanın qarşısını almaq üçün timeout ilə gecikdiririk
    const timer = setTimeout(() => {
      setMounted(true);
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  if (!mounted) {
    return <div className="min-h-screen bg-[#0a0a0a]" />;
  }

  return (
    <div className="min-h-screen bg-background text-foreground scroll-smooth selection:bg-orange-500/30">
      <Navbar />

      {/* --- HERO SECTION --- */}
      <main className="relative flex min-h-screen flex-col items-center justify-center px-6 text-center overflow-hidden pt-20">
        {/* Glow Effekti */}
        <div className="absolute top-1/2 left-1/2 -z-10 h-125 w-125 -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-600/10 blur-[120px]" />

        {/* Profil Şəkli */}
        <div className="relative mb-8 group">
          <div className="absolute inset-0 bg-linear-to-r from-orange-600 to-red-600 rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
          <div className="relative h-32 w-32 md:h-40 md:w-40 rounded-full border-2 border-orange-500/30 p-1.5 backdrop-blur-sm overflow-hidden shadow-2xl shadow-orange-950/20">
            <Image
              src="/avatar.jpeg"
              alt="Amil Məmmədli"
              fill
              priority
              className="rounded-full object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-110"
            />
          </div>
        </div>

        <div className="space-y-6 z-10">
          <div className="space-y-3">
            <h2 className="text-xl md:text-2xl font-bold text-orange-500 tracking-[0.4em] uppercase">
              Amil Məmmədli
            </h2>
            <h1 className="text-5xl font-extrabold tracking-tighter sm:text-8xl leading-[1.1]">
              Salam, Mən <br />
              <span className="animate-fire-gradient bg-clip-text text-transparent bg-linear-to-r from-orange-500 via-red-500 to-orange-500">
                Frontend Developer
              </span>
              -əm
            </h1>
          </div>

          <p className="mx-auto max-w-175 text-muted-foreground text-lg md:text-xl leading-relaxed italic opacity-80">
            Next.js, TypeScript və Tailwind CSS ilə{" "}
            <span className="text-orange-500/90 font-medium underline decoration-orange-500/30 underline-offset-4">
              yaradıcı rəqəmsal təcrübələr
            </span>{" "}
            inşa edirəm.
          </p>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-5 z-10">
          <a href="#projects">
            <Button
              size="lg"
              className="rounded-full h-14 px-10 text-lg font-bold bg-linear-to-r from-orange-600 to-red-600 hover:from-orange-500 hover:to-red-500 shadow-xl shadow-orange-900/20 transition-all hover:scale-105 active:scale-95 group"
            >
              Layihələrimə bax{" "}
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform" />
            </Button>
          </a>
          <div className="flex gap-3">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full h-14 w-14 border-orange-900/30 hover:bg-orange-950/30 hover:text-orange-500 transition-all"
            >
              <Github className="h-6 w-6" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full h-14 w-14 border-orange-900/30 hover:bg-orange-950/30 hover:text-orange-500 transition-all"
            >
              <Linkedin className="h-6 w-6" />
            </Button>
          </div>
        </div>

        {/* Texnologiyalar */}
        <div className="mt-24 flex flex-wrap justify-center gap-10 text-[11px] font-black tracking-[0.3em] uppercase opacity-30">
          {["Next.js", "React", "TypeScript", "Tailwind"].map((tech) => (
            <span
              key={tech}
              className="hover:opacity-100 hover:text-orange-500 transition-all cursor-default"
            >
              {tech}
            </span>
          ))}
        </div>
      </main>

      {/* --- PROJECTS SECTION --- */}
      <section id="projects" className="py-32 w-full max-w-6xl mx-auto px-6">
        <div className="flex flex-col items-center mb-20 text-center">
          <div className="flex items-center gap-2 text-orange-600 mb-4 px-4 py-1 rounded-full bg-orange-500/5 border border-orange-500/10">
            <Flame className="h-4 w-4" />
            <span className="text-xs font-bold uppercase tracking-widest">
              İşlərim
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Seçilmiş Layihələr
          </h2>
          <div className="h-1.5 w-24 bg-linear-to-r from-orange-600 to-red-600 rounded-full shadow-lg shadow-orange-900/20" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group relative flex flex-col justify-between overflow-hidden border-orange-900/20 bg-orange-950/5 hover:border-orange-500/50 transition-all duration-500 hover:shadow-2xl"
            >
              <CardHeader className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="h-2.5 w-2.5 rounded-full bg-orange-600 animate-pulse" />
                  <ExternalLink className="h-5 w-5 text-orange-600 opacity-0 group-hover:opacity-100 transition-all" />
                </div>
                <CardTitle className="text-2xl group-hover:text-orange-500 transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription className="line-clamp-3 text-muted-foreground/80 leading-relaxed min-h-18">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 bg-orange-950/40 text-orange-500 text-[10px] font-bold uppercase tracking-wider rounded-md border border-orange-500/10"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="border-t border-orange-900/10 pt-5 mt-4 bg-orange-950/10">
                <a
                  href={project.link}
                  className="text-xs font-black inline-flex items-center gap-2 hover:gap-4 transition-all text-orange-600 hover:text-orange-400 tracking-tighter"
                >
                  LAYİHƏNİ ARAŞDIR <ArrowRight className="h-4 w-4" />
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="py-20 border-t border-orange-900/10 text-center bg-linear-to-b from-transparent to-orange-950/5">
        <p className="text-sm text-muted-foreground opacity-60 tracking-wide">
          © 2026 Portfolio. Müəllif hüquqları qorunur.{" "}
          <br className="md:hidden" />
          Dizayn və Kodlama:{" "}
          <span className="text-orange-600 font-bold">Amil Məmmədli</span>
        </p>
      </footer>
    </div>
  );
}
