import AppLayout from '@/layouts/admin-layout';
import {
    Button,
    CircularProgress,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TablePagination,
    TableRow,
    TableSortLabel,
    TextField,
} from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';

interface DataRuangKreatif {
    id: number;
    nama: string;
    kelas: string;
    judul: string;
    cerita1: string;
    cerita2: string;
    cerita3: string;
    cerita4: string;
    cerita5: string;
    cerita6: string;
    cerita7: string;
    cerita8: string;
    cerita9: string;
    cerita10: string;
    cerita11: string;
    cerita12: string;
    cerita13: string;
    cerita14: string;
    cerita15: string;
    cerita16: string;
    cerita17: string;
}

type Order = 'asc' | 'desc';

function sortData(
    data: DataRuangKreatif[],
    orderBy: keyof DataRuangKreatif,
    order: Order,
) {
    return data.slice().sort((a, b) => {
        if (a[orderBy]! < b[orderBy]!) return order === 'asc' ? -1 : 1;
        if (a[orderBy]! > b[orderBy]!) return order === 'asc' ? 1 : -1;
        return 0;
    });
}

const Nilai_Ruang_Kreatif = () => {
    const [data, setData] = useState<DataRuangKreatif[]>([]);
    const [loading, setLoading] = useState(true);
    const [order, setOrder] = useState<Order>('asc');
    const [orderBy, setOrderBy] = useState<keyof DataRuangKreatif>('nama');
    const [search, setSearch] = useState('');
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    // Modal
    const [openModal, setOpenModal] = useState(false);
    const [selectedData, setSelectedData] = useState<DataRuangKreatif | null>(
        null,
    );
    const [nilai, setNilai] = useState({
        nilai1: '',
        nilai2: '',
        nilai3: '',
        nilai4: '',
        nilai5: '',
        nilai6: '',
        nilai7: '',
        nilai8: '',
        nilai9: '',
        nilai10: '',
        nilai11: '',
        nilai12: '',
        nilai13: '',
        nilai14: '',
        nilai15: '',
        nilai16: '',
        nilai17: '',
    });

    useEffect(() => {
        axios
            .get('/api/cerita')
            .then((res) => setData(res.data))
            .catch(() =>
                Swal.fire('Gagal Mengambil Data', 'Cobain lagi!', 'error'),
            )
            .finally(() => setLoading(false));
    }, []);

    const handleSort = (prop: keyof DataRuangKreatif) => {
        const isAsc = orderBy === prop && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(prop);
    };

    const handleOpenModal = (item: DataRuangKreatif) => {
        setSelectedData(item);
        setOpenModal(true);
    };

    const handleCloseModal = () => {
        setOpenModal(false);
        setSelectedData(null);
        setNilai({ nilai1: '', nilai2: '', nilai3: '', nilai4: '', nilai5: '', nilai6: '', nilai7: '', nilai8: '', nilai9: '', nilai10: '', nilai11: '', nilai12: '', nilai13: '', nilai14: '', nilai15: '', nilai16: '', nilai17: '' });
    };

    const cetakPDF = (cerita_id: number) => {
        window.open(
            `/api/nilai-kreatif/${cerita_id}/cetak`,
            '_blank',
        );
    };

    const handleSubmitNilai = async () => {
        if (!selectedData) return;

        try {
            await axios.post('/api/nilai-kreatif', {
                cerita_id: selectedData.id, // ⬅ sesuaikan dengan backend
                nilai1: Number(nilai.nilai1),
                nilai2: Number(nilai.nilai2),
                nilai3: Number(nilai.nilai3),
                nilai4: Number(nilai.nilai4),
                nilai5: Number(nilai.nilai5),
                nilai6: Number(nilai.nilai6),
                nilai7: Number(nilai.nilai7),
                nilai8: Number(nilai.nilai8),
                nilai9: Number(nilai.nilai9),
                nilai10: Number(nilai.nilai10),
                nilai11: Number(nilai.nilai11),
                nilai12: Number(nilai.nilai12),
                nilai13: Number(nilai.nilai13),
                nilai14: Number(nilai.nilai14),
                nilai15: Number(nilai.nilai15),
                nilai16: Number(nilai.nilai16),
                nilai17: Number(nilai.nilai17),
            });

            Swal.fire({
                title: 'Nilai berhasil disimpan!',
                showDenyButton: true,
                confirmButtonText: 'Cetak PDF',
                denyButtonText: 'Tutup',
            }).then((result) => {
                if (result.isConfirmed) {
                    cetakPDF(selectedData.id);
                }
            });

            handleCloseModal();
        } catch (error: any) {
            if (error.response?.status === 422) {
                Swal.fire(
                    'Validasi Error',
                    'Pastikan semua nilai terisi dan berupa angka!',
                    'warning',
                );
            } else {
                console.error(error);
                Swal.fire('Gagal menyimpan nilai', 'Coba lagi!', 'error');
            }
        }
    };

    const filteredData = data.filter(
        (item) =>
            item.nama.toLowerCase().includes(search.toLowerCase()) ||
            item.kelas.toLowerCase().includes(search.toLowerCase()) ||
            item.judul.toLowerCase().includes(search.toLowerCase()),
    );

    const sorted = sortData(filteredData, orderBy, order);
    const paginated = sorted.slice(
        page * rowsPerPage,
        page * rowsPerPage + rowsPerPage,
    );

    return (
        <AppLayout>
            <div className="p-2">
                <h1 className="mb-6 text-2xl font-bold text-gray-800">
                    📚 Nilai Ruang Kreatif
                </h1>

                <TextField
                    label="Cari nama, kelas atau judul..."
                    size="small"
                    className="mb-4 w-full md:w-1/3"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />

                {loading ? (
                    <div className="flex justify-center py-10">
                        <CircularProgress />
                    </div>
                ) : (
                    <>
                        <TableContainer component={Paper} className="mt-4">
                            <Table>
                                <TableHead>
                                    <TableRow className="bg-amber-600/20">
                                        <TableCell>No</TableCell>
                                        {['nama', 'kelas', 'judul'].map(
                                            (field) => (
                                                <TableCell key={field}>
                                                    <TableSortLabel
                                                        active={
                                                            orderBy === field
                                                        }
                                                        direction={
                                                            orderBy === field
                                                                ? order
                                                                : 'asc'
                                                        }
                                                        onClick={() =>
                                                            handleSort(
                                                                field as keyof DataRuangKreatif,
                                                            )
                                                        }
                                                    >
                                                        {field
                                                            .charAt(0)
                                                            .toUpperCase() +
                                                            field.slice(1)}
                                                    </TableSortLabel>
                                                </TableCell>
                                            ),
                                        )}
                                        <TableCell>Aksi</TableCell>
                                    </TableRow>
                                </TableHead>

                                <TableBody>
                                    {paginated.map((item, index) => (
                                        <TableRow key={item.id}>
                                            <TableCell>
                                                {page * rowsPerPage + index + 1}
                                            </TableCell>
                                            <TableCell>{item.nama}</TableCell>
                                            <TableCell>{item.kelas}</TableCell>
                                            <TableCell>{item.judul}</TableCell>
                                            <TableCell>
                                                <Button
                                                    variant="contained"
                                                    size="small"
                                                    onClick={() =>
                                                        handleOpenModal(item)
                                                    }
                                                >
                                                    Detail & Nilai
                                                </Button>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>

                        <TablePagination
                            component="div"
                            count={sorted.length}
                            page={page}
                            onPageChange={(_, newPage) => setPage(newPage)}
                            rowsPerPage={rowsPerPage}
                            onRowsPerPageChange={(e) => {
                                setRowsPerPage(parseInt(e.target.value));
                                setPage(0);
                            }}
                        />
                    </>
                )}
            </div>

            {/* MODAL INPUT NILAI */}
            <Dialog
                open={openModal}
                onClose={handleCloseModal}
                fullWidth
                maxWidth="md"
            >
                <DialogTitle className="bg-amber-600 text-white">
                    Detail Cerita & Input Nilai
                </DialogTitle>
                <DialogContent>
                    {selectedData && (
                        <div>
                            <p>
                                <b>Nama:</b> {selectedData.nama}
                            </p>
                            <p>
                                <b>Kelas:</b> {selectedData.kelas}
                            </p>
                            <p>
                                <b>Judul:</b> {selectedData.judul}
                            </p>
                            <hr className="my-2" />
                            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17].map((num) => (
                                <div key={num} className="mb-3">
                                    <p>
                                        <b>Cerita {num}:</b>{' '}
                                        {
                                            selectedData[
                                                `cerita${num}` as keyof DataRuangKreatif
                                            ]
                                        }
                                    </p>
                                    <TextField
                                        label={`Nilai untuk Cerita ${num}`}
                                        type="number"
                                        fullWidth
                                        onChange={(e) =>
                                            setNilai({
                                                ...nilai,
                                                [`nilai${num}`]: Number(
                                                    e.target.value,
                                                ),
                                            })
                                        }
                                    />
                                </div>
                            ))}
                        </div>
                    )}
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseModal}>Batal</Button>
                    <Button variant="contained" onClick={handleSubmitNilai}>
                        Simpan Nilai
                    </Button>
                    {selectedData && (
                        <Button
                            variant="outlined"
                            color="success"
                            onClick={() => cetakPDF(selectedData?.id)}
                        >
                            Cetak PDF
                        </Button>
                    )}
                </DialogActions>
            </Dialog>
        </AppLayout>
    );
};

export default Nilai_Ruang_Kreatif;
