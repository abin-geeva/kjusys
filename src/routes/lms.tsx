import { createFileRoute } from "@tanstack/react-router";

import { EmptyState } from "@/components/EmptyState";

export const Route = createFileRoute("/lms")({
  head: () => ({
    meta: [
      { title: "LMS — Student Portal" },
      { name: "description", content: "Learning management system events for your semester." },
      { property: "og:title", content: "LMS — Student Portal" },
      {
        property: "og:description",
        content: "Learning management system events for your semester.",
      },
    ],
  }),
  component: () => <EmptyState title="LMS" />,
});
