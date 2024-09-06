import Image from 'next/image';
import login from '../../public/Illustration.png';
import { TfiEmail } from 'react-icons/tfi';
import { PiLockKey } from 'react-icons/pi';

export default function Login() {
    return (
        <div className="flex bg-[#131619]  h-screen">
            <div className=" w-1/2 bg-[#0D0F10] flex flex-col justify-center items-center">
                <div className="flex flex-col gap-16 w-[496px] text-white px-12">
                    <div className="flex flex-col gap-6">
                        <h1 className="text-4xl font-extralight">
                            Hello, <span className="gradient-heading font-semibold">Digital Fortress</span>
                        </h1>
                        <p className="text-[16px] mb-4 text-[#6F767E]">Log in to platform to start creating magic.</p>
                    </div>

                    <form className="flex flex-col gap-12">
                        <div className="flex flex-col gap-4">
                            <div className="relative mb-6 ">
                                <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                                    <TfiEmail className="text-[24px] text-gray-500 " />
                                </div>
                                <input
                                    type="text"
                                    id=""
                                    className="bg-[#1A1D21] text-sm rounded-xl block w-full ps-12 px-4 py-3 focus:ring-2 focus:ring-[#B6F09C] focus:outline-none caret-[#B6F09C]"
                                    placeholder="Email"
                                />
                            </div>
                            <div className="relative mb-6 ">
                                <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                                    <PiLockKey className="text-[24px] text-gray-500 " />
                                </div>
                                <input
                                    type="password"
                                    id=""
                                    className="bg-[#1A1D21] text-sm rounded-xl block w-full ps-12 px-4 py-3 focus:ring-2 focus:ring-[#B6F09C] focus:outline-none caret-[#B6F09C]"
                                    placeholder="Password"
                                />
                            </div>
                        </div>
                        <div className="flex items-center justify-between">
                            <label className="flex gap-4 items-center">
                                <input
                                    type="checkbox"
                                    className="bg-[#1A1D21] w-[24px] h-[24px] rounded-[4px] border-[1px] border-[#363A3D]"
                                />
                                <span className="text-sm text-[#CDCECF] font-medium">Remember me</span>
                            </label>
                            <a href="#" className="text-sm gradient-text ">
                                Forgot Password?
                            </a>
                        </div>
                        <button className="w-full bg-[#B6F09C] hover:bg-[#9ff876] py-2 px-6 rounded-xl text-[#0C1132] text-[16px] font-semibold">
                            Log in
                        </button>
                        <p className="mt-6 text-sm text-center text-[#6F767E]">
                            Don’t have an account?{' '}
                            <a href="/dashboard" className="gradient-text">
                                Sign Up
                            </a>
                        </p>
                    </form>
                </div>
            </div>

            <div className="w-1/2">
                <Image src={login} alt="Background" className="object-fill w-full h-full" />
            </div>
        </div>
    );
}
