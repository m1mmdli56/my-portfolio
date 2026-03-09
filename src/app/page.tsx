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
  Sparkles,
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
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-background text-foreground scroll-smooth selection:bg-orange-500/30">
      <Navbar />

      {/* --- HERO SECTION --- */}
      <main className="relative flex min-h-screen flex-col items-center justify-center px-6 text-center overflow-hidden pt-20">
        {/* Arxa fonda alov parıltısı (Glow) */}
        <div className="absolute top-1/2 left-1/2 -z-10 h-125 w-125 -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-600/10 blur-[120px]" />

        {/* Profil Şəkli Bölməsi */}
        <div className="relative mb-8 group">
          {/* Şəklin arxasındakı alovlu parıltı */}
          <div className="absolute inset-0 bg-linear-to-r from-orange-600 to-red-600 rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500" />

          <div className="relative h-32 w-32 md:h-40 md:w-40 rounded-full border-2 border-orange-500/30 p-1.5 backdrop-blur-sm overflow-hidden">
            <Image
              src="/avatar.jpeg"
              alt="Profil Şəkli"
              fill
              className="rounded-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>
        </div>

        <div className="space-y-6 z-10">
          <div className="space-y-2">
            {/* Ad və Soyad */}
            <h2 className="text-xl md:text-2xl font-medium text-orange-500 tracking-[0.3em] uppercase">
              Amil Məmmədli
            </h2>
            <h1 className="text-5xl font-extrabold tracking-tighter sm:text-8xl leading-[1.1]">
              Salam, Mən <br />
              <span className="animate-fire-gradient">Frontend Developer</span>
              -əm
            </h1>
          </div>

          <p className="mx-auto max-w-175 text-muted-foreground text-lg md:text-xl leading-relaxed italic">
            Next.js, TypeScript və Tailwind CSS ilə{" "}
            <span className="text-orange-500/80 underline decoration-orange-500/30">
              yaradıcı rəqəmsal təcrübələr
            </span>{" "}
            inşa edirəm.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-4 z-10">
          <a href="#projects">
            <Button
              size="lg"
              className="rounded-full h-12 px-8 bg-linear-to-r from-orange-600 to-red-600 hover:from-orange-500 hover:to-red-500 shadow-lg shadow-orange-950/20 transition-all hover:scale-105 group"
            >
              Layihələrimə bax{" "}
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </a>
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full h-12 w-12 border-orange-900/30 hover:bg-orange-950/20 hover:text-orange-500"
            >
              <Github className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full h-12 w-12 border-orange-900/30 hover:bg-orange-950/20 hover:text-orange-500"
            >
              <Linkedin className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Texnologiya barları */}
        <div className="mt-20 flex flex-wrap justify-center gap-8 text-[10px] font-bold tracking-[0.2em] uppercase opacity-40">
          <span className="hover:opacity-100 transition-opacity">Next.js</span>
          <span className="hover:opacity-100 transition-opacity">React</span>
          <span className="hover:opacity-100 transition-opacity">
            TypeScript
          </span>
          <span className="hover:opacity-100 transition-opacity">
            Tailwind CSS
          </span>
        </div>
      </main>

      {/* --- PROJECTS SECTION --- */}
      <section id="projects" className="py-32 w-full max-w-6xl mx-auto px-6">
        <div className="flex flex-col items-center mb-20 text-center">
          <div className="flex items-center gap-2 text-orange-600 mb-4">
            <Flame className="h-5 w-5" />
            <span className="text-sm font-bold uppercase tracking-widest">
              Portfolio
            </span>
          </div>
          <h2 className="text-4xl font-bold tracking-tight mb-4">
            Seçilmiş Layihələr
          </h2>
          <div className="h-1 w-20 bg-linear-to-r from-orange-600 to-red-600 rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group relative flex flex-col justify-between overflow-hidden border-orange-900/20 bg-orange-950/5 hover:border-orange-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-orange-900/10"
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <div className="h-2 w-2 rounded-full bg-orange-600 animate-pulse" />
                  <ExternalLink className="h-4 w-4 text-orange-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <CardTitle className="text-xl group-hover:text-orange-500 transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription className="line-clamp-2 text-muted-foreground/80 mt-2">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 bg-orange-950/30 text-orange-500 text-[9px] font-bold uppercase tracking-wider rounded border border-orange-500/10"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="border-t border-orange-900/10 pt-4 mt-4 bg-orange-950/10">
                <a
                  href={project.link}
                  className="text-xs font-bold inline-flex items-center gap-2 hover:gap-3 transition-all text-orange-600 hover:text-orange-400"
                >
                  LAYİHƏNİ ARAŞDIR <ArrowRight className="h-3 w-3" />
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="py-16 border-t border-orange-900/10 text-center">
        <p className="text-sm text-muted-foreground opacity-60">
          © 2026 Portfolio. Dizayn və Kodlama:{" "}
          <span className="text-orange-600 font-medium">
            Sənin Adın Soyadın
          </span>
        </p>
      </footer>
    </div>
  );
}
