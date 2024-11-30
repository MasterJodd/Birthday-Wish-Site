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
  // navigator.mediaDevices
  //   .getUserMedia({ audio: true })
  //   .then((stream) => {
  //     // Handle microphone stream here
  //   })
  //   .catch((err) => {
  //     console.error("Microphone access denied:", err);
  //   });

  return (
    <html lang="en">
      <body>{children}</body>
      <script src="https://cdn.jsdelivr.net/npm/canvas-confetti@1.9.3/dist/confetti.browser.min.js"></script>
    </html>
  );
}
