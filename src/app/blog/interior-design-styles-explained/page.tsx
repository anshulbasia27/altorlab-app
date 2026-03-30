import { notFound } from "next/navigation";
import ArticlePage from "../_components/ArticlePage";
import { buildArticleMetadata, getArticleBySlug } from "../_lib/articles";

export const metadata = buildArticleMetadata("interior-design-styles-explained");

export default function InteriorDesignStylesExplainedPage() {
  const article = getArticleBySlug("interior-design-styles-explained");

  if (!article) {
    notFound();
  }

  return <ArticlePage article={article} />;
}
