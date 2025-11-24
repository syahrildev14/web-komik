import Card from '@/components/Card';
import HeroSection from '@/components/HeroSectionHome';
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
        iconBg: '#FBF3D5',
        title: 'Materi Bahasa Indonesia',
        subtitle: 'Kelas 7 - Semester 1',
        description: 'Pelajari materi lengkap dengan komik interaktif.',
        sx: { background: 'linear-gradient(135deg, #F9F8F6, #BADFDB)' },
    },
    {
        icon: <AutoAwesomeIcon fontSize="large" sx={{ color: '#2196f3' }} />,
        iconBg: '#FBF3D5',
        title: 'Latihan Soal',
        subtitle: 'Untuk melatih pemahaman',
        description: 'Soal interaktif yang menyenangkan.',
        sx: { background: 'linear-gradient(135deg, #F9F8F6, #ECF4E8)' },
    },
    {
        icon: <TroubleshootIcon fontSize="large" sx={{ color: '#E2852E' }} />,
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
            <div className='text-center mt-12 space-y-2'>
                <h1 className='font-bold text-lg md:text-2xl'>Apa Itu Layar Imajinasi?</h1>
                <p className='max-w-xl mx-auto text-sm'>
                    Website edukasi berbasis animasi yang membantu siswa SMK
                    memahami teks cerita fantasi secara visual dan kreatif.
                </p>
            </div>

            {/* WRAPPER CARD */}
            <div className='mt-10'
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                    gap: '20px',
                    padding: '20px',
                }}
            >
                {cardData.map((item, index) => (
                    <Card
                        key={index}
                        icon={item.icon}
                        iconColor={item.iconColor}
                        title={item.title}
                        subtitle={item.subtitle}
                        description={item.description}
                        sx={item.sx}
                        iconBg={item.iconBg}
                    />
                ))}
            </div>
        </AppLayout>
    );
}
