import React, { useState } from 'react';
import { AppBar, Backdrop, Box, IconButton, SpeedDial, SpeedDialAction, SpeedDialIcon, Toolbar, Typography } from "@mui/material";
import LibraryMusicOutlinedIcon from '@mui/icons-material/LibraryMusicOutlined';
import MenuIcon from '@mui/icons-material/Menu';

interface IPropsLayout {
  children: React.ReactNode;
}

const Layout: React.FC<IPropsLayout> = (props) => {

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
  }

  return (
    <Box>
      <Backdrop open={open} />
        <AppBar position='static'>
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Typography variant='h6' component='div'>
              Menu
            </Typography>
          </Toolbar>
        </AppBar>
      {props.children}
    </Box>
  );
}

export default Layout;