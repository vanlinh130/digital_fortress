import Link from 'next/link';
import Image from 'next/image';
import logo from '../../public/logo.png';

export default function Sidebar() {
    return (
        <>
            <div className="text-2xl font-semibold text-white mb-8">
                <Link href="/"><Image src={logo} width={120} height={32} alt="Picture of the author" /></Link>
            </div>
            <nav>
                <ul className="space-y-4">
                    <li>
                        <Link
                            href="/dashboard"
                            className="flex items-center text-lg rounded-xl p-3 text-[#6F767E] hover:bg-[#b6f09c] hover:text-[#1A1D1F]"
                        >
                            <span className="mr-2">Dashboard</span>
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/dashboard/task"
                            className="flex items-center text-lg rounded-xl p-3 text-[#6F767E] hover:bg-[#b6f09c] hover:text-[#1A1D1F]"
                        >
                            <span className="mr-2">Task</span>
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/dashboard/projects"
                            className="flex items-center text-lg rounded-xl p-3 text-[#6F767E] hover:bg-[#b6f09c] hover:text-[#1A1D1F]"
                        >
                            <span className="mr-2">Projects</span>
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/dashboard/task"
                            className="flex items-center text-lg rounded-xl p-3 text-[#6F767E] hover:bg-[#b6f09c] hover:text-[#1A1D1F]"
                        >
                            <span className="mr-2">Schedule</span>
                        </Link>
                    </li>
                </ul>
            </nav>
        </>
    );
}
