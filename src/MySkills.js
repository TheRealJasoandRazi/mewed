import * as React from 'react';
import {
  Container,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

function createData(name, skill, framework, devops, cloud, exp) {
  return { name, skill, framework, devops, cloud, exp };
}

const rows = [
  createData('Undergoing AWS Associate Certificate', 'N', 'N', 'Y', "this website runs on AWS!"),
  createData('Creating CI/CD pipelines', 'N', 'Y', 'Y', 'DevOps Team Project'),
  createData('WebDevelopment', 'Y', 'N', 'Y', 'This website is made from React.js!'),
  createData('C++/C#/Programming', 'N', 'N', 'N', 'MazeGame in Projects is made with C++'),
  createData('SQL/Databases', 'N', 'N', 'Y', 'In class projects'),
];

function MySkills() {
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
      <Typography variant="h3" sx={{ marginBottom: '20px' }}>Skills</Typography>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell> Skill </TableCell>
              <TableCell align="right">FrameWork</TableCell>
              <TableCell align="right">DevOps</TableCell>
              <TableCell align="right">Cloud</TableCell>
              <TableCell align="right">Experience</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.skill}</TableCell>
                <TableCell align="right">{row.framework}</TableCell>
                <TableCell align="right">{row.devops}</TableCell>
                <TableCell align="right">{row.cloud}</TableCell>
                <TableCell align="right">{row.exp}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}

export default MySkills;
