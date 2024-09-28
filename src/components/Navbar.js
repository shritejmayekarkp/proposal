import React, { useEffect, useState } from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import { AppBar, Toolbar, IconButton, Typography, Menu, MenuItem, Box, Badge } from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import LogoutOutlined from '@mui/icons-material/LogoutOutlined';
import NotificationsIcon from '@mui/icons-material/Notifications';

const Navbar = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const navigate = useNavigate();
    const location = useLocation();
    const auth = localStorage.getItem('auth');
    const  [ userName] = useState(localStorage.getItem('email'));
    const  [ userRole] = useState(localStorage.getItem('role'));
    const notificationCount = 3; // Example notification count


    const handleProfileClick = () => {
        navigate('/profile');
        handleClose();
    };

    const handleHomeClick = () => {
        navigate('/');
        handleClose();
    };

    const handleLogout = () => {
        localStorage.removeItem('auth');
        navigate('/login');
        handleClose();
    };

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const getMenuItemStyle = (path) => {
        return location.pathname === path ? { backgroundColor: 'blue', color: 'white' } : {};
    };

    return (
        <>
        <AppBar position="sticky" sx={{ zIndex: 1000 }}>
            <Toolbar>
                <Typography variant="h6" sx={{cursor: 'pointer' }} onClick={handleHomeClick}>
                    <img src="kpmglogo.png" alt="KPMG Logo" width="80" height="auto" style={{ background: "blue" }} />
                </Typography>
                <Box sx={{ flexGrow: 1 }} />
                <Box sx={{ display: 'flex', alignItems: 'center', marginRight: 2 }}>
                    <Typography variant="body1" sx={{ fontWeight: 'bold', marginRight: 1 }}>
                        {auth ? userName: 'Guest'}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'yellow' }}>
                       ({auth ? userRole: 'Guest'})
                    </Typography>
                </Box>
                {
                    auth && 
                    <>
                <IconButton color="inherit">
                            <Badge badgeContent={notificationCount} color="error">
                                <NotificationsIcon />
                            </Badge>
                        </IconButton>
                <Box>
                    <IconButton
                        edge="end"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleMenu}
                        color="inherit"
                    >
                        <AccountCircle />
                    </IconButton>
                    <Menu
                        id="menu-appbar"
                        anchorEl={anchorEl}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >
                        <MenuItem 
                            onClick={handleProfileClick} 
                            sx={{ 
                                '&:hover': { backgroundColor: "#ADD8E6" , color: 'white' },
                                ...getMenuItemStyle('/profile')
                            }}
                        >
                            Profile
                        </MenuItem>
                        <MenuItem 
                            onClick={handleHomeClick} 
                            sx={{ 
                                '&:hover': { backgroundColor: "#ADD8E6" , color: 'white' },
                                ...getMenuItemStyle('/')
                            }}
                        >
                            Home
                        </MenuItem>
                        <MenuItem 
                            onClick={handleLogout}
                            sx={{ '&:hover': { backgroundColor: "#ADD8E6" , color: 'white' } }}
                        >
                           <LogoutOutlined/> Logout
                        </MenuItem>
                    </Menu>
                
                </Box>
                </>
                }

            </Toolbar>
        </AppBar>
        <Outlet/>
        </>
    );
};

export default Navbar;
