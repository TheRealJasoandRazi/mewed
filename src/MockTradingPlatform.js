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
    Link,
  } from "@mui/material";

import List from "./List";
import cart from './images/cart.png'
import asset from './images/Asset.png'
import marketplace from './images/marketplace.png'
import transactions from './images/transactions.png'
import marketgif from './videos/Marketplace.gif'
import assetgif from './videos/Asset.gif'
import logingif from './videos/Login.gif'

const itemData = [
    {
      img: marketplace,
      desc: 'shows the page with that allows assets to be searched',
    },
    {
      img: asset,
      desc: 'the page that shows individual assets information',
    },
    {
      img: cart,
      desc: 'the cart feature where the user buys all of their selected assets',
    },
    {
      img: transactions,
      desc: 'the list of transactions made by the user',
    }];

const videoData = [
        {
          img: marketgif,
          desc: 'shows the live search feature in the marketplace',
        },
        {
            img: assetgif,
            desc: 'shows the process of buying assets with the cart',
        },
        {
          img: logingif,
          desc: 'the login feature',
        }
    ];

function Platform() {
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
                <h1>My Mock Trading Platform</h1>
                <Stack spacing={2} sx={{ mb: "10px", borderBottom: "2px solid white" }}>
                    <Typography variant="h6">Introduction:</Typography>
                    <Typography>
                        As apart of my course i was froming a team of other students in order to create a fully
                        working trading platform with backend and frontend components. The primary features of this project is to display the 
                        digital assets that other users have uploaded in the digital marketplace where it can be added to a "cart"
                        and bought. Another feature of the website is that it has a live search feature for when searching through the marketplace 
                        and any assets bought will be stored in the "transaction history".
                    </Typography>
                    <Typography>
                        The projects utilises React.js and Material UI for the frontend.
                        Express.js for developing the API.
                        Truffle and Ganache for creating smart contracts and the blockchain.
                        MariaDB to store meta data for the Assets.
                    </Typography>
                    <Link href="https://github.com/TheRealJasoandRazi/innoproj" target="_blank" rel="noopener noreferrer">
                        Source Code Here
                    </Link>
                </Stack>
                <Box mt={2}>
                    <Typography variant="h6">Screenshots</Typography>
                        <List items={itemData} />
                    <Typography variant="h6">Gifs</Typography>
                        <List items={videoData} />
                </Box>
            </Box>
        </Container>
    );
};
export default Platform;