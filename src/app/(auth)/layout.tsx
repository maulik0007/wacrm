import type { Metadata } from "next";
import type { ReactNode } from "react";

// Shared metadata for auth pages (login / signup / forgot-password).
// None of these should be indexed — they'd compete with the marketing
// landing in SERPs and offer nothing to a searcher who hasn't already
// signed up. Each page still gets its own <title> via its own
// metadata.title override below the route group layout.
// Render the auth pages dynamically (at request time) instead of
// prerendering them at build. They are `"use client"` forms that call
// createClient() in the component body; during static generation that
// runs on the server and throws if NEXT_PUBLIC_SUPABASE_* aren't present
// at build time, failing the whole build. Forcing dynamic here (a Server
// Component layout, so the segment config is honored and applies to every
// nested auth route) moves that to request time, where the env is set.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
    },
  },
};

export default function AuthLayout({ children }: { children: ReactNode }) {
  return children;
}
