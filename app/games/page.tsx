import React from 'react';
import CollapsibleSidebar from '../../components/CollapsibleSidebar';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SupportButton from '../../components/SupportButton';
import GameTable from '../../components/GameTable';
import { getGameData } from '../../lib/gameConfig';
import { redirect } from 'next/navigation';

interface GamesPageProps {
    searchParams: {
        name?: string;
    };
}

export default async function GamesPage({ searchParams }: GamesPageProps) {
    const params = await searchParams;
    const gameType = params?.name || 'magic-portal';
    const gameData = getGameData(gameType);

    // If invalid game type, redirect to magic-portal
    if (!gameData) {
        redirect('/games?name=magic-portal');
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
                <main className="overflow-y-auto">
                    <div className='p-6'>
                        <div className='bg-white rounded-lg shadow-sm mb-6 p-5'>
                            <h1 className="text-3xl font-bold text-gray-800">{gameData.title}</h1>
                        </div>

                        {/* Game Table */}
                        <GameTable gameData={gameData} />
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
