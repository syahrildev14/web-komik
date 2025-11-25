
import AdminLayout from "@/layouts/admin-layout";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

interface NilaiSiswaProps {
    nilai: {
        id: number;
        nama_siswa: string;
        kelas: string;
        mata_pelajaran: string;
        nilai: number;
    }[];
}

export default function NilaiSiswa({ nilai }: NilaiSiswaProps) {
    const columns: GridColDef[] = [
        { field: "nama_siswa", headerName: "Nama Siswa", flex: 1 },
        { field: "kelas", headerName: "Kelas", width: 100 },
        { field: "mata_pelajaran", headerName: "Mapel", flex: 1 },
        { field: "nilai", headerName: "Nilai", width: 120 },
    ];

    return (
        <AdminLayout title="Monitoring Data Nilai">
            <div style={{ height: 450, width: "100%" }}>
                <DataGrid rows={nilai} columns={columns} pageSize={5} />
            </div>
        </AdminLayout>
    );
}
