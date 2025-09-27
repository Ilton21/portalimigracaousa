import Header from './Header';
import Footer from './Footer';

export default function Layout({children}){
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-800">
      <Header />
      <main className="flex-1 container-max py-8">{children}</main>
      <Footer />
    </div>
  );
}