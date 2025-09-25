"use client";
import React, { useState } from 'react';
import { IoIosPerson } from "react-icons/io";
import ProfilePopup from './ProfilePopup';

const Header: React.FC = () => {
    const [isProfileOpen, setIsProfileOpen] = useState(false);

    const toggleProfile = () => {
        setIsProfileOpen(!isProfileOpen);
    };

    return (
        <header className="bg-white h-16 flex items-center justify-end px-6 relative">
            <div className="flex items-center space-x-4 cursor-pointer" onClick={toggleProfile}>
                <IoIosPerson color='#00adee' size='30px' />
            </div>
            <ProfilePopup isOpen={isProfileOpen} onClose={() => setIsProfileOpen(false)} />
        </header>
    );
};

export default Header;
