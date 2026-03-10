import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FutSnipe BOT | The Ultimate Edge in FC 26 Trading",
  description: "Dominate the Ultimate Team market with millisecond execution. Our neural-BOTcessing sniping engine ensures you hit every target before the competition even blinks.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=block"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
