import { createFileRoute } from "@tanstack/react-router";

import { EmptyState } from "@/components/EmptyState";

export const Route = createFileRoute("/library")({
  head: () => ({
    meta: [
      { title: "Library — Student Portal" },
      { name: "description", content: "Library events, loans and reservations." },
      { property: "og:title", content: "Library — Student Portal" },
      { property: "og:description", content: "Library events, loans and reservations." },
    ],
  }),
  component: () => <EmptyState title="Library" />,
});
