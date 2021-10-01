import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabContent(index: Number) {
  return (
    <Box title="Component Title 3">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the
      1500s, when an unknown printer took a galley of type and scrambled it to
      make a type specimen book. It has survived not only five centuries, but
      also the leap into electronic typesetting, remaining essentially
      unchanged. It was popularised in the 1960s with the release of Letraset
      sheets containing Lorem Ipsum passages, and more recently with desktop
      publishing software like Aldus PageMaker including versions of Lorem
      Ipsum.
    </Box>
  );
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
          <Box style={{backgroundColor: 'white', color: 'black'}} >
            <TabContent index={1}/>
          </Box>
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

  // const content_array = [<h1>First Tab</h1>, <h1>Second Tab</h1>, <h1>Third Tab</h1>];
  //
  // return (
  //     <div>
  //         <Tabs value={value} onChange={handleChange} indicatorColor="primary"
  //             textColor="primary" centered>
  //             <Tab value='1' label='BASIC DETAILS'></Tab>
  //             <Tab value='2' label='CONTACT DETAILS'></Tab>
  //             <Tab value='3' label='MORE DETAILS'></Tab>
  //         </Tabs>
  //
  //     </div>
  // );

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Details" />
          <Tab label="Location" />
          <Tab label="Item Three" />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0} >

      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
    </Box>
  );
}
