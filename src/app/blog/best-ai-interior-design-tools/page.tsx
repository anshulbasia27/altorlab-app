import { notFound } from "next/navigation";
import ArticlePage from "../_components/ArticlePage";
import { buildArticleMetadata, getArticleBySlug } from "../_lib/articles";

export const metadata = buildArticleMetadata("best-ai-interior-design-tools");

export default function BestAiInteriorDesignToolsPage() {
  const article = getArticleBySlug("best-ai-interior-design-tools");

  if (!article) {
    notFound();
  }

  return <ArticlePage article={article} />;
}
