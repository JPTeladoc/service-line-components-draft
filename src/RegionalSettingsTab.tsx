import Grid from '@mui/material/Grid';
import GridField from './GridField';
import CheckboxList from './CheckboxList';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import { Button, Typography, ClearIcon, AddNewIcon, Toggle, Table } from '@intouchhealth/cig-components';
import Box from '@mui/material/Box'
import { useState } from 'react';

let items = ["US-AK", "Scheduled", "Future 1", "Future 2", "US-AK", "US-AK", "US-AK", "US-AK", "US-AK", "US-AK", "US-AK", "US-AK", "US-AK", "US-AK", "US-AK", "US-AK", "US-AK", "US-AK", "US-AK", "US-AK", "US-AK", "US-AK", "US-AK", "US-AK", "US-AK", "US-AK",]
var inputRegions = ["Central",
  "South",
  "Midwest",
  "SouthEast",
  "SouthWest",
  "NorthEast"];

interface ListItemProps {
  callback: () => void;
  title: string;
}

function RegionsList() {

  const [regions, setRegions] = useState<string[]>(inputRegions);
  const [selectedRegions, setSelectedRegions] = useState<string[]>([]);

  function addRegion(props: any) {
    regions.push(props.newRegion)
  }

  function removeSelectedRegions() {
    let tmp = regions.filter(item => selectedRegions.indexOf(item) < 0);
    setRegions(tmp)
  }

  const handleToggle = (value: string) => () => {
    const currentIndex = selectedRegions.indexOf(value);
    const newChecked = [...selectedRegions];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setSelectedRegions(newChecked);
  };
  return (
    <>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Box component="span" sx={{ p: 1, flexGrow: 1 }}>
          <Typography type="h3" >Regions</Typography>
        </Box>
        {/** Modificar las props para dar padding sin requerir <box>*/}
        <Box sx={{ p: 1 }}>
          <Button
            icon={<AddNewIcon />}
            appearance="outline"
            themeName="positive"
            size="xs"
            onClick={() => { addRegion({ newRegion: "Titan" }) }} />
        </Box>
        <Box sx={{ p: 1 }}>
          <Button
            icon={<ClearIcon />}
            appearance="subtle"
            themeName="danger"
            size="xs"
            onClick={removeSelectedRegions} />
        </Box>
      </Box>
      <List sx={{ overflow: 'scroll', height: 170, border: 2, borderRadius: 1 }}>
        {
          regions.map((value, index) => {
            return (<RegionsListItem title={value} callback={handleToggle(value)} />)
          })
        }
      </List>

    </>
  )
  {/** Focus the row when selected*/ }
}

function RegionsListItem(props: ListItemProps) {

  let selected = false;

  const handleClick = () => {
    selected = !selected
    console.log(selected)
    props.callback();
  }

  return (
    <ListItemButton
      divider={true}
      onClick={handleClick}
      key={props.title}
      selected={selected}
    >
      <Typography type="h5">{props.title}</Typography>
    </ListItemButton>
  )
}

export default function RegionalSettingsTab() {



  const mockData = [{
    timezone: "PT",
    open: "9:00 AM",
    close: "9:00 PM",
    days: "MON, WED, FRI"
  }, {
    timezone: "PT",
    open: "10:00 AM",
    close: "11:00 AM",
    days: "WEEKEND"
  }, {
    timezone: "PT",
    open: "9:00 AM",
    close: "4:00 PM",
    days: "HOLIDAYS"
  }, {
    timezone: "PT",
    open: "9:00 AM",
    close: "5:00 PM",
    days: "01/01/2021"
  }];

  const mockAccessors = [
    { label: "Time Zone", key: "timezone" },
    { label: "Open", key: "open" },
    { label: "Close", key: "close" },
    { label: "Days/Date", key: "days" },
  ];

  return (
    <Grid container spacing={1} justifyContent="center" >
      <Grid item xs={4}>
        {/** Esta parte de codigo esta repetida, crear un component aparte*/}



        <Box>
          <RegionsList />
        </Box>

        <Box sx={{ width: '100%', paddingTop: '5' }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box component="span" sx={{ p: 1, flexGrow: 1 }}>
              <Typography type="h3" >Included Locations</Typography>
            </Box>
            {/** Modificar las props para dar padding sin requerir <box>*/}
            <Box sx={{ p: 1 }}>
              <Button appearance="outline" themeName="primary" size="xs" onClick={() => { }}>
                Select All
              </Button>
            </Box>
            <Box sx={{ p: 1 }}>
              <Button appearance="outline" themeName="primary" size="xs" onClick={() => { }}>
                Clear All
              </Button>
            </Box>
          </Box>
        </Box>
        <Box sx={{ height: "550px" }}>
          <CheckboxList items={items} />
        </Box>
      </Grid>
      <Grid item xs={8} >
        <Grid container justifyContent="center" >
          <GridField label={"Serviced"} leftXs={3} rightXs={9} div={<Toggle enabled={true} />} />
          <GridField label={"Region Name:"} inputValue={'SouthWest'} leftXs={3} rightXs={9} />
          <GridField label={"Minimum Age:"} inputValue={'13'} leftXs={3} rightXs={9} />
          <GridField label={"Maximum Age:"} leftXs={3} rightXs={9} />
        </Grid>

        <Box sx={{ p: 2 }}>
          <Typography type="h3">Business Hours</Typography>
          <Box sx={{ p: 3, border: 2, borderColor: 'black', borderRadius: 1 }}>
            <Table
              accessors={mockAccessors}
              data={mockData}
            />
          </Box>
        </Box>
        <Box sx={{ p: 2 }}>
          <Typography type="h3">Comunication Methods</Typography>
          <Box sx={{ p: 3, border: 2, borderColor: 'black', borderRadius: 1, overflow: 'scroll', height: '174px' }}>
            <Table
              accessors={mockAccessors}
              data={mockData}
            />
          </Box>
        </Box>
      </Grid>
    </Grid>
  )
}
