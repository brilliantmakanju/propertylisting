
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Register",
  description:
    "Your dream home awaits! This stunning property features all the amenities and comfort you desire.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
