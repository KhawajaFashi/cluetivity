"use client";
import React, { useState } from 'react';
import { IoIosPerson } from "react-icons/io";
import ProfilePopup from './ProfilePopup';
import Image from 'next/image';

interface HeaderProps {
    isSidebarOpen?: boolean;
    onToggleSidebar?: () => void;
}

const Header: React.FC<HeaderProps> = ({ isSidebarOpen, onToggleSidebar }) => {
    const [isProfileOpen, setIsProfileOpen] = useState(false);

    const toggleProfile = () => {
        setIsProfileOpen(!isProfileOpen);
    };

    return (
        <header className="xl:bg-white h-16 flex items-center w-full justify-between xl:justify-end bg-[#000f24] px-6 ">
            <div className="hidden items-center justify-end xl:flex space-x-4 cursor-pointer" onClick={toggleProfile}>
                <IoIosPerson color='#00adee' size='30px' />
            </div>
            <ProfilePopup isOpen={isProfileOpen} onClose={() => setIsProfileOpen(false)} />

            <Image
                src="/clutivity_logo.png"
                alt="Logo"
                width={2600}
                height={2600}
                className='w-32 h-10 mr-6 xl:hidden'
            />
            <div className='xl:hidden flex space-x-4'>
                <button
                    data-sidebar-toggle
                    aria-expanded={isSidebarOpen}
                    className={`text-white`}
                    onClick={() => onToggleSidebar && onToggleSidebar()}
                >
                    <span className="group flex flex-col justify-between w-5 h-[18px] cursor-pointer ">
                        <span className={`block h-[1px] bg-white rounded transition-all duration-500 group-hover:w-5 w-3`}></span>
                        <span className="block h-[1px] bg-white rounded transition-all duration-500 w-5"></span>
                        <span className={`block h-[1px] bg-white rounded transition-all duration-500 'group-hover:w-5 w-4`}></span>
                    </span>
                </button>
                <div className="xl:hidden items-center flex space-x-4 cursor-pointer" onClick={toggleProfile}>
                    <IoIosPerson color='white' size='30px' />
                </div>
            </div>
        </header>
    );
};

export default Header;
