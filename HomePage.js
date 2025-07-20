import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, ShieldCheck, AlertCircle, Smartphone } from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0078B7] via-white to-[#89C541] text-gray-800 relative">
      <header className="text-center py-10 px-4">
        <img src="/ino360-logo.png" alt="INO360 Logo" className="mx-auto w-48 mb-4" />
        <h1 className="text-4xl font-bold">INO360</h1>
        <p className="text-xl mt-2 max-w-2xl mx-auto">
          Plataforma integral para la gestión de inocuidad alimentaria. Funciona tanto <strong>online como offline</strong>,
          permitiendo digitalizar, automatizar y asegurar el cumplimiento de normativas desde cualquier lugar y en todo momento.
        </p>
      </header>

      <section className="py-10 px-4 bg-white text-center">
        <h2 className="text-3xl font-bold mb-4">Nuestra Misión</h2>
        <p className="max-w-3xl mx-auto text-lg">
          Facilitar y elevar los estándares de inocuidad alimentaria mediante herramientas digitales accesibles, eficientes y confiables,
          que operen <strong>tanto online como offline</strong>, mejorando la calidad y seguridad de los alimentos en todos los niveles de la cadena productiva.
        </p>
      </section>

      <section className="py-10 px-4 bg-gray-50 text-center">
        <h2 className="text-3xl font-bold mb-4">Nuestra Visión</h2>
        <p className="max-w-3xl mx-auto text-lg">
          Ser la plataforma líder en gestión de inocuidad alimentaria en Latinoamérica, reconocida por su innovación, confiabilidad y compromiso
          con la seguridad alimentaria global, integrando soluciones <strong>online y offline</strong> adaptables a cualquier entorno.
        </p>
      </section>

      <a
        href="https://wa.me/56973951843"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:scale-105 transition-transform"
      >
        <img src="/whatsapp-icon.svg" alt="WhatsApp" className="w-6 h-6" />
      </a>

      <footer className="bg-white py-6 text-center text-sm text-gray-600">
        © {new Date().getFullYear()} INO360 - Todos los derechos reservados
      </footer>
    </div>
  );
}