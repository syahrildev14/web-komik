import AuthLayout from '@/layouts/auth-layout';
import { useForm } from '@inertiajs/react';
import { Button, Paper, TextField, Typography } from '@mui/material';

export default function Login() {
    const { data, setData, post, processing, errors } = useForm({
        email: 'admin@komik.com',
        password: '123456',
    });

    function submit(e: React.FormEvent) {
        e.preventDefault();
        post('/login');
    }

    return (
        <AuthLayout title="Masuk" description="Hanya admin yang dapat masuk">
            <Paper
                elevation={3}
                sx={{ p: 4, borderRadius: 3, maxWidth: 400, mx: 'auto', mt: 6 }}
            >
                

                <form onSubmit={submit}>
                    <TextField
                        label="Email"
                        fullWidth
                        margin="normal"
                        value={data.email}
                        onChange={(e) => setData('email', e.target.value)}
                        error={Boolean(errors.email)}
                        helperText={errors.email}
                    />
                    <TextField
                        label="Password"
                        type="password"
                        fullWidth
                        margin="normal"
                        value={data.password}
                        onChange={(e) => setData('password', e.target.value)}
                        error={Boolean(errors.password)}
                        helperText={errors.password}
                    />

                    <Button
                        type="submit"
                        fullWidth
                        disabled={processing}
                        variant="contained"
                        sx={{ mt: 2, borderRadius: 2 }}
                    >
                        Login
                    </Button>
                </form>
            </Paper>
        </AuthLayout>
    );
}
