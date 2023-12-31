import { AppBar, Divider, Icon, Toolbar } from '@mui/material';
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
    Container,
    Popper,
    Paper,
    Fade,
    Grow,
    CardMedia,
  } from "@mui/material";
  import Button from '@mui/material/Button';
  import Card from '@mui/material/Card';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InfoIcon from '@mui/icons-material/Info';
import image from './images/ProjectImage.jpeg'

import { Particles } from 'react-tsparticles';

const card = (
      <Card
        sx={{ bgcolor: "cyan" 
      }} 
      >
      <Typography sx={{ fontSize: 20}} color="text.primary" gutterBottom>
        My Personal Projects
      </Typography>
      <Divider />
      <CardMedia
        component="img" 
        alt="Project Image"
        height="200" 
        src={image} 
        style={{
          objectFit: "cover",
          width: "100%",
          height: "100%",
        }}
      />
    </Card>
);

function HomePage() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const [placement, setPlacement] = React.useState();

  const handleClick = (newPlacement) => (event) => {
    setAnchorEl(event.currentTarget);
    setOpen((prev) => placement !== newPlacement || !prev);
    setPlacement(newPlacement);
  };

  return (
    <Container
      fixed
      sx={{
        bgcolor: "transparent",
        marginTop: '10vh', 
        marginBottom: '10vh',
        width: "100%",
        height: '80vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
       <Particles
        id="tsparticles"
        options={{
          background: {
            color: {
              value: 'transparent',
            },
            image: {
              src: './images/neatbg.png', // Set the PNG background image
              repeat: 'no-repeat',
              size: 'cover',
            },
          },
          particles: {
            number: {
              value: 100, // Set the number of particles
            },
          }
        }}
      />
      <Box sx={{ flex: 1, textAlign: 'center' }}> 
        <Box name="center-left" mr={15}>
          <h1 style={{margin: "0", padding: "0px"}}> Hi,</h1>
          <h1 style={{margin: "0", margin: "5px"}}>I'm Nemanja</h1>
          <a href='/AboutMe' style={{ textDecoration: 'none' }}>
            <Button variant="contained">About Me </Button>
          </a>
          <Stack direction = "row" sx={{ 
              justifyContent: 'center',
          }}>
            <a href="https://github.com/TheRealJasoandRazi" target='_blank'>
              <IconButton><GitHubIcon /></IconButton>
            </a>
            <a href='https://www.linkedin.com/in/nemanja-popovic-a35333244/' target='_blank'>
              <IconButton><LinkedInIcon /></IconButton>
            </a>
            <IconButton onClick={handleClick('bottom')}>
              <InfoIcon />
            </IconButton>
          </Stack>
        </Box>
      </Box>
      <Box sx={{ flex: 1, textAlign: 'center' }}> 
        <a href="/Projects"
          style={{textDecoration: "none"}}>
          {card}
        </a>
      </Box>
      <Popper open={open} anchorEl={anchorEl} placement={placement} transition>
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            <Paper sx={{ backgroundColor: 'black'}}>
              <Typography sx={{ p: 2, color: 'white' }}>This Webpage was made with React and Material UI and runs on AWS!</Typography>
            </Paper>
          </Fade>
        )}
      </Popper>
    </Container>
  );
}

export default HomePage;
