import { createFileRoute } from "@tanstack/react-router";
import { Database } from "lucide-react";
import { ServiceDetail } from "@/components/site/ServiceDetail";
import { SERVICES_BY_SLUG } from "@/lib/services-data";

export const Route = createFileRoute("/services/data-ai")({
  head: () => ({
    meta: [
      { title: "Data & Artificial Intelligence — Cloud Rangers" },
      { name: "description", content: "Modern data platforms, Kafka, Snowflake, Databricks, and Generative AI. Intelligent data engineering for New Zealand enterprises." },
      { property: "og:title", content: "Data & AI — Cloud Rangers" },
      { property: "og:description", content: "Intelligent data platforms that turn raw data into business decisions." },
    ],
  }),
  component: () => (
    <ServiceDetail
      service={SERVICES_BY_SLUG["data-ai"]}
      icon={<Database className="h-6 w-6" />}
    />
  ),
});
