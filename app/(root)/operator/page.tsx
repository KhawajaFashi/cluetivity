import React from 'react';
import OperatorTable from '@/pages/LiveOperator';
import { getOperatorData } from '@/lib/LiveConfig';
import { redirect } from 'next/navigation';

interface GamesPageProps {
    searchParams: {
        name?: string;
    };
}

export default async function GamesPage({ searchParams }: GamesPageProps) {
    const params = await searchParams;
    const operatorType = params?.name || 'magic-portal';
    const OperatorData = getOperatorData(operatorType);

    // If invalid game type, redirect to magic-portal
    if (!OperatorData) {
        redirect('/operator?name=magic-portal');
    }

    return (
        <div className="h-full w-full bg-[#f2f3f8] p-6">
            <div className='bg-white rounded-lg shadow-sm mb-6 p-5'>
                <h1 className="text-3xl font-bold text-gray-800">{OperatorData.title}</h1>
            </div>

            {/* Game Table */}
            <OperatorTable OperatorData={OperatorData} />
        </div>
    );
}
