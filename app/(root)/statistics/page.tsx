"use client";
import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip, BarChart, Bar, XAxis, YAxis } from 'recharts';

interface PieData {
    name: string;
    value: number;
    status: 'Won' | 'Left';
}

interface BarData {
    name: string;
    value: number;
    game: string;
}

// Sample data for pie chart
const pieData: PieData[] = [
    { name: 'Games', value: 80, status: 'Left' },
    { name: 'Games', value: 20, status: 'Won' },
];

// Sample data for bar chart
const barData: BarData[] = [
    { name: 'May 2023', value: 5, game: 'Operation Mindfall' }
];

// Custom colors
const COLORS = ['#5B8FF9', '#00C49F'];
const BAR_COLOR = '#69b7eb';

export default function StatisticsPage() {
    const currentMonth = new Date().toLocaleString('default', { month: 'long', year: 'numeric' });

    // Custom formatter for tooltip
    const CustomTooltip = ({ active, payload }: any) => {
        if (active && payload && payload.length) {
            return (
                <div className="bg-white p-3 shadow-lg rounded-lg border border-gray-100">
                    <p className="text-sm">{`${payload[0].name}`}</p>
                    <p className="text-sm font-semibold">{`${payload[0].value}%`}</p>
                </div>
            );
        }
        return null;
    };

    return (
        <div className="h-full w-full bg-[var(--color-background-alt)] p-6">
            {/* Header */}

            {/* Stats Content */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
                <div className="bg-white rounded-sm shadow-sm">
                    <div className="flex justify-between items-center p-5 pb-3 mb-6 border-b border-gray-200 w-full">
                        <h1 className="text-2xl font-bold text-gray-800">Statistics</h1>
                        <button className="px-3 py-1 bg-[var(--color-accent)] text-white rounded-md">
                            Filter
                        </button>
                    </div>
                    {/* Bar Chart Section */}
                    <div className="h-[250px] w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={barData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                                <XAxis dataKey="name" />
                                <Tooltip cursor={false} />
                                <Bar dataKey="value">
                                    {barData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={BAR_COLOR} />
                                    ))}
                                </Bar>
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                    {/* Game Legend */}
                    <div className="mt-4 flex items-center justify-center gap-2">
                        <div className="w-4 h-4" style={{ backgroundColor: BAR_COLOR }} />
                        <span>Operation Mindfall</span>
                    </div>
                </div>

                {/* Pie Chart Section */}
                <div className="bg-white rounded-lg shadow-sm p-6">
                    <div className="mb-6 flex flex-col items-center justify-center">
                        <h2 className="text-6xl font-bold text-[#0D1B2A]">5</h2>
                        <p className="text-gray-600">Games</p>
                    </div>

                    <div className="h-[300px] w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie
                                    data={pieData as any}
                                    cx="50%"
                                    cy="50%"
                                    labelLine={false}
                                    label={({ percent }: any) => `${(percent * 100).toFixed(1)}%`}
                                    outerRadius={100}
                                    fill="#8884d8"
                                    dataKey="value"
                                >
                                    {pieData.map((entry, index) => (
                                        <Cell
                                            key={`cell-${index}`}
                                            fill={COLORS[index % COLORS.length]}
                                        />
                                    ))}
                                </Pie>
                                <Tooltip content={<CustomTooltip />} />
                                <Legend
                                    layout="horizontal"
                                    verticalAlign="bottom"
                                    align="center"
                                    formatter={(value, entry: any) => (
                                        <span className="text-gray-700">
                                            {entry.payload.status}: {entry.payload.value}%
                                        </span>
                                    )}
                                />
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>
        </div>
    );
}