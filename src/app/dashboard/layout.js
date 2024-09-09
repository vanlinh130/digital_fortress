'use client';
import { useState } from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

export default function DashboardLayout({ children }) {
    const [isOpen, setIsOpen] = useState(true);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <section className="flex h-screen bg-[#131619]">
            <div className={`p-3 ${isOpen ? 'w-[20%]' : 'w-[8%]'}`}>
                <Sidebar toggleSidebar={toggleSidebar} isOpen={isOpen} />
            </div>
            <div className={`${isOpen ? 'w-[80%]' : 'w-[92%]'}`}>
                <Header />
                <div className="pt-3">{children}</div>
            </div>
        </section>
    );
}
