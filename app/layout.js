import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "Portal Imigração USA",
  description: "Informações educativas sobre imigração nos EUA",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className="min-h-screen flex flex-col bg-gray-50 
text-gray-900">
        <Header />
        <main className="flex-1 container mx-auto px-6 
py-8">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

