import { FaInstagram, FaTiktok, FaYoutube, FaLinkedin } from 
"react-icons/fa";

export default function SocialLinks() {
  return (
    <div className="flex space-x-4 mt-2">
      <a
        href="https://www.instagram.com/SEU_USUARIO"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-pink-500 transition-colors"
      >
        <FaInstagram size={24} />
      </a>
      <a
        href="https://www.tiktok.com/@SEU_USUARIO"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-black transition-colors"
      >
        <FaTiktok size={24} />
      </a>
      <a
        href="https://www.youtube.com/@SEU_CANAL"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-red-500 transition-colors"
      >
        <FaYoutube size={24} />
      </a>
      <a
        href="https://www.linkedin.com/in/SEU_PERFIL"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-blue-600 transition-colors"
      >
        <FaLinkedin size={24} />
      </a>
    </div>
  );
}

