import React from "react";
import { FaYoutube, FaInstagram, FaLinkedin } from "react-icons/fa";
import { SiTiktok } from "react-icons/si";

export default function SocialLinks({ className = "" }) {
  const items = [
    { name: "YouTube", url: "https://www.youtube.com/SEU_CANAL", icon: 
<FaYoutube size={20} /> },
    { name: "Instagram", url: "https://www.instagram.com/SEU_USUARIO", 
icon: <FaInstagram size={20} /> },
    { name: "TikTok", url: "https://www.tiktok.com/@SEU_USUARIO", icon: 
<SiTiktok size={20} /> },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/SEU_PERFIL", 
icon: <FaLinkedin size={20} /> },
  ];

  return (
    <div className={`social-links ${className}`} style={{ display: "flex", 
gap: 10, alignItems: "center" }}>
      {items.map((s) => (
        <a
          key={s.name}
          href={s.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={s.name}
          title={s.name}
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            width: 40,
            height: 40,
            borderRadius: 9999,
            background: "#f3f4f6",
            textDecoration: "none",
            transition: "transform .12s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = 
"translateY(-3px)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = 
"translateY(0)")}
        >
          {s.icon}
        </a>
      ))}
    </div>
  );
}

