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
  } from "@mui/material";
  import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

  function AboutMe() {
    return (
        <Container
        fixed
        sx={{
          bgcolor: "transparent",
          marginTop: '10vh', 
          marginBottom: '10vh',
        }}
        >
            <Typography variant="h2" gutterBottom>
                About Me
            </Typography>
            <Box>
                <Stack spacing={2}>
                    <Typography>
                        I'm a dedicated university student currently pursuing a Bachelor of Computer Science at Swinburne University, currently in my second year. My academic journey has been marked by consistent effort, maintaining a distinction grade (70%+) throughout my course. My consistent pursuit to learn caused me to work diligently toward earning my AWS Associate Solutions Architect certificate.
                        Over the past two years, my learning has driven me to develop a diverse skill set. I've gained proficiency in working with SQL databases, programming in C++/C#, and JavaScript.
                    </Typography>
                    <Typography>
                        Outside of my academic pursuits, I have a hobby for pick-up basketball where i enjoy most connecting with others and friends. Additionally, I'm an avid reader, where books and novels dig into my imagination and creativity.
                    </Typography>
                    <Typography>
                        Feel free to reach out to me through the contact information provided below. I'm always open to new opportunities, collaborations, and discussions.
                    </Typography>
                </Stack>
                <Stack direction="row" spacing={5} mt={5}>
                    <Box>
                        <PhoneIcon />
                        <p>0481961986</p>
                    </Box>
                    <Box>
                    <a target='_blank' href='mailto:Neno701@outlook.com' style={{ textDecoration: 'none', color: 'black' }}>
                        <EmailIcon />
                        <p>Neno701@outlook.com</p>
                    </a>
                    </Box>
                </Stack>
            </Box>
        </Container>
    )
  };
  
  export default AboutMe;