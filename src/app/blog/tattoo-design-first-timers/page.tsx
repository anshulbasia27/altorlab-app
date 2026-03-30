import { notFound } from "next/navigation";
import ArticlePage from "../_components/ArticlePage";
import { buildArticleMetadata, getArticleBySlug } from "../_lib/articles";

export const metadata = buildArticleMetadata("tattoo-design-first-timers");

export default function TattooDesignFirstTimersPage() {
  const article = getArticleBySlug("tattoo-design-first-timers");

  if (!article) {
    notFound();
  }

  return <ArticlePage article={article} />;
}
