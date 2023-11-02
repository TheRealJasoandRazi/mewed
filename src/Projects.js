import { Flex, Container, Box, Stack, Typography, Card, Divider, CardMedia, Grid } from "@mui/material";
import image from './images/image5.png';
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
  <Card sx={commonCardStyle}>
    <Typography sx={{ fontSize: 20 }} color="text.primary" gutterBottom>
      Mock Trading Platform
    </Typography>
    <Divider />
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
  </Card>
);

function Projects() {
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
  );
}

export default Projects;
