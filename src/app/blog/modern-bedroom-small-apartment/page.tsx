import { notFound } from "next/navigation";
import ArticlePage from "../_components/ArticlePage";
import { buildArticleMetadata, getArticleBySlug } from "../_lib/articles";

export const metadata = buildArticleMetadata("modern-bedroom-small-apartment");

export default function ModernBedroomSmallApartmentPage() {
  const article = getArticleBySlug("modern-bedroom-small-apartment");

  if (!article) {
    notFound();
  }

  return <ArticlePage article={article} />;
}
