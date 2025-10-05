"use client";
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-700 mt-12 border-t 
border-gray-300">
      <div className="max-w-5xl mx-auto px-6 py-10">
        
        {/* Seção Sobre */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">Sobre o 
Portal</h2>
          <p className="text-sm leading-relaxed">
            O <strong>Portal Imigração USA</strong> é um projeto criado 
por <strong>Ilton Oliveira</strong>,
            advogado licenciado no Brasil e residente nos Estados Unidos.
            O objetivo é compartilhar informações úteis e atualizadas 
sobre imigração, vistos e cidadania americana
            de forma acessível e educativa, sem oferecer assistência 
jurídica.
          </p>
        </div>

        {/* Disclaimer (Aviso Legal) */}
        <div className="text-sm border-t border-gray-300 pt-4">
          <p className="mb-2 text-gray-600">
            ⚠️ <strong>Aviso Importante:</strong> Este site tem caráter 
exclusivamente informativo e educacional.
            O conteúdo aqui publicado <strong>não constitui orientação 
jurídica</strong> e
            <strong> não substitui a consulta com um advogado licenciado 
nos Estados Unidos.</strong>
            As informações são baseadas em fontes públicas e podem mudar 
conforme atualizações nas leis ou políticas de imigração.
          </p>
          <p className="text-gray-600">
            ⚠️ <strong>Disclaimer (English):</strong> This website is for 
informational and educational purposes only.
            The content provided here <strong>does not constitute legal 
advice</strong> and should not be relied upon as such.
            Always consult a licensed U.S. attorney for personalized legal 
guidance.
          </p>
        </div>

        {/* Direitos autorais */}
        <div className="text-center text-xs text-gray-500 mt-6">
          © {new Date().getFullYear()} Portal Imigração USA — Todos os 
direitos reservados.
        </div>
      </div>
    </footer>
  );
}

