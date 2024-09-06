import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

export default function DashboardLayout({
    children, // will be a page or nested layout
}) {
    return (
        <section className="flex h-screen ">
            <div className="w-1/5 py-6 px-8 bg-[#0D0F10]">
                <Sidebar />
            </div>
            <div className="w-4/5 p-6 bg-gray-800">
                <Header />
                {children}
            </div>
        </section>
    );
}
