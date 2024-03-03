import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Nav from "@/components/Nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Revangga",
  description: "Revangga Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`{inter.className} overflow-x-hidden`}>
        <Header />
        <Nav />
        {children}
      </body>
    </html>
  );
}
