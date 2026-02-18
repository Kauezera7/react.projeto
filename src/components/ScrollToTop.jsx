import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Utilitário: Scroll To Top
 * Garante que a barra de rolagem volte ao topo da página toda vez que o usuário 
 * clica em um link e muda de página (rota).
 */
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Define a posição do scroll para o topo (X=0, Y=0)
  }, [pathname]);

  return null; // Este componente não renderiza nada visualmente
}
