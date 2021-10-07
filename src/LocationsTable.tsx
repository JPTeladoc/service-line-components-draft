import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const serviceLineTableColumns = [
  { title: "Name", field: "name" },
  { title: "Status", field: "status" },
  { title: "ConsultType", field: "consultType" },
];

const data = [{
  name: "General Medical",
  status: "Enabled",
  consultType: "OnDemand, Scheduled",
}, {
  name: "Family medicine",
  status: "Disabled",
  consultType: "Scheduled",
}, {
  name: "Mental Health",
  status: "Enabled",
  consultType: "All",
}];

export default function LocationsTable() {

  return (
    <TableContainer component={Paper} >
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell >Location </TableCell>
            <TableCell >Status </TableCell>
            <TableCell >Consult Type</TableCell>
            <TableCell >Actions </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {data.map((row) => (
          <TableRow
            key={row.name}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell component="th" scope="row">{row.name}</TableCell>
            <TableCell align="right">{row.status}</TableCell>
            <TableCell align="right">{row.consultType}</TableCell>
            <TableCell align="right">
              <Router>
                <Link to={row.name}>Edit</Link>
              </Router>
            </TableCell>
          </TableRow>
        ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};