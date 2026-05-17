import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Code2 } from 'lucide-react';

export default function CodingProfiles({ t }) {
    const profiles = [
        {
            platform: "LeetCode",
            logo: (
                <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor" className="text-[#ffa116]">
                    <path d="M13.483 0a1.374 1.374 0 0 0-.961.414l-7.377 7.39a1.37 1.37 0 0 0-.415.958 1.368 1.368 0 0 0 .415.96l7.377 7.39a1.37 1.37 0 0 0 .96.415 1.369 1.369 0 0 0 .962-.415l7.377-7.39a1.37 1.37 0 0 0 .415-.96 1.369 1.369 0 0 0-.415-.958L14.445.414A1.374 1.374 0 0 0 13.483 0zm.04 2.8a.72.72 0 0 1 .5.215l5.88 5.89a.72.72 0 0 1 0 1.016l-5.88 5.89a.72.72 0 0 1-1.017 0l-5.88-5.89a.72.72 0 0 1 0-1.016l5.88-5.89a.72.72 0 0 1 .517-.215zm-8.8 8.4c-.387 0-.7.313-.7.7v4.2c0 .387.313.7.7.7h4.2c.387 0 .7-.313.7-.7v-4.2c0-.387-.313-.7-.7-.7h-4.2zm.7 1.4h2.8v2.8H5.423v-2.8z"/>
                </svg>
            ),
            username: "Yulianasetianingrum",
            desc: "Active problem solver focusing on Data Structures, Algorithms, and SQL optimization. Consistently sharpening logical thinking and competitive programming skills.",
            link: "https://leetcode.com/u/Yulianasetianingrum/",
            badges: ["Algorithms", "Data Structures", "SQL"],
            color: "border-[#ffa116]/20 bg-[#ffa116]/5 hover:bg-[#ffa116]/10",
        },
        {
            platform: "HackerRank",
            logo: (
                <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor" className="text-[#2ec866]">
                    <path d="M12 0a12 12 0 0 0-12 12 12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.49 15.38h-2.15v2.15a.54.54 0 0 1-1.08 0v-2.15H12.1v2.15a.54.54 0 0 1-1.08 0v-2.15H8.86v2.15a.54.54 0 0 1-1.08 0v-2.15H6.51a.54.54 0 0 1 0-1.08h2.15V12.1H6.51a.54.54 0 0 1 0-1.08h2.15V8.86H6.51a.54.54 0 0 1 0-1.08h2.15V6.51a.54.54 0 0 1 1.08 0v-2.15h2.16V6.51a.54.54 0 0 1 1.08 0v-2.15h2.16V6.51a.54.54 0 0 1 1.08 0v-2.15h2.15a.54.54 0 0 1 0 1.08h-2.15v2.16h2.15a.54.54 0 0 1 0 1.08h-2.15v2.15h2.15a.54.54 0 0 1 0 1.08zm-5.38-5.38H9.95v2.16h2.16v-2.16zm3.23 0H13.2v2.16h2.16v-2.16z"/>
                </svg>
            ),
            username: "yulianasetianin1",
            desc: "Verified skills in core programming principles, databases, and problem solving. Successfully completed challenges evaluating database query optimization and logical thinking.",
            link: "https://www.hackerrank.com/profile/yulianasetianin1",
            badges: ["Problem Solving", "SQL", "Functional Programming"],
            color: "border-[#2ec866]/20 bg-[#2ec866]/5 hover:bg-[#2ec866]/10",
        }
    ];

    return (
        <section id="problem-solving" className="py-24 relative z-10 bg-brand-white border-t border-gray-100">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Section Title */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-brand-text mb-4 font-sans">
                        Problem <span className="text-gradient">Solving</span> & Logic
                    </h2>
                    <p className="text-brand-text-muted max-w-xl mx-auto leading-relaxed text-sm">
                        Demonstrating computational thinking, algorithm design, and database query optimization through active challenge participation.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {profiles.map((profile, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            whileHover={{ y: -5 }}
                            className={`rounded-2xl border ${profile.color} p-8 flex flex-col justify-between transition-all duration-300 shadow-sm`}
                        >
                            <div>
                                <div className="flex items-center justify-between mb-6">
                                    <div className="flex items-center gap-3">
                                        {profile.logo}
                                        <h3 className="text-2xl font-bold text-brand-text font-sans">{profile.platform}</h3>
                                    </div>
                                    <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-gray-100 text-gray-600 border border-gray-200">
                                        @{profile.username}
                                    </span>
                                </div>
                                <p className="text-brand-text-muted mb-6 leading-relaxed text-sm">
                                    {profile.desc}
                                </p>
                                <div className="flex flex-wrap gap-2 mb-8">
                                    {profile.badges.map(badge => (
                                        <span key={badge} className="px-2.5 py-0.5 rounded-full bg-white text-gray-700 text-xs font-medium border border-gray-200">
                                            {badge}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <a 
                                href={profile.link} 
                                target="_blank" 
                                rel="noreferrer" 
                                className="inline-flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl bg-white border border-gray-200 text-sm font-semibold text-brand-text hover:bg-gray-50 hover:border-gray-300 transition-all cursor-pointer"
                            >
                                <ExternalLink size={16} /> View Coding Profile
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
