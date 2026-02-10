// hero-slider.js - Gerencia a lógica do banner principal (hero)

document.addEventListener('DOMContentLoaded', () => {
    const heroSlides = document.querySelectorAll('.hero-slide');
    const heroPrevBtn = document.querySelector('.hero-btn.prev');
    const heroNextBtn = document.querySelector('.hero-btn.next');

    if (heroSlides.length > 0) {
        let currentHeroIndex = 0;
        const heroIntervalTime = 6000; // 6 segundos
        let heroInterval;

        // Mostra o slide baseado no índice
        const showHeroSlide = (index) => {
            heroSlides.forEach(slide => slide.classList.remove('active'));
            heroSlides[index].classList.add('active');
        };

        // Avança para o próximo slide
        const nextHeroSlide = () => {
            currentHeroIndex++;
            if (currentHeroIndex >= heroSlides.length) {
                currentHeroIndex = 0;
            }
            showHeroSlide(currentHeroIndex);
        };

        // Volta para o slide anterior
        const prevHeroSlide = () => {
            currentHeroIndex--;
            if (currentHeroIndex < 0) {
                currentHeroIndex = heroSlides.length - 1;
            }
            showHeroSlide(currentHeroIndex);
        };

        // Inicia a troca automática
        const startHeroAutoPlay = () => {
            heroInterval = setInterval(nextHeroSlide, heroIntervalTime);
        };

        // Para a troca automática
        const stopHeroAutoPlay = () => {
            clearInterval(heroInterval);
        };

        // Eventos de clique nos botões do banner
        if (heroNextBtn) {
            heroNextBtn.addEventListener('click', () => {
                nextHeroSlide();
                stopHeroAutoPlay();
                startHeroAutoPlay();
            });
        }

        if (heroPrevBtn) {
            heroPrevBtn.addEventListener('click', () => {
                prevHeroSlide();
                stopHeroAutoPlay();
                startHeroAutoPlay();
            });
        }

        // Inicia o auto-play ao carregar
        startHeroAutoPlay();
    }
});