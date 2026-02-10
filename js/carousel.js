document.addEventListener('DOMContentLoaded', () => {
    const track = document.querySelector('.carousel-track');
    const prevBtn = document.querySelector('.carousel-btn.prev');
    const nextBtn = document.querySelector('.carousel-btn.next');

    if (!track || !prevBtn || !nextBtn) return;

    let currentIndex = 0;
    let autoPlayInterval;
    let isTransitioning = false;
    let itemWidth = 0;
    let gap = 0;

    // Função para inicializar o carrossel
    const initCarousel = () => {
        const items = Array.from(track.children);
        if (items.length === 0) {
            // Se ainda não tem itens, tenta novamente em 50ms
            setTimeout(initCarousel, 50);
            return;
        }

        // 1. Clonar itens para o loop infinito
        items.forEach(item => {
            const clone = item.cloneNode(true);
            track.appendChild(clone);
        });

        // 2. Calcular dimensões iniciais
        updateDimensions();
        
        // 3. Iniciar Autoplay
        startAutoPlay();
    };

    const updateDimensions = () => {
        const items = track.querySelectorAll('.product-link');
        if (items.length > 0) {
            itemWidth = items[0].offsetWidth;
            const style = window.getComputedStyle(track);
            gap = parseFloat(style.gap) || 0;
        }
    };

    const moveToIndex = (index, animated = true) => {
        if (isTransitioning && animated) return;
        
        if (animated) isTransitioning = true;
        
        track.style.transition = animated ? 'transform 0.6s cubic-bezier(0.23, 1, 0.32, 1)' : 'none';
        
        const offset = index * (itemWidth + gap);
        track.style.transform = `translateX(-${offset}px)`;

        if (animated) {
            setTimeout(() => {
                isTransitioning = false;
                checkLoop();
            }, 600);
        }
    };

    const checkLoop = () => {
        const items = track.querySelectorAll('.product-link');
        const totalOriginalItems = items.length / 2;

        if (currentIndex >= totalOriginalItems) {
            currentIndex = 0;
            moveToIndex(currentIndex, false);
        } else if (currentIndex < 0) {
            currentIndex = totalOriginalItems - 1;
            moveToIndex(currentIndex, false);
        }
    };

    const nextSlide = () => {
        if (isTransitioning) return;
        currentIndex++;
        moveToIndex(currentIndex);
    };

    const prevSlide = () => {
        if (isTransitioning) return;
        currentIndex--;
        moveToIndex(currentIndex);
    };

    const startAutoPlay = () => {
        stopAutoPlay();
        autoPlayInterval = setInterval(nextSlide, 5000);
    };

    const stopAutoPlay = () => {
        clearInterval(autoPlayInterval);
    };

    // Eventos
    nextBtn.addEventListener('click', () => {
        nextSlide();
        startAutoPlay();
    });

    prevBtn.addEventListener('click', () => {
        prevSlide();
        startAutoPlay();
    });

    const container = document.querySelector('.carousel-container');
    if (container) {
        container.addEventListener('mouseenter', stopAutoPlay);
        container.addEventListener('mouseleave', startAutoPlay);
    }

    window.addEventListener('resize', () => {
        updateDimensions();
        moveToIndex(currentIndex, false);
    });

    // Iniciar processo de verificação de carregamento
    initCarousel();
});