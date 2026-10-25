import type { Metadata } from "next";
import "./globals.css";
import { Bricolage_Grotesque, Geist } from "next/font/google";
import { cn } from "@/lib/utils";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/sonner";
import AppShell from "@/components/AppShell";
const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

const bricolage = Bricolage_Grotesque({
  variable: "--font-display",
  subsets: ["latin"],
  axes: ["opsz"],
});

export const metadata: Metadata = {
  title: "Outpost: Agentic Workspace",
  description:
    "An AI agent that draws and writes alongside you and your team , live.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cn("h-full antialiased", geist.variable, bricolage.variable)}
    >
      <body className="min-h-full flex flex-col">
        <TooltipProvider>
          <AppShell> {children}</AppShell>
        </TooltipProvider>
        <Toaster richColors />
      </body>
    </html>
  );
}
