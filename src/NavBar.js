import { AppBar, Toolbar } from '@mui/material';
import * as React from 'react';
import {
    Stack,
    IconButton,
    Box,
    TextField,
    ThemeProvider,
    MenuItem,
    Menu,
    Typography,
  } from "@mui/material";
import AssignmentIcon from '@mui/icons-material/Assignment';
import HomeIcon from '@mui/icons-material/Home';
import Person2Icon from '@mui/icons-material/Person2';
import ConstructionIcon from '@mui/icons-material/Construction';

function NavBar() {
    const iconSize = '2rem';
  
    return (
      <AppBar sx={{ backgroundColor: 'transparent', boxShadow: 'none'}}>
        <Toolbar>
          <a href="/">
            <IconButton color="primary">
              <HomeIcon style={{ fontSize: iconSize }} />
            </IconButton>
          </a>
          <Box sx={{ flexGrow: 1 }}>
            <Stack direction="row" spacing={5} sx={{ 
                justifyContent: 'flex-end',
                padding: '1vh' 
                }}>
              <a href="/Projects">
                <IconButton color="primary">
                  <AssignmentIcon style={{ fontSize: iconSize }} />
                </IconButton>
              </a>
              <a href="/MySkills">
                <IconButton color="primary">
                  <ConstructionIcon style={{ fontSize: iconSize }} />
                </IconButton>
              </a>
              <a href="/AboutMe">
                <IconButton color="primary" >
                  <Person2Icon style={{ fontSize: iconSize }} />
                </IconButton>
              </a>
            </Stack>
          </Box>
        </Toolbar>
      </AppBar>
    );
  }
  
  export default NavBar;

