# 🛠️ Guia de Manutenção - Shineray Colombo (Versão React)

Este documento fornece instruções detalhadas para realizar a manutenção técnica, atualização de estoque e gestão de consultores no novo sistema React.

---

## 1. Configurações Globais (WhatsApp, Endereço, Redes Sociais)
Diferente da versão anterior, todas as configurações estão centralizadas em um único arquivo de dados para facilitar a manutenção.

### 📱 Dados da Loja (`src/data/config.js`)
Este arquivo é o "coração" das informações de contato do site.
1. Abra o arquivo `src/data/config.js`.
2. Altere os valores dentro do objeto `Config`.
3. **Importante:** O campo `whatsapp.numero` deve conter apenas números, incluindo o DDI (Ex: 554198251213).

---

## 2. Gestão de Produtos (Estoque Digital)
Os produtos são gerenciados no arquivo `src/data/products.js`.

### Como adicionar um novo veículo:
Adicione um novo objeto ao array `productsData` seguindo o modelo abaixo:

```javascript
{
    id: 6, // Próximo número disponível
    slug: "nome-do-modelo-url", // Texto para a URL (sem espaços ou acentos)
    name: "Nome Comercial da Moto",
    category: "scooter", // Categorias: scooter, motocicleta, eletrica
    price: "R$ 00.000,00",
    installment: "12x de R$ 000,00",
    badge: "Novo", // Selo opcional (Destaque, Popular, etc)
    brand: "Shineray", // Shineray ou SBM
    fuel: "Gasolina", // Gasolina ou Elétrica
    colors: ["Preto", "Branco"], // Cores disponíveis
    mainImage: "/img/nome-da-foto.webp", // Caminho da imagem em /public/img/
    highlights: [
        { icon: "Zap", text: "Destaque Visual 1" },
        { icon: "Settings", text: "Destaque Técnico 2" }
    ],
    specifications: {
        "Cilindrada": "000 cc",
        "Potência": "00 cv",
        "Tanque": "0 Litros"
        // Você pode adicionar quantos campos quiser aqui
    }
}
```

---

## 3. Gestão de Consultores (Equipe de Vendas)
Os vendedores são gerenciados no arquivo `src/data/sellers.js`.

### Como cadastrar um novo vendedor:
Adicione um novo objeto ao array `sellersData`:

```javascript
{
    id: "nome-do-vendedor", // ID único para a URL do perfil
    name: "Nome Completo",
    role: "Cargo / Especialidade",
    whatsapp: "5541999999999",
    instagram: "https://instagram.com/perfil",
    location: "Colombo - PR",
    avatar: "https://link-da-foto.jpg", // Ou caminho local em /public/img/
    bio: "Texto de apresentação do vendedor."
}
```

---

## 4. Estrutura de Componentes e Estilos
- **Componentes (`src/components/`):** Contém as partes reutilizáveis como Header, Footer e ProductCard.
- **Páginas (`src/pages/`):** Contém as telas completas (Home, Catálogo, Detalhes).
- **Estilos (`src/App.css`):** Contém as variáveis de cores globais no topo (`:root`). Para mudar o vermelho da marca, altere a variável `--primary`.

---

## 5. Dicas de Performance e Imagens
- **Formato:** Use sempre `.webp` para fotos de produtos. É 70% mais leve que o JPEG tradicional.
- **Otimização:** Antes de adicionar uma imagem na pasta `public/img/`, utilize ferramentas como [Squoosh](https://squoosh.app/) ou [TinyPNG](https://tinypng.com/).
- **Resolução:** Fotos de produtos ficam melhores se forem quadradas (1:1) ou em proporção 4:3.

---

## 6. Comandos de Desenvolvimento
- `npm run dev`: Inicia o ambiente de testes local.
- `npm run build`: Gera a versão final otimizada para publicação (Pasta `dist`).

---
*Documentação atualizada em Fevereiro de 2026.*
