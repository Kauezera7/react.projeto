/**
 * ARQUIVO DE CONFIGURAÇÃO GLOBAL (js/config.js)
 * Centraliza informações de contato, endereço e redes sociais.
 * Altere os dados aqui e eles serão atualizados automaticamente onde tiverem as classes marcadas.
 */

const Config = {
    empresa: {
        nome: "Shineray Colombo",
        cnpj: "00.000.000/0000-99",
        copyright: "© 2025 ShinerayColombo"
    },
    contato: {
        whatsapp: {
            numero: "554198251213", // Apenas números (com DDD) para o link
            formatado: "(41) 9825-1213" // Como aparece escrito na tela
        },
        telefone: {
            numero: "554198251213",
            formatado: "(41) 9825-1213"
        },
        email: "TESTEVERCEL@shineraycolombo.com.br"
    },
    endereco: {
        rua: "R. Pasteur, 220",
        bairroCidade: "Maracanã - Colombo, PR",
        linkGoogleMaps: "https://maps.app.goo.gl/rcrcW2HmU19jYu889"
    },
    redesSociais: {
        facebook: "https://facebook.com",
        instagram: "https://www.instagram.com/shineraycolombo?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
        youtube: "https://www.youtube.com/@ShinerayMotos"
    },
    paginaProduto: {
        botaoWhatsapp: {
            numeroVendas: "554198251213", // <--- COLOQUE O NÚMERO DE VENDAS AQUI
            texto: "Falar com um Vendedor",
            iconeTamanho: "1.6rem",
            estilo: "display: flex; align-items: center; justify-content: center; gap: 15px; font-size: 1.1rem; padding: 15px 25px;"
        },
        // Use {NOME_MOTO} onde quer que apareça o nome e {LINK} onde quer o link da página
        mensagemPadrao: "Olá! Gostaria de mais informações sobre a *{NOME_MOTO}* que vi no site.\nLink: {LINK}"
    },
    sobre: {
        posVenda: {
            whatsapp: "5541999999999", // Número do Pós-Venda
            mensagem: "Olá! Gostaria de falar sobre o Pós-Venda."
        },
        financiamento: {
            whatsapp: "5541888888888", // Número do Financiamento
            mensagem: "Olá! Gostaria de simular um financiamento."
        },
        oficina: {
            whatsapp: "5541777777777", // Número da Oficina
            mensagem: "Olá! Gostaria de agendar um serviço na Oficina."
        }
    }
};

/**
 * LÓGICA DE ATUALIZAÇÃO AUTOMÁTICA
 * Procura por elementos com classes específicas e atualiza o conteúdo.
 */
document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Atualiza LINKS e TEXTO do WhatsApp
    document.querySelectorAll('.config-whatsapp-link').forEach(el => {
        el.href = `https://wa.me/${Config.contato.whatsapp.numero}`;
        if (el.classList.contains('update-text')) el.textContent = Config.contato.whatsapp.formatado;
    });

    document.querySelectorAll('.config-whatsapp-text').forEach(el => {
        el.textContent = Config.contato.whatsapp.formatado;
    });

    // 2. Atualiza Telefone
    document.querySelectorAll('.config-phone-text').forEach(el => {
        el.textContent = Config.contato.telefone.formatado;
    });

    // 3. Atualiza E-mail
    document.querySelectorAll('.config-email-text').forEach(el => {
        el.textContent = Config.contato.email;
        if (el.tagName === 'A') el.href = `mailto:${Config.contato.email}`;
    });

    // 4. Atualiza Endereço
    document.querySelectorAll('.config-address-html').forEach(el => {
        el.innerHTML = `${Config.endereco.rua}<br>${Config.endereco.bairroCidade}`;
    });

    // 5. Atualiza CNPJ e Copyright no Rodapé
    document.querySelectorAll('.config-company-info').forEach(el => {
        el.innerHTML = `${Config.empresa.copyright}<br>CNPJ: ${Config.empresa.cnpj}`;
    });

    // 6. Links de Redes Sociais e Maps
    document.querySelectorAll('.config-maps-link').forEach(el => el.href = Config.endereco.linkGoogleMaps);
    document.querySelectorAll('.config-social-fb').forEach(el => el.href = Config.redesSociais.facebook);
    document.querySelectorAll('.config-social-insta').forEach(el => el.href = Config.redesSociais.instagram);
    document.querySelectorAll('.config-social-yt').forEach(el => el.href = Config.redesSociais.youtube);

    // 7. Atualiza Links Específicos da Seção "Sobre" (Pós-Venda, Financiamento, Oficina)
    if (Config.sobre) {
        const setWhatsLink = (selector, data) => {
            document.querySelectorAll(selector).forEach(el => {
                if (data && data.whatsapp) {
                    const msg = data.mensagem ? `?text=${encodeURIComponent(data.mensagem)}` : '';
                    el.href = `https://wa.me/${data.whatsapp}${msg}`;
                }
            });
        };

        setWhatsLink('.contact-pos-venda', Config.sobre.posVenda);
        setWhatsLink('.contact-financiamento', Config.sobre.financiamento);
        setWhatsLink('.contact-oficina', Config.sobre.oficina);
    }

    console.log('✅ Configurações do site carregadas (js/config.js)');
});
