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

    // Modal state
    const [openModal, setOpenModal] = useState(false);
    const [selectedData, setSelectedData] = useState<DataRuangKreatif | null>(
        null,
    );
    const [nilai, setNilai] = useState({
        nilai1: '',
        nilai2: '',
        nilai3: '',
        nilai4: '',
    });

    useEffect(() => {
        axios
            .get('http://localhost:8000/api/cerita')
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
        setNilai({ nilai1: '', nilai2: '', nilai3: '', nilai4: '' });
    };

    const handleSubmitNilai = async () => {
        try {
            await axios.post('http://localhost:8000/api/nilai-kreatif', {
                id: selectedData?.id,
                ...nilai,
            });
            Swal.fire('Nilai berhasil disimpan!', '', 'success');
            handleCloseModal();
        } catch (error) {
            Swal.fire('Gagal menyimpan nilai', 'Coba lagi!', 'error');
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
                        <TableContainer component={Paper} className='mt-4'>
                            <Table>
                                <TableHead>
                                    <TableRow className='bg-amber-600/20'>
                                        <TableCell>No</TableCell>
                                        {['Nama', 'Kelas', 'Judul'].map(
                                            (field) => (
                                                <TableCell key={field}>
                                                    <TableSortLabel
                                                        active={
                                                            orderBy ===
                                                            field.toLowerCase()
                                                        }
                                                        direction={
                                                            orderBy ===
                                                            field.toLowerCase()
                                                                ? order
                                                                : 'asc'
                                                        }
                                                        onClick={() =>
                                                            handleSort(
                                                                field.toLowerCase() as keyof DataRuangKreatif,
                                                            )
                                                        }
                                                    >
                                                        {field}
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

            {/* MODAL DETAIL */}
            <Dialog
                open={openModal}
                onClose={handleCloseModal}
                fullWidth
                maxWidth="md"
            >
                <DialogTitle className='bg-amber-600 text-white'>Detail Cerita & Input Nilai</DialogTitle>
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

                            {[1, 2, 3, 4].map((num) => (
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
                                                [`nilai${num}`]: e.target.value,
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
                </DialogActions>
            </Dialog>
        </AppLayout>
    );
};

export default Nilai_Ruang_Kreatif;
