import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Code, Cpu } from 'lucide-react';

export default function HeroSection({ t }) {
    return (
        <section id="hero" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden py-20 bg-brand-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-center">
                
                {/* Floating Elements */}
                <motion.div 
                    animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-20 left-10 hidden lg:flex items-center gap-2 glass-panel px-4 py-2 rounded-lg text-brand-green text-sm font-mono shadow-sm border border-gray-100"
                >
                    <Terminal size={16} /> npm run build
                </motion.div>
                
                <motion.div 
                    animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
                    transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute bottom-32 right-10 hidden lg:flex items-center gap-2 glass-panel px-4 py-2 rounded-lg text-brand-green-dark text-sm font-mono shadow-sm border border-gray-100"
                >
                    <Code size={16} /> React & Laravel
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mx-auto"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-green/10 text-brand-green text-sm font-medium mb-6 border border-brand-green/20">
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-green opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-green"></span>
                        </span>
                        {t.hero.badge}
                    </div>
                    
                    <h1 className="text-5xl md:text-7xl font-extrabold text-brand-text tracking-tight mb-8">
                        {t.hero.title_start}<span className="text-gradient">{t.hero.title_gradient}</span>{t.hero.title_end}
                    </h1>
                    
                    <p className="text-lg md:text-xl text-brand-text-muted mb-10 max-w-2xl mx-auto leading-relaxed">
                        {t.hero.desc}
                    </p>
                    
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a 
                            href={`https://wa.me/6285175020319?text=${encodeURIComponent(t.hero.wa_text)}`}
                            target="_blank"
                            rel="noreferrer"
                            className="w-full sm:w-auto px-8 py-4 rounded-full bg-brand-green text-white font-bold text-lg hover:bg-brand-green-dark transition-all shadow-md hover:shadow-lg hover:-translate-y-1"
                        >
                            {t.hero.btn_hire}
                        </a>
                        <a 
                            href="#portfolio"
                            className="w-full sm:w-auto px-8 py-4 rounded-full glass-panel text-brand-text font-bold text-lg hover:bg-gray-50 transition-all border border-gray-200"
                        >
                            {t.hero.btn_portfolio}
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
