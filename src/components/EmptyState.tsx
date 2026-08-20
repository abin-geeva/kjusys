import { Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";

export function EmptyState({ title }: { title: string }) {
  return (
    <div className="min-h-screen bg-surface">
      <header className="flex items-center gap-3 border-b border-border px-5 py-4">
        <Link
          to="/"
          className="inline-flex size-9 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-accent"
          aria-label="Go back"
        >
          <ArrowLeft className="size-5" />
        </Link>
        <span className="text-base font-bold text-foreground">{title}</span>
      </header>

      <main className="flex min-h-[70vh] flex-col items-center justify-center px-6 text-center">
        <div className="relative flex items-center justify-center">
          <span className="absolute h-24 w-64 rounded-full bg-tile-blue/50" />
          <span className="relative size-32 rounded-full border-[6px] border-tile-blue-foreground bg-tile-blue/40" />
          <span className="absolute -bottom-2 -right-6 h-14 w-5 rotate-[-45deg] rounded-full border-[6px] border-tile-blue-foreground bg-surface" />
        </div>

        <h1 className="mt-16 text-2xl font-extrabold tracking-tight text-foreground">
          No Events Found
        </h1>
        <p className="mt-4 text-xl text-muted-foreground">
          No eligible events found at the moment.
        </p>
      </main>
    </div>
  );
}
