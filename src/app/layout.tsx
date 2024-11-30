import "@/app/globals.css";
import Footer from "@/component/footer";
import ContextProvider from "@/utils/contextProvider";
export const metadata = {
  title: "Tropical",
  description: "Tropical Paints",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Main Meta Tags */}
        <meta name="title" content="Tropical" />
        <meta name="description" content="Tropical Paints" />

        {/* Open Graph Meta Tags for Socials and Stuff */}
        <meta property="og:title" content="Tropical" />
        <meta
          property="og:description"
          content="Tropical Paints"
        />
        <meta property="og:image" content="https://yourwebsite.com/logo.png" />
        <meta property="og:url" content="https://yourwebsite.com" />
        <meta property="og:type" content="website" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:title" content="Tropical" />
        <meta
          name="twitter:description"
          content="Tropical Paints"
        />
        <meta name="twitter:image" content="https://yourwebsite.com/logo.png" />
        <meta name="twitter:card" content="summary_large_image" />

        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <ContextProvider>
        <main>{children}</main>
        <Footer/>
        </ContextProvider>
      </body>
    </html>
  );
}
