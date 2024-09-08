import Link from 'next/link';
import Image from 'next/image';
import logo from '../../public/logo.png';
import { MdKeyboardArrowLeft } from 'react-icons/md';
import { RxDashboard } from 'react-icons/rx';
import { HiOutlineClipboardList } from 'react-icons/hi';
import { IoWifiOutline } from 'react-icons/io5';
import { LuCalendarRange } from 'react-icons/lu';

export default function Sidebar() {
    return (
        <div className="bg-[#0D0F10] h-full flex flex-col gap-9 py-6 px-8 rounded-2xl">
            <div className="flex items-center justify-between">
                <Link href="/" className="text-2xl font-semibold text-white ">
                    <Image src={logo} width={120} height={32} alt="Picture of the author" />
                </Link>
                <div className="bg-[#131619] flex items-center justify-center w-8 h-8 rounded-2xl ">
                    <MdKeyboardArrowLeft className="text-[#fff] text-[20px]" />
                </div>
            </div>
            <div className="w-full h-[1px] bg-[#282828]"></div>
            <nav>
                <ul className="flex flex-col gap-2">
                    <li>
                        <Link
                            href="/dashboard"
                            className="flex items-center gap-3 text-[#6F767E] rounded-xl p-3 hover:bg-[#B6F09C] hover:text-[#1A1D1F]"
                        >
                            <RxDashboard />
                            <span className="text-[14px] font-medium ">Dashboard</span>
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/dashboard/task"
                            className="flex items-center gap-3 text-[#6F767E] rounded-xl p-3 hover:bg-[#B6F09C] hover:text-[#1A1D1F]"
                        >
                            <HiOutlineClipboardList />
                            <span className="text-[14px] font-medium ">Task</span>
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/dashboard/projects"
                            className="flex items-center gap-3 text-[#6F767E] rounded-xl p-3 hover:bg-[#B6F09C] hover:text-[#1A1D1F]"
                        >
                            <IoWifiOutline />
                            <span className="text-[14px] font-medium ">Projects</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/dashboard/schedule" className="">
                            <div className="flex items-center justify-between text-[#6F767E] rounded-xl p-3 hover:bg-[#B6F09C] hover:text-[#1A1D1F]">
                                <div className="flex items-center gap-3">
                                    <LuCalendarRange />
                                    <span className="text-[14px] font-medium ">Schedule</span>
                                </div>
                                <div className="flex justify-center  w-[32px] h-[32px] rounded-xl p-1 bg-[#B6F09C]">
                                    <span className="text-[#1A1D1F]">2</span>
                                </div>
                            </div>
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}
