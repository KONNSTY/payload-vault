"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Webhook, Activity, Settings, LogOut } from "lucide-react";
import { useAuth } from "@/components/providers/AuthProvider";
import { Button } from "@/components/ui/button";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const { signOut } = useAuth();

  const navItems = [
    { name: "Übersicht", href: "/dashboard", icon: LayoutDashboard },
    { name: "Endpoints", href: "/dashboard/endpoints", icon: Webhook },
    { name: "Events Log", href: "/dashboard/events", icon: Activity },
    { name: "Einstellungen", href: "/dashboard/settings", icon: Settings },
  ];

  return (
    <div className="flex-1 flex flex-col md:flex-row bg-[var(--background)]">
      {/* Sidebar */}
      <aside className="w-full md:w-64 border-r border-[var(--color-border)] bg-white flex flex-col hidden md:flex">
        <div className="p-6">
          <p className="text-xs font-semibold text-[var(--color-text-muted)] uppercase tracking-wider">
            Workspace
          </p>
        </div>
        <nav className="flex-1 px-4 space-y-1">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-medium transition-colors ${
                  isActive 
                    ? "bg-[var(--color-primary)]/10 text-[var(--color-primary)]" 
                    : "text-[var(--color-text-muted)] hover:bg-gray-50 hover:text-[var(--color-text-main)]"
                }`}
              >
                <item.icon className="w-4 h-4" />
                {item.name}
              </Link>
            );
          })}
        </nav>
        <div className="p-4 border-t border-[var(--color-border)]">
          <Button variant="ghost" className="w-full justify-start text-[var(--color-text-muted)]" onClick={signOut}>
            <LogOut className="w-4 h-4 mr-2" />
            Abmelden
          </Button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 overflow-auto p-6 md:p-8">
        <div className="max-w-5xl mx-auto">
          {children}
        </div>
      </main>
    </div>
  );
}
