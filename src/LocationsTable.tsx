import {
  useHistory
} from "react-router-dom";

import { Table } from "@intouchhealth/cig-components"

//Eventualmente buscar reemplazar los @mui con @intouchhealth/cig-components
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid'

function EditButton(props:any) {
  const history = useHistory();

  function pushtab(){
    history.push(`/${props.path}`)
  }

  return (
    <Button onClick={() => {pushtab()}}>
      Edit
    </Button>
  );
}

//TODO: Add a generator of the mock data
const mockData = [{
  name: "General Medical",
  status: "Enabled",
  consultType: "OnDemand, Scheduled",
  action: <EditButton path={`General Medical`} />,
}, {
  name: "Family medicine",
  status: "Disabled",
  consultType: "Scheduled",
  action: <EditButton path={"BasicTabs"} />,
}, {
  name: "Mental Health",
  status: "Enabled",
  consultType: "All",
  action: <EditButton path={"BasicTabs"} />,
}];

const mockAccessors = [
  { label: "Name", key: "name" },
  { label: "Status", key: "status" },
  { label: "consultType", key: "consultType" },
  { label: "", key: "action" },
];

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
      <Grid item xs={10}>
          <Table
            accessors={mockAccessors}
            data={mockData}
          />
        </Grid>
      </Grid>
  );
};
