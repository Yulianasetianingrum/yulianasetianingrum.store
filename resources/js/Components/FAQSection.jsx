import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function FAQSection({ t }) {
    const [openIndex, setOpenIndex] = useState(null);

    return (
        <section id="faq" className="py-24 relative z-10 bg-brand-gray-light border-y border-gray-200">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-brand-text mb-4">{t.faq.title}<span className="text-gradient">{t.faq.title_gradient}</span></h2>
                    <p className="text-brand-text-muted">{t.faq.desc}</p>
                </div>

                <div className="space-y-4">
                    {t.faq.questions.map((faq, idx) => (
                        <div key={idx} className="glass-panel rounded-2xl overflow-hidden bg-white">
                            <button
                                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                            >
                                <span className="font-semibold text-brand-text pr-4">{faq.q}</span>
                                <ChevronDown 
                                    size={20} 
                                    className={`text-brand-green transition-transform duration-300 shrink-0 ${openIndex === idx ? 'rotate-180' : ''}`} 
                                />
                            </button>
                            <AnimatePresence>
                                {openIndex === idx && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="px-6 pb-6 text-gray-600 leading-relaxed border-t border-gray-50 pt-4">
                                            {faq.a}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
