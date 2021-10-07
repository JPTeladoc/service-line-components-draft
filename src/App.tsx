import logo from './logo.svg';
import './App.css';
import { materialUI, Button } from "@intouchhealth/cig-components";
import { useEffect, useState } from "react";
import React from 'react';
import BasicTabs from "./TabNav";
import LocationsTable from "./LocationsTable";

import { BrowserRouter, Route, Switch, useHistory } from "react-router-dom";

const { Grid, Box } = materialUI;


function saveCancelButtons() {
  return(
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
  )
}

function locations() {
  return(
    <>
    <Grid item xs={10}>
      <LocationsTable/>
    </Grid>
    </>
  );
};

function App() {

  return (
    <div>
      <header className="App-header">
        <BrowserRouter>
            <div>
                <Switch>
                  <Route path="/BasicTabs" component={BasicTabs}/>
                  <Route path="/" component={locations}/>
               </Switch>
            </div>
        </BrowserRouter>
      </header>
    </div>
  );
};

export default App;
