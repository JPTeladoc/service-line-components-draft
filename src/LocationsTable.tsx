import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory
} from "react-router-dom";

import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

import BasicTabs from './DetailsTab';

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

function EditButton() {
  const history = useHistory();

  function handleClick() {
    history.push("/BasicTabs");
  }

  return (
    <Button onClick={handleClick}>
      Edit
    </Button>
  );
}

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
                <EditButton/>
              </Router>
            </TableCell>
          </TableRow>
        ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
