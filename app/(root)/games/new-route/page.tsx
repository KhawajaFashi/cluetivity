"use client";
import React from 'react';
import RouteTable from '@/app/(root)/games/new-route/components/RouteTable';
import BackButton from '@/app/(root)/games/new-route/components/BackButton';
import { useSearchParams } from 'next/navigation';

const NewRoutePage: React.FC = () => {
    const searchParams = useSearchParams();
    const gameID = searchParams?.get('gameID') || '';
    const routeID = searchParams?.get('routeID') || '';

    // Example: parse game name from gameID
    // You can map gameID to a display name if needed
    const gameName = gameID.replace(/_/g, ' ');

    return (
        <div className="p-8">
            <RouteTable gameID={gameID} routeID={routeID} />
        </div>
    );
};

export default NewRoutePage;
