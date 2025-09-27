import { Facebook, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer style={{ padding: "20px", background: "#f5f5f5", marginTop: "30px" }}>
      <p>© {new Date().getFullYear()} Portal Imigração USA</p>
      <div style={{ display: "flex", gap: "15px", marginTop: "10px" }}>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <Facebook size={24} />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <Instagram size={24} />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <Linkedin size={24} />
        </a>
      </div>
    </footer>
  );
}
