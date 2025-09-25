import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const BlackoutCard: React.FC = () => {
    return (
        <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-4">New Blackout Remastered Version</h2>

            {/* Blackout Image */}
            <Image src="/BO.jpg" alt='blackout' width={900} height={900} className='w-86 h-50' />

            <Link
                href="#"
                className="text-[#00adee] underline text-sm mb-4 mt-3 block"
            >
                Quick Start Guide for using Blackout
            </Link>

            <h3 className="text-lg font-bold text-gray-800 mb-3">Cluetivity User Guidelines</h3>

            <ul className="space-y-2">
                <li>
                    <Link href="#" className="text-[#00adee] underline text-sm block">
                        Quick Start Guide
                    </Link>
                </li>
                <li>
                    <Link href="#" className="text-[#00adee] underline text-sm block">
                        Supported Image and Video Formats
                    </Link>
                </li>
                <li>
                    <Link href="#" className="text-[#00adee] underline text-sm block">
                        User Account Limits
                    </Link>
                </li>
                <li>
                    <Link href="#" className="text-[#00adee] underline text-sm block">
                        Contact Support
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default BlackoutCard;
