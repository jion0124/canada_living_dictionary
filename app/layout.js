import "./globals.css";
import Link from 'next/link';
import Breadcrumbs from './components/Breadcrumbs';
import HamburgerMenu from './components/HamburgerMenu';


export const metadata = {
  title: "カナダ生活図鑑",
  description: "これを見ればカナダの全てがわかる！",
};

export default function RootLayout({ children }) {

  return (
    <html lang="ja">
      <head>
        <title>カナダ生活辞典</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=M+PLUS+1:wght@100..900&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-white text-gray-900">
      <header className="bg-red-500 text-white p-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          カナダ生活図鑑
        </Link>
        <HamburgerMenu className="ml-auto" />
      </header>
          {children}
        <footer className="bg-red-500 text-white p-4 text-center">
          © 2024 カナダ生活辞典
        </footer>
      </body>
    </html>
  );
}
