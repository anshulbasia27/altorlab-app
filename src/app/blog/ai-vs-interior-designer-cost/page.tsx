import { notFound } from "next/navigation";
import ArticlePage from "../_components/ArticlePage";
import { buildArticleMetadata, getArticleBySlug } from "../_lib/articles";

export const metadata = buildArticleMetadata("ai-vs-interior-designer-cost");

export default function AiVsInteriorDesignerCostPage() {
  const article = getArticleBySlug("ai-vs-interior-designer-cost");

  if (!article) {
    notFound();
  }

  return <ArticlePage article={article} />;
}
