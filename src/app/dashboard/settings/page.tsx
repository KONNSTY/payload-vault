"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
export default function SettingsPage(){const [saved,setSaved]=useState(false); return <div className="space-y-8"><div><h1 className="text-2xl font-bold">Einstellungen</h1><p className="text-sm text-[var(--color-text-muted)]">Konfiguriere deine Workspace-Optionen.</p></div><Card><CardHeader><CardTitle className="text-lg">Workspace</CardTitle></CardHeader><CardContent className="space-y-4"><label className="block text-sm font-medium">Workspace-Name<input defaultValue="HookGuard Demo" className="mt-2 block w-full max-w-lg rounded-md border border-[var(--color-border)] px-3 py-2"/></label><Button onClick={()=>{setSaved(true);setTimeout(()=>setSaved(false),2500)}}>{saved ? "Gespeichert ✓" : "Änderungen speichern"}</Button></CardContent></Card></div>}
