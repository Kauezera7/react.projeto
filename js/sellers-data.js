/**
 * BANCO DE DADOS DE VENDEDORES
 * Aqui você gerencia os perfis dos consultores que aparecem no site.
 */
const sellersData = [
    {
        id: "carlos-junior", // ID único usado na URL (ex: seller-profile.html?id=carlos-junior)
        name: "Carlos Júnior", // Nome completo do vendedor
        role: "Gerente de Vendas", // Cargo ou especialidade
        whatsapp: "5500000000000", // Número do WhatsApp (com 55 + DDD + Número)
        instagram: "https://instagram.com", // Link completo do perfil no Instagram
        location: "Unidade Centro", // Nome da loja onde ele atende
        locationLink: "https://maps.google.com", // Link do Google Maps da loja
        avatar: "https://randomuser.me/api/portraits/men/32.jpg", // Foto do vendedor (link ou caminho da pasta img)
        bio: "Com mais de 10 anos de experiência, lidero a equipe da Shineray. Especialista em negociações complexas e frotas.", // Pequeno texto sobre ele
        email: "carlos@shineray.com.br" // E-mail de contato
    },
    {
        id: "fernanda-oliveira",
        name: "Fernanda Oliveira",
        role: "Consultora de Consórcio",
        whatsapp: "5500000000000",
        instagram: "https://instagram.com",
        location: "Unidade Norte",
        locationLink: "https://maps.google.com",
        avatar: "https://randomuser.me/api/portraits/women/44.jpg",
        bio: "Especialista em realizar sonhos através do consórcio. Ajudo você a planejar a compra da sua moto nova.",
        email: "fernanda@shineray.com.br"
    },
    {
        id: "ricardo-silva",
        name: "Ricardo Silva",
        role: "Vendas Online",
        whatsapp: "5500000000000",
        instagram: "https://instagram.com",
        location: "Digital / Online",
        locationLink: "https://maps.google.com",
        avatar: "https://randomuser.me/api/portraits/men/85.jpg",
        bio: "Atendimento ágil e digital. Agilizo sua aprovação de crédito sem você sair de casa.",
        email: "ricardo@shineray.com.br"
    },
    {
        id: "ana-souza",
        name: "Ana Souza",
        role: "Especialista Shineray",
        whatsapp: "5500000000000",
        instagram: "https://instagram.com",
        location: "Unidade Sul",
        locationLink: "https://maps.google.com",
        avatar: "https://randomuser.me/api/portraits/women/65.jpg",
        bio: "Apaixonada por duas rodas e expert em toda a linha Shineray. Sei qual modelo se encaixa no seu bolso.",
        email: "ana@shineray.com.br"
    },
    
];