import { FaFacebook, FaInstagram, FaYoutube, FaTiktok } from 
'react-icons/fa';

export default function SocialLinks() {
  return (
    <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', 
marginTop: '2rem' }}>
      <a href="https://www.facebook.com/seuusuario" target="_blank" 
rel="noopener noreferrer">
        <FaFacebook size={30} color="#3b5998" />
      </a>
      <a href="https://www.instagram.com/seuusuario" target="_blank" 
rel="noopener noreferrer">
        <FaInstagram size={30} color="#E1306C" />
      </a>
      <a href="https://www.youtube.com/seuusuario" target="_blank" 
rel="noopener noreferrer">
        <FaYoutube size={30} color="#FF0000" />
      </a>
      <a href="https://www.tiktok.com/@seuusuario" target="_blank" 
rel="noopener noreferrer">
        <FaTiktok size={30} color="#000000" />
      </a>
    </div>
  );
}

