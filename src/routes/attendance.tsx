import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ChevronDown, ChevronRight } from "lucide-react";

export const Route = createFileRoute("/attendance")({
  head: () => ({
    meta: [
      { title: "My Attendance — Student Portal" },
      {
        name: "description",
        content: "Semester attendance summary with present, absent, medical leave and OD leave.",
      },
      { property: "og:title", content: "My Attendance — Student Portal" },
      {
        property: "og:description",
        content: "Semester attendance summary with present, absent, medical leave and OD leave.",
      },
    ],
  }),
  component: Attendance,
});

const bars = [
  { label: "Attendance", percent: 100 },
  { label: "Medical Leave", percent: 0 },
  { label: "OD Leave", percent: 0 },
];

function Attendance() {
  return (
    <div className="min-h-screen bg-background">
      <header className="flex items-center gap-3 border-b border-border bg-surface px-5 py-4">
        <Link
          to="/"
          className="inline-flex size-9 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-accent"
          aria-label="Go back"
        >
          <ArrowLeft className="size-5" />
        </Link>
        <span className="text-base font-bold text-foreground">My Attendance</span>
      </header>

      <div className="bg-surface px-5 pb-6">
        <nav className="flex items-center gap-1 text-base text-muted-foreground">
          Academics
          <ChevronRight className="size-4" />
          <span className="text-tile-blue-foreground">My Attendance</span>
        </nav>
        <h1 className="mt-2 text-2xl font-extrabold tracking-tight text-foreground">
          My Attendance
        </h1>
      </div>

      <main className="mx-auto w-full max-w-2xl px-4 py-6">
        <div className="flex items-center gap-2 border-b border-border">
          <span className="border-b-2 border-tile-blue-foreground bg-tile-blue/30 px-4 py-3 text-base font-medium text-tile-blue-foreground">
            Semester View
          </span>
          <span className="px-4 py-3 text-base text-muted-foreground">Month View</span>
          <span className="px-4 py-3 text-base text-muted-foreground">Date View</span>
        </div>

        <div className="mt-6 flex items-center justify-between rounded-2xl border border-border bg-surface px-5 py-4">
          <span className="text-base text-foreground">Semester 1</span>
          <ChevronDown className="size-5 text-muted-foreground" />
        </div>

        <div className="mt-3 space-y-7 rounded-3xl bg-surface p-5 shadow-card">



          {bars.map((bar) => (
            <div key={bar.label}>
              <p className="mb-2 text-sm font-semibold text-muted-foreground">{bar.label}</p>
              <div className="relative h-1 rounded-full bg-border">
                <div
                  className="h-1 rounded-full bg-status-active"
                  style={{ width: `${bar.percent}%` }}
                />
                <span
                  className="absolute top-1/2 size-5 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-status-active bg-surface"
                  style={{ left: `${bar.percent}%` }}
                />
              </div>
              <p className="mt-2 text-right text-xl font-extrabold text-foreground">
                {bar.percent}%
              </p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
