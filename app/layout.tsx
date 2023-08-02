import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { greatVibes } from "@/public/font";
import type { Metadata } from "next";
import Provider from "@/components/auth/Provide";
export const metadata: Metadata = {
  title: "Soge",
  description:
    "Your dream home awaits! This stunning property features all the amenities and comfort you desire.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Provider>
      <html lang="en">
        <body className={`w-full px-1 lg:px-5 xl:container xl:mx-auto ${greatVibes} `}>
          <Nav />
          {children}
          <Footer />
        </body>
      </html>
    </Provider>
  );
}
