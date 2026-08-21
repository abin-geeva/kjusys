import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Search } from "lucide-react";

export const Route = createFileRoute("/fees")({
  head: () => ({
    meta: [
      { title: "Fees — Student Portal" },
      { name: "description", content: "Outstanding fees and payment dues for your semester." },
      { property: "og:title", content: "Fees — Student Portal" },
      {
        property: "og:description",
        content: "Outstanding fees and payment dues for your semester.",
      },
    ],
  }),
  component: Fees,
});

function Fees() {
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
        <span className="text-base font-bold text-foreground">Fees</span>
      </header>

      <main className="mx-auto w-full max-w-2xl px-5 py-6">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-xs font-bold tracking-widest text-muted-foreground">ROLL NO</p>
            <p className="mt-2 text-2xl font-extrabold tracking-tight text-foreground">26CSST01</p>
          </div>
          <div className="text-right">
            <p className="text-xs font-bold tracking-widest text-muted-foreground">
              TOTAL OUTSTANDING
            </p>
            <p className="mt-2 text-2xl font-extrabold text-tile-blue-foreground">₹0</p>
          </div>
        </div>

        <h1 className="mt-10 text-lg tracking-wide text-muted-foreground">Outstanding fees</h1>

        <section className="mt-16 flex flex-col items-center text-center">
          <div className="relative flex items-center justify-center">
            <span className="absolute h-20 w-56 rounded-full bg-tile-blue/40" />
            <Search
              className="relative size-24 text-tile-blue-foreground"
              strokeWidth={1.5}
              aria-hidden="true"
            />
          </div>

          <h2 className="mt-12 text-lg font-bold text-foreground">No Outstanding Fees</h2>
          <p className="mt-3 max-w-sm text-base text-muted-foreground">
            You are all caught up! There are no pending fee payments required at this time.
          </p>
        </section>
      </main>
    </div>
  );
}
