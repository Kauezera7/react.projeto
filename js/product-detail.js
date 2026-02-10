// product-detail.js - Gerencia a exibição dinâmica dos detalhes do produto

document.addEventListener('DOMContentLoaded', () => {
    const productDetailContainer = document.getElementById('product-detail-container');
    
    /**
     * FUNÇÃO: Identificar qual moto mostrar
     * Ela olha para a barra de endereço e procura por '?modelo=nome-da-moto'
     */
    const getProductSlug = () => {
        const urlParams = new URLSearchParams(window.location.search);
        const paramSlug = urlParams.get('modelo');
        if (paramSlug) return paramSlug;

        // Alternativa: Se usar links com # (ex: #/inicio/catalogo/urban-150-efi)
        const hash = window.location.hash;
        if (hash && hash.includes('/catalogo/')) {
            const parts = hash.split('/');
            return parts[parts.length - 1];
        }
        return null;
    };

    const productSlug = getProductSlug();

    // Se não encontrar o nome da moto na URL, avisa o usuário
    if (!productSlug) {
        productDetailContainer.innerHTML = '<p>Produto não encontrado.</p>';
        return;
    }

    // Busca os dados da moto dentro do arquivo js/products-data.js
    const product = productsData.find(p => p.slug === productSlug);

    if (!product) {
        productDetailContainer.innerHTML = '<p>Produto não encontrado.</p>';
        return;
    }

    /**
     * SEO E URL LIMPA
     * Melhora como o Google vê o site e como o link aparece na barra de endereço
     */
    const newHash = `/inicio/catalogo/${product.slug}`;
    if (window.location.hash !== '#' + newHash) {
        const newUrl = `${window.location.pathname}#${newHash}`;
        window.history.replaceState(null, document.title, newUrl);
    }

    const productId = product.id; 

    // Atualiza o título da aba do navegador e as metatags para redes sociais
    document.title = `Shineray - ${product.name}`;
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
        metaDescription.setAttribute('content', `Conheça a ${product.name}. Preço: ${product.price}. Veja a ficha técnica completa e fale com um consultor.`);
    }

    // --- MONTAGEM DO HTML DINÂMICO ---

    // 1. Prepara a Galeria de Fotos
    const allImages = [product.mainImage, ...product.thumbnails.filter(t => t !== product.mainImage)];
    
    let slidesHtml = '';
    let thumbsHtml = '';

    allImages.forEach((img, index) => {
        slidesHtml += `
            <div class="detail-slide">
                <img src="${img}" alt="${product.name} - Vista ${index + 1}">
            </div>
        `;
        thumbsHtml += `
            <img src="${img}" alt="Thumbnail ${index + 1}" class="thumbnail-img ${index === 0 ? 'active' : ''}" data-index="${index}">
        `;
    });

    // 2. Prepara a Ficha Técnica
    let specificationsHtml = '';
    for (const key in product.specifications) {
        specificationsHtml += `<li><strong>${key}:</strong> <span>${product.specifications[key]}</span></li>`;
    }

    // 2.5 Prepara as Bolinhas de Cores
    const colorsList = product.colors || [product.color] || ['preto'];
    const colorSwatchesHtml = colorsList.map(c => `<div class="swatch ${c}"></div>`).join('');

    // 2.6 Prepara o tipo de combustível e ícone
    const fuelType = product.fuel || 'gasolina';
    const fuelIcon = fuelType === 'eletrica' ? 'fa-bolt' : 'fa-gas-pump';
    const fuelLabel = fuelType.charAt(0).toUpperCase() + fuelType.slice(1);

    // PREPARA O LINK DO WHATSAPP
    // 1. Tenta pegar o número específico de vendas da página de produto
    // 2. Se não existir, tenta o número geral do Config
    // 3. Se nada existir, usa um fallback
    const whatsappNumber = (typeof Config !== 'undefined' && Config.paginaProduto && Config.paginaProduto.botaoWhatsapp && Config.paginaProduto.botaoWhatsapp.numeroVendas)
        ? Config.paginaProduto.botaoWhatsapp.numeroVendas
        : (typeof Config !== 'undefined' && Config.contato && Config.contato.whatsapp) 
            ? Config.contato.whatsapp.numero 
            : '5541999999999';
    
    // Pega o template da mensagem do Config ou usa um padrão
    const msgTemplate = (typeof Config !== 'undefined' && Config.paginaProduto && Config.paginaProduto.mensagemPadrao)
        ? Config.paginaProduto.mensagemPadrao
        : "Olá! Gostaria de mais informações sobre a *{NOME_MOTO}*.\nLink: {LINK}";

    const pageUrl = window.location.href;
    
    // Substitui os "coringas" pelos dados reais
    const whatsappMessage = msgTemplate
        .replace('{NOME_MOTO}', product.name)
        .replace('{LINK}', pageUrl);

    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

    // Configurações visuais do botão (vindas do config.js ou padrão)
    const btnConfig = (typeof Config !== 'undefined' && Config.paginaProduto && Config.paginaProduto.botaoWhatsapp)
        ? Config.paginaProduto.botaoWhatsapp
        : { 
            texto: "Falar com um Vendedor", 
            iconeTamanho: "1.6rem", 
            estilo: "display: flex; align-items: center; justify-content: center; gap: 15px;" 
          };

    // 3. Injeta tudo no container principal da página
    productDetailContainer.innerHTML = `
        <div class="product-detail-layout">
            <div class="product-images">
                <div class="detail-slider-container">
                    <div class="detail-slider-track">
                        ${slidesHtml}
                    </div>
                    <button class="slider-btn prev">&lt;</button>
                    <button class="slider-btn next">&gt;</button>
                </div>
                <div class="thumbnail-gallery">
                    ${thumbsHtml}
                </div>
            </div>
            <div class="product-info">
                <h1 id="product-name">${product.name}</h1>
                <p class="price" id="product-price">${product.price}</p>
                <p class="installment" style="margin-top: -15px; margin-bottom: 25px; color: #666; font-weight: 600;">
                    <i class="fas fa-credit-card"></i> ${product.installment || 'Consulte condições de parcelamento'}
                </p>
                
                <div class="fuel-info" style="margin-bottom: 20px; font-weight: 600; color: #444; display: flex; align-items: center; gap: 8px;">
                    <i class="fas ${fuelIcon}" style="color: var(--secondary-color); width: 20px;"></i>
                    <span>Combustível: <strong>${fuelLabel}</strong></span>
                </div>

                <div class="color-selection">
                    <span>Cores disponíveis:</span>
                    <div class="color-swatches">
                        ${colorSwatchesHtml}
                    </div>
                </div>

                <a href="${whatsappLink}" class="btn btn-contact" target="_blank" style="${btnConfig.estilo}">
                    <i class="fab fa-whatsapp" style="font-size: ${btnConfig.iconeTamanho};"></i> ${btnConfig.texto}
                </a>
                
                <div class="specifications accordion">
                    <div class="accordion-header">
                        <h2>Ficha Técnica</h2>
                        <span class="accordion-icon">+</span>
                    </div>
                    <div class="accordion-content">
                        <ul id="product-specs-list">
                            ${specificationsHtml}
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    `;

    // --- LÓGICA DO ACORDEÃO (ABRIR/FECHAR FICHA TÉCNICA) ---
    const accordion = productDetailContainer.querySelector('.accordion');
    const accordionHeader = productDetailContainer.querySelector('.accordion-header');
    
    if (accordion && accordionHeader) {
        accordionHeader.addEventListener('click', () => {
            accordion.classList.toggle('active');
            const content = accordion.querySelector('.accordion-content');
            if (accordion.classList.contains('active')) {
                content.style.maxHeight = content.scrollHeight + "px";
            } else {
                content.style.maxHeight = null;
            }
        });
    }

    // --- LÓGICA DO SLIDER DE IMAGENS (PASSAR FOTOS) ---
    const track = document.querySelector('.detail-slider-track');
    const slides = document.querySelectorAll('.detail-slide');
    const nextBtn = document.querySelector('.slider-btn.next');
    const prevBtn = document.querySelector('.slider-btn.prev');
    const thumbnails = document.querySelectorAll('.thumbnail-img');
    
    let currentIndex = 0;

    const updateSlider = (index) => {
        currentIndex = index;
        track.style.transform = `translateX(-${currentIndex * 100}%)`;
        
        thumbnails.forEach(t => t.classList.remove('active'));
        thumbnails[currentIndex].classList.add('active');
    };

    nextBtn.addEventListener('click', () => {
        let index = (currentIndex + 1) % slides.length;
        updateSlider(index);
    });

    prevBtn.addEventListener('click', () => {
        let index = (currentIndex - 1 + slides.length) % slides.length;
        updateSlider(index);
    });

    // Clique nas miniaturas
    thumbnails.forEach(thumb => {
        thumb.addEventListener('click', () => {
            const index = parseInt(thumb.dataset.index);
            updateSlider(index);
        });
    });

    // --- LÓGICA DE PRODUTOS RELACIONADOS ---
    const relatedContainer = document.getElementById('related-products-container');
    if (relatedContainer && typeof productsData !== 'undefined') {
        // Limpa o container antes de adicionar
        relatedContainer.innerHTML = '';
        
        // Filtra para não mostrar a moto atual e sorteia
        const availableProducts = productsData.filter(p => p.id !== productId);
        const shuffled = [...availableProducts].sort(() => 0.5 - Math.random());
        const selectedProducts = shuffled.slice(0, 3);

        relatedContainer.innerHTML = selectedProducts.map((p, index) => renderProductCard(p, index)).join('');
    }
});
