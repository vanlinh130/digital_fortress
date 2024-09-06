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
        <div className="bg-[#0D0F10] rounded-lg p-4">
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
                                <span className="bg-green-500 text-xs px-2 py-1 rounded-full">{project.status}</span>{' '}
                                <span className="bg-yellow-500 text-xs px-2 py-1 rounded-full">{project.dataType}</span>{' '}
                                <span className="bg-red-500 text-xs px-2 py-1 rounded-full">{project.role}</span>
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
    );
}
