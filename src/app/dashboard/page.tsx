"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, CheckCircle2, XCircle, Clock, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function DashboardOverview() {
  
  // Mock data for recruiter preview
  const recentEvents = [
    { id: "evt_10x82", endpoint: "Stripe Webhooks", status: "success", time: "Vor 2 Min." },
    { id: "evt_94v81", endpoint: "Shopify Orders", status: "failed", time: "Vor 15 Min." },
    { id: "evt_21m99", endpoint: "Stripe Webhooks", status: "success", time: "Vor 1 Std." },
    { id: "evt_34a01", endpoint: "GitHub Actions", status: "pending", time: "Vor 3 Std." },
  ];

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-[var(--color-text-main)]">Übersicht</h1>
          <p className="text-sm text-[var(--color-text-muted)]">Willkommen zurück. Hier ist der aktuelle Status deiner Webhooks.</p>
        </div>
        <Link href="/dashboard/endpoints"><Button>
          <Plus className="w-4 h-4 mr-2" />
          Endpoint erstellen
        </Button></Link>
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardContent className="p-6">
            <p className="text-sm font-medium text-[var(--color-text-muted)] mb-2">Events (letzte 24h)</p>
            <p className="text-3xl font-bold text-[var(--color-text-main)]">24,592</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <p className="text-sm font-medium text-[var(--color-text-muted)] mb-2">Erfolgsquote</p>
            <p className="text-3xl font-bold text-green-600">99.8%</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <p className="text-sm font-medium text-[var(--color-text-muted)] mb-2">Aktive Endpoints</p>
            <p className="text-3xl font-bold text-[var(--color-text-main)]">12</p>
          </CardContent>
        </Card>
      </div>

      {/* Recent Events Table */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Kürzliche Events</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="border border-[var(--color-border)] rounded-lg overflow-hidden">
            <table className="w-full text-sm text-left">
              <thead className="bg-gray-50 border-b border-[var(--color-border)] text-[var(--color-text-muted)]">
                <tr>
                  <th className="px-6 py-3 font-medium">Event ID</th>
                  <th className="px-6 py-3 font-medium">Endpoint</th>
                  <th className="px-6 py-3 font-medium">Status</th>
                  <th className="px-6 py-3 font-medium">Zeit</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[var(--color-border)] bg-white">
                {recentEvents.map((event, i) => (
                  <motion.tr 
                    key={event.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="hover:bg-gray-50 transition-colors"
                  >
                    <td className="px-6 py-4 font-mono text-xs">{event.id}</td>
                    <td className="px-6 py-4 font-medium">{event.endpoint}</td>
                    <td className="px-6 py-4">
                      {event.status === "success" && (
                        <span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-md text-xs font-medium bg-green-50 text-green-700 border border-green-200">
                          <CheckCircle2 className="w-3.5 h-3.5" /> Erfolgreich
                        </span>
                      )}
                      {event.status === "failed" && (
                        <span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-md text-xs font-medium bg-red-50 text-red-700 border border-red-200">
                          <XCircle className="w-3.5 h-3.5" /> Fehlgeschlagen (Retrying)
                        </span>
                      )}
                      {event.status === "pending" && (
                        <span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-md text-xs font-medium bg-blue-50 text-blue-700 border border-blue-200">
                          <Clock className="w-3.5 h-3.5" /> Ausstehend
                        </span>
                      )}
                    </td>
                    <td className="px-6 py-4 text-[var(--color-text-muted)]">{event.time}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
      <div className="flex justify-end"><Link href="/dashboard/events" className="inline-flex items-center gap-1 text-sm font-medium text-[var(--color-primary)] hover:underline">Alle Events ansehen <ArrowUpRight className="w-4 h-4" /></Link></div>
    </div>
  );
}
