import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export interface NavItemProps {
    icon: React.ReactNode;
    label: string;
    isActive?: boolean;
    hasChevron?: boolean;
    isCollapsed?: boolean;
    href?: string;
    children?: React.ReactNode;
    pathname?: string;
}

const NavItem: React.FC<NavItemProps> = ({ icon, label, isActive = false, hasChevron = false, isCollapsed = false, href, children, pathname }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [userManuallyClosed, setUserManuallyClosed] = useState(false);
    const [maxHeight, setMaxHeight] = useState('0px');
    const childrenRef = React.useRef<HTMLDivElement>(null);

    // Check if we're on any games page to keep Games menu open
    const isOnGamesPage = pathname === '/games';
    const shouldKeepGamesOpen = label === 'Games' && isOnGamesPage;

    // Auto-expand Games menu when on games pages (unless user manually closed it)
    useEffect(() => {
        if (shouldKeepGamesOpen && !userManuallyClosed) {
            setIsExpanded(true);
        }
    }, [shouldKeepGamesOpen, userManuallyClosed]);

    // Reset manual close state when navigating away from games
    useEffect(() => {
        if (!isOnGamesPage && label === 'Games') {
            setUserManuallyClosed(false);
        }
    }, [isOnGamesPage, label]);

    // Animate maxHeight for children expansion/collapse
    useEffect(() => {
        if (childrenRef.current) {
            if (isExpanded && !isCollapsed) {
                setMaxHeight(childrenRef.current.scrollHeight + 'px');
            } else {
                setMaxHeight('0px');
            }
        }
    }, [isExpanded, isCollapsed, children]);

    const handleClick = () => {
        if (hasChevron && !isCollapsed) {
            const newExpandedState = !isExpanded;
            setIsExpanded(newExpandedState);

            // Track if user manually closed the Games menu
            if (label === 'Games' && !newExpandedState) {
                setUserManuallyClosed(true);
            } else if (label === 'Games' && newExpandedState) {
                setUserManuallyClosed(false);
            }
        }
    };

    const content = (
        <div
            className={`flex items-center justify-between px-6 py-2 rounded-lg cursor-pointer transition-colors ${isActive
                ? 'text-[#00adee]'
                : 'text-white hover:text-[#716aca]'
                } ${!isCollapsed ? 'hover:bg-[rgba(128,128,128,0.3)]' : ''}`}
            onClick={handleClick}
        >
            <div className="flex items-center space-x-3">
                <span className="text-md">{icon}</span>
                {!isCollapsed && <span style={{ fontSize: '12px' }}>{label}</span>}
            </div>
            {hasChevron && !isCollapsed && (
                <svg className={`w-3 h-3 transition-transform ${isExpanded ? 'rotate-90' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
            )}
        </div>
    );

    return (
        <div>
            {href ? (
                <Link href={href} legacyBehavior>
                    {content}
                </Link>
            ) : (
                content
            )}
            {/* Animated children expansion */}
            <div
                ref={childrenRef}
                style={{
                    maxHeight: children && isExpanded && !isCollapsed ? maxHeight : '0px',
                    overflow: 'hidden',
                    transition: 'max-height 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                }}
                className={`ml-6 ${children && isExpanded && !isCollapsed ? 'mt-2' : ''} space-y-1`}
            >
                {children}
            </div>
        </div>
    );
};

export default NavItem;
