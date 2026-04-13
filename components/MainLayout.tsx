'use client';

import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import StickyCTA from './StickyCTA';
import RockstarParticles from './RockstarParticles';
import WhatsAppFloat from './WhatsAppFloat';

interface MainLayoutProps {
    children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
    return (
        <div className="min-h-screen flex flex-col font-sans bg-transparent text-slate-100 relative">
            {/* Persistent 3D Particle Field */}
            <RockstarParticles />

            <StickyCTA />

            {/* WhatsApp floating CTA — upgraded to component w/ pulse + pre-filled msg, CRO audit 2026-04-10 */}
            <WhatsAppFloat />

            <Navbar />

            <main id="main-content" className="flex-grow z-10 relative">{children}</main>

            <Footer />
        </div>
    );
};

export default MainLayout;
