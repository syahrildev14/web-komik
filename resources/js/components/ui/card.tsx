import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


export default function BasicCard({
    icon,
    title,
    subtitle,
    description,
    sx,
    iconColor, iconBg
}) {
    return (
        <Card sx={{ minWidth: 275, ...sx }} className='border border-gray-200'>
            <CardContent>
                {/* ICON */}
                <Box
                    sx={{
                        mb: 2,
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: '12px',
                        backgroundColor: iconBg || '#e3f2fd',
                        borderRadius: '12px',
                        color: iconColor || '#1976d2',
                    }}
                >
                    {icon}
                </Box>

                {/* TITLE */}
                {title && (
                    <Typography variant="h5" component="div">
                        {title}
                    </Typography>
                )}

                {/* SUBTITLE */}
                {subtitle && (
                    <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>
                        {subtitle}
                    </Typography>
                )}

                {/* DESCRIPTION */}
                {description && (
                    <Typography variant="body2">{description}</Typography>
                )}
            </CardContent>
        </Card>
    );
}
