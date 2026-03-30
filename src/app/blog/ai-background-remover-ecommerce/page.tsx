import { notFound } from "next/navigation";
import ArticlePage from "../_components/ArticlePage";
import { buildArticleMetadata, getArticleBySlug } from "../_lib/articles";

export const metadata = buildArticleMetadata("ai-background-remover-ecommerce");

export default function AiBackgroundRemoverEcommercePage() {
  const article = getArticleBySlug("ai-background-remover-ecommerce");

  if (!article) {
    notFound();
  }

  return <ArticlePage article={article} />;
}
