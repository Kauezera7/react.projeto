document.addEventListener('DOMContentLoaded', () => {
    const productsContainer = document.querySelector('.products');
    
    // Configuração dos Dropdowns
    const filters = {
        category: {
            id: 'category-dropdown',
            selected: ['all'],
            options: ['all', 'ciclomotor', 'motocicleta', 'motocicleta-eletrica', 'scooter', 'bike', 'triciclo-eletrico'],
            labelDefault: 'Todos os modelos'
        },
        color: {
            id: 'color-dropdown',
            selected: ['all'],
            options: ['all', 'preto', 'vermelho', 'branco', 'azul', 'cinza', 'laranja'],
            labelDefault: 'Todas as cores'
        },
        fuel: {
            id: 'fuel-dropdown',
            selected: ['all'],
            options: ['all', 'gasolina', 'eletrica'],
            labelDefault: 'Todos'
        },
        brand: {
            id: 'brand-dropdown',
            selected: ['all'],
            options: ['all', 'shineray', 'sbm'],
            labelDefault: 'Todas as marcas'
        }
    };

    const toggleBtn = document.getElementById('toggle-filters');
    const filtersContainer = document.getElementById('filters-container');
    const resetBtn = document.getElementById('reset-filters');

    /**
     * INICIALIZA OS DROPDOWNS
     */
    const initDropdowns = () => {
        Object.keys(filters).forEach(key => {
            const config = filters[key];
            const wrapper = document.getElementById(config.id);
            if (!wrapper) return;

            const trigger = wrapper.querySelector('.custom-select-trigger');
            const optionsContainer = wrapper.querySelector('.custom-options');

            // Click para abrir/fechar
            trigger.addEventListener('click', (e) => {
                // Fecha outros dropdowns abertos
                document.querySelectorAll('.custom-select-wrapper').forEach(w => {
                    if (w !== wrapper) w.classList.remove('open');
                });
                wrapper.classList.toggle('open');
                e.stopPropagation();
            });

            renderOptions(key);
        });
    };

    /**
     * RENDERIZA AS OPÇÕES DE CADA DROPDOWN COM CONTAGEM
     */
    const renderOptions = (key) => {
        const config = filters[key];
        const wrapper = document.getElementById(config.id);
        const optionsContainer = wrapper.querySelector('.custom-options');

        // Contagem
        const counts = { all: productsData.length };
        productsData.forEach(p => {
            let val;
            if (key === 'color') {
                val = p.colors || [p.color] || [];
            } else if (key === 'category') {
                val = [p.category || 'motocicleta']; // Default category
            } else {
                val = [p[key] || (key === 'fuel' ? 'gasolina' : 'shineray')];
            }
            
            const values = Array.isArray(val) ? val : [val];
            values.forEach(v => {
                counts[v] = (counts[v] || 0) + 1;
            });
        });

        optionsContainer.innerHTML = config.options.map(opt => {
            let label;
            if (opt === 'all') {
                label = config.labelDefault;
            } else if (key === 'category') {
                // Formatação especial para categorias
                const categoryNames = {
                    'ciclomotor': 'Ciclomotores',
                    'motocicleta': 'Motocicletas',
                    'motocicleta-eletrica': 'Motocicletas Elétricas',
                    'scooter': 'Scooter',
                    'bike': 'Bikes',
                    'triciclo-eletrico': 'Triciclos Elétricos'
                };
                label = categoryNames[opt] || opt.charAt(0).toUpperCase() + opt.slice(1);
            } else {
                label = opt.charAt(0).toUpperCase() + opt.slice(1);
            }

            const count = counts[opt] || 0;
            
            // Adiciona ícone apenas para cor
            const dotHtml = key === 'color' ? `<div class="color-dot ${opt}"></div>` : '';
            
            // Verifica se está selecionado
            const isSelected = config.selected.includes(opt);
            const selectedClass = isSelected ? 'selected' : '';

            return `
                <div class="custom-option ${selectedClass}" data-value="${opt}">
                    ${dotHtml}
                    <span>${label}</span>
                    <span class="count">(${count})</span>
                </div>
            `;
        }).join('');

        // Evento de Seleção
        optionsContainer.querySelectorAll('.custom-option').forEach(option => {
            option.addEventListener('click', function(e) {
                e.stopPropagation(); // Impede que o clique feche o dropdown imediatamente
                
                const value = this.dataset.value;

                if (value === 'all') {
                    // Se clicou em "Todos", limpa o resto e deixa só "all"
                    config.selected = ['all'];
                } else {
                    // Se clicou em outra opção
                    if (config.selected.includes('all')) {
                        // Remove "all" se for a primeira seleção específica
                        config.selected = [];
                    }

                    if (config.selected.includes(value)) {
                        // Se já estava selecionado, remove
                        config.selected = config.selected.filter(item => item !== value);
                    } else {
                        // Se não estava, adiciona
                        config.selected.push(value);
                    }

                    // Se não sobrou nada, volta para "all"
                    if (config.selected.length === 0) {
                        config.selected = ['all'];
                    }
                }
                
                // Atualiza o gatilho (trigger)
                const trigger = wrapper.querySelector('.custom-select-trigger');
                
                if (config.selected.includes('all')) {
                     trigger.querySelector('span').textContent = config.labelDefault;
                     if (key === 'color') trigger.querySelector('.color-dot').className = 'color-dot all';
                } else {
                    const count = config.selected.length;
                    const text = count === 1 ? '1 selecionado' : `${count} selecionados`;
                    trigger.querySelector('span').textContent = text;
                     if (key === 'color') trigger.querySelector('.color-dot').className = 'color-dot all'; // Poderia mostrar mix de cores, mas 'all' fica melhor visualmente
                }

                // NÃO FECHA O DROPDOWN AQUI para permitir múltipla seleção
                // wrapper.classList.remove('open');
                
                renderOptions(key); // Re-renderiza as opções para atualizar os checks visualmente
                renderProducts(); // Filtra os produtos
            });
        });
    };

    const renderAllOptions = () => {
        Object.keys(filters).forEach(key => renderOptions(key));
    };

    /**
     * RENDERIZA OS PRODUTOS FILTRADOS
     */
    const renderProducts = () => {
        if (!productsContainer) return;

        const filteredProducts = productsData.filter(product => {
            const pColors = product.colors || [product.color] || [];
            const pFuel = product.fuel || 'gasolina';
            const pBrand = product.brand || 'shineray';
            const pCategory = product.category || 'motocicleta'; 

            // Lógica de filtro "OU" (se tiver pelo menos um dos selecionados)
            const matchCategory = filters.category.selected.includes('all') || filters.category.selected.includes(pCategory);
            
            // Para cor (array vs array): Verifica se há interseção
            const matchColor = filters.color.selected.includes('all') || filters.color.selected.some(c => pColors.includes(c));
            
            const matchFuel = filters.fuel.selected.includes('all') || filters.fuel.selected.includes(pFuel);
            const matchBrand = filters.brand.selected.includes('all') || filters.brand.selected.includes(pBrand);

            return matchCategory && matchColor && matchFuel && matchBrand;
        });

        productsContainer.innerHTML = '';

        if (filteredProducts.length === 0) {
            productsContainer.innerHTML = `<div class="no-results" style="grid-column: 1/-1; text-align: center; padding: 60px;">
                <i class="fas fa-motorcycle" style="font-size: 3rem; color: #ddd; margin-bottom: 20px;"></i>
                <p>Nenhuma moto encontrada com esses filtros.</p>
            </div>`;
            return;
        }

        productsContainer.innerHTML = filteredProducts.map((product, index) => renderProductCard(product, index)).join('');
    };

    // Global click para fechar dropdowns
    document.addEventListener('click', () => {
        document.querySelectorAll('.custom-select-wrapper').forEach(w => w.classList.remove('open'));
    });

    // Toggle do container de filtros
    if (toggleBtn && filtersContainer) {
        toggleBtn.addEventListener('click', () => {
            toggleBtn.classList.toggle('active');
            filtersContainer.style.display = (filtersContainer.style.display === 'block') ? 'none' : 'block';
        });
    }

    // Reset de Filtros
    if (resetBtn) {
        resetBtn.addEventListener('click', () => {
            Object.keys(filters).forEach(key => {
                const config = filters[key];
                config.selected = ['all'];
                const wrapper = document.getElementById(config.id);
                const trigger = wrapper.querySelector('.custom-select-trigger');
                trigger.querySelector('span').textContent = config.labelDefault;
                if (key === 'color') trigger.querySelector('.color-dot').className = 'color-dot all';
            });
            renderAllOptions();
            renderProducts();
        });
    }

    if (typeof productsData !== 'undefined') {
        initDropdowns();
        renderProducts();
    }
});
