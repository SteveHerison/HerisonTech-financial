"use client";

import { useState, useEffect } from "react";
import { NavbarDesktop } from "./NavbarDesktop";
import { NavbarMobile } from "./NavbarMobile";

export const Navbar = () => {
  const [isDesktop, setIsDesktop] = useState(false);

  // Função para verificar o tamanho da tela
  const updateView = () => {
    setIsDesktop(window.innerWidth >= 768); // Tailwind usa `md` para >= 768px
  };

  useEffect(() => {
    updateView(); // Verifica inicialmente o tamanho da tela
    window.addEventListener("resize", updateView); // Atualiza ao redimensionar a tela
    return () => window.removeEventListener("resize", updateView); // Limpa o listener
  }, []);

  return <div>{isDesktop ? <NavbarDesktop /> : <NavbarMobile />}</div>;
};
