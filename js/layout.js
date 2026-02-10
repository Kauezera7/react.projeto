// js/layout.js

const HEADER_CONTENT = `
    <nav class="navbar">
        <div class="container">
            <!-- LOGO -->
            <a href="index.html" class="logo">
                <img src="img/Shineray-logo2.png" alt="Shineray Logo" class="logo-img">
            </a>
            <!-- MENU -->
            <ul class="nav-links">
                <li><a href="index.html">Início</a></li>
                <li><a href="catalog.html">Produtos</a></li>
                <li><a href="index.html#about">Sobre</a></li>
                <li><a href="#" class="config-whatsapp-link" target="_blank">Contato</a></li>
            </ul>
            <!-- MENU CELULAR -->
            <div class="hamburger">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    </nav>
`;

const FOOTER_CONTENT = `
    <div class="container">
        <div class="footer-content">
            <!-- Coluna 1: Logo e Empresa -->
            <div class="footer-section">
                <a href="index.html" class="logo">
                    <img src="img/Shineray-logo-branco.png" alt="Shineray Logo" class="logo-footer">
                </a>
                <p class="config-company-info">Carregando...</p>
            </div>

            <!-- Coluna 2: Navegação Rápida -->
            <div class="footer-section">
                <h3>Navegação</h3>
                <ul class="footer-links">
                    <li><a href="index.html">Início</a></li>
                    <li><a href="catalog.html">Catálogo</a></li>
                    <li><a href="#" class="config-whatsapp-link" target="_blank">Contato</a></li>
                    <li><a href="sellers.html">Vendedores</a></li>
                </ul>
            </div>
            
            <!-- Coluna 3: Informações de Contato -->
            <div class="footer-section">
                <h3>Contato</h3>
                <p><i class="fas fa-phone"></i> <span class="config-phone-text">...</span></p>
                <p><i class="fas fa-envelope"></i> <span class="config-email-text">...</span></p>
                <a href="#" class="btn btn-location config-maps-link" target="_blank">
                    <i class="fas fa-map-marker-alt"></i> Localização
                </a>
            </div>
            
            <!-- Coluna 4: Redes Sociais -->
            <div class="footer-section">
                <h3>Redes Sociais</h3>
                <div class="social-links-footer">
                    <a href="#" target="_blank" class="config-social-fb"><i class="fab fa-facebook"></i></a>
                    <a href="#" target="_blank" class="config-social-insta"><i class="fab fa-instagram"></i></a>
                    <a href="#" target="_blank" class="config-social-yt"><i class="fab fa-youtube"></i></a>
                </div>
            </div>
        </div>
        
        <div class="footer-bottom">
            <p>Todos os direitos reservados.</p>
        </div>
    </div>
`;

// Função auto-executável para injetar o layout
(function loadLayout() {
    const headerEl = document.getElementById('header-inject');
    const footerEl = document.getElementById('footer-inject');

    if (headerEl) {
        headerEl.innerHTML = HEADER_CONTENT;
        setActiveLink();
    }
    
    if (footerEl) {
        footerEl.innerHTML = FOOTER_CONTENT;
    }
})();

// Função para marcar o link ativo no menu
function setActiveLink() {
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-links a');

    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        link.classList.remove('active');

        // Lógica de comparação para saber qual página estamos
        if ((currentPath.endsWith('/') || currentPath.endsWith('index.html')) && href === 'index.html') {
            link.classList.add('active');
        } else if (href !== 'index.html' && href !== '#' && currentPath.includes(href)) {
            link.classList.add('active');
        }
    });
}
