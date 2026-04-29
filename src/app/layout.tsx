import type { Metadata } from "next";
import { interFont } from "./fonts/fontsConfig";
import "./globals.css";
import StateProvider from "./state_management/provider";
import PageContainer from "./Containers/PageContainer";
import Navbar from "./components/Navbar";


export const metadata: Metadata = {
  title: "Seun Idowu | Journalist, Filmmaker & Entrepreneur",
  description: "Official portfolio of Seun Idowu, BBC Journalist, Documentary Filmmaker, and Agropreneur based in Lagos, Nigeria.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${interFont.className} antialiased`}
      >
        <StateProvider>
            <Navbar />
            <PageContainer>
              {children}
            </PageContainer>
        </StateProvider>
      </body>
    </html>
  );
}
