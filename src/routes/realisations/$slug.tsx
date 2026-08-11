import { createFileRoute, notFound } from "@tanstack/react-router";
import { CaseStudy } from "@/components/site/CaseStudy";
import { projects } from "@/components/site/data";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/realisations/$slug")({
  loader: ({ params }) => {
    const project = projects.find((p) => p.caseStudySlug === params.slug);
    if (!project) throw notFound();
  },
  head: ({ params }) => {
    const project = projects.find((p) => p.caseStudySlug === params.slug);
    return pageHead({
      title: project
        ? `${project.name} — Étude de cas | Najah Web`
        : "Étude de cas | Najah Web",
      description:
        project?.summary ??
        "Étude de cas d'un site web créé par Najah Web : besoin, solution, technologies utilisées.",
      path: `/realisations/${params.slug}`,
    });
  },
  component: CaseStudyPage,
});

function CaseStudyPage() {
  const { slug } = Route.useParams();
  return <CaseStudy slug={slug} />;
}
