import logo from './logo.svg';
import './App.css';
import { Table, materialUI } from "@intouchhealth/cig-components";
import { Suspense, useEffect, useState } from "react";
import React from 'react';

import BasicTabs from "./TabNav";

const { Grid } = materialUI;

export const serviceLineAccesors = [
  // { label: "Id", key: "serviceId" },
  { label: "Name", key: "serviceName" },
  { label: "Explanation", key: "serviceExplanation" },
  { label: "Location", key: "serviceLocation" },
  { label: "Creation", key: "serviceCreation" },
  { label: "Termination", key: "serviceTermination" },
  { label: "Enabled", key: "serviceEnabled" },
  { label: "Details", key: "serviceDetails" },
];

const data = [{
    // serviceId: "651701b1-5202-42d2-ad50-c7098995cb0a",
    serviceName: "General Medical",
    serviceExplanation: "Get care 24/7 for non-emergency conditions like cold & flu, sinus infection, allergies and more",
    serviceLocation: "Bahia Blanca",
    serviceCreation: "8/19/2021",
    serviceTermination: "1/1/9999",
    serviceDetails: "Go to details",
    serviceEnabled: "Enabled"
},];

const navTabs = () => {
  
}

function App() {

  const [tableData, setTableData] = useState<any[]>([]);

  return (
    <div className="App">
      <header className="App-header">
        <Grid item xs={10}>
            <Table
              accessors={serviceLineAccesors}
              data={ data }
            />
            <BasicTabs />
        </Grid>
      </header>
    </div>
  );
};

export default App;
