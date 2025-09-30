import SocialLinks from './SocialLinks';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white p-4 mt-8">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <p className="text-sm">&copy; {new Date().getFullYear()} Portal Imigração USA. Todos os direitos reservados.</p>
        <SocialLinks />
      </div>
    </footer>
  );
}
