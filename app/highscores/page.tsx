import React from 'react';
import CollapsibleSidebar from '../../components/CollapsibleSidebar';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SupportButton from '../../components/SupportButton';
import HighScore from '../../components/HighScore';
import { getScoreData } from '../../lib/scoreConfig';
import { redirect } from 'next/navigation';

interface HighScorePageProps {
    searchParams: {
        name?: string;
    };
}

export default async function HighScorePage({ searchParams }: HighScorePageProps) {
    const params = await searchParams;
    const highScoreType = params?.name || 'magic-portal';
    const highScoreData = getScoreData(highScoreType);

    // If invalid game type, redirect to magic-portal
    if (!highScoreData) {
        redirect('/highscores?name=magic-portal');
    }

    return (
        <div className="flex h-full bg-[#f2f3f8]">
            {/* Collapsible Sidebar */}
            <CollapsibleSidebar />

            {/* Main Content Area */}
            <div className="w-screen flex flex-col">
                {/* Header */}
                <Header />

                {/* Game Content */}
                <main className="shadow-lg overflow-y-auto">
                    <div className='p-6'>
                        {/* Game Table */}
                        <HighScore highScoreData={highScoreData} />
                    </div>
                    {/* Footer */}
                    <Footer />
                </main>
            </div>

            {/* Support Button */}
            <SupportButton />
        </div>
    );
}
