import type { Metadata } from "next";
import { Sidebar } from "@/components/sidebar";
import { ThemeScript } from "@/components/theme-script";
import "./globals.css";

export const metadata: Metadata = {
  title: "Royal Blood — Campaign & Social Console",
  description:
    "Campaign and social performance tracking console for Royal Blood.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <ThemeScript />
      </head>
      <body className="flex min-h-screen font-sans antialiased">
        <Sidebar />
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}
