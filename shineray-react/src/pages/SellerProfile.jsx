import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
    ArrowLeft, 
    Instagram, 
    MapPin, 
    Bike, 
    ChevronRight, 
    CheckCircle2,
    ShieldCheck
} from 'lucide-react';
import { sellersData } from '../data/sellers';
import './SellerProfile.css';

// Ícone do WhatsApp em SVG para garantir que seja o logo oficial
const WhatsAppIcon = ({ size = 24, color = "currentColor" }) => (
    <svg 
        width={size} 
        height={size} 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke={color} 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
    >
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 1 1-7.6-11.7 8.38 8.38 0 0 1 3.8.9L21 3z" />
        <path d="M11 11.5l1 1h.01L13 14" />
        <path d="M9 9.5l1 1h.01L11 12" />
    </svg>
);

// Usando FontAwesome para o logo real do WhatsApp ou um SVG mais fiel
const WhatsAppLogoReal = ({ size = 24 }) => (
    <svg 
        width={size} 
        height={size} 
        viewBox="0 0 448 512" 
        fill="currentColor"
    >
        <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.7 17.8 69.4 27.2 106.2 27.2 122.4 0 222-99.6 222-222 0-59.3-23-115.1-65-157.1zM223.9 446.3c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 366.5l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.5-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 54.1 81.2 54.1 130.4 0 101.7-82.8 184.5-184.5 184.5zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-5.5-2.8-23.4-8.6-44.5-27.4-16.4-14.6-27.5-32.7-30.7-38.2-3.2-5.6-.3-8.6 2.5-11.3 2.5-2.5 5.5-6.5 8.3-9.7 2.8-3.2 3.7-5.6 5.6-9.3 1.9-3.7 1-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 13.2 5.7 23.5 9.2 31.6 11.8 13.3 4.2 25.4 3.6 35 2.2 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
    </svg>
);

const SellerProfile = () => {
    const { id } = useParams();
    const seller = sellersData.find(s => s.id === id);

    useEffect(() => {
        if (seller) {
            document.title = `${seller.name} | Consultor Shineray`;
            window.scrollTo(0, 0);
        }
    }, [seller]);

    if (!seller) {
        return (
            <div className="container" style={{ textAlign: 'center', padding: '100px 20px' }}>
                <h2>Consultor não encontrado</h2>
                <Link to="/vendedores">Voltar para a equipe</Link>
            </div>
        );
    }

    return (
        <div className="seller-profile-page">
            <Link to="/vendedores" className="btn-back-minimal">
                <ArrowLeft size={22} />
            </Link>

            <header className="profile-header-premium">
                <img 
                    src="/img/Shineray-logo-branco.png" 
                    alt="Shineray" 
                    className="profile-brand-logo" 
                />
            </header>

            <div className="container">
                <motion.div 
                    className="profile-card-container"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="profile-avatar-wrapper">
                        <img src={seller.avatar} alt={seller.name} className="profile-avatar-large" />
                        <div className="verified-badge">
                            <CheckCircle2 size={20} fill="white" color="#007bff" />
                        </div>
                    </div>
                    
                    <h1 className="profile-name">{seller.name}</h1>
                    <span className="profile-role-text">{seller.role}</span>

                    <p className="profile-bio">
                        {seller.bio}
                    </p>

                    <div className="profile-links">
                        {/* WhatsApp */}
                        <a 
                            href={`https://wa.me/${seller.whatsapp}`} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="profile-link-card"
                        >
                            <div className="link-left">
                                <div className="link-icon-circle whatsapp-icon">
                                    <WhatsAppLogoReal size={24} />
                                </div>
                                <div className="link-text-info">
                                    <h3>Atendimento Digital</h3>
                                    <p>Fale comigo agora</p>
                                </div>
                            </div>
                            <ChevronRight size={18} className="link-arrow-right" />
                        </a>

                        {/* Instagram */}
                        {seller.instagram && (
                            <a 
                                href={seller.instagram} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="profile-link-card"
                            >
                                <div className="link-left">
                                    <div className="link-icon-circle instagram-icon">
                                        <Instagram size={24} />
                                    </div>
                                    <div className="link-text-info">
                                        <h3>Instagram</h3>
                                        <p>Siga meu dia a dia</p>
                                    </div>
                                </div>
                                <ChevronRight size={18} className="link-arrow-right" />
                            </a>
                        )}

                        {/* Catálogo */}
                        <Link to="/catalogo" className="profile-link-card">
                            <div className="link-left">
                                <div className="link-icon-circle catalog-icon">
                                    <Bike size={24} />
                                </div>
                                <div className="link-text-info">
                                    <h3>Nosso Catálogo</h3>
                                    <p>Veja as motos disponíveis</p>
                                </div>
                            </div>
                            <ChevronRight size={18} className="link-arrow-right" />
                        </Link>

                        {/* Localização */}
                        {seller.locationLink && (
                            <a 
                                href={seller.locationLink} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="profile-link-card"
                            >
                                <div className="link-left">
                                    <div className="link-icon-circle location-icon">
                                        <MapPin size={24} />
                                    </div>
                                    <div className="link-text-info">
                                        <h3>Localização</h3>
                                        <p>{seller.location}</p>
                                    </div>
                                </div>
                                <ChevronRight size={18} className="link-arrow-right" />
                            </a>
                        )}
                    </div>

                    <div className="profile-card-footer">
                        <ShieldCheck size={18} color="#e60012" />
                        <span>Consultor Oficial Shineray</span>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default SellerProfile;
