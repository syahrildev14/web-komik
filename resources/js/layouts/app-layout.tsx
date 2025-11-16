import { ReactNode } from 'react';

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
    return (
        <div className="flex min-h-screen flex-col">
            {/* Header */}
            <header className="bg-amber-600 p-4 text-white shadow-md sticky top-0 z-90">
                <div className="container mx-auto flex items-center justify-between">
                    <a className="logo text-xl font-bold" href="/">
                        Komikuna
                    </a>
                    <nav className="flex space-x-6 items-center">
                        {NAV_ITEMS.map((item) => (
                            <a
                                key={item.href}
                                href={item.href}
                                className="relative pb-1 text-md text-white transition-colors duration-300 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-white after:transition-all after:duration-300 hover:text-white hover:after:w-full"
                            >
                                {item.label}
                            </a>
                        ))}
                        {/* Button Mulai */}
                        <a
                            className="rounded-full bg-white px-8 py-2 text-sm font-semibold text-slate-800 hover:bg-slate-300 duration-200"
                            href="/ruang-kreatif"
                        >
                            Mulai
                        </a>
                    </nav>
                </div>
            </header>

            {/* Content */}
            <main className="container mx-auto flex-1 p-4">{children}</main>

            {/* Footer */}
            <footer className="mt-auto bg-gray-800 p-4 text-center text-gray-200 shadow-inner">
                &copy; {new Date().getFullYear()} My App. All rights reserved.
            </footer>
        </div>
    );
}
