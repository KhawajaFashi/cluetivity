import React from 'react';
import CollapsibleSidebar from '../../components/CollapsibleSidebar';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SupportButton from '../../components/SupportButton';
import LiveOperator from '../../components/LiveOperator';
import { getOperatorData } from '../../lib/LiveConfig';
import { redirect } from 'next/navigation';

interface OperatorPageProps {
    searchParams: {
        name?: string;
    };
}

export default async function OperatorPage({ searchParams }: OperatorPageProps) {
    const params = await searchParams;
    const operatorType = params?.name || 'magic-portal';
    const OperatorData = getOperatorData(operatorType);

    // If invalid game type, redirect to magic-portal
    if (!OperatorData) {
        redirect('/operator?name=magic-portal');
    }

    return (
        <div className="flex h-full bg-[#f2f3f8]">
            {/* Collapsible Sidebar */}
            <CollapsibleSidebar />

            {/* Main Content Area */}
            <div className="w-screen flex flex-col justify-between">
                {/* Header */}
                <Header />

                {/* Game Content */}
                <main className="bg-white m-5 shadow-lg overflow-y-auto">
                    <h1 className="text-3xl pl-6 pb-4 pt-3 font-bold text-gray-800 border-b border-gray-300 ">Live Operator</h1>
                    <div className='p-6'>
                        {/* <div className='bg-white rounded-lg shadow-sm mb-6 p-5'> */}
                        {/* </div> */}

                        {/* Game Table */}
                        <LiveOperator />
                    </div>

                </main>
                    {/* Footer */}
                    <Footer />
            </div>

            {/* Support Button */}
            <SupportButton />
        </div>
    );
}
