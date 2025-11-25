import Card from '@/components/ui/card';
import FeatureTextToImage from '@/components/ui/FeatureTextToImage';
import HeroSection from '@/components/ui/HeroSectionHome';
import MyGrid from '@/components/utils/Grid';
import AppLayout from '@/layouts/app-layout';

// icons
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import TroubleshootIcon from '@mui/icons-material/Troubleshoot';

const cardData = [
    {
        icon: (
            <PsychologyOutlinedIcon
                fontSize="large"
                sx={{ color: '#EE6983' }}
            />
        ),
        iconColor: '#FF6D1F',
        iconBg: '#FBF3D5',
        title: 'Materi Bahasa Indonesia',
        subtitle: 'Kelas 7 - Semester 1',
        description: 'Pelajari materi lengkap dengan komik interaktif.',
        sx: { background: 'linear-gradient(135deg, #F9F8F6, #BADFDB)' },
    },
    {
        icon: <AutoAwesomeIcon fontSize="large" sx={{ color: '#2196f3' }} />,
        iconColor: '#FF6D1F',
        iconBg: '#FBF3D5',
        title: 'Latihan Soal',
        subtitle: 'Untuk melatih pemahaman',
        description: 'Soal interaktif yang menyenangkan.',
        sx: { background: 'linear-gradient(135deg, #F9F8F6, #ECF4E8)' },
    },
    {
        icon: <TroubleshootIcon fontSize="large" sx={{ color: '#E2852E' }} />,
        iconColor: '#FF6D1F',
        iconBg: '#FBF3D5',
        title: 'Ruang Kreatif',
        subtitle: 'Ekspresikan ide dengan komik',
        description: 'Buat komik untuk menceritakan materi.',
        sx: { background: 'linear-gradient(135deg, #F9F8F6, #C2E2FA)' },
    },
];

export default function welcome() {
    return (
        <AppLayout>
            <HeroSection />
            <div className="mt-12 space-y-2 text-center">
                <h1 className="text-lg font-bold md:text-2xl">
                    Apa Itu Layar Imajinasi?
                </h1>
                <p className="mx-auto max-w-xl text-sm">
                    Website edukasi berbasis animasi yang membantu siswa SMK
                    memahami teks cerita fantasi secara visual dan kreatif.
                </p>
            </div>

            {/* WRAPPER CARD */}
            <div className="mx-auto mt-10 grid max-w-7xl grid-cols-1 place-items-center gap-6 p-4 sm:grid-cols-2 sm:p-6 lg:grid-cols-3">
                {cardData.map((item, index) => (
                    <div
                        key={index}
                        className="w-full max-w-[360px] transition-transform hover:scale-105"
                    >
                        <Card
                            icon={item.icon}
                            iconColor={item.iconColor}
                            title={item.title}
                            subtitle={item.subtitle}
                            description={item.description}
                            sx={item.sx}
                            iconBg={item.iconBg}
                        />
                    </div>
                ))}
            </div>

            <FeatureTextToImage />

            <div className="mt-10 space-y-4 text-center text-slate-800">
                <h1 className="text-4xl font-bold">
                    Temukan Kekuatan Belajarmu di Setiap Fitur
                </h1>
                <p className="mx-auto max-w-3xl">
                    Mau baca materi, lihat animasi, atau coba hal baru di ruang
                    kreatif, semuanya bisa bantu kamu berkembang dengan cara
                    yang paling cocok buat kamu. Yuk, gali potensi terbaikmu
                    mulai dari fitur pertama yang kamu buka!
                </p>
            </div>

            {/* Grid Anime */}
            <MyGrid />

            
        </AppLayout>
    );
}
