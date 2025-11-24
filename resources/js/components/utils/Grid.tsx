import Box from '@mui/material/Box';
import Grid from '@mui/material/GridLegacy';
// images
import img1 from '@/assets/grid/1.jpeg';
import img2 from '@/assets/grid/2.jpeg';
import img3 from '@/assets/grid/3.jpeg';
import img4 from '@/assets/grid/4.jpeg';

export default function ImageGrid() {
    return (
        <Box sx={{ flexGrow: 1 }} className="mt-12 md:px-6">
            <Grid container spacing={2}>
                {/* Gambar 1 */}
                <Grid item xs={12} md={8}>
                    <div className="group relative h-60 w-full overflow-hidden rounded-xl shadow-md">
                        <img
                            src={img1}
                            alt="img1"
                            className="h-full w-full object-cover duration-700 group-hover:scale-105"
                        />

                        {/* Overlay Gradasi */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/0 to-transparent opacity-0 duration-700 group-hover:from-black/60 group-hover:opacity-100"></div>

                        {/* Text muncul saat hover */}
                        <div className="absolute bottom-4 left-4 translate-y-4 text-white opacity-0 duration-700 group-hover:translate-y-0 group-hover:opacity-100">
                            <h3 className="text-lg font-semibold">
                                Judul Gambar 1
                            </h3>
                            <p className="text-sm opacity-80">
                                Deskripsi singkat muncul saat hover
                            </p>
                        </div>
                    </div>
                </Grid>

                {/* Gambar 2 */}
                <Grid item xs={12} md={4}>
                    <div className="group relative h-60 w-full overflow-hidden rounded-xl shadow-md">
                        <img
                            src={img2}
                            alt="img2"
                            className="h-full w-full object-cover duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/0 to-transparent opacity-0 duration-700 group-hover:from-black/60 group-hover:opacity-100"></div>

                        <div className="absolute bottom-4 left-4 translate-y-4 text-white opacity-0 duration-700 group-hover:translate-y-0 group-hover:opacity-100">
                            <h3 className="text-lg font-semibold">
                                Judul Gambar 2
                            </h3>
                            <p className="text-sm opacity-80">
                                Deskripsi singkat
                            </p>
                        </div>
                    </div>
                </Grid>

                {/* Gambar 3 */}
                <Grid item xs={12} md={4}>
                    <div className="group relative h-60 w-full overflow-hidden rounded-xl shadow-md">
                        <img
                            src={img3}
                            alt="img3"
                            className="h-full w-full object-cover duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/0 to-transparent opacity-0 duration-700 group-hover:from-black/60 group-hover:opacity-100"></div>

                        <div className="absolute bottom-4 left-4 translate-y-4 text-white opacity-0 duration-700 group-hover:translate-y-0 group-hover:opacity-100">
                            <h3 className="text-lg font-semibold">
                                Judul Gambar 3
                            </h3>
                            <p className="text-sm opacity-80">
                                Deskripsi singkat
                            </p>
                        </div>
                    </div>
                </Grid>

                {/* Gambar 4 */}
                <Grid item xs={12} md={8}>
                    <div className="group relative h-60 w-full overflow-hidden rounded-xl shadow-md">
                        <img
                            src={img4}
                            alt="img4"
                            className="h-full w-full object-cover duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/0 to-transparent opacity-0 duration-700 group-hover:from-black/60 group-hover:opacity-100"></div>

                        <div className="absolute bottom-4 left-4 translate-y-4 text-white opacity-0 duration-700 group-hover:translate-y-0 group-hover:opacity-100">
                            <h3 className="text-lg font-semibold">
                                Judul Gambar 4
                            </h3>
                            <p className="text-sm opacity-80">
                                Deskripsi singkat
                            </p>
                        </div>
                    </div>
                </Grid>
            </Grid>
        </Box>
    );
}
