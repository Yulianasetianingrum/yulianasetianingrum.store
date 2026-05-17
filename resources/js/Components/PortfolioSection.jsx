import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const GithubIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
        <path d="M9 18c-4.51 2-5-2-7-2"></path>
    </svg>
);

const projects = [
    {
        title: "Apix Interior E-Commerce",
        desc: "A complete custom e-commerce and furniture platform for Apix Interior, featuring product catalogs and seamless purchasing flow.",
        tags: ["E-Commerce", "Furniture", "Web App"],
        color: "bg-blue-50 border-blue-200",
        link: "https://apixinterior.co.id/",
        github: ""
    },
    {
        title: "Dynamic CV Generator",
        desc: "An interactive web application to easily generate, preview, and download professional CVs directly from the browser.",
        tags: ["React", "HTML/CSS", "GitHub Pages"],
        color: "bg-emerald-50 border-emerald-200",
        link: "https://yulianasetianingrum.github.io/cv-preview/",
        github: "https://github.com/Yulianasetianingrum/cv-preview"
    },
    {
        title: "SimpleOrder API",
        desc: "Production-ready Go RESTful API utilizing Clean Architecture, GORM transactions for atomic stock management, JWT authentication, and automated PDF invoice generation.",
        tags: ["Golang", "Fiber", "PostgreSQL", "Clean Architecture"],
        color: "bg-purple-50 border-purple-200",
        link: "https://yulianasetianingrum.store/simpleorder/api/swagger/index.html",
        github: "https://github.com/Yulianasetianingrum/simpleorder-api"
    },
    {
        title: "Inventory OS - Apix Interior",
        desc: "A Multi-portal inventory tracking system with worker mobile portal, admin dashboard, FIFO stock reduction, double-stock tracking (new vs used), and photo upload validation.",
        tags: ["Next.js", "Prisma", "MySQL", "Tailwind CSS"],
        color: "bg-brand-green/10 border-brand-green/30",
        link: "https://yulianasetianingrum.store/inventorymanagement",
        github: "https://github.com/Yulianasetianingrum/inventorymanagement"
    }
];

export default function PortfolioSection({ t }) {
    return (
        <section id="portfolio" className="py-24 relative z-10 bg-brand-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-end mb-16">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-brand-text mb-4">{t.portfolio.title}<span className="text-gradient">{t.portfolio.title_gradient}</span></h2>
                        <p className="text-brand-text-muted max-w-xl">{t.portfolio.desc}</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            whileHover={{ y: -10 }}
                            className={`rounded-2xl border ${project.color} p-1 overflow-hidden group shadow-sm hover:shadow-md`}
                        >
                            <div className="bg-white rounded-xl h-full p-8 flex flex-col justify-between">
                                <div>
                                    <h3 className="text-2xl font-bold text-brand-text mb-4 group-hover:text-brand-green transition-colors">{project.title}</h3>
                                    <p className="text-brand-text-muted mb-6 leading-relaxed">{project.desc}</p>
                                    <div className="flex flex-wrap gap-2 mb-8">
                                        {project.tags.map(tag => (
                                            <span key={tag} className="px-3 py-1 rounded-full bg-gray-100 text-gray-700 text-xs font-medium border border-gray-200">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    {project.link ? (
                                        <a href={project.link} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm font-medium text-brand-text hover:text-brand-green transition-colors">
                                            <ExternalLink size={16} /> {t.portfolio.btn_demo}
                                        </a>
                                    ) : (
                                        <button className="flex items-center gap-2 text-sm font-medium text-brand-text hover:text-brand-green transition-colors">
                                            <ExternalLink size={16} /> {t.portfolio.btn_demo}
                                        </button>
                                    )}
                                    {project.github ? (
                                        <a href={project.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm font-medium text-brand-text-muted hover:text-brand-text transition-colors">
                                            <GithubIcon /> {t.portfolio.btn_code}
                                        </a>
                                    ) : (
                                        <button className="flex items-center gap-2 text-sm font-medium text-brand-text-muted hover:text-brand-text transition-colors">
                                            <GithubIcon /> {t.portfolio.btn_code}
                                        </button>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
