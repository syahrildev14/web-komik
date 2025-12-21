import AOS from 'aos';
import 'aos/dist/aos.css';

import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import { ReactNode, useEffect, useState } from 'react';
import MyButton from '../components/ui/Button';

interface AppLayoutProps {
    children: ReactNode;
}

const NAV_ITEMS = [
    { label: 'Beranda', href: '/' },
    { label: 'Materi', href: '/materi' },
    { label: 'Ruang Kreatif', href: '/ruang-kreatif' },
    { label: 'Evaluasi & Latihan', href: '/evaluasi-latihan' },
    { label: 'Kamus Fantasi', href: '/kamus-fantasi' },
];

export default function AppLayout({ children }: AppLayoutProps) {
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        AOS.init({
            duration: 800,
            once: true,
        });
    }, []);

    // ✅ Ambil langsung dari browser (Laravel routing)
    const currentPath = window.location.pathname;

    const isActive = (path: string) => {
        if (path === '/') return currentPath === '/';
        return currentPath.startsWith(path);
    };

    return (
        <div className="flex min-h-screen flex-col">
            {/* Header */}
            <header className="sticky top-0 z-[90] bg-amber-600/80 p-4 text-white shadow-md backdrop-blur">
                <div className="container mx-auto flex items-center justify-between">
                    {/* Logo */}
                    <a href="/" className="text-xl font-bold">
                        Cerita Fantasi
                    </a>

                    {/* Desktop Navigation */}
                    <nav className="hidden items-center space-x-6 md:flex">
                        {NAV_ITEMS.map((item) => (
                            <a
                                key={item.href}
                                href={item.href}
                                className={`relative pb-1 text-base transition-colors duration-300 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-white after:transition-all after:duration-300 ${
                                    isActive(item.href)
                                        ? 'text-white after:w-full'
                                        : 'after:w-0 hover:after:w-full'
                                } `}
                            >
                                {item.label}
                            </a>
                        ))}

                        <MyButton
                            label="Mulai"
                            href="/ruang-kreatif"
                            className="rounded-xl !bg-white !px-6 !py-2 !text-amber-600 shadow-md hover:!bg-gray-200"
                        />
                    </nav>

                    {/* Mobile Button */}
                    <IconButton
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="!text-white md:!hidden"
                    >
                        {menuOpen ? <CloseIcon /> : <MenuIcon />}
                    </IconButton>
                </div>

                {/* Mobile Menu */}
                {menuOpen && (
                    <div className="animate-fade-in-down space-y-3 rounded-xl bg-amber-500 px-4 py-3 md:hidden">
                        {NAV_ITEMS.map((item) => (
                            <a
                                key={item.href}
                                href={item.href}
                                onClick={() => setMenuOpen(false)}
                                className={`block text-lg font-medium transition ${
                                    isActive(item.href)
                                        ? 'text-white underline underline-offset-4'
                                        : 'text-white/80 hover:text-white'
                                } `}
                            >
                                {item.label}
                            </a>
                        ))}

                        <MyButton
                            label="Mulai"
                            href="/ruang-kreatif"
                            className="w-full rounded-lg !bg-white !py-2 text-center !text-amber-600 hover:!bg-gray-200"
                            onClick={() => setMenuOpen(false)}
                        />
                    </div>
                )}
            </header>

            {/* Content */}
            <main className="flex-1">{children}</main>

            {/* Footer */}
            <footer className="mt-auto bg-gray-800 p-4 text-center text-gray-200 shadow-inner">
                &copy; {new Date().getFullYear()} Cerita Fantasi. All rights
                reserved.
            </footer>
        </div>
    );
}
