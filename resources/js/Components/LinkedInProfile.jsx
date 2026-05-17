import React from 'react';
import { Send, UserPlus, MoreHorizontal } from 'lucide-react';

export default function LinkedInProfile({ t }) {
    return (
        <section id="about" className="py-24 relative z-10 bg-[#f3f2ef]">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Section Title */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-brand-text mb-4">
                        {t.about.title}<span className="text-gradient">{t.about.title_gradient}</span>
                    </h2>
                    <p className="text-brand-text-muted">{t.about.desc}</p>
                </div>

                {/* EXACT LINKEDIN PROFILE HEADER REPLICA */}
                <div className="bg-white rounded-xl overflow-hidden shadow-[0_0_0_1px_rgba(0,0,0,0.08)] mb-8 font-sans">
                    
                    {/* Background Banner (Sky Blue Gradient) */}
                    <div className="h-[200px] w-full bg-gradient-to-b from-[#87CEEB] to-[#E0F6FF] relative">
                    </div>

                    <div className="px-6 pb-6 relative">
                        <div className="flex flex-col md:flex-row justify-between">
                            
                            {/* Left Side: Avatar & Info */}
                            <div className="flex-1">
                                {/* Avatar */}
                                <a href="https://www.linkedin.com/in/yuliana-setianingrum/" target="_blank" rel="noreferrer" className="block w-[152px] h-[152px] rounded-full border-4 border-white mt-[-112px] relative z-10 bg-white overflow-hidden shadow-sm hover:opacity-90 transition-opacity cursor-pointer">
                                    <img 
                                        src="/profile.jpg" 
                                        alt="Yuliana Setianingrum"
                                        className="w-full h-full object-cover"
                                        onError={(e) => {
                                            e.target.onerror = null; 
                                            e.target.src = "https://ui-avatars.com/api/?name=Yuliana+Setianingrum&background=0a66c2&color=fff&size=200";
                                        }}
                                    />
                                </a>

                                {/* Name & Pronouns */}
                                <div className="mt-4 flex items-end gap-2">
                                    <a href="https://www.linkedin.com/in/yuliana-setianingrum/" target="_blank" rel="noreferrer" className="text-[24px] font-semibold text-gray-900 leading-none hover:text-[#0a66c2] hover:underline cursor-pointer">Yuliana Setianingrum</a>
                                    <span className="text-[14px] text-gray-500 mb-[2px]">She/Her</span>
                                </div>

                                {/* Tagline */}
                                <p className="text-[16px] text-gray-900 mt-2 max-w-[600px] leading-snug">
                                    currently pursuing a degree in Informatics Engineering | Software Development | business Data Intelligence | Problem Solver | Technology Advocate
                                </p>

                                {/* Location */}
                                <p className="text-[14px] text-gray-500 mt-2">
                                    Demak, Central Java, Indonesia · <span className="font-semibold text-[#0a66c2] hover:underline cursor-pointer">Contact info</span>
                                </p>

                                {/* Action Buttons */}
                                <div className="mt-4 flex flex-wrap items-center gap-2">
                                    <a href="https://www.linkedin.com/in/yuliana-setianingrum/" target="_blank" rel="noreferrer" className="flex items-center gap-1.5 bg-[#0a66c2] text-white px-4 py-1.5 rounded-full font-semibold text-[15px] hover:bg-[#004182] transition-colors cursor-pointer">
                                        <UserPlus size={18} /> Connect
                                    </a>
                                    <a href="https://www.linkedin.com/in/yuliana-setianingrum/" target="_blank" rel="noreferrer" className="flex items-center gap-1.5 bg-white text-[#0a66c2] border border-[#0a66c2] px-4 py-1.5 rounded-full font-semibold text-[15px] hover:bg-[#f4faff] hover:border-2 hover:px-[15px] hover:py-[5px] transition-all cursor-pointer">
                                        <Send size={18} className="rotate-[-45deg] mb-1" /> Message
                                    </a>
                                    <a href="https://www.linkedin.com/in/yuliana-setianingrum/" target="_blank" rel="noreferrer" className="flex items-center justify-center w-8 h-8 rounded-full border border-gray-500 text-gray-600 hover:bg-gray-100 hover:border-2 transition-all cursor-pointer">
                                        <MoreHorizontal size={20} />
                                    </a>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="mt-8 text-center text-sm font-medium text-brand-green flex items-center justify-center gap-2">
                    <span className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-green opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-brand-green"></span>
                    </span>
                    {t.about.status}
                </div>
            </div>
        </section>
    );
}
