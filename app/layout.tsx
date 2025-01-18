import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import Navbar from "./helpers/Navbar/Navbar";
import { Toaster } from "@/components/ui/toaster";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Alessandro Mate Jr. | Front End Developer",
  description: "My Portfolio Website using NextJS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <Head>
          <script
            src="https://app.10xlaunch.ai/widget"
            data-app-id="82b05a0a-349e-456e-8434-2c126f9f5466"
            async
            defer
          ></script>
        </Head>
        <body className={`${inter.className} antialiased`}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <main className="min-h-screen">
              <Navbar />
              {children}
            </main>
            <Toaster />
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
