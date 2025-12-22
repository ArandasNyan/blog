import "./globals.css";
import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";

export const metadata = {
  title: "Cat Blog",
  description: "Um local simples para relembrar ideias, compartilhar aprendizados e aprender mais",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className="dark">
      <body
        className={`bg-neutral-100 dark:bg-neutral-900 font-inter text-neutral-800 dark:text-neutral-100 antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
