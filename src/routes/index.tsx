import { createFileRoute, Link } from "@tanstack/react-router";
import {
  CalendarCheck,
  ChevronRight,
  ClipboardList,
  Eye,
  EyeOff,
  Landmark,
  LockKeyhole,
  Wallet,
} from "lucide-react";
import { type FormEvent, useEffect, useState } from "react";

const avatar = "/student.jpeg";

const USERNAME = "P_26CSST01@KRISTUJAYANTI.COM";
const PASSWORD = "RT#9lmvo";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kjusys — Login" },
      {
        name: "description",
        content: "Kjusys student portal login and dashboard.",
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

function UniversityLogo() {
  return (
    <div className="flex justify-center">
      <img
        src="/kju-logo.png"
        alt="Kristu Jayanti University"
        className="h-auto w-full max-w-[760px] object-contain"
      />
    </div>
  );
}

function LoginPage({ onLogin }: { onLogin: () => void }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (email === USERNAME && password === PASSWORD) {
      sessionStorage.setItem("kjusys-auth", "true");
      onLogin();
      return;
    }

    setError(true);
  }

  return (
    <main className="min-h-screen bg-white px-4 py-6 text-black sm:px-10 sm:py-10">
      <div className="mx-auto w-full max-w-3xl">

        {/* Logo */}
        <UniversityLogo />

        {/* Login */}
        <form
          onSubmit={handleSubmit}
          className="mx-auto mt-12 w-full max-w-2xl sm:mt-24"
        >
          <h1 className="font-serif text-3xl leading-tight sm:text-5xl">
            Login to Kjusys
          </h1>

          {/* Email */}
          <div className="mt-10 sm:mt-16">
            <label className="block text-lg font-medium text-slate-500 sm:text-[23px]">
              E-mail
            </label>

            <input
              type="email"
              autoComplete="username"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setError(false);
              }}
              placeholder="Enter your Email"
              className="
                mt-3 h-16 w-full
                rounded-2xl border-2 border-slate-200
                px-5 text-lg text-slate-700
                outline-none transition
                focus:border-slate-400
                sm:mt-5 sm:h-24 sm:rounded-3xl
                sm:px-7 sm:text-2xl
              "
            />
          </div>

          {/* Password */}
          <div className="mt-9 sm:mt-16">
            <label className="block text-lg font-medium text-slate-500 sm:text-[23px]">
              Password
            </label>

            <div className="relative mt-3 sm:mt-5">
              <input
                type={showPassword ? "text" : "password"}
                autoComplete="current-password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setError(false);
                }}
                placeholder="Enter your Password"
                className="
                  h-16 w-full
                  rounded-2xl border-2 border-slate-200
                  px-5 pr-14 text-lg text-slate-700
                  outline-none transition
                  focus:border-slate-400
                  sm:h-24 sm:rounded-3xl
                  sm:px-7 sm:pr-20 sm:text-2xl
                "
              />

              <button
                type="button"
                aria-label={
                  showPassword ? "Hide password" : "Show password"
                }
                onClick={() =>
                  setShowPassword((value) => !value)
                }
                className="
                  absolute right-3 top-1/2
                  -translate-y-1/2
                  p-2 text-slate-500
                  sm:right-5 sm:p-3
                "
              >
                {showPassword ? (
                  <EyeOff className="size-6 sm:size-8" />
                ) : (
                  <Eye className="size-6 sm:size-8" />
                )}
              </button>
            </div>
          </div>

          {/* Forgot password */}
          <div className="mt-3 flex justify-end sm:mt-5">
            <button
              type="button"
              className="text-base font-semibold text-black hover:underline sm:text-xl"
              onClick={() => setError(true)}
            >
              Forgot Password?
            </button>
          </div>

          {/* Error */}
          {error && (
            <div
              className="
                mt-4 rounded-2xl bg-red-50
                px-4 py-3 text-center
                text-sm font-semibold text-red-600
                sm:mt-6 sm:px-5 sm:py-4 sm:text-lg
              "
            >
              Incorrect credentials. Please check your e-mail and password.
            </div>
          )}

          {/* Login button */}
          <button
            type="submit"
            className="
              mt-6 flex h-16 w-full
              items-center justify-center
              rounded-2xl bg-black
              text-lg font-bold text-white
              transition hover:bg-slate-900
              active:scale-[0.99]
              sm:mt-8 sm:h-24
              sm:rounded-3xl sm:text-2xl
            "
          >
            <LockKeyhole className="mr-2 size-5 sm:mr-3 sm:size-6" />
            Log in
          </button>
        </form>

        {/* Footer */}
        <footer
          className="
            mx-auto max-w-2xl
            mt-20 text-center text-slate-500
            sm:mt-44
          "
        >
          <div className="flex items-center gap-3 sm:gap-6">
            <div className="h-px flex-1 bg-slate-400" />
            <span className="text-base sm:text-xl">
              Powered by
            </span>
            <div className="h-px flex-1 bg-slate-400" />
          </div>

          <p className="mt-6 text-lg font-medium text-black sm:mt-8 sm:text-2xl">
            <span className="mr-2 inline-block text-base sm:mr-3 sm:text-xl">
              ◆
            </span>
            Kristu Jayanti Software Development Centre
          </p>

          <p className="mt-5 text-base sm:mt-7 sm:text-xl">
            An Initiative of
          </p>

          <p className="mt-4 text-base sm:mt-5 sm:text-xl">
            Kristu Jayanti (Deemed to be University)
          </p>
        </footer>
      </div>
    </main>
  );
}

function Dashboard() {
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
        {/* Profile */}
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
              <div
                key={d.label}
                className="rounded-2xl border border-border px-4 py-3"
              >
                <dt className="text-xs font-semibold tracking-wide text-muted-foreground">
                  {d.label}
                </dt>

                <dd className="mt-1 truncate text-base font-bold text-foreground">
                  {d.value}
                </dd>
              </div>
            ))}
          </dl>
        </section>

        {/* Quick links */}
        <section className="rounded-3xl bg-surface p-5 shadow-card">
          <h2 className="text-2xl font-extrabold tracking-tight text-foreground">
            Quick Links
          </h2>

          <div className="mt-5 grid grid-cols-2 gap-3">
            {quickLinks.map(
              ({ label, to, icon: Icon, bg, fg }) => (
                <Link
                  key={label}
                  to={to}
                  className="flex items-center gap-3 rounded-2xl border border-border px-3 py-3 text-left transition-shadow hover:shadow-card"
                >
                  <span
                    className={`flex size-11 shrink-0 items-center justify-center rounded-xl ${bg}`}
                  >
                    <Icon className={`size-6 ${fg}`} />
                  </span>

                  <span className="min-w-0 flex-1 truncate text-base font-medium text-foreground">
                    {label}
                  </span>

                  <ChevronRight className="size-5 shrink-0 text-muted-foreground" />
                </Link>
              ),
            )}
          </div>
        </section>
      </main>
    </div>
  );
}

function Index() {
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    setAuthenticated(
      sessionStorage.getItem("kjusys-auth") === "true",
    );
  }, []);

  if (!authenticated) {
    return <LoginPage onLogin={() => setAuthenticated(true)} />;
  }

  return <Dashboard />;
}
