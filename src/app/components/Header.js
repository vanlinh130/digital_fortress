import { FaBell, FaSearch, FaUserCircle } from 'react-icons/fa';

export default function Header() {
    return (
        <div className="flex justify-between items-center mb-6 p-4 bg-[#0D0F10]">
            <div className="text-3xl text-white font-semibold">Dashboard</div>
            <div className="flex items-center space-x-4">
                <div className="relative">
                    <input
                        type="text"
                        placeholder="Search anything"
                        className="p-2 rounded-lg bg-gray-800 text-white focus:ring-2 focus:ring-green-400"
                    />
                    <FaSearch className="absolute top-3 right-3 text-gray-500" />
                </div>
                <FaBell className="text-white text-xl" />
                <FaUserCircle className="text-white text-2xl" />
            </div>
        </div>
    );
}
