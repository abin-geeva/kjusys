import { createFileRoute } from "@tanstack/react-router";

import { EmptyState } from "@/components/EmptyState";

export const Route = createFileRoute("/fees")({
  head: () => ({
    meta: [
      { title: "Fees — Student Portal" },
      { name: "description", content: "Fee payments and dues for your semester." },
      { property: "og:title", content: "Fees — Student Portal" },
      { property: "og:description", content: "Fee payments and dues for your semester." },
    ],
  }),
  component: () => <EmptyState title="Fees" />,
});
