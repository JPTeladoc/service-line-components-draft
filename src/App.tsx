import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from "react";
import React from 'react';
import BasicTabs from "./TabNav";
import LocationsTable from "./LocationsTable";
import Button from '@mui/material/Button';
import Grid from '@mui/material/Button';
import Box from '@mui/material/Button';

import { Route, Switch } from "react-router-dom";

function App() {
  return (
      <div>
        <Switch>
          <Route path="/BasicTabs" component={BasicTabs} />
          <Route path="/" component={LocationsTable} />
        </Switch>
      </div>
  );
};

export default App;
