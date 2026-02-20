import { Link, usePage } from '@inertiajs/react';
import { ReactNode, useState } from 'react';

// Material UI Icons
import DashboardIcon from '@mui/icons-material/Dashboard';
import DataExplorationRoundedIcon from '@mui/icons-material/DataExplorationRounded';
import LogoutIcon from '@mui/icons-material/Logout';
import SchoolIcon from '@mui/icons-material/School';

interface AdminLayoutProps {
    title?: string;
    children: ReactNode;
}

export default function AdminLayout({ children }: AdminLayoutProps) {
    const [open, setOpen] = useState(false);
    const { url } = usePage(); // url saat ini

    const isActive = (path: string) => url.startsWith(path);

    return (
        <div className="flex min-h-screen bg-gray-100">
            {/* SIDEBAR */}
            <aside
                className={`fixed inset-y-0 left-0 z-40 w-64 transform bg-[#27024F] shadow-lg ${open ? 'translate-x-0' : '-translate-x-64'} transition-transform duration-300 lg:translate-x-0`}
            >
                {/* Logo / Title */}
                <div className="border-b p-6">
                    <h1 className="text-center text-lg font-bold text-gray-200">
                        Cerita Fantasi
                    </h1>
                </div>

                {/* Nav Section */}
                <nav className="space-y-2 p-4">
                    {/* Dashboard */}
                    {/* <Link
                        href="/admin/dashboard"
                        className={`flex items-center gap-3 rounded-lg p-3 ${isActive('/admin/dashboard') ? 'bg-gray-100/50 text-white' : 'text-gray-300 hover:bg-gray-100/10'}`}
                    >
                        <DashboardIcon className="text-inherit" />
                        <span>Dashboard</span>
                    </Link> */}

                    {/* Nilai Evaluasi & Latihan */}
                    <Link
                        href="/admin/nilai-evaluasi-latihan"
                        className={`flex items-center gap-3 rounded-lg p-3 ${isActive('/admin/nilai-evaluasi-latihan') ? 'bg-gray-100/50 text-white' : 'text-gray-300 hover:bg-gray-100/10'}`}
                    >
                        <SchoolIcon className="text-inherit" />
                        <span>Nilai Evaluasi & Latihan</span>
                    </Link>

                    {/* Nilai Ruang Kreatif */}
                    <Link
                        href="/admin/nilai-ruang-kreatif"
                        className={`flex items-center gap-3 rounded-lg p-3 ${isActive('/admin/nilai-ruang-kreatif') ? 'bg-gray-100/50 text-white' : 'text-gray-300 hover:bg-gray-100/10'}`}
                    >
                        <DataExplorationRoundedIcon className="text-inherit" />
                        <span>Nilai Ruang Kreatif</span>
                    </Link>

                    {/* Logout */}
                    <Link
                        href="/logout"
                        method="post"
                        className="flex items-center gap-3 rounded-lg p-3 text-gray-300 hover:bg-gray-100/10"
                    >
                        <LogoutIcon className="text-inherit" />
                        <span>Logout</span>
                    </Link>
                </nav>
            </aside>

            {/* MOBILE OVERLAY */}
            {open && (
                <div
                    className="fixed inset-0 z-30 bg-black/40 lg:hidden"
                    onClick={() => setOpen(false)}
                />
            )}

            {/* MAIN CONTENT */}
            <div className="flex min-h-screen flex-1 flex-col">
                {/* CONTENT */}
                <main className="flex-1 p-6 lg:ml-64">{children}</main>
            </div>
        </div>
    );
}
