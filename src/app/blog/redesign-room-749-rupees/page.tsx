import { notFound } from "next/navigation";
import ArticlePage from "../_components/ArticlePage";
import { buildArticleMetadata, getArticleBySlug } from "../_lib/articles";

export const metadata = buildArticleMetadata("redesign-room-749-rupees");

export default function RedesignRoom749RupeesPage() {
  const article = getArticleBySlug("redesign-room-749-rupees");

  if (!article) {
    notFound();
  }

  return <ArticlePage article={article} />;
}
