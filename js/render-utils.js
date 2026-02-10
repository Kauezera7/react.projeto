/**
 * UTILITÁRIOS DE RENDERIZAÇÃO
 * Funções compartilhadas para gerar HTML de componentes da UI.
 */

/**
 * Gera o HTML de um card de produto (moto).
 * @param {Object} product - Objeto com os dados da moto.
 * @param {number} index - (Opcional) Índice para controle de animação.
 * @returns {string} HTML formatado do card.
 */
function renderProductCard(product, index = 0) {
    const highlightsHtml = (product.highlights || [])
        .map(h => `<span><i class="fas ${h.icon}"></i> ${h.text}</span>`)
        .join('');

    const brand = (product.brand || 'Shineray').toUpperCase();
    const fuelLabel = (product.fuel || 'gasolina').charAt(0).toUpperCase() + (product.fuel || 'gasolina').slice(1);
    const animationStyle = index !== null ? `style="animation-delay: ${index * 0.1}s"` : '';

    return `
        <a href="product-detail.html?modelo=${product.slug}" class="product-link product-card-animated" ${animationStyle}>
            <div class="product-card">
                <div class="moto-badge">${brand}</div>
                <img src="${product.mainImage}" alt="${product.name}" loading="lazy">
                <div class="moto-info">
                    <h3>${product.name}</h3>
                    <div class="moto-specs">
                        <span><i class="fas fa-gas-pump"></i> ${fuelLabel}</span>
                        ${highlightsHtml}
                    </div>
                    <div class="moto-price">
                        <strong>${product.price}</strong>
                        <small>${product.installment || 'Consulte parcelamento'}</small>
                    </div>
                </div>
            </div>
        </a>
    `;
}
