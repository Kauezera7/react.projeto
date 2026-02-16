import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
    ArrowLeft, 
    MessageCircle, 
    Instagram, 
    MapPin, 
    Bike, 
    ChevronRight, 
    CheckCircle2,
    ShieldCheck
} from 'lucide-react';
import { sellersData } from '../data/sellers';
import './SellerProfile.css';

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
                <img src="/img/Shineray-logo.png" alt="Shineray" style={{ height: '40px', marginBottom: '20px' }} />
                <h2>Consultor não encontrado</h2>
                <Link to="/vendedores" style={{ color: '#e60012', fontWeight: '600' }}>Voltar para a equipe</Link>
            </div>
        );
    }

    // Variantes para animação de entrada em cascata
    const listVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1, delayChildren: 0.3 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 15 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } }
    };

    return (
        <div className="seller-profile-page">
            <Link to="/vendedores" className="btn-back-minimal">
                <ArrowLeft size={22} />
            </Link>

            <header className="profile-header-premium">
                <motion.img 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    src="/img/Shineray-logo-branco.png" 
                    alt="Shineray Logo" 
                    className="profile-brand-logo" 
                />
            </header>

            <div className="container">
                <motion.div 
                    className="profile-card-container"
                    initial={{ opacity: 0, y: 60 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >
                    <div className="profile-avatar-wrapper">
                        <img 
                            src={seller.avatar} 
                            alt={seller.name} 
                            className="profile-avatar-large" 
                        />
                        <div className="verified-badge">
                            <CheckCircle2 size={20} fill="white" color="#007bff" />
                        </div>
                    </div>
                    
                    <h1 className="profile-name">{seller.name}</h1>
                    <div className="profile-role-badge">{seller.role}</div>

                    <p className="profile-bio">
                        {seller.bio}
                    </p>

                    <motion.div 
                        className="profile-links"
                        variants={listVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        {/* WhatsApp */}
                        <motion.a 
                            variants={itemVariants}
                            href={`https://wa.me/${seller.whatsapp}`} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="profile-link-card"
                        >
                            <div className="link-left">
                                <div className="link-icon-circle whatsapp-icon">
                                    <MessageCircle size={24} />
                                </div>
                                <div className="link-text-info">
                                    <h3>Atendimento Digital</h3>
                                    <p>Consultoria imediata via WhatsApp</p>
                                </div>
                            </div>
                            <ChevronRight size={18} className="link-arrow-right" />
                        </motion.a>

                        {/* Instagram */}
                        {seller.instagram && (
                            <motion.a 
                                variants={itemVariants}
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
                                        <h3>Instagram Profissional</h3>
                                        <p>Entregas e novidades diárias</p>
                                    </div>
                                </div>
                                <ChevronRight size={18} className="link-arrow-right" />
                            </motion.a>
                        )}

                        {/* Catálogo */}
                        <motion.div variants={itemVariants}>
                            <Link to="/catalogo" className="profile-link-card">
                                <div className="link-left">
                                    <div className="link-icon-circle catalog-icon">
                                        <Bike size={24} />
                                    </div>
                                    <div className="link-text-info">
                                        <h3>Catálogo Shineray</h3>
                                        <p>Conheça nossa linha completa</p>
                                    </div>
                                </div>
                                <ChevronRight size={18} className="link-arrow-right" />
                            </Link>
                        </motion.div>

                        {/* Localização */}
                        {seller.locationLink && (
                            <motion.a 
                                variants={itemVariants}
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
                                        <h3>Visite nossa Loja</h3>
                                        <p>{seller.location}</p>
                                    </div>
                                </div>
                                <ChevronRight size={18} className="link-arrow-right" />
                            </motion.a>
                        )}
                    </motion.div>

                    <div className="profile-card-footer">
                        <div className="shineray-certified">
                            <ShieldCheck size={16} color="#e60012" />
                            <span>Consultor Certificado Shineray</span>
                        </div>
                        <span className="brand-motto">Shineray Colombo: Sua jornada começa aqui.</span>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default SellerProfile;
