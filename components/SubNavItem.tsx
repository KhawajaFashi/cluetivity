import React from 'react';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';

export interface SubNavItemProps {
    label: string;
    href: string;
    isActive?: boolean;
}

const SubNavItem: React.FC<SubNavItemProps> = ({ label, href, isActive = false }) => {
    const pathname = usePathname();
    const searchParams = useSearchParams();

    // Check if this submenu item is active based on query parameter
    const gameName = searchParams?.get('name') || '';
    const isCurrentActive = isActive || (
        pathname === '/games' &&
        ((label === 'Magic Portal' && gameName === 'magic-portal') ||
            (label === 'Operation Mindfall' && gameName === 'operation-mindfall') ||
            (label === 'Blackout' && gameName === 'blackout'))
    );

    return (
        <Link href={href} legacyBehavior>
            <div className={`px-4 py-1 cursor-pointer transition-colors text-sm group ${isCurrentActive
                ? 'text-[#00adee]'
                : 'text-gray-300 hover:text-[rgb(128,128,128)]'
                }`}>
                <div className="flex items-center space-x-2">
                    <div
                        className={`w-1 h-1 rounded-full transition-all duration-500 ${isCurrentActive
                            ? 'bg-[#00adee]'
                            : 'bg-white group-hover:bg-[rgb(128,128,128)]'
                            }`}
                    ></div>
                    <span>{label}</span>
                </div>
            </div>
        </Link>
    );
};

export default SubNavItem;
