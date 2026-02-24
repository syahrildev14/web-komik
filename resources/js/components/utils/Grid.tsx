import Box from '@mui/material/Box';
import Grid from '@mui/material/GridLegacy';
// images
import img1 from '@/assets/grid/1.jpg';
import img2 from '@/assets/grid/2.jpg';
import img3 from '@/assets/grid/3.jpg';
import img4 from '@/assets/grid/4.jpg';


export default function ImageGrid() {
    return (
        <Box sx={{ flexGrow: 1 }} className="mt-12 px-2 md:px-6 mb-4">
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


                    </div>
                </Grid>
            </Grid>
        </Box>
    );
}
