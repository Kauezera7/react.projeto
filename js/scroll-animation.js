document.addEventListener('DOMContentLoaded', () => {
    const features = document.querySelectorAll('.feature');
    const sectionTitle = document.querySelector('.about-section h2'); // O Gatilho é o Título
    const aboutSection = document.querySelector('.about-section');

    // Prepara os elementos (esconde eles inicialmente)
    features.forEach(el => {
        el.classList.add('scroll-hidden');
    });

    // OBSERVADOR DE ENTRADA (GATILHO: TÍTULO)
    const titleObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Assim que o título aparecer, TODAS as imagens começam a subir
                features.forEach(f => f.classList.add('visible'));
                // Opcional: Parar de observar após animar para economizar recursos
                // titleObserver.unobserve(sectionTitle); 
            }
        });
    }, {
        threshold: 0.1
    });

    if (sectionTitle) {
        titleObserver.observe(sectionTitle);
    }

    // OBSERVADOR DE RESET (GATILHO: SAÍDA DA SEÇÃO)
    // Só reseta se você subir a página e esconder a seção inteira
    const resetObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            // Se a seção saiu da tela e está para baixo (usuário subiu a página)
            if (!entry.isIntersecting && entry.boundingClientRect.top > 0) {
                features.forEach(f => f.classList.remove('visible'));
            }
        });
    }, {
        threshold: 0
    });

    if (aboutSection) {
        resetObserver.observe(aboutSection);
    }
});