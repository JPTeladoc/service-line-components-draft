import Grid from '@mui/material/Grid';
import GridField from './GridField';
import CheckboxList from './CheckboxList';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import { Button, Typography } from '@intouchhealth/cig-components';
import Box from '@mui/material/Box'

let items = ["On Demand","Scheduled","Future 1","Future 2"]

interface ListItemProps {
  callback?: (key: string) => void;
  title: string;
}

function RegionalListItem(props: ListItemProps) {

  const handleClick = (value: string) => {
    if (props.callback) {
      props.callback(value)
    }
  }

  return (
    <ListItem>
      {props.title}
    </ListItem>
  )
}

export default function RegionalSettingsTab() {
  return (
    <Grid container spacing={1} justifyContent="center">
      <Grid item xs={4}>
        <List sx={{ width: '100%', maxWidth: 400, overflow:'scroll', maxHeight:170 }}>
          <RegionalListItem title={"Central"} />
          <RegionalListItem title={"South"} />
          <RegionalListItem title={"Midwest"} />
          <RegionalListItem title={"SouthEast"} />
          <RegionalListItem title={"SouthWest"} />
          <RegionalListItem title={"NorthEast"} />
        </List>
      </Grid>
      <Grid item xs={8}>
        <Grid container spacing={1} justifyContent="center" >
          <GridField label={"adas"} leftXs={4} rightXs={8} />
          <GridField label={"adas"} leftXs={4} rightXs={8} />
          <GridField label={"adas"} leftXs={4} rightXs={8} />
        </Grid>
      </Grid>

      <Grid item xs={4}>
      <>
      <Box sx={{ display: 'flex', p: 1, alignItems: 'baseline' }}>
        <Box component="span" sx={{ p: 2, flexGrow: 1 }}>
          <Typography type="h3" >Edit Service Line: General Medical</Typography>
        </Box>
        <Box sx={{ p: 1 }}>
          <Button onClick={()=>{}}> Cancel </Button>
        </Box>
        <Box sx={{ p: 1 }}> <Button onClick={()=>{}} /></Box>
      </Box>
</>
        <Grid container spacing={1} justifyContent="center">
        <Grid item>
          Included Locations:
        </Grid>
        <Grid item>
        <Button appearance="outline" themeName="warning" size="xs" onClick={() => { }}>
          Select All
        </Button>
        </Grid>
        <Grid item>
        <Button appearance="outline" themeName="warning" size="xs" onClick={() => {}}>
          Clear All
        </Button>
        </Grid>
        </Grid>


        <CheckboxList items={items} />
      </Grid>

        <Grid item xs={8}>
          <div style={{background:'red', height:'100%', width:'100%'}}/>
        </Grid>
    </Grid>
  )
}
