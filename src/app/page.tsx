"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { ShieldCheck, Activity, Layers, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <div className="flex flex-col min-h-[calc(100vh-4rem)]">
      {/* Hero Section */}
      <section className="flex-1 flex flex-col justify-center items-center text-center px-6 py-24 md:py-32 relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[var(--color-primary)]/5 rounded-full blur-[100px] -z-10 pointer-events-none" />
        
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-3xl flex flex-col items-center"
        >
          <motion.div variants={item} className="mb-6 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] text-sm font-medium">
            <span className="w-2 h-2 rounded-full bg-[var(--color-primary)] animate-pulse" />
            HookGuard v0.1 ist live
          </motion.div>
          
          <motion.h1 variants={item} className="text-4xl md:text-6xl font-extrabold tracking-tight text-[var(--color-text-main)] mb-6 leading-tight">
            Webhooks empfangen. <br className="hidden md:block"/>
            <span className="text-[var(--color-primary)]">Zuverlässig weiterleiten.</span>
          </motion.h1>
          
          <motion.p variants={item} className="text-lg md:text-xl text-[var(--color-text-muted)] mb-10 max-w-2xl leading-relaxed">
            Keine Events mehr verlieren. HookGuard nimmt deine Webhooks entgegen, speichert sie sicher zwischen und leitet sie mit intelligenten Retries an deine Systeme weiter.
          </motion.p>
          
          <motion.div variants={item} className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Link href="/dashboard" className="w-full sm:w-auto">
              <Button size="lg" className="w-full sm:w-auto group">
                Dashboard öffnen
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="https://github.com" target="_blank" className="w-full sm:w-auto">
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                Quellcode ansehen
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-white border-t border-[var(--color-border)]">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-[var(--color-text-main)] mb-4">Warum HookGuard?</h2>
            <p className="text-[var(--color-text-muted)] max-w-2xl mx-auto">
              Entwickelt für Systeme, die keine Downtime verzeihen. Wir haben die Komplexität der asynchronen Verarbeitung abstrahiert.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-none shadow-md shadow-gray-100/50 bg-[var(--background)] hover:shadow-lg hover:shadow-[var(--color-primary)]/5 transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 rounded-xl bg-[var(--color-primary)]/10 flex items-center justify-center mb-4">
                  <ShieldCheck className="w-6 h-6 text-[var(--color-primary)]" />
                </div>
                <CardTitle className="text-xl">Garantierte Auslieferung</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  Fällt dein Backend aus, springt HookGuard ein. Wir nutzen exponentielles Backoff, bis dein System wieder erreichbar ist. Nichts geht verloren.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md shadow-gray-100/50 bg-[var(--background)] hover:shadow-lg hover:shadow-[var(--color-primary)]/5 transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 rounded-xl bg-[var(--color-primary)]/10 flex items-center justify-center mb-4">
                  <Activity className="w-6 h-6 text-[var(--color-primary)]" />
                </div>
                <CardTitle className="text-xl">Echtzeit-Transparenz</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  Ein Dashboard, das keine Fragen offen lässt. Verfolge den Status jedes einzelnen Webhooks in Echtzeit und inspiziere Payloads bei Bedarf.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md shadow-gray-100/50 bg-[var(--background)] hover:shadow-lg hover:shadow-[var(--color-primary)]/5 transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 rounded-xl bg-[var(--color-primary)]/10 flex items-center justify-center mb-4">
                  <Layers className="w-6 h-6 text-[var(--color-primary)]" />
                </div>
                <CardTitle className="text-xl">Sichere Mandantenfähigkeit</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  Von Grund auf für B2B entwickelt. Strikte Datentrennung durch Firestore Security Rules stellt sicher, dass Nutzer nur auf ihre eigenen Endpoints zugreifen.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-[var(--color-border)] text-center text-sm text-[var(--color-text-muted)] bg-[var(--background)]">
        <p>Ein Portfolio-Projekt gebaut mit Next.js, Tailwind, Shadcn UI und Firebase.</p>
      </footer>
    </div>
  );
}
