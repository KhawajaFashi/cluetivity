"use client";
import CollapsibleSidebar from '@/components/CollapsibleSidebar';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import SupportButton from '@/components/SupportButton';
import React, { useEffect, useRef, useState } from 'react';

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    // Sidebar open state is managed here so Header and Sidebar can share it
    const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
    const sidebarRef = useRef<HTMLElement | null>(null);

    useEffect(() => {
        const handleMouseDown = (e: MouseEvent) => {
            const target = e.target as Node;
            if (!sidebarRef.current) return;
            const clickedInside = sidebarRef.current.contains(target);
            // If the clicked element or any of its ancestors has the toggle attribute, don't close
            const clickedToggle = (e.target as HTMLElement)?.closest?.('[data-sidebar-toggle]');

            if (!clickedInside && !clickedToggle && isSidebarOpen) {
                // Only auto-close on smaller screens (mobile/tablet)
                if (window.innerWidth < 1280) {
                    setIsSidebarOpen(false);
                }
            }
        };

        document.addEventListener('mousedown', handleMouseDown);
        return () => document.removeEventListener('mousedown', handleMouseDown);
    }, [isSidebarOpen]);

    return (
        <html lang="en">
            <body>
                <main className="flex min-h-screen gap-0">

                    <aside ref={sidebarRef} className={`${!isSidebarOpen ? 'max-xl:hidden' : 'max-xl:fixed z-10'}`}>
                        <CollapsibleSidebar isSidebarOpen={isSidebarOpen} />
                    </aside>

                    <section className="flex flex-col justify-between w-full">
                        <div>
                            <Header isSidebarOpen={isSidebarOpen} onToggleSidebar={() => setIsSidebarOpen(v => !v)} />
                            <div className="">{children}</div>
                        </div>
                        <div>
                            <SupportButton />
                            <Footer />
                        </div>
                    </section>
                </main>
            </body>
        </html>
    );
};

export default Layout;