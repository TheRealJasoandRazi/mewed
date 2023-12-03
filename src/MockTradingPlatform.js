import { AppBar, Divider, Icon, Toolbar } from '@mui/material';
import * as React from 'react';
import {
    Box,
    Typography,
    Link,
    Grid,
  } from "@mui/material";

import cart from './images/cart.png'
import asset from './images/Asset.png'
import marketplace from './images/marketplace.png'
import transactions from './images/transactions.png'
import marketgif from './videos/Marketplace.gif'
import assetgif from './videos/Asset.gif'
import logingif from './videos/Login.gif'

import Template from './Template';

const itemData = [
    {
      img: marketplace,
      desc: 'This screenshot shows the page with that allows assets to be searched with a live search feature',
    },
    {
      img: asset,
      desc: 'This page shows information about an individual asset such as a price and description. This can be accessed by clicking on the asset',
    },
    {
      img: cart,
      desc: 'The cart feature where the user is able to view, remove or purchase items that they previously viewed and added to cart',
    },
    {
      img: transactions,
      desc: 'The list of transaction made by the user. This includes both selling and purchasing assets',
    }];

const GifsData = [
        {
          img: marketgif,
          desc: 'This gif demonstrates the live search feature within the marketplace page',
        },
        {
            img: assetgif,
            desc: 'Shows the process of selecting and purchasing assets with the cart feature',
        },
        {
          img: logingif,
          desc: 'The login feature of the website, where each account created is associated with their own unique wallet address',
        }
    ];
  
function Platform() {
    return (
        <>
            <div style={{ textAlign: 'center' }}>
                <h1>My Mock Trading Platform</h1>
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
                <h3>ScreenShots</h3>
            </div>

            <Template itemData={itemData} GifsData={GifsData}/>
        </>
    );
};
export default Platform;