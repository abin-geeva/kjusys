import { createFileRoute, Link } from "@tanstack/react-router";
import { CalendarCheck, ChevronRight, ClipboardList, Landmark, Wallet } from "lucide-react";


import avatarAsset from "@/assets/student.jpeg";

const avatar = "/student.jpeg";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Student Portal — Abin Geevarghese" },
      {
        name: "description",
        content:
          "Student dashboard with profile details, exam results, hall tickets, attendance and library quick links.",
      },
      { property: "og:title", content: "Student Portal — Abin Geevarghese" },
      {
        property: "og:description",
        content:
          "Student dashboard with profile details, exam results, hall tickets, attendance and library quick links.",
      },
    ],
  }),
  component: Index,
});

const details = [
  { label: "REG. NO.", value: "26KJ30190" },
  { label: "ROLL NO.", value: "26CSST01" },
  { label: "DOB", value: "21-02-2008" },
  { label: "GENDER", value: "MALE" },
  { label: "COURSE", value: "BSC COMPUTER SCIENCE" },
  { label: "SESSION", value: "SEMESTER 1" },
  { label: "FEE CAT.", value: "OSK" },
  { label: "SEC", value: "A" },
];

const quickLinks = [
  {
    label: "LMS",
    to: "/lms" as const,
    icon: ClipboardList,
    bg: "bg-tile-blue",
    fg: "text-tile-blue-foreground",
  },
  {
    label: "Library",
    to: "/library" as const,
    icon: Landmark,
    bg: "bg-tile-purple",
    fg: "text-tile-purple-foreground",
  },
  {
    label: "Attendance",
    to: "/attendance" as const,
    icon: CalendarCheck,
    bg: "bg-tile-indigo",
    fg: "text-tile-indigo-foreground",
  },
  {
    label: "Fees",
    to: "/fees" as const,
    icon: Wallet,
    bg: "bg-tile-orange",
    fg: "text-tile-orange-foreground",
  },
];



function Index() {
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-10 flex items-center justify-end border-b border-border bg-surface px-5 py-4">
        <img
          src={avatar}
          alt="Abin Geevarghese"
          width={512}
          height={512}
          className="size-14 rounded-full border border-border object-cover"
        />
      </header>


      <main className="mx-auto w-full max-w-2xl space-y-6 px-4 py-6">
        <section className="rounded-3xl bg-surface p-5 shadow-card">
          <div className="flex flex-col items-end gap-2">
            <span className="inline-flex items-center gap-2 rounded-full bg-status-active-bg px-4 py-1.5 text-base font-bold text-status-active">
              <span className="size-2 rounded-full bg-status-active" />
              Active
            </span>
            <span className="rounded-full bg-year-bg px-4 py-1.5 text-base font-bold text-year-foreground">
              2026
            </span>
          </div>

          <div className="mt-2 flex flex-col items-center">
            <img
              src={avatar}
              alt="Abin Geevarghese profile"
              width={512}
              height={512}
              className="size-28 rounded-full object-cover"
            />
            <h1 className="mt-5 text-center text-2xl font-extrabold tracking-tight text-foreground">
              ABIN GEEVARGHESE
            </h1>
          </div>

          <dl className="mt-7 grid grid-cols-2 gap-3">
            {details.map((d) => (
              <div key={d.label} className="rounded-2xl border border-border px-4 py-3">
                <dt className="text-xs font-semibold tracking-wide text-muted-foreground">
                  {d.label}
                </dt>
                <dd className="mt-1 truncate text-base font-bold text-foreground">{d.value}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="rounded-3xl bg-surface p-5 shadow-card">
          <h2 className="text-2xl font-extrabold tracking-tight text-foreground">Quick Links</h2>
          <div className="mt-5 grid grid-cols-2 gap-3">
            {quickLinks.map(({ label, to, icon: Icon, bg, fg }) => (
              <Link
                key={label}
                to={to}
                className="flex items-center gap-3 rounded-2xl border border-border px-3 py-3 text-left transition-shadow hover:shadow-card"
              >
                <span className={`flex size-11 shrink-0 items-center justify-center rounded-xl ${bg}`}>
                  <Icon className={`size-6 ${fg}`} />
                </span>
                <span className="min-w-0 flex-1 truncate text-base font-medium text-foreground">
                  {label}
                </span>
                <ChevronRight className="size-5 shrink-0 text-muted-foreground" />
              </Link>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
