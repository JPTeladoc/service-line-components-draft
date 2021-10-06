import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import { Table } from "@intouchhealth/cig-components";
import DetailsTab from "./DetailsTab"
import LocationsTab from "./LocationsTab"

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3}}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div style={{backgroundColor:'white', width:'80%'}}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange}>
          <Tab label="Details" />
          <Tab label="Location"  />
          <Tab label="Templates" />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <DetailsTab />
      </TabPanel>
      <TabPanel value={value} index={1} >
        <LocationsTab />
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
      </div>
  );
}
