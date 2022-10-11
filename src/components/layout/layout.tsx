import React, { useState } from 'react';
import { AppBar, Backdrop, Box, Divider, Drawer, IconButton, List, ListItem, ListItemIcon, ListItemText, Paper, Toolbar, Typography } from "@mui/material";
import LibraryMusicOutlinedIcon from '@mui/icons-material/LibraryMusicOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import HeadphonesOutlinedIcon from '@mui/icons-material/HeadphonesOutlined';
import './style.css';

interface IPropsLayout {
  children: React.ReactNode;
  title: string;
  page: (page: string) => void;
}

const Layout: React.FC<IPropsLayout> = (props) => {

  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen(!open);
  }

  return (
    // <Box>
    //   <Backdrop open={open} />

    //   <AppBar position='static'>
    //     <Toolbar>
    //       <IconButton
    //         size="large"
    //         edge="start"
    //         color="inherit"
    //         onClick={handleToggle}
    //       >
    //         <MenuIcon />
    //       </IconButton>
    //       <Typography variant='h6' component='div'>
    //         {props.title}
    //       </Typography>
    //     </Toolbar>
    //   </AppBar>

    //   <Drawer
    //     open={open}
    //     onClose={() => setOpen(false)}
    //     anchor='left'
    //   >
    //     <List>
    //       <ListItem>
    //         <ListItemIcon>
    //           <HeadphonesOutlinedIcon />
    //         </ListItemIcon>
    //         <ListItemText>Musical Ear</ListItemText>
    //       </ListItem>
    //       <Divider />

    //       <ListItem
    //         button
    //         onClick={() => {
    //           props.page('Home');
    //           setOpen(false);
    //         }}
    //       >
    //         <ListItemIcon>
    //           <HomeOutlinedIcon />
    //         </ListItemIcon>
    //         <ListItemText>Home</ListItemText>
    //       </ListItem>

    //       <ListItem
    //         button
    //         onClick={() => {
    //           props.page('Drone');
    //           setOpen(false);
    //         }}
    //       >
    //         <ListItemIcon>
    //           <LibraryMusicOutlinedIcon />
    //         </ListItemIcon>
    //         <ListItemText>Drone</ListItemText>
    //       </ListItem>
    //     </List>
    //   </Drawer>
    //   <Paper elevation={3} className='layoutPaper'>
    //     {props.children}
    //   </Paper>
    // </Box>
    <Paper elevation={6} className="layoutPaper">
      {props.children}
    </Paper>
  );
}

export default Layout;