import React from 'react';
import { Container, AppBar, Toolbar, Typography, IconButton, Button, Menu, MenuItem, Hidden } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const NavBar = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <AppBar position="fixed" color="transparent">
            <Container>
                <Toolbar>
                    <Hidden lgUp>
                        <IconButton
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            aria-controls="menu"
                            aria-haspopup="true"
                            onClick={handleClick}
                        >
                            <MenuIcon />
                        </IconButton>
                    </Hidden>
                    <Menu
                        data-testid="menu"
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >
                        <MenuItem onClick={handleClose}>Home</MenuItem>
                        <MenuItem onClick={handleClose}>About</MenuItem>
                        <MenuItem onClick={handleClose}>Property</MenuItem>
                        <MenuItem onClick={handleClose}>Pages</MenuItem>
                        <MenuItem onClick={handleClose}>Contact</MenuItem>
                    </Menu>
                    <Typography variant="h6" style={{ flexGrow: 1 }}>
                        Makaan
                    </Typography>
                    <Hidden mdDown>
                        <div>
                            <Button color="inherit">Home</Button>
                            <Button color="inherit">About</Button>
                            <Button color="inherit">Property</Button>
                            <Button color="inherit">Pages</Button>
                            <Button color="inherit">Contact</Button>
                        </div>
                    </Hidden>
                    <Button color="primary" variant="contained">Add Property</Button>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default NavBar;
