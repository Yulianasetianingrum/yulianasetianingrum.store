import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

export default function PricingSection({ t }) {
    const plans = [
        {
            name: "Starter",
            desc: "Perfect for personal brands and small local businesses.",
            price: t.pricing.contact,
            features: ["Landing Page / Profile Web", "Responsive Design", "Basic SEO Optimization", "WhatsApp Button Integration", "1 Month Support"],
            highlighted: false
        },
        {
            name: "Professional",
            desc: "For growing businesses needing custom data management.",
            price: t.pricing.custom,
            features: ["Custom Web Application", "Admin Dashboard", "Database Setup", "API Integration", "Basic Analytics", "3 Months Support"],
            highlighted: true
        },
        {
            name: "Business",
            desc: "Full-scale enterprise solutions with AI and automation.",
            price: t.pricing.enterprise,
            features: ["Advanced Architecture", "AI / Automation Integration", "Cloud Deployment (AWS/Docker)", "Custom CRM/ERP", "24/7 Priority Support"],
            highlighted: false
        }
    ];

    return (
        <section id="pricing" className="py-24 relative z-10 bg-brand-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-brand-text mb-4">{t.pricing.title}<span className="text-gradient">{t.pricing.title_gradient}</span></h2>
                    <p className="text-brand-text-muted max-w-2xl mx-auto">{t.pricing.desc}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                    {plans.map((plan, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className={`relative rounded-3xl p-8 ${
                                plan.highlighted 
                                    ? 'bg-brand-gray-light border-2 border-brand-green transform md:-translate-y-4 shadow-xl' 
                                    : 'glass-panel'
                            }`}
                        >
                            {plan.highlighted && (
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-green text-white text-sm font-bold px-4 py-1 rounded-full shadow-md">
                                    {t.pricing.popular}
                                </div>
                            )}
                            
                            <h3 className="text-2xl font-bold text-brand-text mb-2">{plan.name}</h3>
                            <p className="text-brand-text-muted text-sm mb-6 h-10">{plan.desc}</p>
                            <div className="mb-8">
                                <span className="text-4xl font-extrabold text-brand-text">{plan.price}</span>
                            </div>
                            
                            <ul className="space-y-4 mb-8">
                                {plan.features.map((feature, fIdx) => (
                                    <li key={fIdx} className="flex items-start gap-3">
                                        <Check size={20} className="text-brand-green shrink-0" />
                                        <span className="text-gray-600 text-sm">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                            
                            <a 
                                href={`https://wa.me/6285175020319?text=${encodeURIComponent(t.hero.wa_text)}`}
                                target="_blank"
                                rel="noreferrer"
                                className={`block w-full text-center py-3 rounded-xl font-bold transition-all shadow-sm ${
                                    plan.highlighted 
                                        ? 'bg-brand-green text-white hover:bg-brand-green-dark' 
                                        : 'bg-white text-brand-text border border-gray-200 hover:bg-gray-50'
                                }`}
                            >
                                {t.pricing.btn}
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
