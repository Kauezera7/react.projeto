export const productsData = [
    {
        id: 1,
        slug: "urban-150-efi",
        name: "Urban 150 EFI",
        category: "scooter",
        price: "R$ 13.990,00",
        installment: "12x de R$ 1.165,83",
        badge: "Popular",
        brand: "SBM", 
        fuel: "Gasolina",
        colors: ["Preto", "Branco", "Azul"],
        mainImage: "/img/URBAN-150-EFI.webp",
        highlights: [
            { icon: "Zap", text: "Design Urbano" },
            { icon: "Settings", text: "Automática CVT" },
            { icon: "Lightbulb", text: "Farol LED" }
        ],
        thumbnails: ["/img/URBAN-150-EFI.webp", "/img/Storm.webp", "/img/Denver.webp"],
        specifications: {
            "Cilindrada": "150 cc",
            "Potência": "12.9 cv",
            "Câmbio": "Automático CVT",
            "Partida": "Elétrica e Pedal",
            "Tanque": "5,5 Litros",
            "Freios": "Disco Hidráulico",
            "Rodas": "Liga Leve Aro 13"
        }
    },
    {
        id: 2,
        slug: "storm-125",
        name: "Shineray Storm",
        category: "motocicleta",
        price: "R$ 11.490,00",
        installment: "12x de R$ 957,50",
        badge: "Destaque",
        brand: "Shineray",
        fuel: "Gasolina",
        colors: ["Vermelho", "Preto"],
        mainImage: "/img/Storm.webp",
        highlights: [
            { icon: "Bike", text: "Econômica" },
            { icon: "Settings", text: "4 Marchas" },
            { icon: "ShieldCheck", text: "Robusta" }
        ],
        thumbnails: ["/img/Storm.webp", "/img/URBAN-150-EFI.webp"],
        specifications: {
            "Cilindrada": "125 cc",
            "Potência": "10 cv",
            "Câmbio": "4 Marchas",
            "Partida": "Elétrica e Pedal",
            "Tanque": "4,5 Litros"
        }
    },
    {
        id: 3,
        slug: "denver-125",
        name: "Shineray Denver",
        category: "motocicleta",
        price: "R$ 9.990,00",
        installment: "12x de R$ 832,50",
        badge: "Nova",
        brand: "Shineray",
        fuel: "Gasolina",
        colors: ["Cinza", "Preto"],
        mainImage: "/img/Denver.webp",
        highlights: [
            { icon: "Zap", text: "Ágil na Cidade" },
            { icon: "Settings", text: "Econômica" },
            { icon: "ShieldCheck", text: "Conforto" }
        ],
        specifications: { "Cilindrada": "125 cc", "Tanque": "4 Litros" }
    },
    {
        id: 4,
        slug: "shi-250f",
        name: "Shineray SHI 250F",
        category: "motocicleta",
        price: "R$ 15.990,00",
        installment: "12x de R$ 1.332,50",
        badge: "Off-Road",
        brand: "Shineray",
        fuel: "Gasolina",
        colors: ["Branco", "Vermelho"],
        mainImage: "/img/250F.webp",
        highlights: [
            { icon: "Bike", text: "Todo Terreno" },
            { icon: "Settings", text: "6 Marchas" }
        ],
        specifications: { "Cilindrada": "250 cc", "Potência": "24 cv" }
    },
    {
        id: 5,
        slug: "shineray-eletrica-teste",
        name: "Shineray SE-1",
        category: "scooter",
        price: "R$ 12.990,00",
        installment: "12x de R$ 1.082,50",
        badge: "Ecológica",
        brand: "Shineray",
        fuel: "Elétrica",
        colors: ["Branco", "Azul"],
        mainImage: "/img/URBAN-150-EFI.webp",
        highlights: [
            { icon: "Zap", text: "100% Elétrica" },
            { icon: "ShieldCheck", text: "Silenciosa" }
        ],
        specifications: { "Motor": "2000W", "Autonomia": "60km" }
    }
];