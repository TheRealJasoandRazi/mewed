import * as React from 'react';
import { Grid, Typography, Link } from "@mui/material";
import image1 from './images/image1.png';
import image2 from './images/image2.png';
import image4 from './images/image4.png';
import image5 from './images/image5.png';
import video1 from './videos/video1.gif';
import video2 from './videos/video2.gif';
import video3 from './videos/video3.gif';

import Template from './Template';

const GifsData = [
  {
    img: video1,
    desc: 'This video shows the user utilising the solve feature, where the program runs a BDS algorithm to find the solution',
  },
  {
    img: video2,
    desc: 'The gif showcases the colour pallet feature where the colour change does not affect the position of the player or the layout of the maze',
  },
  {
    img: video3,
    desc: 'The video demonstrates the ability of the program to generate a new maze of the chosen sizes. Keep in mind the black screens are a result of the recording software and not the program',
  }
]
const itemData = [
  {
    img: image1,
    desc: 'This image shows the largest size maze as a 30x30 which is the largest maze generation option',
  },
  {
    img: image2,
    desc: 'The result of clicking "Solve" and having the computer find the solution',
  },
  {
    img: image4,
    desc: 'Shows one of the three size options for generating the mazes, This shows the medium-sized maze at 20x20',
  },
  {
    img: image5,
    desc: 'The second colour pallet option with a green and black colour pallet',
  }];

function MazeGame() {
  return (
    <>
      <div style={{ textAlign: 'center' }}>
        <h1>MAZE GAME</h1>
        <Typography>
          Using the SDL library with C++ I was able to design and develop a maze game. This maze game allows you to regenerate a new maze with just a click of a button. There are 3 maze sizes to choose from, a 12x12, a 20x20, and a 30x30 maze size. In addition, you can change the color palette from a blue/white layout to a green/black one. Lastly, if you get stuck you can click the "solve" button and the computer will show you how to complete the maze! If you want to look at how the program looks like you can check out the screenshots and gifs below.
        </Typography>
        <Link href="https://github.com/TheRealJasoandRazi/Maze_Game" target="_blank" rel="noopener noreferrer">
          Source Code Here
        </Link>
        <h3>ScreenShots</h3>
      </div>

      <Template itemData={itemData} GifsData={GifsData} />
    </>
  );
}

export default MazeGame;
