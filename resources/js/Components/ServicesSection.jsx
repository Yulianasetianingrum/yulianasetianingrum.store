import React from 'react';
import { motion } from 'framer-motion';
import { Globe, LayoutDashboard, Database, Bot, MessageCircle, Cloud, MonitorSmartphone, Code2, Briefcase } from 'lucide-react';

export default function ServicesSection({ t }) {
    const icons = [Globe, Code2, LayoutDashboard, Database, Bot, MessageCircle, Cloud, MonitorSmartphone, Briefcase];

    return (
        <section id="services" className="py-24 relative z-10 bg-brand-gray-light border-y border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-brand-text mb-4">{t.services.title}<span className="text-gradient">{t.services.title_gradient}</span></h2>
                    <p className="text-brand-text-muted max-w-2xl mx-auto">{t.services.desc}</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {t.services.items.map((service, idx) => {
                        const Icon = icons[idx];
                        return (
                            <motion.div 
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                whileHover={{ y: -5 }}
                                className="glass-panel p-6 rounded-2xl hover:border-brand-green/30 transition-all group cursor-pointer bg-white"
                            >
                                <div className="w-12 h-12 rounded-xl bg-brand-green/10 flex items-center justify-center text-brand-green-dark mb-6 group-hover:bg-brand-green group-hover:text-white transition-colors">
                                    <Icon size={24} />
                                </div>
                                <h3 className="text-xl font-bold text-brand-text mb-3">{service.title}</h3>
                                <p className="text-brand-text-muted text-sm leading-relaxed">{service.desc}</p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
