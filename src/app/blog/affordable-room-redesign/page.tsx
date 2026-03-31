import { notFound } from "next/navigation";
import ArticlePage from "../_components/ArticlePage";
import { buildArticleMetadata, getArticleBySlug } from "../_lib/articles";

export const metadata = buildArticleMetadata("affordable-room-redesign");

export default function AffordableRoomRedesignPage() {
  const article = getArticleBySlug("affordable-room-redesign");

  if (!article) {
    notFound();
  }

  return <ArticlePage article={article} />;
}
