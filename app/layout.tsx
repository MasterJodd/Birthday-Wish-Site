import type { Metadata } from "next";
import "./globals.css"; // Importing global styles

export const metadata: Metadata = {
  title: "KETKI",
  description: "Someone's birthday is coming up! 🎉",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <script
          src="https://cdn.jsdelivr.net/npm/canvas-confetti@1.9.3/dist/confetti.browser.min.js"
          async
        ></script>
      </body>
    </html>
  );
}
