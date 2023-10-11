import { AppBar, Toolbar } from '@mui/material';
import * as React from 'react';
import {
    Stack,
    Container,
    IconButton,
    Box,
    ImageList,
    ImageListItemBar,
    ImageListItem,
    TextField,
    ThemeProvider,
    MenuItem,
    Menu,
    Typography,
    Link,
  } from "@mui/material";
  import image1 from './images/image1.png';
  import image2 from './images/image2.png';
  import image4 from './images/image4.png';
  import image5 from './images/image5.png';

  import video1 from './videos/video1.gif';
  import video2 from './videos/video2.gif';
  import video3 from './videos/video3.gif';

  import List from "./List";

  const itemData = [
    {
      img: image1,
      desc: 'biggest size maze as a 30x30',
    },
    {
      img: image2,
      desc: 'After the computer found the solution',
    },
    {
      img: image4,
      desc: 'the medium sized maze at 20x20',
    },
    {
      img: image5,
      desc: 'the second colour pallet option',
    }];

  const videoData = [
    {
      img: video1,
      desc: 'the computer finding the solution',
    },{
      img: video2,
      desc: 'changing colour pallets',
    },
    {
      img: video3,
      desc: 'changing the sizes of maze and layout',
    }
  ];

  function MazeGame() {
    return (
      <Container
      fixed
      sx={{
        bgcolor: "transparent",
        marginTop: '10vh', 
        marginBottom: '10vh',
      }}
    >
      <Box sx={{ pt: "10px" }}>
        <h1>Maze Game</h1>
        <Stack spacing={2} sx={{ mb: "10px", borderBottom: "2px solid white" }}>
          <Typography variant="h6">Introduction:</Typography>
          <Typography>
            Using the SDL library with C++ i was able to design and develop a maze game. This maze game allows you to regenerate
            a new maze with just a click of a button. There are 3 maze sizes to choose from, a 12x12 a 20x20 and a 30x30 maze size.
            In addition you change the colour pallet from a blue/white layout to a green/black one. Lastly, if you get stuck you can 
            click the "solve" button and the computer will show you how to complete the maze! If you want to look at how the program 
            looks like you can check out the screenshots and gifs below.
          </Typography>
          <Link href="https://github.com/TheRealJasoandRazi/mewed" target="_blank" rel="noopener noreferrer">
            Source Code Here
          </Link>
        </Stack>
        <Box mt={2}>
          <Typography variant="h6">Screenshots</Typography>
            <List items={itemData}/>
          <Typography variant="h6">Gifs</Typography>
            <List items={videoData} />
        </Box>
      </Box>
    </Container>
    );
  };

  export default MazeGame;