import * as React from 'react';
import {
  Typography,
  Paper,
  Box,
} from "@mui/material";
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import Grow from '@mui/material/Grow';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
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

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const icon = (
  <Paper sx={{ m: 1, width: 100, height: 100 }} elevation={4}>
    <svg>
      <Box
        component="polygon"
        points="0,100 50,00, 100,100"
        sx={{
          fill: (theme) => theme.palette.common.white,
          stroke: (theme) => theme.palette.divider,
          strokeWidth: 1,
        }}
      />
    </svg>
  </Paper>
);

function MySkills() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <h1
        style={{textAlign: 'center'}}
      >
        My Skills</h1>
      <Box
        sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', width: '90%', margin: '0 auto' }}
      >
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          sx={{ borderRight: 1, borderColor: 'divider' }}
        >
          <Tab label="Web Development" {...a11yProps(0)} />
          <Tab label="Programming" {...a11yProps(1)} />
          <Tab label="Cloud" {...a11yProps(2)} />
          <Tab label="DevOps" {...a11yProps(3)} />
          <Tab label="DataBases" {...a11yProps(4)} />
        </Tabs>
        <TabPanel value={value} index={0}>
          <Grow in={true}>
            <Typography sx={{ color: 'black' }}>JavaScript - This website is made with React.js!</Typography>
          </Grow>
          <Grow in={true} timeout={1000}>
            <Typography sx={{ color: 'black' }}>PHP</Typography>
          </Grow>
          <Grow in={true} timeout={2000}>
            <Typography sx={{ color: 'black' }}>HTML/CSS</Typography>
          </Grow>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Grow in={true}>
            <Typography sx={{ color: 'black' }}>C++ - Maze Game from Personal Projects</Typography>
          </Grow>
          <Grow in={true} timeout={1000}>
            <Typography sx={{ color: 'black' }}>C#</Typography>
          </Grow>
          <Grow in={true} timeout={2000}>
            <Typography sx={{ color: 'black' }}>Python</Typography>
          </Grow>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Grow in={true}>
            <Typography sx={{ color: 'black' }}>AWS</Typography>
          </Grow>
          <Grow in={true} timeout={1000}>
            <Typography sx={{ color: 'black' }}>I am currently pursuing an AWS Associate Solutions Architect certification</Typography>
          </Grow>
        </TabPanel>
        <TabPanel value={value} index={3}>
          <Grow in={true}>
            <Typography sx={{ color: 'black' }}>JenKins</Typography>
          </Grow>
          <Grow in={true} timeout={1000}>
            <Typography sx={{ color: 'black' }}>Selenium</Typography>
          </Grow>
          <Grow in={true} timeout={2000}>
            <Typography sx={{ color: 'black' }}>Prometheus</Typography>
          </Grow>
          <Grow in={true} timeout={3000}>
            <Typography sx={{ color: 'black' }}>Grafana</Typography>
          </Grow>
        </TabPanel>
        <TabPanel value={value} index={4}>
          <Grow in={true}>
            <Typography sx={{ color: 'black' }}>SQL - Used in university projects</Typography>
          </Grow>
        </TabPanel>
      </Box>
    </>
  );
}

export default MySkills;
