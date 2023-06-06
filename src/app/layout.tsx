import Navbar from "@/components/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import { Providers } from "@/components/Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
  admin,
}: {
  children: React.ReactNode;
  admin: React.ReactNode;
}) {
  console.log("admin", admin);

  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Navbar />
          <main className="px-6">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
