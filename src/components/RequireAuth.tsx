import { useEffect, useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import { isSignedIn } from "@/lib/auth";

export function RequireAuth({ children }: { children: React.ReactNode }) {
  const navigate = useNavigate();
  const [ok, setOk] = useState(false);

  useEffect(() => {
    if (isSignedIn()) setOk(true);
    else navigate({ to: "/login", replace: true });
  }, [navigate]);

  if (!ok) return <div className="min-h-screen bg-background" />;
  return <>{children}</>;
}
