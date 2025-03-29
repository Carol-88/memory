import Head from "next/head";
import "./globals.css";

export const metadata = {
  title: "Memory Game",
  description: "Un divertido juego de memoria",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <Head>
        <link
          rel="icon"
          href={"/favicon.ico"}
          sizes="16x16 32x32 48x48 64x64"
        />
      </Head>
      <body>{children}</body>
    </html>
  );
}
