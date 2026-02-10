// seller-profile.js - Gerencia a exibição dinâmica do perfil do vendedor

document.addEventListener('DOMContentLoaded', () => {
    const profileContent = document.getElementById('profile-content');
    
    // Pega o ID do vendedor na URL (Ex: ?id=carlos-junior)
    const urlParams = new URLSearchParams(window.location.search);
    const sellerId = urlParams.get('id');

    if (!sellerId || typeof sellersData === 'undefined') {
        profileContent.innerHTML = '<p class="text-center">Vendedor não encontrado.</p>';
        return;
    }

    // Busca o vendedor no array de dados dentro de js/sellers-data.js
    const seller = sellersData.find(s => s.id === sellerId);

    if (!seller) {
        profileContent.innerHTML = '<p class="text-center">Vendedor não encontrado.</p>';
        return;
    }

    // Atualiza o título da aba do navegador com o nome do vendedor
    document.title = `Shineray Colombo - ${seller.name}`;

    // Renderiza o perfil com o estilo de árvore de links (estilo Linktree)
    profileContent.innerHTML = `
        <div class="profile-card-container">
            <img src="${seller.avatar}" alt="${seller.name}" class="profile-avatar-large">
            <h1 class="profile-name">${seller.name}</h1>
            <p class="profile-role">${seller.role}</p>
            <p class="profile-bio" style="margin-bottom: 40px;">${seller.bio}</p>

            <div class="sellers-grid" style="margin: 0 auto; width: 100%;">
                
                <!-- Link do WhatsApp -->
                <a href="https://wa.me/${seller.whatsapp}" class="seller-card" target="_blank">
                    <div class="seller-avatar" style="background: linear-gradient(135deg, #25D366, #128C7E);">
                        <i class="fab fa-whatsapp"></i>
                    </div>
                    <div class="seller-info">
                        <h3>WhatsApp</h3>
                        <p class="role">Fale comigo agora</p>
                    </div>
                    <div class="seller-arrow">
                        <i class="fas fa-chevron-right"></i>
                    </div>
                </a>

                <!-- Link do Instagram -->
                <a href="${seller.instagram}" class="seller-card" target="_blank">
                    <div class="seller-avatar" style="background: linear-gradient(135deg, #833ab4, #fd1d1d, #fcb045);">
                        <i class="fab fa-instagram"></i>
                    </div>
                    <div class="seller-info">
                        <h3>Instagram</h3>
                        <p class="role">Siga meu dia a dia</p>
                    </div>
                    <div class="seller-arrow">
                        <i class="fas fa-chevron-right"></i>
                    </div>
                </a>

                <!-- Link para o Catálogo -->
                <a href="catalog.html" class="seller-card">
                    <div class="seller-avatar" style="background: linear-gradient(135deg, #000000, #333333);">
                        <i class="fas fa-motorcycle"></i>
                    </div>
                    <div class="seller-info">
                        <h3>Nosso Catálogo</h3>
                        <p class="role">Veja as motos disponíveis</p>
                    </div>
                    <div class="seller-arrow">
                        <i class="fas fa-chevron-right"></i>
                    </div>
                </a>

                <!-- Link de Localização -->
                <a href="${seller.locationLink}" class="seller-card" target="_blank">
                    <div class="seller-avatar" style="background: linear-gradient(135deg, #ff9966, #ff5e62);">
                        <i class="fas fa-map-marker-alt"></i>
                    </div>
                    <div class="seller-info">
                        <h3>Localização</h3>
                        <p class="role">${seller.location}</p>
                    </div>
                    <div class="seller-arrow">
                        <i class="fas fa-chevron-right"></i>
                    </div>
                </a>

            </div>
        </div>
    `;
});
