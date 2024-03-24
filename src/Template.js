import React, { useState, useEffect } from 'react';
import { Grid, Typography, Link } from "@mui/material";
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useSpring } from '@react-spring/web';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

function Template({ itemData, GifsData }) {
  const [screenshotTab, setScreenshotTab] = React.useState(0);
  const [gifsTab, setGifsTab] = React.useState(0);
  const [showGifs, setShowGifs] = React.useState(false);

  const getWindowWidth = () => { //used for jest test since it doesn't open browsers
    if (typeof window !== 'undefined') {
        return window.innerWidth;
    }
    return 0;
  };

  const handleScreenshotChange = (event, newValue) => {
    setScreenshotTab(newValue);
  };

  const handleGifsChange = (event, newValue) => {
    setGifsTab(newValue);
  };

  const handleToggleGifs = () => {
    setShowGifs(!showGifs);
    setGifsTab(0);
  };

  const [screenWidth] = useState(getWindowWidth());
  const [change, setChange] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const newScreenWidth = getWindowWidth();
      
      // Update the change state based on the newScreenWidth
      setChange(newScreenWidth > 585);
    };
  
    handleResize();
  
    window.addEventListener('resize', handleResize);
  
    // Cleanup: remove event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [screenWidth]);

  return (
    <>
      {change ? ( //change depending on window size
        <Box sx={{ width: '100%' }}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs
              value={screenshotTab}
              onChange={handleScreenshotChange}
              aria-label="basic tabs example"
              centered
            >
              {itemData.map((item, index) => (
                <Tab
                  key={index}
                  label={`Screenshot ${index + 1}`}
                  {...a11yProps(index)}
                  sx={{ color: 'white' }}
                />
              ))}
            </Tabs>
          </Box>
        </Box>
      ) : (
        <Box sx={{ width: '100%' }}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs
              value={screenshotTab}
              onChange={handleScreenshotChange}
              aria-label="basic tabs example"
              variant="scrollable"
            >
              {itemData.map((item, index) => (
                <Tab
                  key={index}
                  label={`Screenshot ${index + 1}`}
                  {...a11yProps(index)}
                  sx={{ color: 'white' }}
                />
              ))}
            </Tabs>
          </Box>
        </Box>
      )}

      {itemData.map((item, index) => (
        <CustomTabPanel key={index} value={screenshotTab} index={index}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <img
                src={item.img}
                alt={`Item ${index + 1}`}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'fill',
                }}
              />
            </Grid>
            <Grid item xs={12} md={6} sx={{ display: 'flex', alignItems: 'center' }}>
              <Typography sx={{ textAlign: 'center' }}>{item.desc}</Typography>
            </Grid>
          </Grid>
        </CustomTabPanel>
      ))}

      <Button
        variant="contained"
        onClick={handleToggleGifs}
        sx={{ mx: 'auto', display: 'block' }}
      >
        {showGifs ? 'Hide Gifs' : 'Show GIFs'}
      </Button>

      {showGifs ? (
        <>
          <h3 style={{ textAlign: 'center' }}>Gifs</h3>
          <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <Tabs
                value={gifsTab}
                onChange={handleGifsChange}
                aria-label="basic tabs example"
                centered
              >
                {GifsData.map((item, index) => (
                  <Tab
                    key={index}
                    label={`Gif ${index + 1}`}
                    {...a11yProps(index)}
                    sx={{ color: 'white' }}
                  />
                ))}
              </Tabs>
            </Box>

            {GifsData.map((item, index) => (
              <CustomTabPanel key={index} value={gifsTab} index={index}>
                <Grid container spacing={2}>
                  <Grid item xs={12} md={6}>
                    <img
                      src={item.img}
                      alt={`Item ${index + 1}`}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'fill',
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} md={6} sx={{ display: 'flex', alignItems: 'center' }}>
                    <Typography sx={{ textAlign: 'center' }}>{item.desc}</Typography>
                  </Grid>
                </Grid>
              </CustomTabPanel>
            ))}
          </Box>
        </>
      ) : null}
    </>
  );
}

export default Template;
