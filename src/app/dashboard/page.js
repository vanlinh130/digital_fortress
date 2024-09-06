'use client';
import { useState } from 'react';
import { FaBell, FaSearch, FaUserCircle } from 'react-icons/fa';
import { FiEdit2, FiTrash2 } from 'react-icons/fi';

export default function Dashboard() {
    const [projects, setProjects] = useState([
        {
            id: 1,
            name: 'Sisyphus',
            domain: 'sisyphus.com',
            lastAssessed: '22 Jan 2022',
            status: 'Active',
            dataType: 'Customer data',
            role: 'Admin',
        },
        {
            id: 2,
            name: 'Sisyphus',
            domain: 'sisyphus.com',
            lastAssessed: '20 Jan 2022',
            status: 'Active',
            dataType: 'Customer data',
            role: 'Admin',
        },
    ]);

    return (
        <div className="flex h-screen bg-[#0D0F10]">
            {/* Sidebar */}
            <div className="w-1/5 bg-[#0D0F10] p-4">
                <div className="text-2xl font-semibold text-white mb-8">
                    <span className="text-pink-500">Digital</span> Fortress
                </div>
                <nav>
                    <ul className="space-y-4">
                        <li>
                            <a
                                href="#"
                                className="flex items-center text-lg rounded-xl p-3 text-[#6F767E] hover:bg-[#b6f09c] hover:text-[#1A1D1F]"
                            >
                                <span className="mr-2">Dashboard</span>
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="flex items-center text-lg rounded-xl p-3 text-[#6F767E] hover:bg-[#b6f09c] hover:text-[#1A1D1F]"
                            >
                                <span className="mr-2">Task</span>
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="flex items-center text-lg rounded-xl p-3 text-[#6F767E] hover:bg-[#b6f09c] hover:text-[#1A1D1F]"
                            >
                                <span className="mr-2">Projects</span>
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="flex items-center text-lg rounded-xl p-3 text-[#6F767E] hover:bg-[#b6f09c] hover:text-[#1A1D1F]"
                            >
                                <span className="mr-2">Schedule</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>

            {/* Main Content */}
            <div className="w-4/5 p-6">
                <div className="flex justify-between items-center mb-6">
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

                {/* Project Table */}
                <div className="bg-gray-800 rounded-lg p-4">
                    <table className="min-w-full text-left text-white">
                        <thead>
                            <tr>
                                <th className="py-2">Project</th>
                                <th className="py-2">Last assessed</th>
                                <th className="py-2">License use</th>
                                <th className="py-2">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {projects.map((project) => (
                                <tr key={project.id} className="border-t border-gray-700">
                                    <td className="py-2">
                                        {project.name} <span className="text-gray-400">{project.domain}</span>
                                    </td>
                                    <td className="py-2">{project.lastAssessed}</td>
                                    <td className="py-2">
                                        <span className="bg-green-500 text-xs px-2 py-1 rounded-full">
                                            {project.status}
                                        </span>{' '}
                                        <span className="bg-yellow-500 text-xs px-2 py-1 rounded-full">
                                            {project.dataType}
                                        </span>{' '}
                                        <span className="bg-red-500 text-xs px-2 py-1 rounded-full">
                                            {project.role}
                                        </span>
                                    </td>
                                    <td className="py-2">
                                        <button className="mr-2 text-blue-400">
                                            <FiEdit2 />
                                        </button>
                                        <button className="text-red-400">
                                            <FiTrash2 />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
