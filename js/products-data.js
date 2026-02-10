/**
 * BANCO DE DADOS DE PRODUTOS
 * Aqui você gerencia todas as motos do site.
 */
const productsData = [
    {
        id: 1,
        slug: "urban-150-efi",
        name: " Urban 150 EFI",
        category: "scooter",
        price: "R$ 13.990,00",
        installment: "12x de R$ 1.165,83",
        badge: "Popular",
        filterCode: "SBM 04-1011",
        colors: ["branco", "preto"],
        brand: "sbm", 
        fuel: "gasolina",
        mainImage: "img/URBAN-150-EFI.webp",
        highlights: [
            { icon: "fa-bolt", text: "Design Urbano" },
            { icon: "fa-cogs", text: "Automática CVT" },
            { icon: "fa-lightbulb", text: "Farol LED" }
        ],
        thumbnails: ["img/URBAN-150-EFI.webp", "img/Storm.webp", "img/Denver.webp"],
        specifications: {
            "Cilindrada": "150 cc",
            "Potência": "12.9 cv",
            "Câmbio": "Automático CVT",
            "Partida": "Elétrica e Pedal",
            "Tanque": "5,5 Litros",
            "Freios": "Disco Hidráulico (Dianteiro e Traseiro)",
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
        filterCode: "SHI 02-2022",
        colors: ["vermelho", "cinza"],
        brand: "shineray",
        fuel: "gasolina",
        mainImage: "img/Storm.webp",
        highlights: [
            { icon: "fa-motorcycle", text: "Econômica" },
            { icon: "fa-cogs", text: "4 Marchas" },
            { icon: "fa-shield-alt", text: "Robusta" }
        ],
        thumbnails: ["img/Storm.webp", "img/URBAN-150-EFI.webp"],
        specifications: {
            "Cilindrada": "125 cc",
            "Potência": "10 cv",
            "Câmbio": "4 Marchas",
            "Partida": "Elétrica e Pedal",
            "Tanque": "4,5 Litros",
            "Freios": "Disco (Dianteiro) / Tambor (Traseiro)",
            "Rodas": "Raiada (Aro 17/14)"
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
        filterCode: "DNV 01-500",
        colors: ["azul", "preto", "vermelho"],
        brand: "shineray",
        fuel: "gasolina",
        mainImage: "img/Denver.webp",
        highlights: [
            { icon: "fa-city", text: "Ágil na Cidade" },
            { icon: "fa-gas-pump", text: "Super Econômica" },
            { icon: "fa-couch", text: "Assento Confort" }
        ],
        thumbnails: ["img/Denver.webp", "img/URBAN-150-EFI.webp", "img/Storm.webp"],
        specifications: {
            "Cilindrada": "125 cc",
            "Potência": "9.5 cv",
            "Câmbio": "4 Marchas",
            "Partida": "Elétrica e Pedal",
            "Tanque": "4 Litros",
            "Freios": "Disco (Dianteiro) / Tambor (Traseiro)",
            "Rodas": "Liga Leve (Aro 17/14)"
        }
    },
    {
        id: 4,
        slug: "shi-250f",
        name: "Shineray SHI 250F",
        category: "motocicleta",
        price: "R$ 15.990,00",
        installment: "12x de R$ 1.332,50",
        badge: "Off-Road",
        filterCode: "SHI 250-F",
        colors: ["laranja", "preto"],
        brand: "shineray",
        fuel: "gasolina",
        mainImage: "img/250F.webp",
        highlights: [
            { icon: "fa-mountain", text: "Todo Terreno" },
            { icon: "fa-cogs", text: "6 Marchas" },
            { icon: "fa-tachometer-alt", text: "Alta Performance" }
        ],
        thumbnails: ["img/250F.webp", "img/Storm.webp", "img/Denver.webp"],
        specifications: {
            "Cilindrada": "250 cc",
            "Potência": "24 cv",
            "Câmbio": "6 Marchas",
            "Partida": "Elétrica",
            "Tanque": "12 Litros",
            "Freios": "Disco Wave Hidráulico (Ambos)",
            "Rodas": "Raiada Off-Road (Aro 21/18)"
        }
    },
    {
        id: 5,
        slug: "shineray-se1",
        name: "Shineray SE1",
        category: "motocicleta-eletrica",
        price: "R$ 14.990,00",
        installment: "12x de R$ 1.249,16",
        badge: "Ecológica",
        filterCode: "SE1-2025",
        colors: ["branco", "preto", "azul"],
        brand: "shineray",
        fuel: "eletrica",
        mainImage: "img/URBAN-150-EFI.webp", // Usando imagem existente como exemplo
        highlights: [
            { icon: "fa-leaf", text: "Zero Emissão" },
            { icon: "fa-battery-full", text: "Bateria de Lítio" },
            { icon: "fa-volume-mute", text: "Silenciosa" }
        ],
        thumbnails: ["img/URBAN-150-EFI.webp"],
        specifications: {
            "Motor": "2000W",
            "Velocidade Máx.": "60 km/h",
            "Autonomia": "Até 60 km",
            "Bateria": "Lítio Removível 60V 24Ah",
            "Tempo de Recarga": "6 a 8 horas",
            "Freios": "Disco (Dianteiro) / Tambor (Traseiro)",
            "Rodas": "Aro 10"
        }
    }
];