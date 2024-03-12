import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Container from "@/components/container";
import { user } from "@/lib/example-data";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cerbos Hub - Next.js Example",
  description: "Cerbos Hub - Next.js Example",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-zinc-200 flex`}>
        <div className="bg-white w-[800px] flex flex-col min-h-screen mx-auto border-x border-black/15">
          <header className="border-b border-black/10 bg-black/[1.5%] py-2 px-12 flex items-center gap-4 text-[13px] ">
            <p>
              Logged in as: <span className="font-semibold">{user.name}</span>
            </p>
            <span>
              Role: <span className="font-semibold">{user.roles[0]}</span>
            </span>
          </header>

          {children}

          <footer className="mt-auto py-4 border-t border-black/10 px-4 text-center text-[11px] text-black/50">
            Authorization with{" "}
            <span className="font-medium">Cerbos & Cerbos Hub</span>
          </footer>
        </div>
      </body>
    </html>
  );
}
