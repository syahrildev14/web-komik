import { Link } from '@inertiajs/react';
import DashboardIcon from '@mui/icons-material/Dashboard';
import LogoutIcon from '@mui/icons-material/Logout';
import MenuIcon from '@mui/icons-material/Menu';
import SchoolIcon from '@mui/icons-material/School';
import {
    AppBar,
    Box,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemText,
    Toolbar,
    Typography,
} from '@mui/material';
import { ReactNode, useState } from 'react';

interface AdminLayoutProps {
    title?: string;
    children: ReactNode;
}

const drawerWidth = 240;

export default function AdminLayout({
    title = 'Dashboard Admin',
    children,
}: AdminLayoutProps) {
    const [mobileOpen, setMobileOpen] = useState(false);
    const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

    const drawer = (
        <Box sx={{ width: drawerWidth }}>
            <List>
                <ListItem button component={Link} href="/dashboard">
                    <DashboardIcon sx={{ marginRight: 1 }} />
                    <ListItemText primary="Dashboard" />
                </ListItem>
                <ListItem button component={Link} href="/admin/nilai-siswa">
                    <SchoolIcon sx={{ marginRight: 1 }} />
                    <ListItemText primary="Monitoring Nilai" />
                </ListItem>
                <ListItem button component={Link} method="post" href="/logout">
                    <LogoutIcon sx={{ marginRight: 1 }} />
                    <ListItemText primary="Logout" />
                </ListItem>
            </List>
        </Box>
    );

    return (
        <Box sx={{ display: 'flex' }}>
            {/* TOP BAR */}
            <AppBar position="fixed" sx={{ zIndex: 1300 }}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap>
                        {title}
                    </Typography>
                </Toolbar>
            </AppBar>

            {/* SIDEBAR */}
            <Drawer
                variant="temporary"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{ keepMounted: true }}
                sx={{
                    '& .MuiDrawer-paper': { width: drawerWidth },
                }}
            >
                {drawer}
            </Drawer>

            {/* KONTEN */}
            <Box
                component="main"
                sx={{ flexGrow: 1, padding: 3, marginTop: 8 }}
            >
                {children}
            </Box>
        </Box>
    );
}
