import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import NavBar from "@/components/layout/NavBar";
import { ThemeProvider } from "@/components/theme-provider";
import Container from "@/components/Container";
import { Toaster } from "@/components/ui/toaster";
import Footer from "@/components/layout/Footer";
import { SyncActiveOrganization } from "@/components/sync-active-organization";
import { auth } from "@clerk/nextjs/server";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hotel;",
  description: "Best Hotel Services",
  icons: { icon: "/logo.svg" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { sessionClaims } = auth();
  const membership = sessionClaims?.membership as
    | Record<string, string>
    | undefined;

  return (
    <ClerkProvider>
      <SyncActiveOrganization membership={membership} />
      <html lang="en">
        <body className={inter.className}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Toaster />
            <main className="flex flex-col min-h-screen bg-secondary">
              <NavBar />
              <Container>
                <section className="flex-grow">{children}</section>
              </Container>
              <Footer />
            </main>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
