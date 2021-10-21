import Grid from '@mui/material/Grid';
import GridField from './GridField';
import CheckboxList from './CheckboxList';
import List from '@mui/material/List';

const items = ["", "", "", "", ""];

export default function RegionalSettingsTab() {
  return (
    <Grid container spacing={1} justifyContent="center">
      <Grid item xs={4}>

        <List />
        <Grid container>

        </Grid>
        <CheckboxList items={items} />
      </Grid>
      <Grid item xs={8}>
        <Grid container spacing={1} justifyContent="center" >
          <GridField label={"adas"} leftXs={4} rightXs={8}/>
          <GridField label={"adas"} leftXs={4} rightXs={8}/>
          <GridField label={"adas"} leftXs={4} rightXs={8}/>
        </Grid>
      </Grid>
    </Grid>
  )
}
