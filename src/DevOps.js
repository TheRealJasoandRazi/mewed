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
import devimg from './images/DevOpsDiagram.png';
import JenkinsDashBoard from './images/JenkinsDashBoard.png';
import tests from './images/TestCases.png';

import List from "./List";

const itemData = [
    {
      img: devimg,
      desc: 'CI/CD pipeline diagram',
    },
    {
        img: JenkinsDashBoard,
        desc: 'The jenkins dashboard where CI builds occured'
    },
    {
        img: tests,
        desc: 'Test cases used for the Selenium server'
    }
];

function DevOps() {
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
            <Box sx={{ pt: "10px" }}>
                <h1>My DevOps Pipeline Project</h1>
                <Stack spacing={2} sx={{ mb: "10px", borderBottom: "2px solid white" }}>
                    <Typography variant="h6">Introduction:</Typography>
                    <Typography>
                        As apart of my course i was froming a team of other students in order to create a fully
                        automated pipeline with a CI/Build server, testing server and production server.
                        This deployment pipeline was creating with the use of Jenkins, Selenium and AWS! In addition,
                        Prometheus, Grafana and CloudWatch were utilised in the production server in order to gather
                        data about the server and visualise it. Lastly, we set up an SNS notification system for when 
                        a deployment failed.
                    </Typography>
                </Stack>
                <Box mt={2}>
                    <Typography variant="h6">Screenshots</Typography>
                        <List items={itemData}/>
                </Box>
            </Box>
        </Container>
    );
};
export default DevOps;