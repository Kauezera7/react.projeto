# 🏍️ Shineray Colombo - Template de Catálogo Digital

Este projeto é um template moderno, dinâmico e de alta performance para concessionárias Shineray. Desenvolvido com foco em experiência do usuário (UX), SEO e facilidade de manutenção, o sistema funciona como um Catálogo Digital interativo.

---

## 📂 1. Estrutura do Projeto

```text
template.shineray.teste/
├── docs/                   # Documentação do sistema
├── img/                    # Assets visuais (Produtos, Banners e Ícones)
├── css/
│   ├── style.css           # Estilos globais, Layout Base e Animações
│   ├── catalog.css         # Grid de produtos e design dos filtros
│   ├── hero-slider.css     # Estilos do banner principal
│   └── seller-profile.css  # Layout estilo "Linktree" para vendedores
└── js/
    ├── config.js           # ⚙️ CONFIGURAÇÃO GLOBAL (WhatsApp, Endereço, Redes)
    ├── layout.js           # 🏗️ ESTRUTURA GLOBAL (Injeção de Header e Footer)
    ├── products-data.js    # 📦 Banco de dados de produtos
    ├── sellers-data.js     # 👥 Banco de dados de vendedores
    ├── render-utils.js     # 🛠️ Utilitários de renderização de componentes
    ├── menu.js             # Navegação responsiva e scroll suave
    ├── catalog.js          # Lógica de filtros avançados e listagem
    ├── product-detail.js   # Página dinâmica de detalhes (SEO-friendly)
    ├── seller-profile.js   # Gerador de perfil de vendedor dinâmico
    ├── home-carousel.js    # Carrossel de destaques da Home
    ├── hero-slider.js      # Controle do banner rotativo
    └── scroll-animation.js # Efeitos de revelação ao rolar a página
```

---

## 🚀 2. Funcionalidades de Destaque

### ⚙️ Configuração Centralizada (`js/config.js` e `js/layout.js`)
O coração da manutenção do site.
- **Dados (`config.js`):** Altera em um único lugar contatos, localização e redes sociais.
- **Estrutura (`layout.js`):** Gerencia o HTML do Menu e Rodapé de todas as páginas simultaneamente.
*As mudanças se propagam automaticamente para todo o site, eliminando a necessidade de editar múltiplos arquivos HTML.*

### 📦 Catálogo Inteligente com Filtros Avançados
Diferente de sites estáticos comuns, o catálogo oferece:
- **Múltipla Seleção:** Filtre simultaneamente por Categoria, Cor, Combustível (Gasolina/Elétrica) e Marca.
- **Contagem Dinâmica:** Os filtros mostram a quantidade de produtos disponíveis em cada categoria em tempo real.
- **Renderização Dinâmica:** Produtos são gerados a partir do `products-data.js`, facilitando a atualização do estoque.

### 📄 Detalhes do Produto e SEO
- **Páginas Dinâmicas:** Uma única página (`product-detail.html`) atende a todos os produtos via slugs na URL.
- **SEO Automático:** Atualiza o `title` do navegador e as `meta-tags` de descrição para melhor indexação e compartilhamento em redes sociais.
- **Ficha Técnica:** Sistema de acordeão para especificações técnicas detalhadas.

### 👤 Perfil de Vendedor (Estilo Linktree)
Páginas personalizadas para cada consultor de vendas, permitindo:
- **Links Diretos:** Botões rápidos para o WhatsApp do vendedor, Instagram e Localização.
- **Fidelização:** O cliente pode salvar o link direto do seu consultor preferido.

### ✨ Experiência Visual (UX)
- **Scroll Reveal:** Animações suaves de entrada conforme o usuário navega.
- **Hero Slider:** Banner de impacto na página inicial com suporte a múltiplas imagens.
- **Carrossel de Produtos:** Navegação horizontal intuitiva para os modelos em destaque.

---

## 🛠️ 3. Guia de Manutenção

### Atualizar Informações da Loja
Abra o arquivo `js/config.js` e altere os valores dentro do objeto `Config`.

### Adicionar uma Nova Moto
1. Adicione a imagem na pasta `img/`.
2. No arquivo `js/products-data.js`, adicione um novo objeto ao array `productsData` seguindo o padrão existente.

### Adicionar um Novo Vendedor
1. No arquivo `js/sellers-data.js`, adicione os dados do novo consultor.
2. O perfil será acessível via `seller-profile.html?id=id-do-vendedor`.

---

## 💻 4. Tecnologias Utilizadas
- **HTML5 / CSS3** (Variáveis CSS e Flexbox/Grid)
- **JavaScript Vanilla** (ES6+)
- **Font Awesome** (Ícones)
- **Google Fonts** (Montserrat)

---
*Documentação atualizada em Fevereiro de 2026.*