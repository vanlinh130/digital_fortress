import Image from 'next/image';
import login from '../public/Illustration.png';

export default function Login() {
    return (
        <div className="flex h-screen">
            <div className="w-1/2 bg-gray-900 text-white flex flex-col justify-center px-12">
                <h1 className="text-4xl font-semibold mb-6">Hello, Digital Fortress</h1>
                <p className="mb-4">Log in to platform to start creating magic.</p>

                <form className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium">Email</label>
                        <input
                            type="email"
                            className="w-full p-3 mt-1 bg-gray-800 rounded-md focus:ring-2 focus:ring-green-400 focus:outline-none"
                            placeholder="candidate.digitalfortress@gmail.com"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium">Password</label>
                        <input
                            type="password"
                            className="w-full p-3 mt-1 bg-gray-800 rounded-md focus:ring-2 focus:ring-green-400 focus:outline-none"
                            placeholder="Password"
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <label className="flex items-center">
                            <input type="checkbox" className="form-checkbox bg-gray-800 rounded-md" />
                            <span className="ml-2 text-sm">Remember me</span>
                        </label>
                        <a href="#" className="text-sm text-green-400">
                            Forgot Password?
                        </a>
                    </div>
                    <button className="w-full bg-green-500 hover:bg-green-600 p-3 rounded-md text-white font-semibold">
                        Log in
                    </button>
                </form>

                <p className="mt-6 text-sm text-center">
                    Don’t have an account?{' '}
                    <a href="/dashboard" className="text-green-400">
                        Sign Up
                    </a>
                </p>
            </div>

            <div className="w-1/2 relative">
                <div className="w-full h-full">
                    <Image
                        src={login}
                        alt="Background"
                        layout="fill"
                        objectFit="cover"
                        className="rounded-r-lg w-[720px] h-[1024px]"
                    />
                </div>
            </div>
        </div>
    );
}
