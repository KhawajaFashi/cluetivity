import React from 'react';
import CollapsibleSidebar from '../../components/CollapsibleSidebar';
import Header from '../../components/Header';
import BlackoutCard from '../../components/BlackoutCard';
import NewsFeedCard from '../../components/NewsFeedCard';
import SupportButton from '../../components/SupportButton';
import Footer from '../../components/Footer';

export default function Dashboard() {
    return (
        <div className="flex h-full bg-[#f2f3f8]">
            {/* Collapsible Sidebar */}
            <CollapsibleSidebar />

            {/* Main Content Area */}
            <div className="w-screen flex flex-col">
                {/* Header */}
                <Header />

                {/* Dashboard Content */}
                <main className="overflow-y-auto">
                    <div className='p-6'>
                        <div className='bg-white rounded-lg shadow-sm mb-6 p-5'>
                            <h1 className="text-3xl font-bold text-gray-800 ">Dashboard</h1>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            {/* Blackout Card */}
                            <BlackoutCard />

                            {/* News Feed Card */}
                            <NewsFeedCard />
                        </div>
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
