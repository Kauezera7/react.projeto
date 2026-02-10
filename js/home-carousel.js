/**
 * LÓGICA DO CARROSSEL DE PRODUTOS (HOME)
 * Carrega as motos dinamicamente na página inicial usando o novo design.
 */
document.addEventListener('DOMContentLoaded', () => {
    const track = document.querySelector('.carousel-track');
    
    if (!track) return;

    const renderCarouselProducts = () => {
        // Pega apenas as primeiras 6 motos para o destaque da home
        const featuredProducts = productsData.slice(0, 6);

        const productsHtml = featuredProducts.map((product, index) => {
            // No carrossel da home, envolvemos o card em uma div .product-link para manter o layout original do track
            return `<div class="product-link">${renderProductCard(product, index)}</div>`;
        }).join('');

        track.innerHTML = productsHtml;
    };

    if (typeof productsData !== 'undefined') {
        renderCarouselProducts();
    }
});