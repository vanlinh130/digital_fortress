import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

export default function DashboardLayout({
    children, // will be a page or nested layout
}) {
    return (
        <section className="flex h-screen bg-[#131619]">
            <div className="w-1/5 p-3">
                <Sidebar />
            </div>
            <div className="w-4/5">
                <Header />
                <div className="pt-3">{children}</div>
            </div>
        </section>
    );
}
