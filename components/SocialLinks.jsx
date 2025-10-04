import { FaFacebook, FaInstagram, FaYoutube, FaTiktok } from 
'react-icons/fa';

export default function SocialLinks() {
  return (
    <div className="flex justify-center gap-6 text-3xl text-blue-600">
      <a href="https://www.facebook.com/seuPerfil" target="_blank" 
rel="noopener noreferrer" className="hover:text-blue-800 
transition-transform transform hover:scale-110">
        <FaFacebook />
      </a>
      <a href="https://www.instagram.com/seuPerfil" target="_blank" 
rel="noopener noreferrer" className="hover:text-pink-500 
transition-transform transform hover:scale-110">
        <FaInstagram />
      </a>
      <a href="https://www.youtube.com/seuCanal" target="_blank" 
rel="noopener noreferrer" className="hover:text-red-600 
transition-transform transform hover:scale-110">
        <FaYoutube />
      </a>
      <a href="https://www.tiktok.com/@seuPerfil" target="_blank" 
rel="noopener noreferrer" className="hover:text-black transition-transform 
transform hover:scale-110">
        <FaTiktok />
      </a>
    </div>
  );
}

