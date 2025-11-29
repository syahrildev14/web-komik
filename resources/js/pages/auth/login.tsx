import AuthLayout from '@/layouts/auth-layout';
import { router } from '@inertiajs/react';
import { Button, Paper, TextField } from '@mui/material';

export default function Login() {
    const handleLogin = () => {
        router.visit('/admin/dashboard');
    };

    return (
        <AuthLayout title="Masuk" description="Hanya admin yang dapat masuk">
            <Paper
                elevation={3}
                sx={{ p: 4, borderRadius: 3, maxWidth: 400, mx: 'auto', mt: 6 }}
            >
                <form>
                    <TextField  fullWidth margin="normal" value={"admin@gmail.com"}/>
                    <TextField
                        
                        type="password"
                        fullWidth
                        margin="normal"
                        value={"password123"}
                    />

                    <Button
                        fullWidth
                        variant="contained"
                        sx={{ mt: 2, borderRadius: 2 }}
                        onClick={handleLogin}
                    >
                        Login
                    </Button>
                </form>
            </Paper>
        </AuthLayout>
    );
}
