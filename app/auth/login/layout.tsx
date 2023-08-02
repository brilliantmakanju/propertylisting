import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Login",
  description: "Login to list your home.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
