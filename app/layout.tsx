import { Open_Sans } from "@next/font/google";
import "./globals.scss";

const openSans = Open_Sans({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body className={openSans.className}>{children}</body>
    </html>
  );
}
