import type { Viewport } from "next";
import type { ReactNode } from "react";
import { SiteFrame } from "@/components/SiteFrame";
import { rootMetadata } from "@/data/seo";
import "../globals.css";

export const metadata = rootMetadata("fr");

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#122333",
  colorScheme: "light",
};

export default function FrenchRootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <SiteFrame lang="fr">{children}</SiteFrame>;
}
