/**
 * Configuração Global da Empresa
 * Este objeto centraliza todas as informações de contato, redes sociais e endereço.
 * Alterar estes valores atualizará automaticamente todos os componentes do site.
 */
export const Config = {
    // Dados da Razão Social
    empresa: {
        nome: "Shineray Colombo",
        cnpj: "00.000.000/0000-99",
        copyright: "© 2025 ShinerayColombo"
    },
    // Informações de Contato Direto
    contato: {
        whatsapp: {
            numero: "554198251213", // Apenas números com DDI
            formatado: "(41) 9825-1213" // Exibição visual
        },
        telefone: {
            numero: "554198251213",
            formatado: "(41) 9825-1213"
        },
        email: "TESTEVERCEL@shineraycolombo.com.br"
    },
    // Localização da Loja
    endereco: {
        rua: "R. Pasteur, 220",
        bairroCidade: "Maracanã - Colombo, PR",
        linkGoogleMaps: "https://maps.app.goo.gl/rcrcW2HmU19jYu889"
    },
    // Links para Redes Sociais
    redesSociais: {
        facebook: "https://facebook.com",
        instagram: "https://www.instagram.com/shineraycolombo",
        youtube: "https://www.youtube.com/@ShinerayMotos"
    }
};
