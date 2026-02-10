// menu.js - Gerencia o menu hambúrguer e a rolagem suave

document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const body = document.querySelector('body');

    // Lógica para abrir/fechar o menu hambúrguer no celular
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
            body.classList.toggle('nav-open');
        });
    }

    // Gerenciamento de links de navegação (Rolagem suave e navegação entre páginas)
    const allNavLinks = document.querySelectorAll('.nav-links a');
    allNavLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            const href = this.getAttribute('href');

            // Verifica se é um link de âncora na mesma página
            if (href.startsWith('#') || (href.includes('index.html#') && window.location.pathname.endsWith('index.html'))) {
                event.preventDefault(); // Previne o comportamento padrão apenas para rolagem suave

                const targetId = href.substring(href.indexOf('#'));
                const targetSection = document.querySelector(targetId);

                if (targetSection) {
                    // Se o menu mobile estiver aberto, fecha-o antes de rolar
                    if (navLinks.classList.contains('active')) {
                        hamburger.classList.remove('active');
                        navLinks.classList.remove('active');
                        body.classList.remove('nav-open');
                        // Espera um momento para o menu fechar antes de iniciar a rolagem
                        setTimeout(() => {
                            targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        }, 300); // 300ms corresponde à transição CSS
                    } else {
                        targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                }
            } 
            // Para links externos (como catalog.html) ou âncoras em outras páginas,
            // a ação padrão do navegador prosseguirá. Também fechamos o menu se estiver aberto.
            else if (navLinks && navLinks.classList.contains('active')) {
                 hamburger.classList.remove('active');
                 navLinks.classList.remove('active');
                 body.classList.remove('nav-open');
            }
        });
    });
});