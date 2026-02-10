# 🛠️ Guia de Manutenção - Shineray Colombo

Este documento fornece instruções detalhadas para realizar a manutenção técnica e atualização de conteúdo do projeto.

---

## 1. Configurações Globais (WhatsApp, Endereço, Redes Sociais)
As informações estão divididas em dois arquivos principais:

### 📱 Dados e Contatos (`js/config.js`)
Centraliza números de telefone, links de redes sociais e endereço.
1. Abra `js/config.js`.
2. Altere os valores dentro do objeto `Config`.

### 🏗️ Menu e Rodapé (`js/layout.js`)
Centraliza a estrutura HTML do topo e da base do site.
1. Abra `js/layout.js`.
2. Altere o HTML dentro das constantes `HEADER_CONTENT` ou `FOOTER_CONTENT`.
3. Útil para adicionar novos links no menu ou trocar a logo.

---

## 2. Gestão de Produtos (Catálogo)
Os produtos são gerenciados no arquivo `js/products-data.js`.

### Adicionando um novo produto:
Copie o modelo abaixo e adicione ao final do array `productsData`:

```javascript
{
    id: 6, // ID numérico sequencial
    slug: "nome-da-moto-url", // Texto usado na URL (evite espaços e acentos)
    name: "Nome Completo da Moto",
    category: "motocicleta", // Opções: ciclomotor, motocicleta, scooter, bike, etc.
    price: "R$ 00.000,00",
    installment: "12x de R$ 000,00",
    badge: "Destaque", // Texto que aparece no selo (opcional)
    brand: "shineray", // shineray ou sbm
    fuel: "gasolina", // gasolina ou eletrica
    mainImage: "img/nome-da-imagem.webp",
    highlights: [
        { icon: "fa-bolt", text: "Destaque 1" },
        { icon: "fa-cogs", text: "Destaque 2" }
    ],
    thumbnails: ["img/foto1.webp", "img/foto2.webp"],
    specifications: {
        "Cilindrada": "000 cc",
        "Potência": "00 cv",
        "Tanque": "00 Litros"
        // Adicione quantos campos desejar
    }
}
```

---

## 3. Gestão de Vendedores (Equipe)
Os vendedores são gerenciados no arquivo `js/sellers-data.js`.

### Adicionando um novo vendedor:
Adicione um novo objeto ao array `sellersData`:

```javascript
{
    id: "nome-vendedor", // ID único para a URL
    name: "Nome do Vendedor",
    role: "Cargo",
    whatsapp: "5541999999999",
    instagram: "https://instagram.com/perfil",
    location: "Nome da Unidade",
    locationLink: "link-google-maps",
    avatar: "img/vendedores/foto.jpg",
    bio: "Pequeno texto de apresentação.",
    email: "email@shineraycolombo.com.br"
}
```

---

## 4. Imagens e Assets
Para manter a performance do site, siga estas recomendações:

- **Formato:** Use preferencialmente `.webp` (mais leve) ou `.png` (para logos com transparência).
- **Tamanho de Produtos:** Imagens quadradas ou 4:3 (ex: 800x800px ou 800x600px).
- **Otimização:** Antes de subir uma imagem, passe-a por um otimizador (ex: TinyPNG).
- **Localização:** Todas as imagens devem estar na pasta `img/`.

---

## 5. Estilização (CSS)
- `css/style.css`: Contém as variáveis de cores globais no topo (`:root`). Se precisar mudar o vermelho padrão da Shineray, altere aqui.
- `css/catalog.css`: Controla o visual do grid de produtos e dos filtros dropdown.
- `css/seller-profile.css`: Controla o layout da página de vendedor (estilo mobile-first).

---

## 6. Fluxo de Trabalho Recomendado
1. **Desenvolvimento Local:** Faça as alterações e teste abrindo o `index.html` no navegador.
2. **Verificação de Console:** Pressione F12 e verifique se há erros em vermelho no "Console".
3. **Teste Responsivo:** Use o modo de inspeção do navegador para garantir que o layout funciona bem em celulares.

---
*Última atualização: Fevereiro de 2026.*
