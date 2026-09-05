import type { Metadata } from "next";
import "./globals.css";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { AuthProvider } from "@/components/providers/AuthProvider";
import { GrainOverlay } from "@/components/ui/grain-overlay";
import Link from "next/link";

export const metadata: Metadata = {
  title: "HookGuard | Webhook Reliability Hub",
  description:
    "Receive webhooks. Deliver reliably. Inspect every payload, retry with exponential backoff, and never lose an event again.",
};

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-[var(--color-surface-border)] bg-[#090A0C]/70 backdrop-blur-xl">
      <div className="container mx-auto flex h-16 items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2.5">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/[0.06] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.12)]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-zinc-100"
            >
              <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
              <polyline points="3.29 7 12 12 20.71 7"></polyline>
              <line x1="12" y1="22" x2="12" y2="12"></line>
            </svg>
          </div>
          <span className="text-[15px] font-semibold tracking-tight text-zinc-100">
            HookGuard
          </span>
        </Link>
        <div className="flex items-center gap-6 text-sm">
          <Link
            href="/#features"
            className="text-zinc-400 transition-colors hover:text-zinc-100"
          >
            Features
          </Link>
          <Link
            href="/dashboard"
            className="text-zinc-400 transition-colors hover:text-zinc-100"
          >
            Dashboard
          </Link>
          <Link
            href="/login"
            className="rounded-md bg-zinc-100 px-3.5 py-1.5 font-medium text-zinc-900 transition-colors hover:bg-white"
          >
            Sign in
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable}`}
      suppressHydrationWarning
    >
      <body className="font-sans bg-[var(--color-canvas)] text-[var(--color-text-main)]">
        <AuthProvider>
          <div className="relative min-h-screen flex flex-col">
            {/* Subtle cool glow anchored to the top of the page. */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[70vh]"
              style={{
                background:
                  "radial-gradient(ellipse 60% 40% at 50% -20%, rgba(120,119,198,0.12), transparent)",
              }}
            />
            <Navbar />
            <main className="flex-1 flex flex-col">{children}</main>
          </div>
          <GrainOverlay />
        </AuthProvider>
      </body>
    </html>
  );
}
