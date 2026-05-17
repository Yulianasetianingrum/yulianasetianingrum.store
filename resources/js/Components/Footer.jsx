import React from 'react';

export default function Footer({ t }) {
    return (
        <footer className="relative z-10 border-t border-gray-200 bg-brand-white py-8 text-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <p className="text-gray-500 text-sm">
                    &copy; {new Date().getFullYear()} Yuliana Setianingrum. {t.footer.rights}
                </p>
                <p className="text-gray-400 text-xs mt-2">
                    {t.footer.built}
                </p>
            </div>
        </footer>
    );
}
