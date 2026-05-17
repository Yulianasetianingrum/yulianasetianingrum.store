import React from 'react';
import { Head } from '@inertiajs/react';
import PortfolioLayout from '@/Layouts/PortfolioLayout';
import HeroSection from '@/Components/HeroSection';
import ServicesSection from '@/Components/ServicesSection';
import PortfolioSection from '@/Components/PortfolioSection';
import LinkedInProfile from '@/Components/LinkedInProfile';
import PricingSection from '@/Components/PricingSection';
import ContactSection from '@/Components/ContactSection';
import FAQSection from '@/Components/FAQSection';
import FloatingWhatsApp from '@/Components/FloatingWhatsApp';
import Footer from '@/Components/Footer';

import en from '@/locales/en';

export default function Welcome() {
    const t = en;

    return (
        <PortfolioLayout title="Yuliana Setianingrum - IT & Software Developer" t={t}>
            <HeroSection t={t} />
            <ServicesSection t={t} />
            <PortfolioSection t={t} />
            <LinkedInProfile t={t} />
            <PricingSection t={t} />
            <FAQSection t={t} />
            <ContactSection t={t} />
            <Footer t={t} />
            <FloatingWhatsApp t={t} />
        </PortfolioLayout>
    );
}
