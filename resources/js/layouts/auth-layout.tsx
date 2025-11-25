import {
    Box,
    Card,
    CardContent,
    Typography,
    useMediaQuery,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import React from 'react';

export default function AuthLayout({
    children,
    title,
    description,
}: {
    children: React.ReactNode;
    title: string;
    description?: string;
}) {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            minHeight="100vh"
            sx={{
                background: '#27024F', // bisa diubah sesuai tema
                p: 2,
            }}
        >
            <Card
                elevation={6}
                sx={{
                    width: isSmallScreen ? '100%' : 420,
                    borderRadius: 4,
                }}
            >
                <CardContent sx={{ p: 4 }}>
                    <Typography
                        variant="h4"
                        fontWeight="bold"
                        textAlign="center"
                        gutterBottom
                    >
                        {title}
                    </Typography>

                    {description && (
                        <Typography
                            variant="body2"
                            color="text.secondary"
                            textAlign="center"
                            mb={3}
                        >
                            {description}
                        </Typography>
                    )}

                    {/* Render child component */}
                    {children}
                </CardContent>
            </Card>
        </Box>
    );
}
