import { Link, usePage } from '@inertiajs/react';
import { ReactNode, useState } from 'react';

// Material UI Icons
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
        <div className="min-h-screen bg-gray-100">
            {/* SIDEBAR */}
            <aside
                className="fixed inset-y-0 left-0 z-40 
    w-16 lg:w-64 
    bg-[#27024F] shadow-lg 
    transition-all duration-300"
            >
                {/* Logo */}
                <div className="border-b flex items-center justify-center lg:justify-start p-4 lg:p-6">
                    {/* Icon mobile */}
                    <div className="text-white text-xl">📚</div>

                    {/* Text desktop */}
                    <h1 className="hidden lg:block text-lg font-bold text-gray-200">
                        Cerita Fantasi
                    </h1>
                </div>

                {/* Navigation */}
                <nav className="space-y-2 p-2 lg:p-4">

                    <Link
                        href="/admin/nilai-evaluasi-latihan"
                        className={`flex items-center 
            justify-center lg:justify-start 
            gap-0 lg:gap-3 
            rounded-lg p-3
            ${isActive('/admin/nilai-evaluasi-latihan')
                                ? 'bg-gray-100/50 text-white'
                                : 'text-gray-300 hover:bg-gray-100/10'
                            }`}
                    >
                        <SchoolIcon />
                        <span className="hidden lg:inline">
                            Nilai Evaluasi & Latihan
                        </span>
                    </Link>

                    <Link
                        href="/admin/nilai-ruang-kreatif"
                        className={`flex items-center 
            justify-center lg:justify-start 
            gap-0 lg:gap-3 
            rounded-lg p-3
            ${isActive('/admin/nilai-ruang-kreatif')
                                ? 'bg-gray-100/50 text-white'
                                : 'text-gray-300 hover:bg-gray-100/10'
                            }`}
                    >
                        <DataExplorationRoundedIcon />
                        <span className="hidden lg:inline">
                            Nilai Ruang Kreatif
                        </span>
                    </Link>

                    <Link
                        href="/logout"
                        method="post"
                        className="flex items-center 
            justify-center lg:justify-start 
            gap-0 lg:gap-3 
            rounded-lg p-3 
            text-gray-300 hover:bg-gray-100/10"
                    >
                        <LogoutIcon />
                        <span className="hidden lg:inline">
                            Logout
                        </span>
                    </Link>

                </nav>
            </aside>

            {/* OVERLAY MOBILE */}
            {open && (
                <div
                    className="fixed inset-0 z-30 bg-black/40 lg:hidden"
                    onClick={() => setOpen(false)}
                />
            )}

            {/* MAIN CONTENT */}
            <div className="ml-16 lg:ml-64">
                <main className="min-h-screen p-4 sm:p-6">
                    {children}
                </main>
            </div>
        </div>
    );
}
