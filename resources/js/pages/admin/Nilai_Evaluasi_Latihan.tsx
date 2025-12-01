import AppLayout from '@/layouts/admin-layout';
import {
    CircularProgress,
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

interface QuizResult {
    id: number;
    nama?: string;
    absen?: string;
    kelas?: string;
    correctCount: number;
    totalQuestions: number;
    score: number;
    created_at: string;
}

type Order = 'asc' | 'desc';

function sortData(data: QuizResult[], orderBy: keyof QuizResult, order: Order) {
    return data.slice().sort((a, b) => {
        if (a[orderBy]! < b[orderBy]!) return order === 'asc' ? -1 : 1;
        if (a[orderBy]! > b[orderBy]!) return order === 'asc' ? 1 : -1;
        return 0;
    });
}

const Nilai_Evaluasi_Latihan = () => {
    const [data, setData] = useState<QuizResult[]>([]);
    const [loading, setLoading] = useState(true);
    const [order, setOrder] = useState<Order>('asc');
    const [orderBy, setOrderBy] = useState<keyof QuizResult>('nama');
    const [search, setSearch] = useState('');
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(
                    'http://localhost:8000/api/simpan-kuis',
                );
                setData(res.data);
            } catch (error) {
                console.error('Gagal mengambil data:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    const handleSort = (property: keyof QuizResult) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    const handleChangePage = (_event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (
        event: React.ChangeEvent<HTMLInputElement>,
    ) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    // Filter & sort data
    const filteredData = data.filter(
        (item) =>
            item.nama?.toLowerCase().includes(search.toLowerCase()) ||
            item.kelas?.toLowerCase().includes(search.toLowerCase()) ||
            item.absen?.toLowerCase().includes(search.toLowerCase()),
    );

    const sortedData = sortData(filteredData, orderBy, order);
    const paginatedData = sortedData.slice(
        page * rowsPerPage,
        page * rowsPerPage + rowsPerPage,
    );

    return (
        <AppLayout>
            <div className="p-2">
                <h1 className="mb-6 text-2xl font-bold text-gray-800">
                    Nilai Evaluasi Dan Latihan
                </h1>

                <TextField
                    label="Cari nama, absen, kelas..."
                    variant="outlined"
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
                        <TableContainer
                            component={Paper}
                            className="mt-4 shadow-lg"
                        >
                            <Table>
                                <TableHead className="bg-amber-600/20">
                                    <TableRow className="text-gray-200">
                                        <TableCell>No</TableCell>
                                        <TableCell>
                                            <TableSortLabel
                                                active={orderBy === 'nama'}
                                                direction={
                                                    orderBy === 'nama'
                                                        ? order
                                                        : 'asc'
                                                }
                                                onClick={() =>
                                                    handleSort('nama')
                                                }
                                                className="text-gray-200"
                                            >
                                                Nama
                                            </TableSortLabel>
                                        </TableCell>
                                        <TableCell>
                                            <TableSortLabel
                                                active={orderBy === 'absen'}
                                                direction={
                                                    orderBy === 'absen'
                                                        ? order
                                                        : 'asc'
                                                }
                                                onClick={() =>
                                                    handleSort('absen')
                                                }
                                                className="text-gray-200"
                                            >
                                                Absen
                                            </TableSortLabel>
                                        </TableCell>
                                        <TableCell>
                                            <TableSortLabel
                                                active={orderBy === 'kelas'}
                                                direction={
                                                    orderBy === 'kelas'
                                                        ? order
                                                        : 'asc'
                                                }
                                                onClick={() =>
                                                    handleSort('kelas')
                                                }
                                                className="text-gray-200"
                                            >
                                                Kelas
                                            </TableSortLabel>
                                        </TableCell>
                                        <TableCell>
                                            <TableSortLabel
                                                active={
                                                    orderBy === 'correctCount'
                                                }
                                                direction={
                                                    orderBy === 'correctCount'
                                                        ? order
                                                        : 'asc'
                                                }
                                                onClick={() =>
                                                    handleSort('correctCount')
                                                }
                                                className="text-gray-200"
                                            >
                                                Jawaban Benar
                                            </TableSortLabel>
                                        </TableCell>
                                        <TableCell>
                                            <TableSortLabel
                                                active={
                                                    orderBy === 'totalQuestions'
                                                }
                                                direction={
                                                    orderBy === 'totalQuestions'
                                                        ? order
                                                        : 'asc'
                                                }
                                                onClick={() =>
                                                    handleSort('totalQuestions')
                                                }
                                                className="text-gray-200"
                                            >
                                                Total Soal
                                            </TableSortLabel>
                                        </TableCell>
                                        <TableCell>
                                            <TableSortLabel
                                                active={orderBy === 'score'}
                                                direction={
                                                    orderBy === 'score'
                                                        ? order
                                                        : 'asc'
                                                }
                                                onClick={() =>
                                                    handleSort('score')
                                                }
                                                className="text-gray-200"
                                            >
                                                Skor
                                            </TableSortLabel>
                                        </TableCell>
                                    </TableRow>
                                </TableHead>

                                <TableBody>
                                    {paginatedData.map((item, index) => (
                                        <TableRow
                                            key={item.id}
                                            className="hover:bg-gray-100"
                                        >
                                            <TableCell>
                                                {page * rowsPerPage + index + 1}
                                            </TableCell>
                                            <TableCell>{item.nama}</TableCell>
                                            <TableCell>{item.absen}</TableCell>
                                            <TableCell>{item.kelas}</TableCell>
                                            <TableCell>
                                                {item.correctCount}
                                            </TableCell>
                                            <TableCell>
                                                {item.totalQuestions}
                                            </TableCell>
                                            <TableCell>{item.score}</TableCell>
                                        </TableRow>
                                    ))}
                                    {paginatedData.length === 0 && (
                                        <TableRow>
                                            <TableCell
                                                colSpan={7}
                                                className="py-4 text-center text-gray-500"
                                            >
                                                Data tidak ditemukan
                                            </TableCell>
                                        </TableRow>
                                    )}
                                </TableBody>
                            </Table>
                        </TableContainer>

                        <TablePagination
                            component="div"
                            count={sortedData.length}
                            page={page}
                            onPageChange={handleChangePage}
                            rowsPerPage={rowsPerPage}
                            onRowsPerPageChange={handleChangeRowsPerPage}
                            rowsPerPageOptions={[5, 10, 25, 50]}
                            className="mt-2"
                        />
                    </>
                )}
            </div>
        </AppLayout>
    );
};

export default Nilai_Evaluasi_Latihan;
