'use client';
import { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

const Navigation = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleNav = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className="fixed left-6 top-40 z-50">
            {/* 菜单按钮 */}
            <button
                onClick={toggleNav}
                className="menu-trigger"
                aria-label={isExpanded ? "Close menu" : "Open menu"}
            >
                {isExpanded ? (
                    <XMarkIcon className="w-6 h-6 text-gray-600" />
                ) : (
                    <Bars3Icon className="w-6 h-6 text-gray-600" />
                )}
            </button>

            {/* 导航菜单 */}
            <div className={`menu-content ${isExpanded ? 'menu-open' : ''}`}>
                <div className="menu-links">
                    <Link href="/products" className="menu-link">
                        <span>Products</span>
                    </Link>
                    <a href="#about" className="menu-link">
                        <span>About Us</span>
                    </a>
                    <a href="#factory" className="menu-link">
                        <span>Factory Tour</span>
                    </a>
                    <a href="#quality" className="menu-link">
                        <span>Quality Control</span>
                    </a>
                    <a href="#rd" className="menu-link">
                        <span>R&D Capability</span>
                    </a>
                    <a href="#contact" className="menu-link">
                        <span>Contact Us</span>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Navigation; 