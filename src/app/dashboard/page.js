'use client';
import React, { useState } from 'react';
import { RiDeleteBinLine } from 'react-icons/ri';
import { MdModeEdit } from 'react-icons/md';
import avatar from '../../public/Avatar.png';
import Image from 'next/image';

const data = [
    {
        id: 1,
        project: 'Sisyphus',
        url: 'sisyphus.com',
        date: '22 Jan 2022',
        status: 'Active',
        license: 'Customer data',
        role: 'Admin',
    },
    {
        id: 2,
        project: 'Sisyphus',
        url: 'sisyphus.com',
        date: '20 Jan 2022',
        status: 'Active',
        license: 'Customer data',
        role: 'Admin',
    },
    {
        id: 3,
        project: 'Sisyphus',
        url: 'sisyphus.com',
        date: '24 Jan 2022',
        status: 'Active',
        license: 'Customer data',
        role: 'Admin',
    },
    {
        id: 4,
        project: 'Sisyphus',
        url: 'sisyphus.com',
        date: '24 Jan 2022',
        status: 'Active',
        license: 'Customer data',
        role: 'Admin',
    },
    {
        id: 5,
        project: 'Sisyphus',
        url: 'sisyphus.com',
        date: '24 Jan 2022',
        status: 'Active',
        license: 'Customer data',
        role: 'Admin',
    },
    {
        id: 6,
        project: 'Sisyphus',
        url: 'sisyphus.com',
        date: '24 Jan 2022',
        status: 'Active',
        license: 'Customer data',
        role: 'Admin',
    },
];

export default function Dashboard() {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;

    const handlePageChange = (direction) => {
        if (direction === 'next' && currentPage < Math.ceil(data.length / itemsPerPage)) {
            setCurrentPage(currentPage + 1);
        } else if (direction === 'previous' && currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const displayedData = data.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    return (
        <div className="mt-3">
            <h1 className="text-[#fff] text-[32px] font-semibold leading-10 ">Dashboard</h1>
            <div className="bg-[#0D0F10] rounded-2xl mt-3 mr-3 text-white">
                <table className="min-w-full table-auto border-collapse border border-gray-700">
                    <thead>
                        <tr className="bg-gray-800">
                            <th className="p-3 text-left">Project</th>
                            <th className="p-3 text-left">Last assessed</th>
                            <th className="p-3 text-left">License use</th>
                            <th className="p-3 text-left"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {displayedData.map((item) => (
                            <tr key={item.id} className="border-b border-gray-700">
                                <td className="p-3 flex items-center gap-3">
                                    <input type="checkbox" className="mr-2" />
                                    <div className="w-[40px] h-[40px] rounded-full overflow-hidden">
                                        <Image src={avatar} width={40} height={40} alt="Picture of the author" />
                                    </div>
                                    <div>
                                        <p>{item.project}</p>
                                        <p className="text-gray-500 text-sm">{item.url}</p>
                                    </div>
                                </td>
                                <td className="p-3">{item.date}</td>
                                <td className="p-3">
                                    <span className="bg-[#0E5A3A] text-[#46E8A5] text-sm px-2 py-1 rounded">
                                        {item.status}
                                    </span>
                                    <span className="bg-[#FFD666] text-[#FFD666] text-sm px-2 py-1 rounded ml-2">
                                        {item.license}
                                    </span>
                                    <span className="bg-[#422721] text-[#FFAC82] text-sm px-2 py-1 rounded ml-2">
                                        {item.role}
                                    </span>
                                </td>
                                <td className="p-3 flex justify-end space-x-2">
                                    <button className=" hover:bg-gray-500 p-1 rounded">
                                        <RiDeleteBinLine />
                                    </button>
                                    <button className=" hover:bg-gray-500 p-1 rounded">
                                        <MdModeEdit />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                <div className="flex justify-between items-center mt-4">
                    <button
                        className={`bg-gray-700 text-white px-4 py-2 rounded ${
                            currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''
                        }`}
                        onClick={() => handlePageChange('previous')}
                        disabled={currentPage === 1}
                    >
                        Previous
                    </button>
                    <p className="text-sm">
                        Page {currentPage} of {Math.ceil(data.length / itemsPerPage)}
                    </p>
                    <button
                        className={`bg-gray-700 text-white px-4 py-2 rounded ${
                            currentPage === Math.ceil(data.length / itemsPerPage) ? 'opacity-50 cursor-not-allowed' : ''
                        }`}
                        onClick={() => handlePageChange('next')}
                        disabled={currentPage === Math.ceil(data.length / itemsPerPage)}
                    >
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
}
