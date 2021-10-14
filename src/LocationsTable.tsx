import { Table } from "@intouchhealth/cig-components"
import { mockAccessors, mockData } from "./TableMockData";

//Eventualmente buscar reemplazar los @mui con @intouchhealth/cig-components
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

export default function LocationsTable() {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: '60vh' }}
    >
      <Paper >
        <Table
          accessors={mockAccessors}
          data={mockData}
        />
      </Paper>
    </Grid>
  );
};
