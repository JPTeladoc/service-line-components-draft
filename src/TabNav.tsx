import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import DetailsTab from "./DetailsTab"
import LocationsTab from "./LocationsTab"

import { useHistory } from 'react-router-dom'

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

interface IProps {
  text: string;
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
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

const ReturnButton: React.FC<IProps> = ({
  text
}) => {
  const history = useHistory();

  function handleClick() {
    history.push("/");
  }

  return (
    <Button onClick={handleClick}>
      {text}
    </Button>
  );
};

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: '100vh' }}
    >
      <div style={{ backgroundColor: 'white', width: '80%' }}>
        <Box sx={{ display: 'flex-end', p: 1, color: 'black', bgcolor: 'background.paper', width: '70%' }}>
          <ReturnButton text={'Cancel'} />
          <ReturnButton text={'Save'} />
        </Box>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={value} onChange={handleChange}>
            <Tab label="Details" />
            <Tab label="Location" />
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
    </Grid>
  );
}
