# 🏍️ Shineray Colombo - Catálogo Digital (Versão React)
esta no vercel react-projeto-dusky.vercel.app

Este projeto é um catálogo digital moderno e de alta performance para a concessionária Shineray Colombo, desenvolvido com **React + Vite**. O sistema foi projetado para ser modular, fácil de manter e otimizado para conversão de vendas via WhatsApp.

---

## 📂 1. Estrutura do Projeto (Arquitetura)

```text
src/
├── components/          # Componentes Reutilizáveis (UI)
│   ├── Header.jsx       # Cabeçalho e Navegação principal
│   ├── Footer.jsx       # Rodapé com informações de contato
│   ├── ProductCard.jsx  # Cartão individual de produto
│   ├── ProductCarousel.jsx # Carrossel de destaques (Swiper)
│   ├── HeroSlider.jsx   # Banner principal com animações
│   └── ScrollToTop.jsx  # Utilitário para resetar o scroll ao navegar
├── pages/               # Páginas da Aplicação
│   ├── Home.jsx         # Página inicial com destaques
│   ├── Catalog.jsx      # Listagem completa com filtros
│   ├── ProductDetail.jsx # Detalhes técnicos de cada moto
│   ├── Sellers.jsx      # Lista de consultores de vendas
│   └── SellerProfile.jsx # Perfil individual do vendedor (estilo Linktree)
├── data/                # "Banco de Dados" Local (JS)
│   ├── config.js        # Configurações globais (WhatsApp, Endereço)
│   ├── products.js      # Lista completa de produtos e especificações
│   └── sellers.js       # Cadastro de consultores e seus links
├── App.jsx              # Gerenciador de Rotas e Layout Base
└── main.jsx             # Ponto de entrada da aplicação
```

---

## 🚀 2. Funcionalidades Principais

### ⚙️ Gestão de Dados Centralizada
- **Configuração Global:** Alterações no `data/config.js` atualizam automaticamente o WhatsApp da loja, redes sociais e endereço em todo o site.
- **Catálogo Dinâmico:** Os produtos são carregados a partir de um arquivo centralizado, facilitando a atualização de estoque sem mexer no código da interface.

### 🔍 Experiência de Navegação
- **Filtros Avançados:** No catálogo, o usuário pode filtrar por categoria (Scooter, Trail, Elétrica, etc.).
- **SEO & Performance:** Uso de React Router para navegação instantânea e Vite para um carregamento ultra-rápido.
- **Responsividade:** Design adaptado para smartphones, garantindo que o cliente possa ver o catálogo na palma da mão.

### 👤 Canal Direto com Vendedores
- **Perfis Personalizados:** Cada vendedor possui uma URL única que funciona como um cartão de visitas digital, integrando WhatsApp e Redes Sociais.

---

## 🛠️ 3. Guia de Manutenção (Como atualizar)

### Como adicionar ou alterar uma moto:
1. Coloque a imagem da moto em `public/img/`.
2. Abra `src/data/products.js`.
3. Adicione ou edite um objeto no array `productsData`.
   - **Campos:** `id`, `name`, `price`, `category`, `specs` (especificações técnicas), `image`.

### Como alterar o WhatsApp principal da loja:
1. Abra `src/data/config.js`.
2. Altere o valor da variável correspondente.

### Como adicionar um novo vendedor:
1. Abra `src/data/sellers.js`.
2. Adicione os dados do novo consultor no array de vendedores.

---

## 💻 4. Tecnologias Utilizadas
- **React 18** (Biblioteca principal)
- **Vite** (Ferramenta de build e desenvolvimento)
- **React Router Dom** (Navegação entre páginas)
- **Framer Motion** (Animações suaves)
- **Swiper** (Carrosséis de imagens)
- **Vanilla CSS** (Estilização personalizada)

---
*Documentação atualizada em Fevereiro de 2026.*
