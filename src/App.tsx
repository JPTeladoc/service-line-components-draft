import logo from './logo.svg';
import './App.css';
import { materialUI, Button } from "@intouchhealth/cig-components";
import { useEffect, useState } from "react";
import React from 'react';
import BasicTabs from "./TabNav";
import LocationsTable from "./LocationsTable";

const { Grid, Box } = materialUI;

function App() {

  return (
    <div>
      <header className="App-header">
        <Box sx={{ display: 'flex', p: 1, color: 'black', bgcolor: 'background.paper', width: '70%' }}>
          <Button onClick={() => { }} size="s" appearance="subtle" >
            Cancel
          </Button>
          <Button
            themeName="positive"
            onClick={() => { }}
            size="s"
          >
            Add Service
          </Button>
        </Box>
        <Grid item xs={10}>
          <LocationsTable/>
        </Grid>
        <BasicTabs />
      </header>
    </div>
  );
};

export default App;
