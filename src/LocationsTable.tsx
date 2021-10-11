import {
  useHistory
} from "react-router-dom";

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid'

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

  const history = useHistory();

  function EditButton(props:any) {
    return (
      <Button onClick={props.onClick}>
        Edit
      </Button>
    );
  }

  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: '100vh' }}
    >
      <Grid item xs={10}>
        <TableContainer component={Paper} >
            <Table>
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
                  >
                    <TableCell >{row.name}</TableCell>
                    <TableCell >{row.status}</TableCell>
                    <TableCell >{row.consultType}</TableCell>
                    <TableCell align="center">
                      <EditButton onClick={() => {history.push("/BasicTabs")}} />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>

  );
};



  // sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
