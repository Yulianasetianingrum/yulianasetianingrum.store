import React from 'react';
import { MessageCircle } from 'lucide-react';

export default function FloatingWhatsApp({ t }) {
    return (
        <a 
            href={`https://wa.me/6285175020319?text=${encodeURIComponent(t.hero.wa_text)}`}
            target="_blank"
            rel="noreferrer"
            className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-[0_4px_14px_rgba(37,211,102,0.4)] hover:scale-110 hover:shadow-[0_6px_20px_rgba(37,211,102,0.6)] transition-all animate-pulse-slow group"
            aria-label="Chat on WhatsApp"
        >
            <MessageCircle size={28} />
            <span className="absolute right-16 bg-white text-gray-800 border border-gray-100 text-sm font-semibold py-2 px-4 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                {t.contact.btn}
            </span>
        </a>
    );
}
