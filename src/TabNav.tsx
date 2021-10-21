import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Typography } from "@intouchhealth/cig-components";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Button } from "@intouchhealth/cig-components";
import DetailsTab from "./DetailsTab"
import GeneralSettingsTab from "./GeneralSettingsTab"
import Paper from '@mui/material/Paper';
import RegionalSettingsTab from './RegionalSettingsTab';
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

          {children}

        </Box>
      )}
    </div>
  );
}

const ReturnButton: React.FC<IProps> = ({ text }) => {
  const history = useHistory();

  function handleClick() {
    history.push("/");
  }

  return (

    <Button appearance="outline" themeName="warning" size="xs" onClick={handleClick}>
      {text}
    </Button>
  );
};

const MyContext = React.createContext('');


//Aca podria pasarle un id con el cual otro metodo rellenaria el contenido a mostrar en cada Tab.
export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    console.log(newValue)
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
        <div style={{ width: '100%' }}>
          <Box sx={{ display: 'flex', p: 1, alignItems: 'baseline' }}>
            <Box component="span" sx={{ p: 2, flexGrow: 1 }}>
              <Typography type="h3" >Edit Service Line: General Medical</Typography>
            </Box>
            <Box sx={{ p: 1 }}> <ReturnButton text={'Cancel'} /></Box>
            <Box sx={{ p: 1 }}> <ReturnButton text={'Save'} /></Box>
          </Box>
        </div>
        <Paper>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs value={value} onChange={handleChange}>
              <Tab label={<Typography type="h5" >Details</Typography>} />
              <Tab label={<Typography type="h5" >General Settings</Typography>} />
              <Tab label={<Typography type="h5" >Regional Settings</Typography>} />
              <Tab label={<Typography type="h5" >Templates</Typography>} />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            <DetailsTab />
          </TabPanel>
          <TabPanel value={value} index={1} >
            <GeneralSettingsTab />
          </TabPanel>
          <TabPanel value={value} index={2}>
            <RegionalSettingsTab/>
          </TabPanel>
        </Paper>
      </div>

    </Grid>
  );
}
