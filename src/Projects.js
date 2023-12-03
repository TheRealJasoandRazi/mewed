import { Flex, Container, Box, Stack, Typography, Card, Divider, CardMedia, Grid } from "@mui/material";
import image from './images/image5.png';
<<<<<<< HEAD
import DevOps from './images/DevOps.png';
import TradingPlatform from './images/marketplace.png';

const commonCardStyle = {
  bgcolor: 'cyan',
}

const MazeGameCard = (
  <Card sx={commonCardStyle}>
    <Typography sx={{ fontSize: 20 }} color="text.primary" gutterBottom>
      Maze Game
    </Typography>
    <Divider />
    <Box
    style={{
      height: '40vh',
    }}>
      <CardMedia
          component="img"
          alt="Project Image"
          src={image}
          style={{
            objectFit: "cover",
            width: "100%",
            height: "100%",
          }}
        />
    </Box>
  </Card>
);

const MockPlatformCard = (
=======
import TradingPlatform from './images/MockTradingPlatform.jpeg';
import { useSpring, animated, useScroll, useInView} from '@react-spring/web';

const commonCardStyle = {
  bgcolor: 'cyan',
  height: '300'
}

const MazeGameCard = (
    <Card sx={commonCardStyle}>
      <Typography sx={{ fontSize: 20 }} color="text.primary" gutterBottom>
        Maze Game
      </Typography>
      <Divider />
      <Box>
        <CardMedia
            component="img"
            alt="Project Image"
            src={image}
            style={{
              objectFit: "cover",
              width: "100%",
              height: "100%",
            }}
          />
      </Box>
    </Card>
);

const MockTradingPlatform = (
>>>>>>> 4fffd6702 (commit message)
  <Card sx={commonCardStyle}>
    <Typography sx={{ fontSize: 20 }} color="text.primary" gutterBottom>
      Mock Trading Platform
    </Typography>
    <Divider />
<<<<<<< HEAD
    <Box
    style={{
      height: '40vh',
    }}>
      <CardMedia
        component="img"
        alt="Project Image"
        src={TradingPlatform}
        style={{
          objectFit: "cover",
          width: "100%",
          height: "100%",
        }}
      />
    </Box>
=======
    <CardMedia
      component="img"
      alt="Project Image"
      src={TradingPlatform}
      style={{
        objectFit: "cover",
        width: "100%",
        height: "100%",
      }}
    />
>>>>>>> 4fffd6702 (commit message)
  </Card>
);

function Projects() {
<<<<<<< HEAD
  return (
    <Container
      fixed
      sx={{
        bgcolor: "transparent",
        marginTop: '10vh',
        marginBottom: '10vh',
        textAlign: 'center',
      }}
    >
        <h1>Projects</h1>
        <Stack direction="row" spacing={5} sx={{ 
            justifyContent: 'flex-end',
            padding: '1vh' 
        }}>
          <Box sx={{ flex: 1, textAlign: 'center' }}>
            <a href="/MazeGame" style={{ textDecoration: "none" }}>
              {MazeGameCard}
            </a>
          </Box>
          <Box sx={{ flex: 1, textAlign: 'center'}}>
            <a href="/MockTradingPlatform" style={{ textDecoration: "none" }}>
              {MockPlatformCard}
            </a>
          </Box>
      </Stack>
    </Container>
=======

    const [ref1, inView1] = useInView();
    const [ref2, inView2] = useInView();
    const [ref3, inView3] = useInView();
  
    const left2right = useSpring({
      from: { x: 0 },
      to: { x: inView1 ? window.innerWidth * 0.1 : 0 },
    });
    const right2left = useSpring({
      from: { x: window.innerWidth },
      to: { x: inView2 ? window.innerWidth * 0.4 : window.innerWidth },
    });
    const left2right2 = useSpring({
      from: { x: 0 },
      to: { x: inView3 ? window.innerWidth * 0.1 : 0 },
    });
    return (
    <Stack spacing={2} sx={{paddingTop: '1%'}}>
            <animated.div
                ref={ref1}
                style={{
                    width: '50%',
                    height: '33%',
                    background: '#ff6d6d',
                    borderRadius: 8,
                    ...left2right,
                    alignContent: 'center',
                    textAlign: 'center'
                }}
            >
                <h1>My Projects</h1>
            </animated.div>

            <animated.div
                ref={ref2}
                style={{
                    width: '50%',
                    height: '33%',
                    background: '#ff6d6d',
                    borderRadius: 8,
                    ...right2left,
                    alignContent: 'center',
                    textAlign: 'center',
                }}
            >
                {MazeGameCard}
            </animated.div>

            <animated.div
                ref={ref3}
                style={{
                    width: '50%',
                    height: '33%',
                    background: '#ff6d6d',
                    borderRadius: 8,
                    ...left2right2,
                    alignContent: 'center',
                    textAlign: 'center',
                }}
            >
                {MockTradingPlatform}
            </animated.div>
    </Stack>
>>>>>>> 4fffd6702 (commit message)
  );
}

export default Projects;
