import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Room Redesign — Transform Any Room with AI",
  description:
    "Upload your room photo, choose from 5 interior design styles, and get an AI-redesigned version in seconds. Modern, Scandinavian, Minimalist, Industrial, Bohemian.",
  openGraph: {
    title: "AI Room Redesign — Transform Any Room with AI",
    description:
      "Upload your room photo and get an AI redesign in seconds. From $9.",
    url: "https://app.altorlab.org/room-redesign",
  },
};

export default function RoomRedesignLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
