import { BiMessageDetail } from 'react-icons/bi';
import { IoIosNotificationsOutline } from 'react-icons/io';
import { CiSearch } from 'react-icons/ci';
import Image from 'next/image';
import cart from '../../public/cat_1.png';

export default function Header() {
    return (
        <div className="bg-[#0D0F10] flex justify-between items-center p-6 mt-3 mr-3 rounded-2xl border-[1px] border-[#131619]">
            <div className="bg-[#1A1D21] flex items-center gap-3 w-[340px] p-3 rounded-xl ">
                <CiSearch className="text-[18px] text-[#6F767E]" />
                <input
                    text=""
                    placeholder="Search anything"
                    className="bg-transparent text-[16px] text-[#6F767E] font-normal  focus:outline-none"
                />
            </div>
            <div className="flex items-center gap-8">
                <BiMessageDetail className="text-[#868B90] text-[24px]" />
                <div className="relative">
                    <IoIosNotificationsOutline className="text-[#868B90] text-[24px]" />
                    <div className="bg-[#FE5A5A] w-[12px] h-[12px] absolute top-0 left-[10px] rounded-full"></div>
                </div>
                <div className="w-[48px] h-[48px] rounded-full overflow-hidden">
                    <Image src={cart} width={48} height={48} alt="Picture of the author" />
                </div>
            </div>
        </div>
    );
}
