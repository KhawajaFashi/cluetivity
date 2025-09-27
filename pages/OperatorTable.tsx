"use client";
import React, { useState } from "react";
import Map from "../components/Google_map";
import { OperatorData } from "@/lib/LiveConfig";

interface TeamData {
    no: number;
    teamName: string;
    score: string;
    status: "WON" | "LEFT";
    timeLeft: string;
    battery: string;
    startedOn: string;
    lat: number;
    lng: number;
}

interface OperatorTableProps {
    OperatorData: OperatorData;
}

const OperatorTable: React.FC<OperatorTableProps> = ({ OperatorData }) => {
    const [mapView, setMapView] = useState<"map" | "satellite">("map");
    const [selectedTeam, setSelectedTeam] = useState<number | null>(null);

    const { teams } = OperatorData;

    return (
        <div className="flex flex-col">
            {/* Header Section */}
            <div className="flex max-lg:flex-col max-lg:gap-4 justify-between items-center mb-6 font-semibold">
                {/* Filter Dropdown */}
                <button className="px-3 py-1 bg-[var(--color-accent)] text-[var(--color-text-light)] rounded-[var(--border-radius-sm)] flex items-center gap-2">
                    Filter
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                </button>
                {/* Search Bar */}
                <div className="relative">
                    <svg
                        className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                    </svg>
                    <input
                        type="text"
                        placeholder={OperatorData.searchPlaceholder}
                        className="pl-10 pr-4 py-1 border border-gray-300 rounded-lg w-64 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                </div>
                {/* Animate Showdown Button */}
                <button className="px-3 py-1 bg-[#00A3FF] text-white rounded-sm">
                    Animate Showdown
                </button>
            </div>
            {/* Main Content */}
            <div className="flex max-lg:flex-col gap-6">
                {/* Map Section */}
                <div className="w-[40%] max-lg:w-full bg-white rounded-lg shadow-sm overflow-hidden flex flex-col">
                    <div className="p-2 border-b border-gray-200">
                        <div className="flex gap-2">
                            <button
                                className={`px-4 py-1 rounded ${mapView === 'map' ? 'bg-gray-100' : ''}`}
                                onClick={() => setMapView('map')}
                            >
                                Map
                            </button>
                            <button
                                className={`px-4 py-1 rounded ${mapView === 'satellite' ? 'bg-gray-100' : ''}`}
                                onClick={() => setMapView('satellite')}
                            >
                                Satellite
                            </button>
                        </div>
                    </div>
                    <div className="flex-1">
                        <Map teams={teams} selectedTeamNo={selectedTeam} />
                    </div>
                </div>
                {/* Table Section */}
                <div className="w-[60%] max-lg:w-full bg-white rounded-lg shadow-sm overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full text-[12px]">
                            <thead className="bg-[var(--color-table-header)] text-[var(--color-text-light)]">
                                <tr>
                                    <th className="px-2 py-2 text-center text-sm font-medium">No</th>
                                    <th className="px-2 py-2 text-center text-sm font-medium">Team name</th>
                                    <th className="px-2 flex items-center justify-center py-2 text-center text-sm font-medium flex cursor-pointer">
                                        Score
                                        <svg className="inline-block w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </th>
                                    <th className="px-2 py-2 text-center text-sm font-medium">Status</th>
                                    <th className="px-2 py-2 text-center text-sm font-medium">Time left</th>
                                    <th className="px-2 py-2 text-center text-sm font-medium">Battery</th>
                                    <th className="px-2 py-2 text-center text-sm font-medium">Started on</th>
                                    <th className="px-2 py-2 text-center text-sm font-medium">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                {teams.map((team: TeamData, index: number) => (
                                    <tr
                                        key={index}
                                        className={`hover:bg-gray-50 cursor-pointer ${selectedTeam === team.no ? 'bg-blue-100' : ''}`}
                                        onClick={() => setSelectedTeam(team.no)}
                                    >
                                        <td className="px-2 py-1 text-center">{team.no}</td>
                                        <td className="px-2 py-1 text-center">{team.teamName}</td>
                                        <td className="px-2 py-1 text-center">{team.score}</td>
                                        <td className="px-2 py-1 text-center">
                                            <span className={`px-2 py-1 rounded`}>
                                                {team.status}
                                            </span>
                                        </td>
                                        <td className="px-2 py-1 text-center">{team.timeLeft}</td>
                                        <td className="px-2 py-1 text-center">
                                            <div className="flex items-center">
                                                {team.battery}
                                            </div>
                                        </td>
                                        <td className="px-2 py-1 text-center">{team.startedOn}</td>
                                        <td className="px-2 py-1 text-center">
                                            <button className="text-gray-400 hover:text-gray-600">
                                                <span className="font-bold text-xl">...</span>
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OperatorTable;