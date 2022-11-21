import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Avatar from '@mui/material/Avatar';

type TypeHeader = {
    title: string;
    username: string;
};

const stringAvatar = (name: string) => {
    return {
        children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
    };
}

const Header: React.FC<TypeHeader> = (props: TypeHeader) => (
    <AppBar position="static">
        <Toolbar className="pr-0">
            <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
            >
                <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                {props.title}
            </Typography>
            <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
            >
                <Avatar {...stringAvatar('Andrei Nazar')} sx={{ bgcolor: "primary.light" }}/>
            </IconButton>
        </Toolbar>
    </AppBar>
);

export default Header;
