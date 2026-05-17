import React from 'react';
import { Head } from '@inertiajs/react';

export default function PortfolioLayout({ children, title, t }) {
    return (
        <div className="min-h-screen bg-brand-gray-light text-brand-text font-sans selection:bg-brand-green selection:text-white">
            <Head title={title} />
            
            {/* Animated Background Gradient (Subtle Light Theme) */}
            <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-[40%] -left-[20%] w-[70%] h-[70%] rounded-full bg-brand-green/5 blur-[120px] opacity-60"></div>
                <div className="absolute top-[20%] -right-[20%] w-[60%] h-[60%] rounded-full bg-brand-green-light/5 blur-[150px] opacity-40"></div>
            </div>

            {/* Navbar */}
            <nav className="fixed top-0 w-full z-50 glass-panel border-x-0 border-t-0 border-b-glass-border">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        <div className="flex items-center">
                            <span className="text-xl font-bold text-brand-text tracking-tight">Yuliana<span className="text-brand-green">.dev</span></span>
                        </div>
                        <div className="hidden md:flex items-center space-x-8">
                            <a href="#services" className="text-sm font-medium text-brand-text-muted hover:text-brand-green transition-colors">{t.nav.services}</a>
                            <a href="#portfolio" className="text-sm font-medium text-brand-text-muted hover:text-brand-green transition-colors">{t.nav.portfolio}</a>
                            <a href="#about" className="text-sm font-medium text-brand-text-muted hover:text-brand-green transition-colors">{t.nav.about}</a>
                            <a href="#pricing" className="text-sm font-medium text-brand-text-muted hover:text-brand-green transition-colors">{t.nav.pricing}</a>
                            <a href="#faq" className="text-sm font-medium text-brand-text-muted hover:text-brand-green transition-colors">{t.nav.faq}</a>
                            <a 
                                href={`https://wa.me/6285175020319?text=${encodeURIComponent(t.hero.wa_text)}`}
                                target="_blank"
                                rel="noreferrer"
                                className="px-4 py-2 rounded-full bg-brand-green hover:bg-brand-green-dark text-white text-sm font-medium transition-all shadow-sm"
                            >
                                {t.nav.hire_me}
                            </a>
                        </div>
                    </div>
                </div>
            </nav>

            <main className="relative z-10 pt-16">
                {children}
            </main>
        </div>
    );
}
