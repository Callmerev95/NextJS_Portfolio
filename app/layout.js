import { Nunito } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Nav from "@/components/Nav";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-nunito",
});

export const metadata = {
  title: "Portfolio",
  description: "Next.Js Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${nunito.variable} overflow-x-hidden bg-primary text-tertiary`}
      >
        <Header />
        <Nav />
        {children}
      </body>
    </html>
  );
}
